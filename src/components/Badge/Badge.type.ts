export interface BadgeProps {
  withIcon?: boolean;
  children: React.ReactNode;
  variant:
    | "success"
    | "warning"
    | "danger"
    | "new"
    | "featured"
    | "popular"
    | "sale";
  live?: "polite" | "assertive";
}
