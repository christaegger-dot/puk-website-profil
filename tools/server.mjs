import http from 'node:http';
import {createReadStream} from 'node:fs';
import {stat} from 'node:fs/promises';
import {resolve, relative, extname, isAbsolute} from 'node:path';

const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.woff2':'font/woff2','.md':'text/plain; charset=utf-8'};

export async function serverStart(root, port = 0) {
  root = resolve(root);
  const server = http.createServer(async (req, res) => {
    try {
      let name = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      if (name === '/favicon.ico') {res.writeHead(204).end(); return;}
      let file = resolve(root, '.' + name), rel = relative(root, file);
      if (rel.startsWith('..') || isAbsolute(rel) || name.includes('\0')) {res.writeHead(403).end(); return;}
      if ((await stat(file)).isDirectory()) {
        if (!name.endsWith('/')) {res.writeHead(302, {Location:name + '/'}).end(); return;}
        file = resolve(file, 'index.html');
      }
      if (!(await stat(file)).isFile()) {res.writeHead(404).end(); return;}
      res.setHeader('Content-Type', types[extname(file)] || 'application/octet-stream');
      res.setHeader('Cache-Control', 'no-store');
      createReadStream(file).on('error', () => res.destroy()).pipe(res);
    } catch (e) {res.writeHead(e.code === 'ENOENT' ? 404 : 400).end('Datei nicht verfügbar.');}
  });
  await new Promise((resolve, reject) => {server.once('error', reject); server.listen(port, '127.0.0.1', resolve);});
  return {url:`http://127.0.0.1:${server.address().port}/`, close:() => new Promise(resolve => server.close(resolve))};
}
