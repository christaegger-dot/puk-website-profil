# Breadcrumb

Pfad zur aktuellen Seite. Letzter Eintrag trägt aria-current.

Mit Schrägstrichen getrennter Pfad für tiefe Seitenstrukturen; der letzte Eintrag ist die aktuelle Seite und kein Link. Bei flachen Websites (zwei Ebenen) nicht nötig.

```jsx
<Breadcrumb items={[{label:'Start',href:'#'},{label:'Angebot',href:'#'},'Ambulante Behandlung']} />
```

Typen: `components/Breadcrumb/Breadcrumb.d.ts`. Aufruf über `window.PUKWeb.Breadcrumb`.
