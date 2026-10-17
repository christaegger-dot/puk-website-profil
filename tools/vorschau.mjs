import {ROOT} from './profil.mjs';
import {serverStart} from './server.mjs';

try {
  const args = process.argv.slice(2);
  const port = args.length === 2 && args[0] === '--port' ? Number(args[1]) : args.length === 0 ? 8000 : NaN;
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Aufruf: npm run vorschau [-- --port 8000]');
  const server = await serverStart(ROOT, port);
  console.log(`Profilvorschau: ${server.url}\nNeue Projekte unter ${server.url}websites/<name>/\nBeenden mit Strg+C.`);
  for (const sig of ['SIGINT','SIGTERM']) process.once(sig, async () => {await server.close(); process.exit(0);});
} catch (e) {console.error(e.message); process.exitCode = 1;}
