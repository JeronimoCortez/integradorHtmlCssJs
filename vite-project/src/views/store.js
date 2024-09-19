//==========STORE=============

import { setProductoActivo } from "../../main";
import { handleGetProductToLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

export const handleGetProductToStore = () => {
  const products = handleGetProductToLocalStorage();
  handleRenderList(products);
};

export const handleRenderList = (productosIn) => {
  console.log(productosIn);

  const burgers = productosIn.filter((el) => el.categoria === "Hamburguesas");
  const papas = productosIn.filter((el) => el.categoria === "Papas");
  const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas");

  const renderProductGroup = (productos, title) => {
    console.log(productos);

    if (productos.length > 0) {
      const productosHTML = productos.map((producto, index) => {
        return `<div class="containerTargetItem" id="product-${producto.categoria}-${index}"> 
          <div> 
           <img src='${producto.imagen}'/>
          </div>
          <div> 
           <h2>${producto.nombre}</h2>
          </div>
          <div class="targetProps"> 
           <p><b>Precio: </b>${producto.precio}</p>
          </div>
        </div>`;
      });

      return `
      <section class="sectionStore">
        <div class="containerTitleStore">
        <h3>${title}</h3>
        </div>
        <div class="containerProductStore">
          ${productosHTML.join("")}
        </div>
      </section>
      `;
    } else {
      return "";
    }
  };

  const appContainer = document.getElementById("storeContainer");

  appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    
  `;

  const addEvent = (productsIn) => {
    productsIn.forEach((element, index) => {
      const productContainer = document.getElementById(
        `product-${element.categoria}-${index}`
      );

      productContainer.addEventListener("click", () => {
        setProductoActivo(element);
        openModal();
      });
    });
  };

  addEvent(burgers);
  addEvent(papas);
  addEvent(gaseosas);
};
