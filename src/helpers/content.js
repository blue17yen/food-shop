import bg_bakery from 'assets/images/bg-bakery.jpg'
import bg_fruit from 'assets/images/bg-fruit.jpg'
import bg_vegetables from 'assets/images/bg-vegetables.jpg'
import bg_fish from 'assets/images/bg-fish.jpg'
import bg_meat from 'assets/images/bg-meat.jpg'
import bg_water from 'assets/images/bg-water.jpg'
import bg_wine from 'assets/images/bg-wine.jpg'


export const appContent = [
    {
        title: "Bakery",
        background: bg_bakery,
        path: "/products/bread",
        categories: [
            {
                title: "Bread",
                path: "/products/bread",
            },
            {
                title: "Bun",
                path: "/products/bun",
            },
            {
                title: "Pie",
                path: "/products/pie",
            },
        ],
    },
    {
        title: "Fruits",
        background: bg_fruit,
        path: "/products/fresh%20fruit",
        categories: [
            {
                title: "All fruits",
                path: "/products/fresh%20fruit",
            },
            {
                title: "Banana",
                path: "/products/banana",
            },
            {
                title: "Apple",
                path: "/products/apple",
            },
            {
                title: "Orange",
                path: "/products/orange",
            },
            {
                title: "Pineapple",
                path: "/products/pineapple",
            },
        ],
    },
    {
        title: "Vegetables",
        background: bg_vegetables,
        path: "/products/fresh%20vegetables",
        categories: [
            {
                title: "All vegetables",
                path: "/products/fresh%20vegetables",
            },
            {
                title: "Tomato",
                path: "/products/tomato",
            },
            {
                title: "Сarrot",
                path: "/products/carrot",
            },
            {
                title: "Сucumber",
                path: "/products/cucumber",
            },
        ],
    },
    {
        title: "Meat",
        background: bg_meat,
        path: "/products/meat",
        categories: [
            {
                title: "Meat",
                path: "/products/meat",
            },
            {
                title: "Chicken",
                path: "/products/chicken",
            },
        ],
    },
    {
        title: "Fish",
        background: bg_fish,
        path: "/products/fish",
        categories: [
            {
                title: "Fish",
                path: "/products/fish",
            },
        ],
    },
    {
        title: "Water",
        background: bg_water,
        path: "/products/water",
        categories: [
            {
                title: "Water",
                path: "/products/water",
            },
            {
                title: "Pepsi",
                path: "/products/pepsi",
            },
            {
                title: "Coca-Cola",
                path: "/products/Coca",
            },
        ],
    },
    {
        title: "Wine",
        background: bg_wine,
        path: "/products/wine",
        categories: [
            {
                title: "White",
                path: "/products/white%20wine",
            },
            {
                title: "Red",
                path: "/products/red%20wine",
            },
            {
                title: "Rose",
                path: "/products/rose%20wine",
            },
        ],
    },
];