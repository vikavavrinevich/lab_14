// task 1

let sity = ["Lviv", "Ternopil", "Warsaw"];

let result = sity.join("*");
console.log(result);

//task 2
let arr = [2, 3, 4, 5];

let product = 1;

for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
}
console.log(product);

// task 3
function findMin() {
    if (arguments.length === 0) {
        return undefined; // Повертаємо undefined, якщо функція була викликана без аргументів
    }

    let min = arguments[0]; // Припускаємо, що перший аргумент містить мінімальне значення

    // Проходимося по усіх аргументах, починаючи з другого
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i]; // Якщо поточний аргумент менший за мінімальне значення, змінюємо мінімум
        }
    }

    return min;
}

console.log(findMin(12, 2, 0, -5, 0.2));

// task 4
function findUnique(arr) {
    // Створюємо об'єкт для зберігання кількості входжень кожного елемента
    let counts = {};

    // Проходимося по всіх елементах масиву
    for (let element of arr) {
        // Збільшуємо лічильник для поточного елемента
        counts[element] = (counts[element] || 0) + 1;

        // Якщо кількість входжень поточного елемента більше 1, то масив не має унікальних елементів
        if (counts[element] > 1) {
            return false;
        }
    }

    // Якщо не було знайдено дублікатів, повертаємо true
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3])); // false
console.log(findUnique([1, 2, 3, 5, 11])); // true

// task 5

let shoppingList = [];

function list() {
    const bought = shoppingList.filter(item => item.bought);
    const notBought = shoppingList.filter(item => !item.bought);

    console.log("Некуплені продукти:");
    notBought.forEach(item => {
        console.log(`${item.name} - ${item.quantity}`);
    });
}

function printShoppingList() {
    const purchasedItems = shoppingList.filter(item => item.bought);
    const unpurchasedItems = shoppingList.filter(item => !item.bought);

    console.log("Некуплені продукти:");
    unpurchasedItems.forEach(item => {
        console.log(`${item.name}: ${item.quantity}`);
    });

    console.log("Куплені продукти:");
    purchasedItems.forEach(item => {
        console.log(`${item.name}: ${item.quantity}`);
    });
}

function addItemToShoppingList(name, quantity) {
    for (let item of shoppingList) {
        if (item.name === name) {
            item.quantity += quantity;
            return;
        }
    }
    shoppingList.push({
        name: name,
        quantity: quantity,
        bought: false
    });
}

function buyProduct(name) {
    for (let item of shoppingList) {
        if (item.name === name) {
            item.bought = true;
            return;
        }
    }
    console.log(`Продукт ${name} не знайдено у списку покупок.`);
}

// Приклад використання функцій
addItemToShoppingList("Яблука", 3);
addItemToShoppingList("Молоко", 1);
addItemToShoppingList("Хліб", 2);
addItemToShoppingList("Молоко", 2); // Додаткові молоко

printShoppingList();

buyProduct("Яблука");
buyProduct("Хліб");

printShoppingList();

// Викликати функцію list() для виведення некуплених продуктів
list();
