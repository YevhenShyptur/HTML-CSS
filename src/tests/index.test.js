/**
 * @jest-environment jsdom
 */

"use strict";

const { jsxEmptyExpression } = require("@babel/types");
const { ExpectationFailed } = require("http-errors");

const { addtoStorage, GetNextIdValueFromLocalStorage, GetDataFromLocalStorage, prodactListKey } = require("../index.ts");
//var Methods = require("../index.js");
//jest.spyOn(Methods, 'GetNextIdValueFromLocalStorage').mockImplementation(_=>1);
//jest.spyOn(Methods, 'GetDataFromLocalStorage').mockImplementation(_=>"");

//jest.mock('../index');

describe("test1", () => {
    it("should insert to localstorage", () => {
        let length = 1;

        document.body.innerHTML = `<div class="container">
        <form action="" class="formadd">
        <fieldset>   
        <legend> Add new item </legend>
       <p>Name: <input type="text" id="name" value="test1"></p>
       <p>Image <input type="file" id="img"></p>
       <p>Description: <input type="text" size="50" maxlength="500" id="description"></p>
       <p>Price: <input type="text" id="price"></p>
       <label for="cars">Choose a category:</label>
       <select name="category" id="category">
        <option value="Watches">Watches</option>
        <option value="Mobile phones">Mobile phones</option>
        <option value="Audio">Audio</option>
        <option value="Game gadgets">Game gadgets</option>
      </select>
       <button type="button" value=" ADD new item" class="button" id="buttonAdd" onclick="addtoStorage()"></button>
         </fieldset>
          </form></div>`;
        addtoStorage();
        console.log(localStorage.getItem(prodactListKey))
        let expectedResult = [{ "id": 1, "name": "test1", "category": "Watches", "description": "", "price": "", "img": "" }];
        let actualData = localStorage.getItem(prodactListKey);
        expect(actualData).toBe(JSON.stringify(expectedResult));
    })
})

