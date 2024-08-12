const refs = {
  ul: document.getElementById("categories"),
  li: document.querySelectorAll(".item"),
};

console.log(`Number of categories: ${refs.ul.children.length}`);

refs.li.forEach((child) => {
  console.log(`Category: ${child.firstElementChild.textContent}`);
  console.log(`Elements: ${child.lastElementChild.children.length}`);
});
