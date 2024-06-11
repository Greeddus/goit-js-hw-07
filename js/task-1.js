const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${categoryTitle}`);

  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Elements: ${categoryElements}`);
});
