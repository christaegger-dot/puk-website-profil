/**
 * Dropdown-Menü für Navigation (Disclosure-Muster): Schaltfläche klappt eine Liste von Links auf. Kein Aktionsmenü.
 */
export interface DisclosureMenuItem {
  label: string;
  href: string;
  /** Kurze Erläuterung unter dem Linktext (optional). */
  description?: string;
  /** Aktuelle Seite: setzt aria-current="page". */
  current?: boolean;
}
export interface DisclosureMenuProps {
  /** Beschriftung der Schaltfläche, z. B. «Themen» oder «Menü». */
  label: string;
  items: DisclosureMenuItem[];
  /** Ausrichtung der schwebenden Liste auf breiten Bildschirmen. */
  align?: 'start' | 'end';
  style?: React.CSSProperties;
}
export declare function DisclosureMenu(props: DisclosureMenuProps): JSX.Element;
