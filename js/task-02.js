const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients'); // вибираємо елемент ul#ingredients

ingredients.forEach(ingredient => {
  const ingredientItem = document.createElement('li'); 
  ingredientItem.textContent = ingredient; 
  ingredientItem.classList.add('item'); 
  ingredientsList.append(ingredientItem);
});
console.log(ingredients);