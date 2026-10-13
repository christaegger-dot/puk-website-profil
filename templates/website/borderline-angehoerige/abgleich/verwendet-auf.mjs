// «Verwendet auf:» auf `quellen` berechnen: welche Themenseite welche Quelle nennt (ohne Abhängigkeiten, Node 18+).
// Seit Korrektur 3-1-K (Z31-W1-3, Z31-F-22). Bis dahin lief dieselbe Berechnung als Skript der bauenden Sitzung
// ausserhalb des Repositorys und las nur die Blöcke «Quellen zu dieser Seite».
//
//   node abgleich/verwendet-auf.mjs                  zeigt Abweichungen zwischen berechnet und `content/quellen.html`
//   node abgleich/verwendet-auf.mjs --schreiben      schreibt die berechneten Angaben in `content/quellen.html`
//   node abgleich/verwendet-auf.mjs --ohne-legenden  rechnet wie in Etappe 3-1 (nur Quellenblöcke), zum Vergleich
//
// Gelesen wird je Seite aus `content/<seite>.html`:
//   1. der Block «Quellen zu dieser Seite» (`id="quellen"`): jede Kurzangabe in <strong>
//   2. die Bildlegenden und Bezugspunkte der Abbildungen: <figcaption> und Absätze mit «Bezugspunkte:» oder «Grundlage:»;
//      darin jede Angabe der Form «Name (Jahr)», «Name et al. (Jahr)», «Name und Name (Jahr)», «Name (Jahr, Jahr)», «NICE CG78 (Jahr)»
// Jede Kurzangabe wird einem Eintrag der Quellenliste zugeordnet: über Nachname und Jahr des ersten Autors oder, wo das
// nicht eindeutig ist (NICE, WHO, BAG, AWMF, APA), über die Tabelle ZUORDNUNG. Nicht zuzuordnende Kurzangaben meldet das Skript.
// Ohne Treffer steht «Hintergrund, auf den Seiten nicht einzeln zitiert».
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const SCHREIBEN = args.includes('--schreiben');
const LEGENDEN = !args.includes('--ohne-legenden');

// Reihenfolge der Seiten in «Verwendet auf:» (wie in Etappe 3-1): Navigation, dann die Seiten der Etappen 2b, 2c und 3-1.
// `unterstuetzung` hat keinen Quellenblock.
const SEITEN = ['verstehen', 'beziehungen', 'rolle', 'grenzen', 'selbstfuersorge', 'kommunizieren', 'krise', 'genesung', 'diagnose', 'behandlung', 'fragen'];
const config = JSON.parse(readFileSync(join(SITE, 'site.config.json'), 'utf8'));
const NAME = Object.fromEntries(config.pages.map(p => [p.id, p.navLabel || p.title]));

// Kurzangaben, die nicht über Nachname und Jahr eindeutig sind → Erkennungstext im Eintrag der Quellenliste.
const ZUORDNUNG = {
  'American Psychiatric Association (2022), DSM-5-TR': 'Text Revision (DSM-5-TR)',
  'American Psychiatric Association (2024)': 'Keepers, G. A.',
  'AWMF (2022), S3-Leitlinie Borderline-Persönlichkeitsstörung': '038-015',
  'AWMF (2025), S3-Leitlinie Psychosoziale Therapien, Kapitel 7.2': 'Psychosoziale Therapien',
  'Gunderson und Berkowitz (2006), Family Guidelines': 'Multiple Family Group Program',
  'Bundesamt für Gesundheit (laufend), Berufs- oder Arztgeheimnis': 'Berufs- oder Arztgeheimnis',
  'Bundesamt für Gesundheit (laufend), Interkulturelles Dolmetschen': 'href="https://www.bag.admin.ch/de/interkulturelles-dolmetschen"',
  'Bundesamt für Gesundheit (laufend), Was tun für die psychische Gesundheit?': 'was-tun-fuer-die-psychische-gesundheit',
  'Bundesamt für Statistik (2025), Medizinisches Kodierungshandbuch': 'Medizinisches Kodierungshandbuch',
  'Carol Vivyan (laufend), STOPP (Getselfhelp)': 'Vivyan, C.',
  'Eidgenössisches Büro für die Gleichstellung von Frau und Mann (EBG) (laufend), Häusliche Gewalt': 'ebg.admin.ch/de/hausliche-gewalt',
  'Kanton Zürich (laufend), Opferbetreuung durch Forensic Nurses': 'Opferbetreuung durch Forensic Nurses',
  'INTERPRET (2019), Interkulturelles Dolmetschen im Gesundheitsbereich': 'INTERPRET (2019',
  'Kanton Zürich (laufend), Anlaufstellen für Patientinnen, Patienten und Angehörige': 'Anlaufstellen für Patientinnen und Patienten sowie Angehörige',
  'Mason und Kreger (2014)': 'Schluss mit dem Eiertanz',
  'NHS inform (2025), Grounding exercises': 'Grounding exercises',
  'NHS (2026), Breathing exercises for stress': 'Breathing exercises for stress',
  'NICE CG78 (2009)': 'CG78',
  'NICE NG150 (2020)': 'NG150',
  'NICE NG222 (2022)': 'NG222',
  'NICE NG225 (2022)': 'NG225',
  'Opferhilfe Schweiz (laufend)': 'Opferhilfe Schweiz (laufend',
  'PUK Zürich (laufend), Informationen für Angehörige': 'Informationen für Angehörige</a>. PUK Zürich.',
  'Pro Juventute (laufend), Wenn ein Elternteil psychisch krank ist': '<strong>Pro Juventute (laufend',
  'Schweizerisches Zivilgesetzbuch (ZGB, SR 210), Art. 307, 314c, 314d, 426, 428 und 429': 'Schweizerische Eidgenossenschaft (2026',
  'Stand by You / Sotomo (2024)': 'Sotomo (2024',
  'WHO Europa, Caring for yourself while caring for others (2025)': 'Caring for yourself while caring for others',
  'WHO (2020), Doing What Matters in Times of Stress': 'Doing What Matters in Times of Stress',
  'WHO, ICD-11 (2024)': 'ICD-11 mental',
  'WHO, Stress: Questions and answers (2026)': 'Stress: Questions and answers',
  'WHO, Suicide: Questions and answers (2026)': 'Suicide: Questions and answers',
};

const text = html => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const norm = s => s.normalize('NFC').toLowerCase();

// Einträge der Quellenliste: <li><p><strong>Autor (Jahr).</strong> …</p> … <span class="puk-longform__source-use">…</span></li>
const QUELLEN = join(SITE, 'content/quellen.html');
const quellen = readFileSync(QUELLEN, 'utf8');
const eintraege = [];
for (const m of quellen.matchAll(/<li><p><strong>(.*?)<\/strong>.*?<span class="puk-longform__source-use">(.*?)<\/span><\/li>/g)) {
  const kopf = text(m[1]);
  const jahr = (kopf.match(/\((\d{4})/) || [])[1] || null;
  const name = kopf.match(/^[^\s,(.]+/)[0];
  eintraege.push({ html: m[0], kopf, name, jahr, alt: m[2], seiten: [] });
}

function finde(kurz) {
  if (ZUORDNUNG[kurz]) {
    const treffer = eintraege.filter(e => e.html.includes(ZUORDNUNG[kurz]));
    return treffer.length === 1 ? treffer[0] : null;
  }
  // «Name et al. (Jahr)», «Name und Name (Jahr)», «Name, Name und Name (Jahr)», «Name (Jahr), Titel»
  const m = kurz.match(/^([^\s,(]+)[^(]*\((\d{4})\)/);
  if (!m) return null;
  const treffer = eintraege.filter(e => norm(e.name) === norm(m[1]) && e.jahr === m[2]);
  return treffer.length === 1 ? treffer[0] : null;
}

// Angaben in Legenden: «Linehan (1993, 2015)» → «Linehan (1993)», «Linehan (2015)»; «NICE CG78 (2009)» bleibt ganz.
function ausLegende(satz) {
  const out = [];
  const re = /(NICE (?:CG|NG)\d+|[A-ZÄÖÜ][\p{L}-]+(?: et al\.| und [A-ZÄÖÜ][\p{L}-]+)?) \((\d{4}(?:, \d{4})*)\)/gu;
  for (const m of satz.matchAll(re)) for (const j of m[2].split(', ')) out.push(`${m[1]} (${j})`);
  return out;
}

const nichtZugeordnet = [];
for (const seite of SEITEN) {
  const html = readFileSync(join(SITE, 'content', `${seite}.html`), 'utf8');
  const kurz = [];
  const i = html.indexOf('id="quellen"');
  if (i >= 0) for (const m of html.slice(i).matchAll(/<li><strong>(.*?)<\/strong>/g)) kurz.push(text(m[1]));
  if (LEGENDEN) {
    const legenden = [...html.matchAll(/<figcaption[^>]*>(.*?)<\/figcaption>/gs)].map(m => m[1]);
    legenden.push(...[...html.matchAll(/<p[^>]*>((?:(?!<\/p>).)*?(?:Bezugspunkte:|Grundlage:)(?:(?!<\/p>).)*)<\/p>/gs)].map(m => m[1]));
    for (const l of legenden) kurz.push(...ausLegende(text(l)));
  }
  for (const k of kurz) {
    const e = finde(k);
    if (!e) { nichtZugeordnet.push(`${seite}: ${k}`); continue; }
    if (!e.seiten.includes(seite)) e.seiten.push(seite);
  }
}

let neu = quellen, abweichend = 0;
for (const e of eintraege) {
  const soll = e.seiten.length
    ? 'Verwendet auf: ' + SEITEN.filter(s => e.seiten.includes(s)).map(s => `«${NAME[s]}»`).join(', ')
    : 'Hintergrund, auf den Seiten nicht einzeln zitiert';
  if (soll === e.alt) continue;
  abweichend++;
  console.log(`${e.kopf}\n  bisher: ${e.alt}\n  neu:    ${soll}`);
  neu = neu.replace(e.html, e.html.replace(`<span class="puk-longform__source-use">${e.alt}</span></li>`, `<span class="puk-longform__source-use">${soll}</span></li>`));
}
for (const k of [...new Set(nichtZugeordnet)]) console.log(`nicht zugeordnet: ${k}`);
console.log(`${eintraege.length} Einträge, ${abweichend} mit anderer Angabe, ${new Set(nichtZugeordnet).size} Kurzangaben nicht zugeordnet${LEGENDEN ? '' : ' (ohne Legenden)'}.`);
if (SCHREIBEN && abweichend) { writeFileSync(QUELLEN, neu); console.log('content/quellen.html geschrieben.'); }
