// --- Food List Data (Hardcoded from Aspen Meals - List.csv) ---
// This data needs to be kept in sync if your CSV changes.
const foodList = [
    { Item: "Juice", Category: "Drink", Breakfast: true, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: false, EveningSnack: false },
    { Item: "Lemonade", Category: "Drink", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: false, EveningSnack: false },
    { Item: "Yogurt", Category: "Protein", Breakfast: true, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Bagel and Cream Cheese", Category: "Grain/Starch", Breakfast: true, MorningSnack: true, Lunch: false, AfternoonSnack: false, Dinner: true, EveningSnack: false },
    { Item: "1/2 Banana and Peanut Butter", Category: "Fruit/Veg", Breakfast: true, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: false },
    { Item: "Fruit of the Week", Category: "Fruit/Veg", Breakfast: true, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: true },
    { Item: "Smoothie", Category: "Fruit/Veg", Breakfast: true, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: true },
    { Item: "Waffle or Pancake", Category: "Grain/Starch", Breakfast: true, MorningSnack: true, Lunch: false, AfternoonSnack: true, Dinner: true, EveningSnack: true },
    { Item: "Sausage", Category: "Protein", Breakfast: true, MorningSnack: true, Lunch: false, AfternoonSnack: false, Dinner: true, EveningSnack: false },
    { Item: "Mac and Cheese", Category: "Grain/Starch", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: true, EveningSnack: false },
    { Item: "Apple", Category: "Fruit/Veg", Breakfast: true, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: false },
    { Item: "Clementine", Category: "Fruit/Veg", Breakfast: true, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: true },
    { Item: "Guac and Tortilla Chips", Category: "Grain/Starch", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Banana, PB, and Chocolate Chips", Category: "Fruit/Veg", Breakfast: false, MorningSnack: false, Lunch: false, AfternoonSnack: false, Dinner: false, EveningSnack: true },
    { Item: "Apple and PB", Category: "Fruit/Veg", Breakfast: false, MorningSnack: true, Lunch: false, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Crackers", Category: "Grain/Starch", Breakfast: false, MorningSnack: true, Lunch: false, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Egg", Category: "Protein", Breakfast: true, MorningSnack: true, Lunch: false, AfternoonSnack: false, Dinner: false, EveningSnack: false },
    { Item: "Milk", Category: "Drink", Breakfast: true, MorningSnack: true, Lunch: false, AfternoonSnack: false, Dinner: false, EveningSnack: true },
    { Item: "Cereal", Category: "Grain/Starch", Breakfast: true, MorningSnack: true, Lunch: false, AfternoonSnack: false, Dinner: false, EveningSnack: true },
    { Item: "Toast", Category: "Grain/Starch", Breakfast: true, MorningSnack: true, Lunch: false, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Potatoes", Category: "Grain/Starch", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: true, EveningSnack: false },
    { Item: "Cookies", Category: "Grain/Starch", Breakfast: false, MorningSnack: false, Lunch: false, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Chicken Tender", Category: "Protein", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: true, EveningSnack: false },
    { Item: "Cheese and Meat Sticks", Category: "Protein", Breakfast: false, MorningSnack: true, Lunch: false, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Dinner Leftovers", Category: "Protein", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: false, EveningSnack: false },
    { Item: "PB&J", Category: "Grain/Starch", Breakfast: false, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: true },
    { Item: "Turkey Sandwich", Category: "Protein", Breakfast: false, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: false },
    { Item: "Apple Juice", Category: "Drink", Breakfast: true, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: false, EveningSnack: false },
    { Item: "Freeze Dried Strawberries", Category: "Fruit/Veg", Breakfast: false, MorningSnack: true, Lunch: false, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Ice Cream", Category: "Grain/Starch", Breakfast: false, MorningSnack: false, Lunch: false, AfternoonSnack: false, Dinner: false, EveningSnack: true },
    { Item: "Quesadilla", Category: "Grain/Starch", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: true, EveningSnack: false },
    { Item: "Cheesy Roll-ups", Category: "Grain/Starch", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: true },
    { Item: "Grilled Cheese", Category: "Grain/Starch", Breakfast: false, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: false },
    { Item: "Caesar Salad", Category: "Fruit/Veg", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: false, Dinner: true, EveningSnack: false },
    { Item: "Garlic Bread", Category: "Grain/Starch", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: true, Dinner: true, EveningSnack: false },
    { Item: "Nuts", Category: "Protein", Breakfast: false, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Fruit Leather", Category: "Fruit/Veg", Breakfast: false, MorningSnack: true, Lunch: false, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Cheese and Crackers", Category: "Protein", Breakfast: false, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: true },
    { Item: "Peppers", Category: "Fruit/Veg", Breakfast: false, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: false },
    { Item: "Carrots", Category: "Fruit/Veg", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: false },
    { Item: "Broccoli", Category: "Fruit/Veg", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: false },
    { Item: "Cucumber", Category: "Fruit/Veg", Breakfast: false, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: false },
    { Item: "Snap Pea", Category: "Fruit/Veg", Breakfast: false, MorningSnack: true, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: false },
    { Item: "Roasted Chickpeas", Category: "Protein", Breakfast: false, MorningSnack: false, Lunch: true, AfternoonSnack: true, Dinner: false, EveningSnack: false }
];

// --- Helper Functions (Adapted from Google Apps Script) ---

/**
 * Helper function to pick a random item from an array.
 * @param {Array<string>} arr The array to pick from.
 * @returns {string} A random item from the array, or an empty string if array is empty.
 */
function getRandomItem(arr) {
    if (arr.length === 0) {
        return ''; // Return empty if no options
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Core logic to generate random meal items for a given meal type.
 * @param {string} selectedMealType The name of the meal (e.g., "Breakfast").
 * @param {Array<Object>} foodList The array of food item objects.
 * @returns {Object} An object containing the selected drink, grainStarch, fruitVeg, and protein.
 */
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

    // Iterate through the food list to find applicable items
    foodList.forEach(row => {
        const itemName = row.Item;
        const category = row.Category;

        // FIX: Use bracket notation to access the property dynamically based on selectedMealType
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

    // Helper function to pick a random item from a filtered array, with fallback to all items
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
        // Breakfast, Lunch, Dinner need both Fruit/Veg and Protein
        pickRandomWithFallback('Fruit/Veg', 'fruitVeg');
        pickRandomWithFallback('Protein', 'protein');
    } else { // Snacks (Morning, Afternoon, Evening)
        // Snacks need one of either Fruit/Veg or Protein, in addition to Grain/Starch
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
