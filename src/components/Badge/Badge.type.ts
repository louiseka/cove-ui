export interface BadgeProps {
  icon?: React.ReactNode;
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
