/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function domainGenerator() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  let p = pronoun[Math.floor(Math.random() * pronoun.length)];
  let a = adj[Math.floor(Math.random() * adj.length)];
  let n = noun[Math.floor(Math.random() * noun.length)];
  let e = ext[Math.floor(Math.random() * ext.length)];

  let name = p + a + n + e;
  return name;
}

window.onload = function() {
  console.log("Hello World");
  let h1 = document.querySelector("#domain");
  h1.innerHTML = domainGenerator();
};
