/**
 * Aufklappbare Abschnitte (APG-Muster Accordion) mit aria-expanded,
 * aria-controls und Tastaturnavigation zwischen den Kopfzeilen.
 */
export interface AccordionItem {
  /** Stabile Kennung; Standard: Index. */
  id?: string;
  title: React.ReactNode;
  content: React.ReactNode;
}
export interface AccordionProps {
  items: AccordionItem[];
  /** Mehrere Abschnitte gleichzeitig offen. Standard: nur einer. */
  allowMultiple?: boolean;
  /** IDs der anfangs geöffneten Abschnitte. */
  defaultOpen?: string[];
  /** Überschriftenebene der Kopfzeilen, passend zur Dokumentgliederung (2–6). Standard: 3. */
  headingLevel?: 2 | 3 | 4 | 5 | 6;
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
