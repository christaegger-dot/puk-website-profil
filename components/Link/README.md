# Link

Textlink: Hover schwarz und unterstrichen, besucht dunkler, extern mit Pfeil und Ansage.

Textlink in PUK-Blau, im Hover schwarz und unterstrichen, besucht in dunklerem Blau. Externe Ziele erhalten einen schrägen Pfeil und für Screenreader den Zusatz «externer Link».

```jsx
<p>Details im <Link href="/angebot">Behandlungsangebot</Link>.</p>
<Link href="https://www.uzh.ch" standalone>Universität Zürich</Link>
```

`standalone` für Links ausserhalb von Fliesstext (mit Pfeil). `newWindow` nur, wenn der Kontext es verlangt; die Ansage erfolgt automatisch. Nie `<Link>` für Aktionen verwenden — dafür gibt es `Button`.

Typen: `components/Link/Link.d.ts`. Aufruf über `window.PUKWeb.Link`.
