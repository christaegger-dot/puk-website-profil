/* PUK Website-Profil – Typen der 24 Komponenten unter window.PUKWeb (Dokumentation, nicht typgeprüft). */

// ---- Button ----
/**
 * Primary action control.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = black (default house action), accent = PUK blue, inverse = white on dark. */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'danger' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Lucide icon name. */
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;

// ---- IconButton ----
export interface IconButtonProps {
  /** Lucide icon name. */
  icon?: string;
  /** Accessible label — required, also used as the tooltip. */
  label: string;
  variant?: 'ghost' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;

// ---- Icon ----
export interface IconProps {
  /** Lucide icon name in kebab-case, e.g. "arrow-right". */
  name?: string;
  /** Square size in px. Default 20. */
  size?: number;
  /** Compatibility input for Lucide-style call sites. Mask icons keep their authored stroke. */
  strokeWidth?: number;
  /** Any CSS colour; defaults to currentColor. */
  color?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;

// ---- Field ----
export interface FieldProps {
  label?: string;
  hint?: string;
  /** When present, replaces the hint and turns the message Signalrot. */
  error?: string;
  required?: boolean;
  htmlFor?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;

// ---- Input ----
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
  size?: 'sm' | 'md';
}
export declare function Input(props: InputProps): JSX.Element;

// ---- Textarea ----
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
}
export declare function Textarea(props: TextareaProps): JSX.Element;

// ---- Select ----
/* Die Optionsform ist eine Datenstruktur, kein Bauteil. Als eigenes
   `export interface SelectOption` stand sie vor Select in dieser Datei, und der
   Compiler nahm sie als das deklarierte Bauteil — Adhärenzregeln für ein
   <SelectOption>, das es nie gab, während Select selbst keine bekam. Deshalb
   inline. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Array<string | { value: string; label: string }>;
  placeholder?: string;
  invalid?: boolean;
  size?: 'sm' | 'md';
}
export declare function Select(props: SelectProps): JSX.Element;

// ---- Checkbox ----
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;

// ---- Radio ----
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}
export declare function Radio(props: RadioProps): JSX.Element;

// ---- RadioGroup ----
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Shared name for every radio in the group — required. */
  name: string;
  /** Visible accessible group name. Falls back to aria-label or name. */
  label?: React.ReactNode;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
  style?: React.CSSProperties;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;

// ---- Switch ----
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;

// ---- Card ----
/**
 * Flat, square-cornered content container.
 */
export interface CardProps {
  title?: React.ReactNode;
  /** Small uppercase kicker above the title. */
  eyebrow?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /** Image or figure rendered in a 3:2 frame above the text. */
  media?: React.ReactNode;
  variant?: 'default' | 'sunken' | 'brand' | 'inverse';
  /** Makes the whole card a link; hover then turns the border PUK blue. */
  href?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;

// ---- Badge ----
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'info' | 'warning' | 'danger' | 'inverse';
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;

// ---- Tag ----
export interface TagProps {
  children?: React.ReactNode;
  /** Renders a × affordance and fires on click. */
  onRemove?: (e: React.MouseEvent) => void;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;

// ---- List ----
/**
 * Aufzählung oder nummerierte Liste mit echter ul/ol/li-Semantik.
 */
export interface ListProps {
  /** Einträge als Array; alternativ children mit eigenen <li>. */
  items?: React.ReactNode[];
  children?: React.ReactNode;
  /** true = <ol>, false = <ul>. */
  ordered?: boolean;
  /** Standard: disc für ul, number für ol. none behält die Listensemantik (role="list"). */
  marker?: 'disc' | 'number' | 'none';
  spacing?: 'sm' | 'md' | 'lg';
  /** Startwert einer nummerierten Liste. */
  start?: number;
  style?: React.CSSProperties;
}
export declare function List(props: ListProps): JSX.Element;

// ---- Table ----
/**
 * Datentabelle mit Caption, Spalten- und Zeilenüberschriften.
 */
export interface TableColumn {
  key: string;
  label: React.ReactNode;
  /** Zahlen rechtsbündig mit Tabellenziffern. */
  align?: 'left' | 'right' | 'center';
}
export interface TableProps {
  /** Pflicht: benennt die Tabelle für Screenreader und Leserschaft. */
  caption: React.ReactNode;
  /** Caption nur für Screenreader, wenn ein sichtbarer Titel direkt darüber steht. */
  captionHidden?: boolean;
  columns: TableColumn[];
  rows: Array<Record<string, React.ReactNode> & { id?: string | number }>;
  /** Schlüssel der Spalte, die als Zeilenüberschrift (th scope="row") gilt. Standard: erste Spalte. */
  rowHeader?: string;
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function Table(props: TableProps): JSX.Element;

// ---- Accordion ----
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

// ---- Alert ----
export interface AlertProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** emergency is reserved for the psychiatric emergency service notice. */
  tone?: 'info' | 'warning' | 'danger' | 'emergency';
  style?: React.CSSProperties;
}
export declare function Alert(props: AlertProps): JSX.Element;

// ---- Toast ----
export interface ToastProps {
  title?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'neutral' | 'success' | 'warning' | 'danger';
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;

// ---- Tooltip ----
export interface TooltipProps {
  label: React.ReactNode;
  /** A single trigger element is preferred; other content receives a focusable wrapper. */
  children?: React.ReactNode;
  placement?: 'top' | 'bottom';
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;

// ---- Dialog ----
export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Action row, right-aligned above a hairline rule. */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number | string;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;

// ---- Link ----
/**
 * Textlink mit Hover-, besuchtem, Fokus- und externem Zustand.
 */
export interface LinkProps {
  href: string;
  children?: React.ReactNode;
  /** Wird aus href abgeleitet (http, https, //); explizit setzen, um zu übersteuern. */
  external?: boolean;
  /** Öffnet in neuem Fenster und kündigt das für Screenreader an. Sparsam einsetzen. */
  newWindow?: boolean;
  /** Eigenständiger Link mit Pfeil, etwa am Ende einer Karte. Standard: Link im Fliesstext. */
  standalone?: boolean;
  /** Setzt aria-current="page". */
  current?: boolean;
  style?: React.CSSProperties;
}
export declare function Link(props: LinkProps): JSX.Element;

// ---- Tabs ----
export interface TabsProps {
  items?: Array<string | { value: string; label: string }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Panel content for the active tab — render it yourself. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;

// ---- Breadcrumb ----
export interface BreadcrumbProps {
  items?: Array<string | { label: string; href?: string }>;
  style?: React.CSSProperties;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;

// ---- DisclosureMenu ----
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

// ---- Carousel ----
/**
 * Karussell für wenige gleichrangige, in sich abgeschlossene Inhalte (3–6 Folien). Kein Autoplay, keine Endlosschleife.
 */
export interface CarouselItem {
  /** Folientitel; wird auch Teil des zugänglichen Namens («2 von 5: Titel»). */
  title: string;
  /** Inhalt der Folie (Text, Link, kurze Liste). */
  content?: React.ReactNode;
}
export interface CarouselProps {
  /** Zugänglicher Name des Karussells, z. B. «Erfahrungen anderer Angehöriger». Pflicht. */
  label: string;
  items: CarouselItem[];
  style?: React.CSSProperties;
}
export declare function Carousel(props: CarouselProps): JSX.Element;
