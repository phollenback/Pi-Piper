// 
// This file was mainly used for mock data initially. 
// Right now it has no references but may in the future. 
// 

export const getButtonColor = (name: string) => {
  switch (name) {
      case "Slicer":
          return "red";
      case "Pantry":
          return "green";
      case "Oven":
          return "grey";
      case "Grill":
          return "blue";
      case "Cold Prep":
          return "orange";
      case "All":
          return "black";
      default:
          return "blue";
  }
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
  
  export const fetchRecipes = () => {
    return [
      {
        id: 1,
        name: "Spaghetti Bolognese",
        description: "A classic Italian pasta dish with rich, savory sauce.",
        ingredients: [
          "spaghetti",
          "ground beef",
          "tomato sauce",
          "garlic",
          "onion",
          "olive oil"
        ],
        category: 1,
        procedure:
          "1. Cook spaghetti according to package instructions. \n" +
          "2. In a pan, sauté garlic and onion in olive oil until translucent. \n" +
          "3. Add ground beef and cook until browned. \n" +
          "4. Stir in tomato sauce and simmer for 20 minutes. \n" +
          "5. Serve sauce over spaghetti and enjoy!"
      },
      {
        id: 2,
        name: "Chicken Caesar Salad",
        description: "A fresh salad with grilled chicken, lettuce, and Caesar dressing.",
        ingredients: [
          "chicken breast",
          "romaine lettuce",
          "croutons",
          "Parmesan cheese",
          "Caesar dressing"
        ],
        category: 2,
        procedure:
          "1. Grill chicken breast until fully cooked. Slice into strips. \n" +
          "2. Toss romaine lettuce with Caesar dressing in a large bowl. \n" +
          "3. Add croutons, Parmesan cheese, and grilled chicken strips. \n" +
          "4. Serve chilled and enjoy."
      },
      {
        id: 3,
        name: "Grilled Cheese Sandwich",
        description: "A warm, crispy sandwich with melted cheese.",
        ingredients: ["bread", "cheese", "butter"],
        category: 3,
        procedure:
          "1. Butter one side of each slice of bread. \n" +
          "2. Place a slice of cheese between the unbuttered sides of the bread. \n" +
          "3. Heat a skillet and cook the sandwich on both sides until golden brown. \n" +
          "4. Serve warm."
      },
      {
        id: 4,
        name: "Pancakes",
        description: "Fluffy, golden pancakes served with syrup.",
        ingredients: [
          "flour",
          "eggs",
          "milk",
          "baking powder",
          "butter",
          "maple syrup"
        ],
        category: 4,
        procedure:
          "1. In a bowl, mix flour, baking powder, milk, and eggs to form a batter. \n" +
          "2. Heat a non-stick pan and grease it with butter. \n" +
          "3. Pour a ladle of batter onto the pan and cook until bubbles form. \n" +
          "4. Flip and cook the other side until golden brown. \n" +
          "5. Serve with butter and maple syrup."
      },
      {
        id: 5,
        name: "Vegetable Stir Fry",
        description: "A colorful mix of vegetables stir-fried with a savory sauce.",
        ingredients: [
          "broccoli",
          "carrots",
          "bell peppers",
          "soy sauce",
          "garlic",
          "ginger",
          "sesame oil"
        ],
        category: 5,
        procedure:
          "1. Heat sesame oil in a wok or skillet. \n" +
          "2. Add minced garlic and ginger and sauté until fragrant. \n" +
          "3. Add chopped vegetables and stir-fry until tender but crisp. \n" +
          "4. Pour soy sauce over vegetables and toss to combine. \n" +
          "5. Serve hot."
      },
      {
        id: 6,
        name: "Beef Tacos",
        description: "Tasty tacos with seasoned ground beef and fresh toppings.",
        ingredients: [
          "ground beef",
          "taco shells",
          "cheddar cheese",
          "lettuce",
          "tomato",
          "sour cream"
        ],
        category: 1,
        procedure:
          "1. Cook ground beef with taco seasoning until fully browned. \n" +
          "2. Heat taco shells in the oven for 5 minutes. \n" +
          "3. Fill taco shells with beef, cheese, lettuce, and tomato. \n" +
          "4. Add a dollop of sour cream and serve."
      },
      {
        id: 7,
        name: "Chicken Alfredo",
        description: "Creamy pasta with grilled chicken and Alfredo sauce.",
        ingredients: [
          "penne pasta",
          "chicken breast",
          "heavy cream",
          "Parmesan cheese",
          "garlic",
          "butter"
        ],
        category: 2,
        procedure:
          "1. Cook penne pasta according to package instructions. \n" +
          "2. Grill chicken breast and slice into strips. \n" +
          "3. In a pan, melt butter and sauté garlic. \n" +
          "4. Add heavy cream and Parmesan cheese to create a sauce. \n" +
          "5. Mix sauce with pasta and top with grilled chicken."
      },
      {
        id: 8,
        name: "Fish Tacos",
        description: "Grilled fish tacos with tangy slaw and lime.",
        ingredients: [
          "white fish",
          "taco shells",
          "cabbage",
          "lime",
          "avocado",
          "cilantro"
        ],
        category: 3,
        procedure:
          "1. Season fish with salt, pepper, and lime juice. \n" +
          "2. Grill fish until cooked through. \n" +
          "3. Prepare slaw with shredded cabbage, lime juice, and cilantro. \n" +
          "4. Fill taco shells with fish, slaw, and avocado slices. \n" +
          "5. Serve with extra lime wedges."
      },
      {
        id: 9,
        name: "Vegetable Soup",
        description: "Hearty vegetable soup with potatoes, carrots, and celery.",
        ingredients: [
          "potatoes",
          "carrots",
          "celery",
          "onion",
          "tomato",
          "vegetable broth"
        ],
        category: 4,
        procedure:
          "1. Chop vegetables into bite-sized pieces. \n" +
          "2. Sauté onions in a pot until translucent. \n" +
          "3. Add remaining vegetables and cook for 5 minutes. \n" +
          "4. Pour in vegetable broth and simmer for 30 minutes. \n" +
          "5. Serve hot with crusty bread."
      },
      {
        id: 10,
        name: "Chicken Nuggets",
        description: "Crispy, golden chicken nuggets perfect for dipping.",
        ingredients: [
          "chicken breast",
          "bread crumbs",
          "flour",
          "eggs",
          "garlic powder",
          "paprika"
        ],
        category: 5,
        procedure:
          "1. Cut chicken breast into bite-sized pieces. \n" +
          "2. Coat chicken in flour, then egg, then breadcrumbs. \n" +
          "3. Fry in hot oil until golden brown and cooked through. \n" +
          "4. Serve with your favorite dipping sauce."
      },
      {
        id: 11,
        name: "Egg Salad Sandwich",
        description: "Classic egg salad with mayo, served in a sandwich.",
        ingredients: [
          "eggs",
          "mayonnaise",
          "mustard",
          "celery",
          "bread"
        ],
        category: 1,
        procedure:
          "1. Boil eggs and let them cool. \n" +
          "2. Peel and chop eggs, then mix with mayo, mustard, and chopped celery. \n" +
          "3. Spread mixture onto slices of bread to make sandwiches. \n" +
          "4. Serve immediately."
      },
      // ... Add remaining recipes with procedure attributes
    ];
  };
  export default interface PrepListItem {
    prep_list_id: number;
    name: string;
    description: string;
    note: string;
    quantity: number;
    unit: string;
    status: string;
    category: number;
    restaurant_id: number;
    date: string;
}
export const getDailyList = (): PrepListItem[] => {
  return [
    { prep_list_id: 1, name: "Slice Prosciutto", description: "Thinly slice prosciutto for charcuterie boards.", note: "...", quantity: 0, unit: "pkg", status: "todo", category: 1, restaurant_id: 1, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 2, name: "Slice Coppa", description: "Slice coppa for sandwiches or charcuterie boards.", note: "...", quantity: 0, unit: "pkg", status: "in-progress", category: 1, restaurant_id: 1, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 3, name: "Slice Sopressata", description: "Prepare sopressata slices for platters.", note: "...", quantity: 0, unit: "pkg", status: "todo", category: 2, restaurant_id: 1, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 4, name: "Slice Ham", description: "Slice ham for sandwiches or general use.", note: "...", quantity: 0, unit: "6th pan", status: "complete", category: 2, restaurant_id: 2, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 5, name: "Slice Provolone", description: "Slice provolone cheese for platters.", note: "...", quantity: 0, unit: "6th pan", status: "todo", category: 2, restaurant_id: 2, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 6, name: "Set Pulled Pork", description: "Prepare pulled pork for cooking or serving.", note: "...", quantity: 0, unit: "lbs", status: "in-progress", category: 3, restaurant_id: 3, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 7, name: "Cook Pulled Pork", description: "Cook pulled pork for use in dishes.", note: "...", quantity: 0, unit: "lbs", status: "complete", category: 3, restaurant_id: 1, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 8, name: "Cook Meatballs", description: "Prepare and cook meatballs for serving.", note: "...", quantity: 0, unit: "lbs", status: "todo", category: 3, restaurant_id: 1, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 9, name: "Italian Sausage Mix", description: "Mix ingredients for Italian sausage.", note: "...", quantity: 0, unit: "lbs", status: "todo", category: 4, restaurant_id: 2, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 10, name: "Marinate Lemongrass Pork", description: "Marinate pork with lemongrass for flavor.", note: "...", quantity: 0, unit: "lbs", status: "in-progress", category: 4, restaurant_id: 2, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 11, name: "Grill Lemongrass Pork", description: "Grill pork marinated with lemongrass.", note: "...", quantity: 0, unit: "lbs", status: "complete", category: 4, restaurant_id: 3, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 12, name: "Back Bacon Brine", description: "Prepare brine for back bacon curing.", note: "...", quantity: 0, unit: "liters", status: "todo", category: 5, restaurant_id: 1, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 13, name: "Cure Pork Loins", description: "Cure pork loins for preservation.", note: "...", quantity: 0, unit: "lbs", status: "in-progress", category: 5, restaurant_id: 3, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 14, name: "Dry Pork Loins", description: "Air dry cured pork loins.", note: "...", quantity: 0, unit: "lbs", status: "todo", category: 5, restaurant_id: 3, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 15, name: "Smoke Pork Loins", description: "Smoke pork loins for flavor.", note: "...", quantity: 0, unit: "lbs", status: "complete", category: 6, restaurant_id: 2, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 16, name: "Bacon Strips", description: "Slice and prepare bacon strips.", note: "...", quantity: 0, unit: "lbs", status: "todo", category: 6, restaurant_id: 1, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 17, name: "Dice & Crisp Bacon", description: "Dice and crisp bacon for toppings.", note: "...", quantity: 0, unit: "lbs", status: "in-progress", category: 6, restaurant_id: 3, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 18, name: "Marinate Chicken", description: "Marinate chicken for flavor.", note: "...", quantity: 0, unit: "lbs", status: "todo", category: 6, restaurant_id: 3, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 19, name: "Smoke Chicken", description: "Smoke chicken for a smoky flavor.", note: "...", quantity: 0, unit: "lbs", status: "in-progress", category: 6, restaurant_id: 1, date: new Date().toISOString().split("T")[0] },
    { prep_list_id: 20, name: "Drain Fresh Moz", description: "Drain fresh mozzarella for serving.", note: "...", quantity: 0, unit: "lbs", status: "complete", category: 6, restaurant_id: 2, date: new Date().toISOString().split("T")[0] },
  ];
};