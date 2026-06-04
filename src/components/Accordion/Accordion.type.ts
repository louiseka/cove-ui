export interface AccordionItem {
  title: string;
  content: string;
}

export interface AccordionProps {
  heading?: string;
  items: AccordionItem[];
}
