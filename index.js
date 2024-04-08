const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

//Task 1 and Task 2
function clickOnBurger () {
    if (menu.classList.contains('menuClosed')){
        menu.classList.remove('menuClosed')
    return 
    }
     menu.classList.add('menuClosed')
} 
burger.addEventListener('click', clickOnBurger);


menu.addEventListener('click', function () {
    menu.style.backgroundColor = 'grey';
    menu.style.color = 'orange';
})


//Task 3
let numbers = [5, 2, 15, 10];
let numbersCopy = [...numbers];
numbers.push(55);
console.log(numbers);
console.log(numbersCopy);


//Task 4
let result = [];
function sum (...rest){
     result = rest.reduce((init, value) => init + value, 0);
}
sum(10, 20, 10, 50, 10, 50);
sum(10, 50, 4);
console.log(result);





//Задание 1 от Перизат
const part1 = {
    id: 100,
    name: 'Howard Moon'
}

const part2 = {
    id: 100,
    password: 'Password!'
}

let merge = {...part1, ...part2};
console.log(merge);



//Задание 2 от Перизат
const user = {
    password: 'Password!',
    name: 'Naboo', 
    id: 300
}

const deletePassword =  function ({password, ...rest}) {
   return rest; 
}
deletePassword(user);

const deleted = (deletePassword(user));

const password = 'Password!'
const addPassword = {
    ...deleted, 
    ...({password})
}

console.log(addPassword);

