# Toast

Kurze Rückmeldung nach einer Aktion, mit optionalem Schliessen.

Bestätigung nach einer eigenen Aktion. Schliesst sich nicht automatisch und trägt nie Fehler oder Pflichtinformation (Fehler: im Seitenfluss beim Feld bzw. als `Alert`). Die 3-px-Linie links trägt die Tonfarbe – die einzige zulässige farbige Randbetonung.

```jsx
<Toast tone="success" title="Anfrage gesendet" onClose={dismiss}>Sie erhalten eine Bestätigung per E-Mail.</Toast>
```

Typen: `components/Toast/Toast.d.ts`. Aufruf über `window.PUKWeb.Toast`.
