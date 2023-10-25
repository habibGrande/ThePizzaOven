function pizzaOven(crustType,sauceType,cheeses,toppings){
    var pizza ={};

    pizza.crustType= crustType;
    pizza.sauceType= sauceType;
    pizza.cheeses= cheeses;
    pizza.toppings= toppings;
    return pizza;
}
var FirstPizza = pizzaOven("deep Dish", "traditional","mozzarella",["pepperoni,sausage"]);
console.log(FirstPizza);
var secondPizza= pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(secondPizza);
var thirdPizza = pizzaOven("deep Dish","marinara", ["mozzarella", "feta"],["pepperoni,sausage"]);
console.log(thirdPizza);
var fourthPizza = pizzaOven("hand tossed","traditional","mozzarella",["mushrooms", "olives", "onions"]);
console.log(fourthPizza);




