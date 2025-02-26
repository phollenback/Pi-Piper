export const GROUP_QUERIES = {
  CREATE_GROUP: `
    INSERT INTO dim_groups (group_name, restaurant_id)
    VALUES (?, ?)
  `,
  
  GET_CREATED_GROUP_ID: `
    SELECT LAST_INSERT_ID() as group_id
  `,
  
  ADD_GROUP_ITEM: `
    INSERT INTO bridge_group_items (group_id, prep_item_id, ingredient_id)
    VALUES (?, ?, ?)
  `,

  GET_GROUPS: `
    SELECT 
      g.group_id,
      g.group_name,
      g.restaurant_id,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'group_item_id', gi.group_item_id,
          'prep_item', IF(gi.prep_item_id IS NOT NULL,
            JSON_OBJECT('id', p.prep_item_id, 'name', p.prep_item_name),
            NULL
          ),
          'ingredient', IF(gi.ingredient_id IS NOT NULL,
            JSON_OBJECT('id', i.ingredient_id, 'name', i.ingredient_name),
            NULL
          )
        )
      ) as items
    FROM dim_groups g
    LEFT JOIN bridge_group_items gi ON g.group_id = gi.group_id
    LEFT JOIN dim_prep_item p ON gi.prep_item_id = p.prep_item_id
    LEFT JOIN dim_ingredient i ON gi.ingredient_id = i.ingredient_id
    WHERE g.restaurant_id = ?
    GROUP BY g.group_id, g.group_name, g.restaurant_id
  `
};