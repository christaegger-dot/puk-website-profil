import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {pruefeDokumentation} from '../tools/pruefe-dokumentation.mjs';

test('Aktuelle Dokumentation verlinkt vorhandene lokale Nachweise', async () => {
  const result = await pruefeDokumentation();
  assert.ok(result.links > 0);
  assert.deepEqual(result.fehler, []);
});

test('Fehlender Nachweis wird mit Fundstelle erkannt; Beispiele und externe Links bleiben getrennt', async t => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'puk-dokumentation-'));
  t.after(() => fs.rm(root, {recursive: true, force: true}));
  await fs.mkdir(path.join(root, 'guidelines'));
  await fs.writeFile(path.join(root, 'guidelines', 'nachweis.json'), '{}');
  await fs.writeFile(path.join(root, 'README.md'), [
    '[Aktueller Nachweis](guidelines/nachweis.json#messung)',
    '[Externe Quelle](https://example.org/quelle)',
    '`[Linkbeispiel](kein-dateiziel)`',
    '```md',
    '[Vorlagenparameter](ebenfalls-kein-dateiziel)',
    '```',
  ].join('\n'));
  assert.deepEqual(await pruefeDokumentation(root), {links: 1, fehler: []});
  await fs.unlink(path.join(root, 'guidelines', 'nachweis.json'));
  assert.deepEqual(await pruefeDokumentation(root), {links: 1, fehler: [{datei: 'README.md', zeile: 1, ziel: 'guidelines/nachweis.json#messung'}]});
});
