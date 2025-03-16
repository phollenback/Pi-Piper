export const GROUP_QUERIES = {
  CREATE_GROUP: `
    INSERT INTO dim_groups (group_name, restaurant_id)
    VALUES (?, ?)
  `,
  
  GET_CREATED_GROUP_ID: `
    SELECT LAST_INSERT_ID() as group_id
  `,
  
  ADD_GROUP_ITEM: `
    INSERT INTO bridge_group_items (group_id, item_id, item_type)
    VALUES (?, ?, ?)
  `,

  GET_GROUPS: `
    SELECT 
      g.group_id,
      g.group_name,
      g.restaurant_id,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'id', gi.id,
          'prep_item', IF(gi.item_type = 'prep_item',
            JSON_OBJECT('id', p.prep_item_id, 'name', p.prep_item_name),
            NULL
          ),
          'ingredient', IF(gi.item_type = 'ingredient',
            JSON_OBJECT('id', i.ingredient_id, 'name', i.ingredient_name),
            NULL
          )
        )
      ) as items
    FROM dim_groups g
    LEFT JOIN bridge_group_items gi ON g.group_id = gi.group_id
    LEFT JOIN dim_prep_item p ON gi.item_id = p.prep_item_id AND gi.item_type = 'prep_item'
    LEFT JOIN dim_ingredient i ON gi.item_id = i.ingredient_id AND gi.item_type = 'ingredient'
    WHERE g.restaurant_id = ?
    GROUP BY g.group_id, g.group_name, g.restaurant_id
  `
};