// --- Food List Data (Hardcoded from Aspen Meals - List.csv) ---
// IMPORTANT: Ensure these meal type property names exactly match the values in your HTML <option> tags.
// They should be 'Breakfast', 'Morning Snack', 'Lunch', 'Afternoon Snack', 'Dinner', 'Evening Snack'
// (Note the spaces in the snack types, which match your HTML select options)
const foodList = [
    { Item: "Juice", Category: "Drink", "Breakfast": true, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": false, "Evening Snack": false },
    { Item: "Lemonade", Category: "Drink", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": false, "Evening Snack": false },
    { Item: "Yogurt", Category: "Protein", "Breakfast": true, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Bagel and Cream Cheese", Category: "Grain/Starch", "Breakfast": true, "Morning Snack": true, "Lunch": false, "Afternoon Snack": false, "Dinner": true, "Evening Snack": false },
    { Item: "1/2 Banana and Peanut Butter", Category: "Fruit/Veg", "Breakfast": true, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": false },
    { Item: "Fruit of the Week", Category: "Fruit/Veg", "Breakfast": true, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": true },
    { Item: "Smoothie", Category: "Fruit/Veg", "Breakfast": true, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": true },
    { Item: "Waffle or Pancake", Category: "Grain/Starch", "Breakfast": true, "Morning Snack": true, "Lunch": false, "Afternoon Snack": true, "Dinner": true, "Evening Snack": true },
    { Item: "Sausage", Category: "Protein", "Breakfast": true, "Morning Snack": true, "Lunch": false, "Afternoon Snack": false, "Dinner": true, "Evening Snack": false },
    { Item: "Mac and Cheese", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": true, "Evening Snack": false },
    { Item: "Apple", Category: "Fruit/Veg", "Breakfast": true, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": false },
    { Item: "Clementine", Category: "Fruit/Veg", "Breakfast": true, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": true },
    { Item: "Guac and Tortilla Chips", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Banana, PB, and Chocolate Chips", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": false, "Lunch": false, "Afternoon Snack": false, "Dinner": false, "Evening Snack": true },
    { Item: "Apple and PB", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": true, "Lunch": false, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Crackers", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": true, "Lunch": false, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Egg", Category: "Protein", "Breakfast": true, "Morning Snack": true, "Lunch": false, "Afternoon Snack": false, "Dinner": false, "Evening Snack": false },
    { Item: "Milk", Category: "Drink", "Breakfast": true, "Morning Snack": true, "Lunch": false, "Afternoon Snack": false, "Dinner": false, "Evening Snack": true },
    { Item: "Cereal", Category: "Grain/Starch", "Breakfast": true, "Morning Snack": true, "Lunch": false, "Afternoon Snack": false, "Dinner": false, "Evening Snack": true },
    { Item: "Toast", Category: "Grain/Starch", "Breakfast": true, "Morning Snack": true, "Lunch": false, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Potatoes", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": true, "Evening Snack": false },
    { Item: "Cookies", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": false, "Lunch": false, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Chicken Tender", Category: "Protein", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": true, "Evening Snack": false },
    { Item: "Cheese and Meat Sticks", Category: "Protein", "Breakfast": false, "Morning Snack": true, "Lunch": false, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Dinner Leftovers", Category: "Protein", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": false, "Evening Snack": false },
    { Item: "PB&J", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": true },
    { Item: "Turkey Sandwich", Category: "Protein", "Breakfast": false, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": false },
    { Item: "Apple Juice", Category: "Drink", "Breakfast": true, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": false, "Evening Snack": false },
    { Item: "Freeze Dried Strawberries", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": true, "Lunch": false, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Ice Cream", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": false, "Lunch": false, "Afternoon Snack": false, "Dinner": false, "Evening Snack": true },
    { Item: "Quesadilla", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": true, "Evening Snack": false },
    { Item: "Cheesy Roll-ups", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": true },
    { Item: "Grilled Cheese", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": false },
    { Item: "Caesar Salad", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": false, "Dinner": true, "Evening Snack": false },
    { Item: "Garlic Bread", Category: "Grain/Starch", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": true, "Dinner": true, "Evening Snack": false },
    { Item: "Nuts", Category: "Protein", "Breakfast": false, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Fruit Leather", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": true, "Lunch": false, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Cheese and Crackers", Category: "Protein", "Breakfast": false, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": true },
    { Item: "Peppers", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": false },
    { Item: "Carrots", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": false },
    { Item: "Broccoli", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": false },
    { Item: "Cucumber", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": false },
    { Item: "Snap Pea", Category: "Fruit/Veg", "Breakfast": false, "Morning Snack": true, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": false },
    { Item: "Roasted Chickpeas", Category: "Protein", "Breakfast": false, "Morning Snack": false, "Lunch": true, "Afternoon Snack": true, "Dinner": false, "Evening Snack": false }
];

// --- Helper Functions ---

function getRandomItem(arr) {
    if (arr.length === 0) {
        return '';
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateMealItems(selectedMealType, foodList) {
    const categorizedItemsUnique = {
        'Protein': [],
        'Fruit/Veg': [],
        'Grain/Starch': [],
        'Drink': []
    };
    const categorizedItemsAll = {
        'Protein': [],
        'Fruit/Veg': [],
        'Grain/Starch': [],
        'Drink': []
    };

    foodList.forEach(row => {
        const itemName = row.Item;
        const category = row.Category;

        // The key fix: Directly use selectedMealType string to access the property on the row object
        // Example: row["Morning Snack"]
        if (row[selectedMealType] === true) {
            if (categorizedItemsAll[category]) {
                categorizedItemsAll[category].push(itemName);
                categorizedItemsUnique[category].push(itemName);
            } else {
                console.warn(`Item "${itemName}" has an unrecognized category: "${category}". Skipping.`);
            }
        }
    });

    const result = {
        drink: '',
        grainStarch: '',
        fruitVeg: '',
        protein: ''
    };

    const pickRandomWithFallback = (categoryName, targetProp) => {
        let item = getRandomItem(categorizedItemsUnique[categoryName]);
        if (!item && categorizedItemsAll[categoryName].length > 0) {
            item = getRandomItem(categorizedItemsAll[categoryName]);
        }
        if (item) {
            result[targetProp] = item;
        } else {
            result[targetProp] = `No ${categoryName} options checked for ${selectedMealType}.`;
        }
    };

    // Drink (Breakfast & Lunch only)
    if (selectedMealType === "Breakfast" || selectedMealType === "Lunch") {
        pickRandomWithFallback('Drink', 'drink');
    }

    // Grain/Starch (all meals)
    pickRandomWithFallback('Grain/Starch', 'grainStarch');

    // Fruit/Veg and Protein logic
    if (selectedMealType === "Breakfast" || selectedMealType === "Lunch" || selectedMealType === "Dinner") {
        pickRandomWithFallback('Fruit/Veg', 'fruitVeg');
        pickRandomWithFallback('Protein', 'protein');
    } else { // Snacks (Morning Snack, Afternoon Snack, Evening Snack)
        const availableSnackUniqueOptions = [];
        if (categorizedItemsUnique['Fruit/Veg'].length > 0) {
            availableSnackUniqueOptions.push('Fruit/Veg');
        }
        if (categorizedItemsUnique['Protein'].length > 0) {
            availableSnackUniqueOptions.push('Protein');
        }

        if (availableSnackUniqueOptions.length > 0) {
            const chosenCategory = getRandomItem(availableSnackUniqueOptions);
            if (chosenCategory === 'Fruit/Veg') {
                pickRandomWithFallback('Fruit/Veg', 'fruitVeg');
            } else {
                pickRandomWithFallback('Protein', 'protein');
            }
        } else {
            const availableSnackAllOptions = [];
            if (categorizedItemsAll['Fruit/Veg'].length > 0) {
                availableSnackAllOptions.push('Fruit/Veg');
            }
            if (categorizedItemsAll['Protein'].length > 0) {
                availableSnackAllOptions.push('Protein');
            }

            if (availableSnackAllOptions.length > 0) {
                const chosenCategory = getRandomItem(availableSnackAllOptions);
                if (chosenCategory === 'Fruit/Veg') {
                    pickRandomWithFallback('Fruit/Veg', 'fruitVeg');
                } else {
                    pickRandomWithFallback('Protein', 'protein');
                }
            } else {
                result.fruitVeg = `No Fruit/Veg or Protein options checked for ${selectedMealType}.`;
                result.protein = '';
            }
        }
    }
    return result;
}

/**
 * Generates a single meal plan based on the selected meal type and displays it.
 */
function generateMeal() {
    const selectedMealType = document.getElementById('mealType').value;
    const generatedMealContent = document.getElementById('generatedMealContent');

    const mealItems = generateMealItems(selectedMealType, foodList);

    let outputHtml = `<h3>${selectedMealType}</h3>`;
    outputHtml += `<p><strong>Drink:</strong> ${mealItems.drink}</p>`;
    outputHtml += `<p><strong>Grain/Starch:</strong> ${mealItems.grainStarch}</p>`;
    outputHtml += `<p><strong>Fruit/Veg:</strong> ${mealItems.fruitVeg}</p>`;
    outputHtml += `<p><strong>Protein:</strong> ${mealItems.protein}</p>`;

    generatedMealContent.innerHTML = outputHtml;
}
