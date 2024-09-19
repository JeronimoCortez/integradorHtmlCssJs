import { handleGetProductToLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

export const handleSearchByName = () => {
  const inputHeader = document.getElementById("inputHeader");

  const product = handleGetProductToLocalStorage();

  const result = product.filter((el) =>
    el.nombre.toLowerCase().includes(inputHeader.value.toLowerCase())
  );

  handleRenderList(result);
};
