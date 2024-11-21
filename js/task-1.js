"use strict";
// Finding ul#categories
const categoriesList = document.querySelector("#categories");
// Getting all elements li.item
const categoriesItems = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}`);

// Going through each element of the categories
categoriesItems.forEach((category) => {
  // Getting category title
  const title = category.querySelector("h2").textContent;
  // Getting the number of each category items
  const itemCount = category.querySelectorAll(".categorie-list-item").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
