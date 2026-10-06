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
