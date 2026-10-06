# Dialog

Modaler Dialog mit Fokusfalle, Escape und Fokusrückgabe.

Für kurze Entscheidungen und Bestätigungen. Fest im Viewport positioniert, sperrt das Scrollen der Seite dahinter.

```jsx
<Dialog title="Eingaben löschen?" onClose={close} footer={<><Button variant="ghost" onClick={close}>Abbrechen</Button><Button variant="danger">Löschen</Button></>}>
  Ihre Notizen in diesem Bogen werden entfernt.
</Dialog>
```

Typen: `components/Dialog/Dialog.d.ts`. Aufruf über `window.PUKWeb.Dialog`.

**Interaktion:** Fenster fest positioniert, Seite dahinter scrollt nicht, langer Inhalt scrollt im Dialog; Fokus bleibt im Dialog, Escape und Hintergrund schliessen, Fokus kehrt zum Auslöser zurück. Blendet in 200–400 ms ein, bei reduzierter Bewegung sofort. Nur für kurze Entscheidungen – nie für Lesestoff, Werbung oder Hinweise beim Laden. Regeln: Abschnitt «Interaktionskonzept».
