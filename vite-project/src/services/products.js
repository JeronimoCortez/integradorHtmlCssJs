/* PRODUCTS */

import Swal from "sweetalert2";
import {
  handleGetProductToLocalStorage,
  setInLocalStorage,
} from "../persistence/localStorage";
import { handleGetProductToStore, handleRenderList } from "../views/store";
import { openModal, closeModal } from "../views/modal";
import { productoActivo } from "../../main";

// guardar o modificar elementos

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () => {
  handleSaveOrModifyElement();
});

const handleSaveOrModifyElement = () => {
  const nombre = document.getElementById("nombre").value;
  const imagen = document.getElementById("img").value;
  const precio = document.getElementById("precio").value;
  const categoria = document.getElementById("categoria").value;
  let object = null;

  if (productoActivo) {
    object = {
      ...productoActivo,
      nombre,
      precio,
      imagen,
      categoria,
    };
  } else {
    object = {
      id: new Date().toISOString(),
      nombre,
      precio,
      imagen,
      categoria,
    };
  }

  Swal.fire({
    title: "Correcto!",
    text: "Producto guardado correctamente",
    icon: "success",
  });

  setInLocalStorage(object);
  handleGetProductToStore();
  closeModal();
};

// Eliminar producto

export const handleDeleteProduct = () => {
  Swal.fire({
    title: "¿Desea eliminar el elemento?",
    text: "Si lo eliminas sera permanentemente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      const products = handleGetProductToLocalStorage();
      const result = products.filter((el) => el.id !== productoActivo.id);
      localStorage.setItem("products", JSON.stringify(result));
      const newProducts = handleGetProductToLocalStorage();
      handleRenderList(newProducts);
      closeModal();
    } else {
      closeModal();
    }
  });
};
