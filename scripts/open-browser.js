const { spawn, exec } = require('child_process');
const net = require('net');

const isWindows = process.platform === 'win32';
const isMac = process.platform === 'darwin';

function openBrowser(url) {
  const command = isWindows
    ? `start "" "${url}"`
    : isMac
      ? `open "${url}"`
      : `xdg-open "${url}"`;

  exec(command, { stdio: 'ignore' }, (error) => {
    if (error) {
      console.log(`Browser could not be opened automatically. Please visit: ${url}`);
    }
  });
}

function isPortTaken(port, host) {
  return new Promise((resolve) => {
    const server = net.createServer();

    server.once('error', () => resolve(true));
    server.once('listening', () => {
      server.close(() => resolve(false));
    });

    server.listen(port, host);
  });
}

async function getAvailablePort(startPort) {
  let port = Number(startPort) || 3000;

  while (true) {
    const hosts = ['127.0.0.1', '::1', '0.0.0.0'];
    let isTaken = false;

    for (const host of hosts) {
      try {
        const taken = await isPortTaken(port, host);
        if (taken) {
          isTaken = true;
          break;
        }
      } catch (error) {
        isTaken = true;
        break;
      }
    }

    if (!isTaken) {
      return port;
    }

    console.log(`Port ${port} is already in use. Trying ${port + 1} instead.`);
    port += 1;
  }
}

async function launchNextDev(port, passthroughArgs) {
  const availablePort = await getAvailablePort(port);
  const url = `http://localhost:${availablePort}`;

  console.log(`Starting dev server on ${url}`);

  const child = spawn(isWindows ? 'npx.cmd' : 'npx', ['next', 'dev', ...passthroughArgs, '-p', String(availablePort)], {
    stdio: ['inherit', 'pipe', 'pipe'],
    shell: isWindows,
  });

  let opened = false;
  let outputBuffer = '';

  function handleServerOutput(chunk) {
    const text = chunk.toString();
    outputBuffer += text;
    process.stdout.write(text);

    if (!opened && (text.includes('ready - started server') || text.includes('Local:'))) {
      opened = true;
      setTimeout(() => openBrowser(url), 1000);
    }
  }

  child.stdout.on('data', handleServerOutput);
  child.stderr.on('data', handleServerOutput);

  child.on('exit', (code) => {
    const combined = outputBuffer.toLowerCase();

    if (code !== 0 && combined.includes('eaddrinuse')) {
      const nextPort = availablePort + 1;
      console.log(`Port ${availablePort} is still busy. Retrying on ${nextPort}.`);
      launchNextDev(nextPort, passthroughArgs);
      return;
    }

    process.exit(code ?? 0);
  });

  child.on('error', (error) => {
    console.error('Failed to start Next.js dev server:', error);
    process.exit(1);
  });
}

(async () => {
  let port = process.env.PORT || '3000';
  const rawArgs = process.argv.slice(2);
  const passthroughArgs = [];

  for (let i = 0; i < rawArgs.length; i += 1) {
    const arg = rawArgs[i];

    if (arg === '--port' || arg === '-p') {
      const nextValue = rawArgs[i + 1];
      if (nextValue) {
        port = nextValue;
        i += 1;
      }
      continue;
    }

    if (arg.startsWith('--port=')) {
      port = arg.split('=')[1] || port;
      continue;
    }

    if (arg.startsWith('-p') && arg.length > 2) {
      port = arg.slice(2) || port;
      continue;
    }

    passthroughArgs.push(arg);
  }

  await launchNextDev(Number(port), passthroughArgs);
})();
