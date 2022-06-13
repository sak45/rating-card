const button = document.querySelector('button');
const numbers = document.querySelectorAll('li');
const container = document.querySelector('#container');
const container2 = document.querySelector('.container2');
const div = document.querySelector('.p1');

let ratings = 0;

console.log(ratings, 'selected')

for (const number of numbers) {
    number.addEventListener('click', function(e) {
        ratings = e.target.innerText;
        console.log(ratings, 'working')
        
    })
}

button.addEventListener('click', function(event) {
       container.classList.add('hidden');
       container2.classList.add('show');
       console.log('div', div)
       div.innerText = `Thank you for selecting ${ratings} out of 5`
})



const items = [
    {name: 'rice', price: 5},
    {name: 'book', price: 20},
    {name: 'chicken', price: 10},
    {name: 'monitor', price: 100}
]

const totalPrice = items.reduce((acc, cur) => {
    return acc + cur;
},0)

console.log(totalPrice)