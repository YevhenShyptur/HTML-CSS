const { forEach, max } = require("lodash");
const prodactListKey = 'ProductListTypeScript';
const prodactListKeyInBasket = 'ProductListInBasket';


const addtoStorage = () => {

    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let description = (<HTMLInputElement>document.getElementById('description')).value;
    let category = (<HTMLInputElement>document.getElementById('category')).value;
    let img = (<HTMLInputElement>document.getElementById('img')).value;
    let price = (<HTMLInputElement>document.getElementById('price')).value;
    let idValue: number = GetNextIdValueFromLocalStorage();
    let data: Item[] = GetDataFromLocalStorage();
    let item1: Item = { id: idValue, name: name, category: category, description: description, price: price, img: img };
    data.push(item1);
    window.localStorage.setItem(prodactListKey, JSON.stringify(data));
}
interface Item {
    id: number;
    name: string;
    category: string;
    description: string;
    price: string;
    img: string;
}
const GetNextIdValueFromLocalStorage = () => {
    let data: Item[] = [];
    data = GetDataFromLocalStorage();
    let maxid: number = 0;
    data.forEach(Item => {
        if (Item.id > maxid) {
            maxid = Item.id
        }
    });

    return maxid + 1;
}

const GetNextIdValueFromSessionStorage = () => {
    let data: Item[] = GetDataFromSessionStorage();

    let maxid: number = 0;
    data.forEach(Item => {
        if (Item.id > maxid) {
            maxid = Item.id
        }
    });
    return maxid + 1;
}

(window as any).addtoStorage = addtoStorage;

const GetDataFromLocalStorage = () => {
    let data: Item[] = [];
    data = JSON.parse(localStorage.getItem(prodactListKey) || '[]');
    return data ;
}
const GetDataFromSessionStorage = () => {
    let data: Item[] = [];
    data = JSON.parse(sessionStorage.getItem(prodactListKeyInBasket) || '[]');
    return data ;
}

function AddToBasket(idfrombutton: number) {

    let dataItemFromStorage: Item = GetItemFromStorage(idfrombutton);
    let getDataFromSessionStorage:Item[] = GetDataFromSessionStorage();
    getDataFromSessionStorage.push({
        id: dataItemFromStorage.id,
        name: dataItemFromStorage.name,
        category: dataItemFromStorage.category,
        description: dataItemFromStorage.description,
        price: dataItemFromStorage.price,
        img: dataItemFromStorage.img
    });
    window.sessionStorage.setItem(prodactListKeyInBasket, JSON.stringify(getDataFromSessionStorage));
    window.location.reload();
}
(window as any).AddToBasket = addtoStorage;

function GetItemFromStorage(iditem: number) {

    let data: Item[] = [];
    data = JSON.parse(localStorage.getItem(prodactListKey) || '{}');
    let result: Item = {
        id: 0,
        name: "",
        category: "",
        description: "",
        price: "",
        img: ""
    };

    data.forEach(item => {
        if (item.id == iditem) {
            result = {
                id: item.id,
                name: item.name,
                category: item.category,
                description: item.description,
                price: item.price,
                img: item.img
            };
        }
    });

    return result;
}
function getDataFromStorage(categoryFromHTML:string) {
    let data:Item[] = [];
    data = GetDataFromLocalStorage();

    const containerDiv:HTMLElement|null = document.getElementById('container');
    let datafromSession:Item[] = GetDataFromSessionStorage();

    let counter:HTMLDivElement = document.createElement("div");
    counter.classList.add('counter')
    counter.innerHTML = `${datafromSession.length}`
    document.body.appendChild(counter)

    data.forEach(item => {
        if (item.category == categoryFromHTML || categoryFromHTML == "All") {


            let newDivItem:HTMLDivElement = document.createElement("div");
            newDivItem.classList.add('item');

            let nameDiv:HTMLDivElement = document.createElement("div");
            nameDiv.classList.add('item--name');
            nameDiv.innerHTML = `${item.name}`;
            newDivItem.appendChild(nameDiv);

            let imgDiv:HTMLDivElement = document.createElement("div");
            imgDiv.classList.add('item--img');
            let imgName:string = (item.img).substr(item.img.length - 12);
            let image: HTMLImageElement = document.createElement("img")
            image.src = imgName;
            image.classList.add('item--img');
            imgDiv.appendChild(image);
            newDivItem.appendChild(imgDiv);

            let descriptionDiv:HTMLDivElement = document.createElement("div");
            descriptionDiv.classList.add('item--description');
            descriptionDiv.innerHTML = `${item.description}`;
            newDivItem.appendChild(descriptionDiv);

            let priceDiv:HTMLDivElement = document.createElement("div");
            priceDiv.classList.add('item--price');
            priceDiv.innerHTML = `${item.price} $`;
            newDivItem.appendChild(priceDiv);
            let isInBasket:boolean = false;
            datafromSession.forEach(element => {
                if (element.id == item.id) {
                    isInBasket = true;
                }
            });
            let buttonDiv:HTMLDivElement = document.createElement("div");
            buttonDiv.classList.add('item--button-div');
            let button:HTMLButtonElement = document.createElement("button");
            button.classList.add('item--button');

            if (isInBasket) {
                button.innerText = 'In Basket';
            } else {
                button.addEventListener("click", () => AddToBasket(item.id));
                button.innerText = 'Add To Basket';
            }
            buttonDiv.appendChild(button);
            newDivItem.appendChild(buttonDiv);
            containerDiv!.appendChild(newDivItem);
        }
    })
}
(window as any).getDataFromStorage = getDataFromStorage;



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

        mydiv!.appendChild(newDivItem);
    })
}
(window as any).GetDataFromSession = GetDataFromSession;
module.exports = { addtoStorage, GetNextIdValueFromLocalStorage, GetDataFromLocalStorage, prodactListKey };
