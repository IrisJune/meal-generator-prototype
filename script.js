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
[cite_start]]; [cite: 1]

// --- Helper Functions (Adapted from Google Apps Script) ---

/**
 * Helper function to pick a random item from an array.
 * @param {Array<string>} arr The array to pick from.
 * @returns {string} A random item from the array, or an empty string if array is empty.
 */
function getRandomItem(arr) {
    if (arr.length === 0) {
        return ''; [cite_start]// Return empty if no options [cite: 15]
    }
    [cite_start]return arr[Math.floor(Math.random() * arr.length)]; [cite: 17]
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
    [cite_start]}; [cite: 63]
    [cite_start]const categorizedItemsAll = { // New: stores all valid items for the meal, regardless of daily uniqueness [cite: 64]
        'Protein': [],
        'Fruit/Veg': [],
        'Grain/Starch': [],
        'Drink': []
    [cite_start]}; [cite: 64]

    // Iterate through the food list to find applicable items
    [cite_start]foodList.forEach(row => { [cite: 65]
        const itemName = row.Item; [cite_start]// Column A: Item Name [cite: 65]
        const category = row.Category; [cite_start]// Column B: Category [cite: 66]

        // Check if item is applicable to this meal type using the dynamically accessed property
        [cite_start]if (row[selectedMealType] === true) { // [cite: 66]
            if (categorizedItemsAll[category]) {
                categorizedItemsAll[category].push(itemName); [cite_start]// Add to 'all' list [cite: 67]
                // For a standalone daily generator, we don't need `excludedItems`
                // But keeping the structure similar to the Apps Script for future expansion
                categorizedItemsUnique[category].push(itemName); // For daily, unique is all applicable
            } else {
                [cite_start]console.warn(`Item "${itemName}" has an unrecognized category: "${category}". Skipping.`); [cite: 69]
            }
        }
    });

    const result = {
        drink: '',
        grainStarch: '',
        fruitVeg: '',
        protein: ''
    [cite_start]}; [cite: 70]

    // Helper function to pick a random item from a filtered array, with fallback to all items
    const pickRandomWithFallback = (categoryName, targetProp) => {
        [cite_start]let item = getRandomItem(categorizedItemsUnique[categoryName]); [cite: 71]
        [cite_start]// If no unique items are available, try picking from all applicable items for this meal. [cite: 72]
        if (!item && categorizedItemsAll[categoryName].length > 0) {
            [cite_start]item = getRandomItem(categorizedItemsAll[categoryName]); [cite: 73]
        }
        // If still no item, it means there are truly no options checked for this category/meal
        if (item) {
            [cite_start]result[targetProp] = item; [cite: 74]
        } else {
            [cite_start]result[targetProp] = `No ${categoryName} options checked for ${selectedMealType}.`; [cite: 75]
        }
    };

    [cite_start]// Drink (Breakfast & Lunch only) [cite: 76]
    if (selectedMealType === "Breakfast" || selectedMealType === "Lunch") {
        [cite_start]pickRandomWithFallback('Drink', 'drink'); [cite: 76]
    }

    [cite_start]// Grain/Starch (all meals) [cite: 76]
    pickRandomWithFallback('Grain/Starch', 'grainStarch');

    [cite_start]// Fruit/Veg and Protein logic [cite: 77]
    if (selectedMealType === "Breakfast" || selectedMealType === "Lunch" || selectedMealType === "Dinner") {
        [cite_start]// Breakfast, Lunch, Dinner need both Fruit/Veg and Protein [cite: 77]
        [cite_start]pickRandomWithFallback('Fruit/Veg', 'fruitVeg'); [cite: 77]
        [cite_start]pickRandomWithFallback('Protein', 'protein'); [cite: 77]
    [cite_start]} else { // Snacks (Morning, Afternoon, Evening) [cite: 78]
        [cite_start]// Snacks need one of either Fruit/Veg or Protein, in addition to Grain/Starch [cite: 78]
        [cite_start]const availableSnackUniqueOptions = []; [cite: 78]
        if (categorizedItemsUnique['Fruit/Veg'].length > 0) {
            [cite_start]availableSnackUniqueOptions.push('Fruit/Veg'); [cite: 79]
        }
        if (categorizedItemsUnique['Protein'].length > 0) {
            [cite_start]availableSnackUniqueOptions.push('Protein'); [cite: 80]
        }

        if (availableSnackUniqueOptions.length > 0) {
            [cite_start]const chosenCategory = getRandomItem(availableSnackUniqueOptions); [cite: 81]
            if (chosenCategory === 'Fruit/Veg') {
                [cite_start]pickRandomWithFallback('Fruit/Veg', 'fruitVeg'); [cite: 82]
            } else { // chosenCategory === 'Protein'
                [cite_start]pickRandomWithFallback('Protein', 'protein'); [cite: 83]
            }
        } else {
            [cite_start]// If no unique snack options, try picking from all applicable snack options (allowing repeats) [cite: 84]
            [cite_start]const availableSnackAllOptions = []; [cite: 84]
            if (categorizedItemsAll['Fruit/Veg'].length > 0) {
                [cite_start]availableSnackAllOptions.push('Fruit/Veg'); [cite: 85]
            }
            if (categorizedItemsAll['Protein'].length > 0) {
                [cite_start]availableSnackAllOptions.push('Protein'); [cite: 86]
            }

            if (availableSnackAllOptions.length > 0) {
                [cite_start]const chosenCategory = getRandomItem(availableSnackAllOptions); [cite: 87]
                if (chosenCategory === 'Fruit/Veg') {
                    [cite_start]pickRandomWithFallback('Fruit/Veg', 'fruitVeg'); [cite: 88]
                } else {
                    [cite_start]pickRandomWithFallback('Protein', 'protein'); [cite: 89]
                }
            } else {
                [cite_start]result.fruitVeg = `No Fruit/Veg or Protein options checked for ${selectedMealType}.`; [cite: 90]
                result.protein = ''; [cite_start]// Ensure protein is empty if no snack options at all [cite: 90]
            }
        }
    }
    [cite_start]return result; [cite: 91]
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