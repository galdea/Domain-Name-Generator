/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let address = [".com", ".cl", ".io"];

let excuse = [];

for (const value of pronoun) {
  let randomValue1 = adj[Math.floor(Math.random() * adj.length)];
  for (let randomValue1 of adj) {
    let randomValue2 = noun[Math.floor(Math.random() * noun.length)];
    for (let randomValue2 of noun) {
      let randomValue3 = address[Math.floor(Math.random() * address.length)];
      let frase = "www." + value + randomValue1 + randomValue2 + randomValue3;
      console.log(frase);
    }
  }
}
