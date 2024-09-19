import { renderCategories } from "./src/services/categories";
import "./style.css";
import { handleGetProductToStore } from "./src/views/store";
import { openModal } from "./src/views/modal";
import { handleSearchByName } from "./src/services/searchBar";

// APLICACION

export let categoriaActiva = null;

export const setCategoriaActiva = (categoriaIn) => {
  categoriaActiva = categoriaIn;
};

export let productoActivo = null;

export const setProductoActivo = (productoIn) => {
  productoActivo = productoIn;
};

handleGetProductToStore();

renderCategories();

//HEADER
const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", () => {
  openModal();
});

// ButtonSearch
const buttonSearch = document.getElementById("buttonSearch");

buttonSearch.addEventListener("click", () => {
  handleSearchByName();
});
