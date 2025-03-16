export interface Group {
  group_id: number;
  group_name: string;
  restaurant_id: number;
  items: GroupItem[];
}

export interface GroupItem {
  group_item_id: number;
  prep_item?: {
    id: number;
    name: string;
  };
  ingredient?: {
    id: number;
    name: string;
  };
}

export interface GroupWithItems extends Group {
  group_name: string;
  items: Array<{
    id: number;
    name: string;
    type: 'ingredient' | 'prep_item';
  }>;
} 