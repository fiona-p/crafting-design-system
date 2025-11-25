export type TabVariant = 'underline' | 'pill';
export type BadgeVariant = 'neutral' | 'positive' | 'negative';
export type Orientation = 'horizontal' | 'vertical';
export interface Badge {
  badgeLabel: string;
  badgeVariant: BadgeVariant;
}
export interface tabData {
  label: string;
  badge?: Badge;
  content?: string;
}

export interface tabsData {
  tabData: tabData[];
  tabsVariant: TabVariant;
}
