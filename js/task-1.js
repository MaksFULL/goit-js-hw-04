// Функція для перевірки чи помістяться всі товари в контейнер
function isEnoughCapacity(products, containerSize) {
  // Рахуємо загальну кількість товарів
  const totalProducts = Object.values(products).reduce((sum, count) => sum + count, 0);
  // Повертаємо результат перевірки
  return totalProducts <= containerSize;
}

// Перевірка коректності роботи функції
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
