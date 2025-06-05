
document.body.style.backgroundColor = 'silver'
document.getElementById('title').style.color='#01411C'
document.getElementById('subtitle').style.color='#003153'
document.getElementById('subtitle').style.fontWeight  = 'bolder'
document.getElementById('subtitle').style.fontSize = '3rem'
document.getElementById('title').style.fontSize = '5rem'
document.getElementById('main-section').style.margin = '3% 10%'
document.getElementById('title').style.textAlign = 'center'
document.getElementById('title').style.marginTop = '2rem'
document.getElementById('container').style.backgroundColor = '#317873'
document.getElementById('container').style.color = 'white'
document.getElementById('container').style.margin = '3% 10%'
document.getElementById('container').style.padding = '4% 5%';
document.getElementById('lists').style.display = 'flex';
document.getElementById('lists').style.justifyContent = 'space-between'





const h3Element = document.querySelectorAll('h3');
h3Element.forEach(h3=>{
    h3.style.textTransform = 'uppercase' 
    h3.style.fontWeight = 'bolder'
    h3.style.color = '#01411C'
}
)


const buttonStyle = document.querySelectorAll('button');
buttonStyle.forEach(button =>{
button.style.backgroundColor = '#01411C'
button.style.padding = '6px'
button.style.width  = '6rem'
button.style.border = 'none'
button.style.borderRadius = '20px'
button.style.color = 'white'


})

function appendText() {
        event.preventDefault();
    const fruitInput = document.getElementById('addFruit');
    const fruit = fruitInput.value.trim();
    if(fruit){
        const list = document.createElement('li');
        list.textContent = fruit;
        document.getElementById('fruList').appendChild(list);
        fruitInput.value = '';
    }
};
const fruitInput = document.createElement('li');
const node = document.createTextNode("Pineapple");
fruitInput.appendChild(node);
const addFruit = document.getElementById('fruList');
addFruit.appendChild(fruitInput);



function appendVegie() {
        event.preventDefault();
    const vegieInput = document.getElementById('addVegetable');
    const veggie = vegieInput.value.trim();
    if(veggie){
        const li = document.createElement('li');
        li.textContent = veggie;
        document.getElementById('vegList').appendChild(li);
        vegieInput.value = '';
    }
};

const vegetableList = document.createElement('li');
const addList = document.createTextNode('Cabbage');
vegetableList.appendChild(addList);
const addVegetable = document.getElementById('vegList');
addVegetable.appendChild(vegetableList);


function imgFunction(list, addImage){
const fruitImage = document.createElement("img");
fruitImage.src = addImage;
fruitImage.alt = list.textContent;
fruitImage.style.borderRadius = '40px';
fruitImage.style.width = '5rem'
fruitImage.style.height = '5rem'
fruitImage.style.marginTop = '2rem'
list.insertBefore(fruitImage, list.firstChild);
}
const fruits = fruList.querySelectorAll('li')
const vegetables = vegList.querySelectorAll('li')
imgFunction(fruits[0], 'images/mango.jpg');
imgFunction(fruits[1], 'images/banana.jpg');
imgFunction(fruits[2], 'images/watermelon.jpg');
imgFunction(fruits[3], 'images/pineapple.jpg');


imgFunction(vegetables[0], 'images/onion.jpg');
imgFunction(vegetables[1], 'images/tomato.jpg');
imgFunction(vegetables[2], 'images/kales.jpg');
imgFunction(vegetables[3], 'images/cabbage.jpg');

const liElement = document.querySelectorAll('li');
liElement.forEach(li =>{
    li.style.fontSize = '1.4rem'
})