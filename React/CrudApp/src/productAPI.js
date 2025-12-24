let DB = [
  { id: "p1", name: "Laptop", category: "Electronics", price: 1200, description: "Fast laptop", image: "" },
  { id: "p2", name: "Chair", category: "Home", price: 80, description: "Comfortable chair", image: "" },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function apiFetchProducts() {
  await delay(200);
  return [...DB];
}

export async function apiAddProduct(product) {
  await delay(200);
  DB = [product, ...DB];
  return product;
}

export async function apiEditProduct(updated) {
  await delay(200);
  DB = DB.map((p) => (p.id === updated.id ? updated : p));
  return updated;
}

export async function apiDeleteProduct(id) {
  await delay(200);
  DB = DB.filter((p) => p.id !== id);
  return id;
}
