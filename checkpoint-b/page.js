
import { items } from "./items.js";

// Draws the products inside the HTML list.
export function renderItems(list) {
  const container = document.querySelector("#list");

  // Remove the old products first.
  container.textContent = "";

  // Create one list item for every product.
  for (const item of list) {
    const li = document.createElement("li");

    li.classList.add("goods-item");
    li.textContent = item.name;

    container.append(li);
  }
}

// Returns only products whose category is "bags".
export function matching() {
  return items.filter((item) => item.category === "bags");
}

// Sets up the page and the filter button.
export function start() {
  // Display all products when the page opens.
  renderItems(items);

  // Display only bags when the button is clicked.
  const button = document.querySelector("#filter-button");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}


