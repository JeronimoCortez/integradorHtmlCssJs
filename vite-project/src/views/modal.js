import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/products";

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
  handleCancelButton();
});

const handleCancelButton = () => {
  closeModal();
};

export const openModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "flex";

  if (productoActivo) {
    deleteButton.style.display = "block";
  } else {
    deleteButton.style.display = "none";
  }

  if (productoActivo) {
    const nombre = document.getElementById("nombre");
    const imagen = document.getElementById("img");
    const precio = document.getElementById("precio");
    const categoria = document.getElementById("categoria");
    nombre.value = productoActivo.nombre;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    categoria.value = productoActivo.categoria;
  }
};

export const closeModal = () => {
  const modal = document.getElementById("modalPopUp");
  modal.style.display = "none";
  setProductoActivo(null);
  resetModal();
};

const resetModal = () => {
  const nombre = document.getElementById("nombre");
  const imagen = document.getElementById("img");
  const precio = document.getElementById("precio");
  const categoria = document.getElementById("categoria");
  nombre.value = "";
  imagen.value = "";
  precio.value = 0;
  categoria.value = "Seleccione unaa categoria";
};

const deleteButton = document.getElementById("deleteButton");
deleteButton.addEventListener("click", () => {
  buttonDelete();
});

const buttonDelete = () => {
  handleDeleteProduct();
};
