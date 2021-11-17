const { forEach, max } = require("lodash");
const prodactListKey = 'ProductList';
const prodactListKeyInBasket = 'ProductListInBasket';
const addtoStorage = () => {
    let name = document.getElementById('name');
    let description = document.getElementById('description');
    let category = document.getElementById('category');
    let img = document.getElementById('img');
    let price = document.getElementById('price');
    let id = GetNextIdValueFromLocalStorage();
    let data = GetDataFromLocalStorage();
    data.push({ id: id, name: name.value, category: category.value, description: description.value, price: price.value, img: img.value });
    window.localStorage.setItem(prodactListKey, JSON.stringify(data));
}

const GetNextIdValueFromSessionStorage = () => {
    let data = [];
    data = GetDataFromSessionStorage();
    let dataidList = data.map(item => item.id);
    let maxid = Math.max(...dataidList, 0);
    return maxid + 1;
}
window.addtoStorage = addtoStorage;

const GetDataFromSessionStorage = () => {
    let data = [];
    data = JSON.parse(sessionStorage.getItem(prodactListKeyInBasket));
    return data || [];
}
const GetDataFromLocalStorage = () => {
    let data = [];
    data = JSON.parse(localStorage.getItem(prodactListKey));
    return data || [];
}
const GetNextIdValueFromLocalStorage = () => {
    let data = [];
    data = GetDataFromLocalStorage();
    let dataidList = data.map(item => item.id);
    let maxid = Math.max(...dataidList, 0);
    return maxid + 1;
}

function AddToBasket(idfrombutton) {
    let id = GetNextIdValueFromSessionStorage();
    let dataItemFromStorage = GetItemFromStorage(idfrombutton);
    let getDataFromSessionStorage = GetDataFromSessionStorage();
    getDataFromSessionStorage.push({
        id: dataItemFromStorage[0].id,
        name: dataItemFromStorage[0].name,
        category: dataItemFromStorage[0].category,
        description: dataItemFromStorage[0].description,
        price: dataItemFromStorage[0].price,
        img: dataItemFromStorage[0].img
    });
    window.sessionStorage.setItem(prodactListKeyInBasket, JSON.stringify(getDataFromSessionStorage));
}
window.AddToBasket = addtoStorage;

function getDataFromStorage() {
    let data = [];
    data = GetDataFromLocalStorage();
    const mydiv = document.getElementById('container')
    let datafromSession = GetDataFromSessionStorage();
    data.forEach(item => {

        let newDivItem = document.createElement("div");
        newDivItem.classList.add('item');

        let nameDiv = document.createElement("div");
        nameDiv.classList.add('item--name');
        nameDiv.innerHTML = `${item.name}`;
        newDivItem.appendChild(nameDiv);

        let imgDiv = document.createElement("div");
        imgDiv.classList.add('item--img');
        let imgName = (item.img).substr(item.img.length - 12);
        let image = document.createElement("img")
        image.src = imgName;
        image.classList.add('item--img');
        imgDiv.appendChild(image);
        newDivItem.appendChild(imgDiv);

        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add('item--description');
        descriptionDiv.innerHTML = `${item.description}`;
        newDivItem.appendChild(descriptionDiv);

        let priceDiv = document.createElement("div");
        priceDiv.classList.add('item--price');
        priceDiv.innerHTML = `${item.price} $`;
        newDivItem.appendChild(priceDiv);
        let isInBasket = false;
        datafromSession.forEach(element => {
            if (element.id == item.id) {
                isInBasket = true;
            }
        });
        let buttonDiv = document.createElement("div");
        buttonDiv.classList.add('item--button-div');
        let button = document.createElement("button");
        button.classList.add('item--button');

        if (isInBasket) {
            button.innerText = 'In Basket';
        } else {
            button.addEventListener("click", () => AddToBasket(`${item.id}`));
            button.innerText = 'Add To Basket';
        }
        buttonDiv.appendChild(button);
        newDivItem.appendChild(buttonDiv);
        mydiv.appendChild(newDivItem);
    })
}
window.getDataFromStorage = getDataFromStorage;

function GetItemFromStorage(iditem) {
    let result = [];
    let data = [];
    data = JSON.parse(localStorage.getItem(prodactListKey));

    data.forEach(item => {
        if (item.id == iditem) {

            result.push(({ id: item.id, name: item.name, category: item.category, description: item.description, price: item.price, img: item.img }))
        }

    });

    return result;
}

function GetDataFromSession() {
    let data = [];
    data = GetDataFromSessionStorage();
    const mydiv = document.getElementById('container')
    data.forEach(item => {

        let newDivItem = document.createElement("div");
        newDivItem.classList.add('item');

        let nameDiv = document.createElement("div");
        nameDiv.classList.add('item--name');
        nameDiv.innerHTML = `${item.name}`;
        newDivItem.appendChild(nameDiv);

        let imgDiv = document.createElement("div");
        imgDiv.classList.add('item--img');
        let imgName = (item.img).substr(item.img.length - 12);
        let image = document.createElement("img")
        image.src = imgName;
        image.classList.add('item--img');
        imgDiv.appendChild(image);
        newDivItem.appendChild(imgDiv);

        let descriptionDiv = document.createElement("div");
        descriptionDiv.classList.add('item--description');
        descriptionDiv.innerHTML = `${item.description}`;
        newDivItem.appendChild(descriptionDiv);

        let priceDiv = document.createElement("div");
        priceDiv.classList.add('item--price');
        priceDiv.innerHTML = `${item.price} $`;
        newDivItem.appendChild(priceDiv);

        mydiv.appendChild(newDivItem);
    })
}
window.GetDataFromSession = GetDataFromSession;
