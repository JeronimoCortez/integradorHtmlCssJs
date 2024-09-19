// Render de la vista categorias

import { categoriaActiva } from "../../main";
import { handleGetProductToLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

const handleFilterByCategory = (categoriaIn) => {
  const products = handleGetProductToLocalStorage();

  switch (categoriaIn) {
    case categoriaActiva:
      handleRenderList(products);
      break;
    case "Todo":
      handleRenderList(products);
      break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":
      const result = products.filter((el) => el.categoria === categoriaIn);
      handleRenderList(result);
      break;
    case "mayorPrecio":
      const resultPrecioMayor = products.sort((a, b) => b.precio - a.precio);
      handleRenderList(resultPrecioMayor);
      break;
    case "menorPrecio":
      const resultPrecioMenor = products.sort((a, b) => a.precio - b.precio);
      handleRenderList(resultPrecioMenor);
      break;
    default:
      break;
  }
};

export const renderCategories = () => {
  const ulList = document.getElementById("listFilter");

  ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor precio</li>
    <li id="menorPrecio">Menor Precio</li>
  `;

  const liElement = ulList.querySelectorAll("li");
  liElement.forEach((el) => {
    el.addEventListener("click", () => {
      handleClick(el);
    });
  });

  const handleClick = (elemento) => {
    handleFilterByCategory(elemento.id);
    liElement.forEach((el) => {
      if (el.classList.contains("liActive")) {
        el.classList.remove("liActive");
      } else {
        if (elemento === el) {
          el.classList.add("liActive");
        }
      }
    });
  };
};
