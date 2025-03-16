export type GroupItemType = 'prepitem' | 'ingredient';

export interface GroupItem {
  group_item_id: number;
  prep_item?: {
    id: number;
    name: string;
    description: string;
  };
  ingredient?: {
    id: number;
    name: string;
    unit: string;
  };
}

export interface Group {
  group_id: number;
  group_name: string;
  restaurant_id: number;
  items: GroupItem[];
} 