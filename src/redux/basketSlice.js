import { createSlice } from "@reduxjs/toolkit";
import { priceFormat } from "helpers/";

const TAX = 0.17;

const initialState = {
    basketProducts: {
        // '210503': {
        //     count: 1,
        //     totalPrice: 29.99,
        //     price: 29.99,
        //     id: 210503,
        //     title: "Apple &amp; Eve On The Go, Cranberry Juice Cocktail, 8oz (Pack of 24)",
        //     likes: 1,
        //     badges: [
        //         "egg_free",
        //         "peanut_free",
        //         "nut_free",
        //         "vegan",
        //         "soy_free",
        //         "msg_free",
        //         "no_artificial_colors",
        //         "no_artificial_flavors",
        //         "vegetarian",
        //         "no_artificial_ingredients",
        //         "corn_free",
        //         "dairy_free",
        //         "gluten_free",
        //     ],
        //     importantBadges: [
        //         "no_artificial_flavors",
        //         "no_artificial_colors",
        //         "no_artificial_ingredients",
        //         "gluten_free",
        //         "vegan",
        //         "dairy_free",
        //     ],
        //     nutrition: {
        //         nutrients: [
        //             {
        //                 name: "Calcium",
        //                 title: "Calcium",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Carbohydrates",
        //                 title: "Carbohydrates",
        //                 amount: 28,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 9.33,
        //             },
        //             {
        //                 name: "Cholesterol",
        //                 title: "Cholesterol",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Calories",
        //                 title: "Calories",
        //                 amount: 110,
        //                 unit: "kcal",
        //                 percentOfDailyNeeds: 5.5,
        //             },
        //             {
        //                 name: "Fat",
        //                 title: "Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Saturated Fat",
        //                 title: "Saturated Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Trans Fat",
        //                 title: "Trans Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Fiber",
        //                 title: "Fiber",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Iron",
        //                 title: "Iron",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Potassium",
        //                 title: "Potassium",
        //                 amount: 60,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 1.71,
        //             },
        //             {
        //                 name: "Protein",
        //                 title: "Protein",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Sodium",
        //                 title: "Sodium",
        //                 amount: 25,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 1.09,
        //             },
        //             {
        //                 name: "Sugar",
        //                 title: "Sugar",
        //                 amount: 28,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 31.11,
        //             },
        //             {
        //                 name: "Vitamin A",
        //                 title: "Vitamin A",
        //                 amount: 0,
        //                 unit: "IU",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Vitamin C",
        //                 title: "Vitamin C",
        //                 amount: 82.5,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 100,
        //             },
        //             {
        //                 name: "Net Carbohydrates",
        //                 title: "Net Carbohydrates",
        //                 amount: 28,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 10.18,
        //             },
        //         ],
        //         caloricBreakdown: {
        //             percentProtein: 0,
        //             percentFat: 0,
        //             percentCarbs: 100,
        //         },
        //         calories: 110,
        //         fat: "0g",
        //         protein: "0g",
        //         carbs: "28g",
        //     },
        //     servings: {
        //         number: 1,
        //         size: 8,
        //         unit: "FL OZ",
        //     },
        //     spoonacularScore: 77.5,
        //     breadcrumbs: ["apple", "fruit", "flavor"],
        //     aisle: "Produce",
        //     description:
        //         "&lt;ul&gt;  &lt;li&gt;Apple &amp;amp; Eve Cranberry Juice Cocktail blends all the goodness and taste of cranberry juice with just the right splash of apple and pear juices.&lt;br /&gt;&lt;/li&gt;  &lt;li&gt;No High Fructose Corn Syrup&lt;br /&gt;&lt;p&gt;&lt;/p&gt;&lt;/li&gt;  &lt;li&gt;No artificial flavors or colors&lt;br /&gt;&lt;p&gt;&lt;/p&gt;&lt;/li&gt; &lt;/ul&gt;",
        //     image: "https://spoonacular.com/productImages/210503-312x231.jpeg",
        //     imageType: "jpeg",
        //     images: [
        //         "https://spoonacular.com/productImages/210503-90x90.jpeg",
        //         "https://spoonacular.com/productImages/210503-312x231.jpeg",
        //         "https://spoonacular.com/productImages/210503-636x393.jpeg",
        //     ],
        //     generatedText:
        //         "Apple &amp; Eve On The Go, Cranberry Juice Cocktail, 8oz (Pack of 24): This product is an amazing gaps_6 option for anyone craving apples. One serving of this product provides 110 calories, 0 grams of fat, 0 grams of protein, and 28 grams of carbs. According to our research, this product contains no ingredients that you should avoid. We recommend choosing products with short ingredient lists, as these tend to be less processed. This product has 10 ingredients. The price of a product varies depending on the store, location, current sales, etc., but this product usually costs approximately 30 cents. This amounts to $0 per serving.",
        //     upc: "076301590847",
        //     brand: "Apple & Eve",
        //     ingredients: [
        //         {
        //             name: "added sugar",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "additive",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "apple juice concentrate",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "ascorbic acid",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "concentrated juice",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "cranberry juice concentrate",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "drink",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "drink mix",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "filtered water",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "for tartness",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "fruit juice concentrate",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "granulated sugar",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "ingredients",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "malic acid",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "menu item type",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "natural flavor",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "nutrient",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "refined sweetener",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "sugar",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "sweetener",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "vitamin c",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "water",
        //             safety_level: null,
        //             description: null,
        //         },
        //     ],
        //     ingredientCount: 10,
        //     ingredientList:
        //         "Filtered Water, Cane Sugar, Cranberry Juice Concentrate, Apple Juice Concentrate, Malic Acid, Vegetable Color, Natural Flavor, Ascorbic Acid (Vitamin C)",
        // },
        // '413917': {
        //     count: 1,
        //     totalPrice: 5.15,
        //     price: 5.15,
        //     id: 413917,
        //     title: "Juicy Juice 100% Organic Juice, Apple, 48 Fl Oz",
        //     likes: 0,
        //     badges: [
        //         "egg_free",
        //         "peanut_free",
        //         "sulfite_free",
        //         "nut_free",
        //         "vegan",
        //         "no_preservatives",
        //         "soy_free",
        //         "msg_free",
        //         "no_added_sugar",
        //         "gmo_free",
        //         "no_artificial_colors",
        //         "no_artificial_flavors",
        //         "sugar_free",
        //         "vegetarian",
        //         "no_artificial_ingredients",
        //         "no_additives",
        //         "corn_free",
        //         "dairy_free",
        //         "gluten_free",
        //         "organic",
        //     ],
        //     importantBadges: [
        //         "organic",
        //         "no_additives",
        //         "no_preservatives",
        //         "no_artificial_flavors",
        //         "no_artificial_colors",
        //         "no_artificial_ingredients",
        //     ],
        //     nutrition: {
        //         nutrients: [
        //             {
        //                 name: "Calcium",
        //                 title: "Calcium",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Carbohydrates",
        //                 title: "Carbohydrates",
        //                 amount: 29,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 9.67,
        //             },
        //             {
        //                 name: "Cholesterol",
        //                 title: "Cholesterol",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Calories",
        //                 title: "Calories",
        //                 amount: 110,
        //                 unit: "kcal",
        //                 percentOfDailyNeeds: 5.5,
        //             },
        //             {
        //                 name: "Fat",
        //                 title: "Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Saturated Fat",
        //                 title: "Saturated Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Trans Fat",
        //                 title: "Trans Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Iron",
        //                 title: "Iron",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Potassium",
        //                 title: "Potassium",
        //                 amount: 270,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 7.71,
        //             },
        //             {
        //                 name: "Protein",
        //                 title: "Protein",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Sodium",
        //                 title: "Sodium",
        //                 amount: 15,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0.65,
        //             },
        //             {
        //                 name: "Sugar",
        //                 title: "Sugar",
        //                 amount: 27,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 30,
        //             },
        //             {
        //                 name: "Vitamin A",
        //                 title: "Vitamin A",
        //                 amount: 0,
        //                 unit: "IU",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Vitamin C",
        //                 title: "Vitamin C",
        //                 amount: 99,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 120,
        //             },
        //             {
        //                 name: "Net Carbohydrates",
        //                 title: "Net Carbohydrates",
        //                 amount: 29,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 10.55,
        //             },
        //         ],
        //         caloricBreakdown: {
        //             percentProtein: 0,
        //             percentFat: 0,
        //             percentCarbs: 100,
        //         },
        //         calories: 110,
        //         fat: "0g",
        //         protein: "0g",
        //         carbs: "29g",
        //     },
        //     servings: {
        //         number: 6,
        //         size: 8,
        //         unit: "fl oz",
        //     },
        //     spoonacularScore: 100,
        //     breadcrumbs: ["apple", "fruit", "flavor"],
        //     aisle: "Produce",
        //     description:
        //         "&lt;ul&gt;  &lt;li&gt;Sweetened with Only Fruit Juice&lt;/li&gt;  &lt;li&gt;Goodness made Juicy(tm)&lt;/li&gt;  &lt;li&gt;Our Fruit Promise(r). Kids need 1-2 cups of fruit per day. While most of their daily servings should come from whole fruits, Juicy Juice can help too! We promise that every 8 fluid ounces of Juicy Juice 100% Juice provides 1 cup of fruit. So kids get the fruit they need.&lt;/li&gt;  &lt;li&gt;All juices may look the same but it's what's inside that matters. No added sugar. No high fructose corn syrup. No artificial sweeteners. No artificial flavors. No preservatives. Our delicious sweetness comes straight from the fruit, that's it!&lt;/li&gt; &lt;/ul&gt;",
        //     image: "https://spoonacular.com/productImages/413917-312x231.jpeg",
        //     imageType: "jpeg",
        //     images: [
        //         "https://spoonacular.com/productImages/413917-90x90.jpeg",
        //         "https://spoonacular.com/productImages/413917-312x231.jpeg",
        //         "https://spoonacular.com/productImages/413917-636x393.jpeg",
        //     ],
        //     generatedText: null,
        //     upc: "889497000539",
        //     brand: "Juicy Juice",
        //     ingredients: [
        //         {
        //             name: "antioxidant",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "apple essence",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "apple juice from concentrate",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "ascorbic acid",
        //             safety_level: "high",
        //             description: null,
        //         },
        //         {
        //             name: "citric acid",
        //             safety_level: "high",
        //             description: null,
        //         },
        //         {
        //             name: "concentrated juice",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "drink",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "drink mix",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "fruit juice concentrate",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "juice concentrate",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "menu item type",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "nutrient",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "vitamin",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "water",
        //             safety_level: null,
        //             description: null,
        //         },
        //     ],
        //     ingredientCount: 7,
        //     ingredientList:
        //         "Organic Apple Juice From Concentrate (Water, Organic Juice Concentrate), Organic Apple Essence, Ascorbic Acid (Vitamin C), Citric Acid",
        // },
        // '190748': {
        //     count: 1,
        //     totalPrice: 4.99,
        //     price: 4.99,
        //     id: 190748,
        //     title: "Plum Organics Kids Apple Mashups - 4 Count Box",
        //     likes: 0,
        //     badges: [
        //         "egg_free",
        //         "peanut_free",
        //         "sulfite_free",
        //         "nut_free",
        //         "vegan",
        //         "no_preservatives",
        //         "soy_free",
        //         "msg_free",
        //         "no_artificial_colors",
        //         "sugar_free",
        //         "no_artificial_flavors",
        //         "vegetarian",
        //         "no_artificial_ingredients",
        //         "no_additives",
        //         "corn_free",
        //         "dairy_free",
        //         "gluten_free",
        //         "organic",
        //     ],
        //     importantBadges: [
        //         "organic",
        //         "no_additives",
        //         "no_preservatives",
        //         "no_artificial_flavors",
        //         "no_artificial_colors",
        //         "no_artificial_ingredients",
        //     ],
        //     nutrition: {
        //         nutrients: [
        //             {
        //                 name: "Calcium",
        //                 title: "Calcium",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Carbohydrates",
        //                 title: "Carbohydrates",
        //                 amount: 13,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 4.33,
        //             },
        //             {
        //                 name: "Cholesterol",
        //                 title: "Cholesterol",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Calories",
        //                 title: "Calories",
        //                 amount: 50,
        //                 unit: "kcal",
        //                 percentOfDailyNeeds: 2.5,
        //             },
        //             {
        //                 name: "Fat",
        //                 title: "Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Saturated Fat",
        //                 title: "Saturated Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Trans Fat",
        //                 title: "Trans Fat",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Fiber",
        //                 title: "Fiber",
        //                 amount: 3,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 12,
        //             },
        //             {
        //                 name: "Iron",
        //                 title: "Iron",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Potassium",
        //                 title: "Potassium",
        //                 amount: 95,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 2.71,
        //             },
        //             {
        //                 name: "Protein",
        //                 title: "Protein",
        //                 amount: 0,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Sodium",
        //                 title: "Sodium",
        //                 amount: 0,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Sugar",
        //                 title: "Sugar",
        //                 amount: 9,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 10,
        //             },
        //             {
        //                 name: "Vitamin A",
        //                 title: "Vitamin A",
        //                 amount: 0,
        //                 unit: "IU",
        //                 percentOfDailyNeeds: 0,
        //             },
        //             {
        //                 name: "Vitamin C",
        //                 title: "Vitamin C",
        //                 amount: 16.5,
        //                 unit: "mg",
        //                 percentOfDailyNeeds: 20,
        //             },
        //             {
        //                 name: "Net Carbohydrates",
        //                 title: "Net Carbohydrates",
        //                 amount: 10,
        //                 unit: "g",
        //                 percentOfDailyNeeds: 3.64,
        //             },
        //         ],
        //         caloricBreakdown: {
        //             percentProtein: 0,
        //             percentFat: 0,
        //             percentCarbs: 100,
        //         },
        //         calories: 50,
        //         fat: "0g",
        //         protein: "0g",
        //         carbs: "13g",
        //     },
        //     servings: {
        //         number: 4,
        //         size: 90,
        //         unit: "g",
        //     },
        //     spoonacularScore: 100,
        //     breadcrumbs: ["apple", "fruit", "flavor"],
        //     aisle: "Produce",
        //     description:
        //         "Great on-the-go! 25% Less sugar than the leading apple pouch**. Good source fiber. Excellent source Vitamin C. No genetically modified ingredients. Only the good stuff & always organic. BPA-free packaging. **Plum Mashups pouch 9g sugar per serving; the leading apple pouch 12g sugar per serving. A Mashup of pure fruit fun! Mashups are the perfect fruit for on-the-go. We know finding good snacks can be a challenge and kids deserve the most nutrition possible with every bite. So we gave Mashups a little boost. Packed with fiber and Vitamin C, this fruit is first in class. And unlike other fruit pouches, our Mashups have no added sugars - just all natural fruit, so you can rest assured that your little adventurer is getting clean, simple ingredients. Mash it up! Feed Amazingâ„¢: Kids are unstoppable. They are a constant source of energy, and we at Plum strive to create crave-able snacks that keep them going strong. We use only the highest quality, organic ingredients in every product to deliver the ultimate yum. But we don't stop there, we carefully craft each snack with ingredients that pack a greater nutritional punch. Life doesn't slow down and we know the importance of a convenient, healthy snack that you can feel good about. Give 'em the good stuff and watch them grow. After all, amazing deserves amazing. More snacks to crave! Fruit Shredzâ„¢. Jammy Sammyâ„¢. Mashupsâ„¢. Go bar. Certified organic by Oregon Tilth. B, Certified Corporation. 100% Recycled PaperboardÂ®. www.plumorganics.com. 1-877-914-PLUM. info@plumorganics.com.",
        //     image: "https://spoonacular.com/productImages/190748-312x231.jpeg",
        //     imageType: "jpeg",
        //     images: [
        //         "https://spoonacular.com/productImages/190748-90x90.jpeg",
        //         "https://spoonacular.com/productImages/190748-312x231.jpeg",
        //         "https://spoonacular.com/productImages/190748-636x393.jpeg",
        //     ],
        //     generatedText:
        //         "Plum Organics Kids Apple Mashups - 4 Count Box: This product is an amazing fit if you like to buy products that are free of preservatives, vegetarian, vegan, and organic. According to our research, this product contains no ingredients that you should avoid. We recommend choosing products with short ingredient lists, as these tend to be less processed. This product has 5 ingredients. This product contains 50 calories, 0 grams of fat, 0 grams of protein, and 13 grams of carbs per serving. The price of a product varies depending on the store, location, current sales, etc., but this product usually costs roughly 5 cents. This amounts to $0 per serving.",
        //     upc: "846675005151",
        //     brand: "Plum Organics",
        //     ingredients: [
        //         {
        //             name: "ascorbic acid",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "apple fiber",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "vitamin c",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "water",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "apples",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "fruit",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "drink",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "flavor",
        //             safety_level: null,
        //             description: null,
        //         },
        //         {
        //             name: "menu item type",
        //             safety_level: null,
        //             description: null,
        //         },
        //     ],
        //     ingredientCount: 5,
        //     ingredientList:
        //         "Organic Apples, Organic Apple Fiber, Contains 1% or less of the following: Ascorbic Acid (Vitamin C), Water",
        // },
    },
    totalProductsCount: 0,
    totalPrice: 0,
    tax: 0,
    totalPriceWithTax: 0,
};




const addProductFunc = (state, action) => {
    const { product, newCount } = action.payload;
    const productId = product.id;
    const productPrice = product.price;
    const productTotalPrice = priceFormat(newCount * productPrice);
    const newProduct = {
        ...product,
        count: newCount,
        totalPrice: productTotalPrice,
    };
    
    const newTotalPrice = priceFormat(state.totalPrice + productTotalPrice);

    state.basketProducts[productId] = newProduct;
    state.totalProductsCount = state.totalProductsCount + 1;
    setTaxedPrice(state, newTotalPrice);
};
const updateProductFunc = (state, action) => {
    const {id, newCount} = action.payload;

    const product = state.basketProducts[id];
    const productPrice = product.price;
    const oldProductTotalPrice = product.totalPrice;
    const updateProductTotalPrice = priceFormat(newCount * productPrice);

    const newTotalPrice = priceFormat(
        state.totalPrice - oldProductTotalPrice + updateProductTotalPrice
    );

    product.count = newCount;
    product.totalPrice = updateProductTotalPrice;
    setTaxedPrice(state, newTotalPrice);
};
const removeProductFunc = (state, action) => {
    const { id } = action.payload;
    const removed = state.basketProducts[id];
    const removedTotalPrice = removed.totalPrice;
    const newTotalPrice = priceFormat(state.totalPrice - removedTotalPrice);


    delete state.basketProducts[id];
    state.totalProductsCount = state.totalProductsCount - 1;
    setTaxedPrice(state, newTotalPrice);
};

export const basketSlice = createSlice({
    name: "backet",
    initialState,
    reducers: {
        addProduct: addProductFunc,
        updateProduct: updateProductFunc,
        removeProduct: removeProductFunc,
    },
});


export const { addProduct, updateProduct, removeProduct } = basketSlice.actions;
export default basketSlice.reducer;



function setTaxedPrice(state, price) {
    const newTax = priceFormat(price * TAX);
    const newPriceWithTax = priceFormat(price + newTax);

    state.totalPrice = price;
    state.tax = newTax;
    state.totalPriceWithTax = newPriceWithTax;
}