let URL = "http://localhost:3003/";

export async function GetAllProducts() {
  let payload = [];
  await fetch(`${URL}products`)
    .then((res) => {
      return res.json();
    })
    .then((data) => (payload = data));
  return {
    type: "PRODUCTS",
    payload,
  };
}

export async function GetProductById(id) {
  let payload;
  await fetch(`${URL}products/${id}`)
    .then((res) => res.json())
    .then((data) => (payload = data));
  return {
    type: "PRODUCTBYID",
    payload,
  };
}

export async function CreateProduct(product) {
  let payload;
  await fetch(`${URL}products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then((data) => {
      payload = data;
    })
    .catch((err) => console.log(err));

  return {
    type: "CREATEPRODUCT",
    payload,
  };
}
