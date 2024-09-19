//===========LOCALSTORAGE==========
export const handleGetProductToLocalStorage = () => {
  const product = JSON.parse(localStorage.getItem("products"));
  if (product) {
    return product;
  } else {
    return [];
  }
};

// guardar en localstorage
export const setInLocalStorage = (productIn) => {
  // Traemos los elementos
  let productInLocal = handleGetProductToLocalStorage();

  const existingIndex = productInLocal.findIndex(
    (producto) => producto.id === productIn.id
  );

  if (existingIndex !== -1) {
    productInLocal[existingIndex] = productIn;
  } else {
    productInLocal.push(productIn);
  }

  localStorage.setItem("products", JSON.stringify(productInLocal));
};
