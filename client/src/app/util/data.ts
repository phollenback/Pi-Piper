export const getCategories = () => {
    return [
      { id: 1, name: "Slicer", description: "Used for slicing meats and cheeses." },
      { id: 2, name: "Pantry", description: "Handles pantry-related items like greens and grains." },
      { id: 3, name: "Oven", description: "For baking and roasting various items." },
      { id: 4, name: "Grill", description: "Used for grilling meats, vegetables, and bread." },
      { id: 5, name: "Cold Prep", description: "For cold preparation tasks like cheese and salads." },
      { id: 6, name: "All", description: "Unfilter." },

    ];
  };
  
  export const fetchDailyPrepItems = () => {
    return [
      { 
        id: 1, 
        name: "Slice Prosciutto", 
        description: "Thinly slice the prosciutto for charcuterie boards.", 
        quantity: 50, 
        unit: "slices", 
        status: "complete", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 3, 
        name: "Slice Sopressata", 
        description: "Prepare sopressata slices for sandwiches and platters.", 
        quantity: 100, 
        unit: "slices", 
        status: "in-progress", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 4, 
        name: "Slice Ham", 
        description: "Cut ham into thin slices for deli and breakfast orders.", 
        quantity: 80, 
        unit: "slices", 
        status: "todo", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 5, 
        name: "Slice Provolone", 
        description: "Slice provolone cheese for sandwiches and salads.", 
        quantity: 120, 
        unit: "slices", 
        status: "complete", 
        category: 5, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 6, 
        name: "Set Pulled Pork", 
        description: "Portion out pulled pork for BBQ platters.", 
        quantity: 200, 
        unit: "servings", 
        status: "in-progress", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 7, 
        name: "Cook Pulled Pork", 
        description: "Slow-cook pork shoulder until tender.", 
        quantity: 30, 
        unit: "lbs", 
        status: "todo", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 8, 
        name: "Cook Meatballs", 
        description: "Prepare and bake Italian-style meatballs.", 
        quantity: 60, 
        unit: "meatballs", 
        status: "complete", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 9, 
        name: "Italian Sausage Mix", 
        description: "Mix spices and ground meat for sausage preparation.", 
        quantity: 15, 
        unit: "lbs", 
        status: "in-progress", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 11, 
        name: "Grill Lemongrass Pork", 
        description: "Marinate and grill pork with lemongrass seasoning.", 
        quantity: 25, 
        unit: "servings", 
        status: "complete", 
        category: 4, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 12, 
        name: "Back Bacon Brine", 
        description: "Brine pork loins for back bacon preparation.", 
        quantity: 10, 
        unit: "lbs", 
        status: "todo", 
        category: 5, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 13, 
        name: "Cure Pork Loins", 
        description: "Cure pork loins in a salt mixture for preservation.", 
        quantity: 8, 
        unit: "loins", 
        status: "complete", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
      { 
        id: 14, 
        name: "Dry Pork Loins", 
        description: "Dry pork loins to develop flavor and texture.", 
        quantity: 10, 
        unit: "loins", 
        status: "in-progress", 
        category: 1, 
        kitchenDepartmentId: 1, 
        restaurantId: 1 
      },
    ];
  };export const fetchPrepItemCards = () => {
    return [
      {
        "prep_list_id": 1,
        "name": "Chicken Breast",
        "description": "Fresh chicken breast fillets",
        "quantity": 10,
        "unit": "pieces",
        "category": 1,
        "status": "todo"
      },
      {
        "prep_list_id": 2,
        "name": "Lettuce",
        "description": "Fresh lettuce leaves",
        "quantity": 5,
        "unit": "heads",
        "category": 2,
        "status": "complete"
      },
      {
        "prep_list_id": 3,
        "name": "Tomatoes",
        "description": "Red ripe tomatoes",
        "quantity": 20,
        "unit": "pieces",
        "category": 2,
        "status": "todo"
      },
      {
        "prep_list_id": 4,
        "name": "Cucumbers",
        "description": "Fresh cucumbers",
        "quantity": 15,
        "unit": "pieces",
        "category": 2,
        "status": "in-progress"
      },
      {
        "prep_list_id": 5,
        "name": "Olive Oil",
        "description": "Extra virgin olive oil",
        "quantity": 3,
        "unit": "bottles",
        "category": 3,
        "status": "todo"
      },
      {
        "prep_list_id": 6,
        "name": "Cheddar Cheese",
        "description": "Mature cheddar cheese",
        "quantity": 10,
        "unit": "blocks",
        "category": 4,
        "status": "complete"
      },
      {
        "prep_list_id": 7,
        "name": "Bacon",
        "description": "Crispy bacon strips",
        "quantity": 25,
        "unit": "slices",
        "category": 4,
        "status": "in-progress"
      },
      {
        "prep_list_id": 8,
        "name": "Chicken Broth",
        "description": "Organic chicken broth",
        "quantity": 5,
        "unit": "liters",
        "category": 3,
        "status": "todo"
      },
      {
        "prep_list_id": 9,
        "name": "Pasta",
        "description": "Spaghetti pasta",
        "quantity": 10,
        "unit": "packets",
        "category": 5,
        "status": "complete"
      },
      {
        "prep_list_id": 10,
        "name": "Garlic",
        "description": "Fresh garlic cloves",
        "quantity": 50,
        "unit": "cloves",
        "category": 2,
        "status": "todo"
      },
      {
        "prep_list_id": 11,
        "name": "Onions",
        "description": "Yellow onions",
        "quantity": 30,
        "unit": "pieces",
        "category": 2,
        "status": "in-progress"
      },
      {
        "prep_list_id": 12,
        "name": "Carrots",
        "description": "Fresh carrots",
        "quantity": 40,
        "unit": "pieces",
        "category": 2,
        "status": "complete"
      },
      {
        "prep_list_id": 13,
        "name": "Bread Rolls",
        "description": "Soft bread rolls",
        "quantity": 60,
        "unit": "pieces",
        "category": 6,
        "status": "todo"
      },
      {
        "prep_list_id": 14,
        "name": "Avocados",
        "description": "Fresh ripe avocados",
        "quantity": 12,
        "unit": "pieces",
        "category": 2,
        "status": "in-progress"
      },
      {
        "prep_list_id": 15,
        "name": "Milk",
        "description": "Full cream milk",
        "quantity": 8,
        "unit": "liters",
        "category": 3,
        "status": "complete"
      },
      {
        "prep_list_id": 16,
        "name": "Flour",
        "description": "All-purpose flour",
        "quantity": 5,
        "unit": "kg",
        "category": 5,
        "status": "todo"
      },
      {
        "prep_list_id": 17,
        "name": "Sugar",
        "description": "White sugar",
        "quantity": 10,
        "unit": "kg",
        "category": 5,
        "status": "complete"
      },
      {
        "prep_list_id": 18,
        "name": "Cilantro",
        "description": "Fresh cilantro leaves",
        "quantity": 30,
        "unit": "bunches",
        "category": 2,
        "status": "in-progress"
      },
      {
        "prep_list_id": 19,
        "name": "Rice",
        "description": "Long-grain white rice",
        "quantity": 20,
        "unit": "kg",
        "category": 5,
        "status": "todo"
      },
      {
        "prep_list_id": 20,
        "name": "Pineapple",
        "description": "Fresh pineapple, cut into pieces",
        "quantity": 15,
        "unit": "pieces",
        "category": 2,
        "status": "complete"
      }
    ];
  };