import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const project = join(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(await readFile(join(project, 'site.config.json'), 'utf8'));
const expected = config.footer?.links || [];
const expectedLinks = expected.map(link => ({ href: link.href, label: link.label }));
const published = config.pages.filter(page => page.status === 'published');
const failures = [];

const pass = (condition, label) => {
  console.log(`${condition ? 'PASS' : 'FAIL'} ${label}`);
  if (!condition) failures.push(label);
};

pass(expected.length === 3, `drei globale Vertrauenswege konfiguriert (${expected.length})`);

for (const link of expected) {
  const [file, hash] = link.href.split('#');
  const target = await readFile(join(project, file), 'utf8');
  pass(!hash || new RegExp(`\\bid="${hash.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`).test(target), `Ziel vorhanden: ${link.href}`);
}

for (const page of published) {
  const html = await readFile(join(project, page.href), 'utf8');
  const matches = [...html.matchAll(/<nav class="puk-site-info-links"[^>]*data-site-info-links[^>]*>([\s\S]*?)<\/nav>/g)];
  pass(matches.length === 1, `${page.href}: genau eine Navigation für Website-Informationen`);
  if (matches.length !== 1) continue;
  const actual = [...matches[0][1].matchAll(/<a href="([^"]+)">([\s\S]*?)<\/a>/g)].map(match => ({ href: match[1], label: match[2].replace(/<[^>]+>/g, '').trim() }));
  pass(JSON.stringify(actual) === JSON.stringify(expectedLinks), `${page.href}: Links, Reihenfolge und Beschriftungen entsprechen der Konfiguration`);
}

console.log(`\nFooter-Vertrauenswege: ${published.length} Seiten · ${expected.length} Ziele · ${failures.length} Fehler`);
if (failures.length) process.exit(1);
