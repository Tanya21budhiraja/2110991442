import axios from "axios";

export const API_ENDPOINTS = {
  AMZ: "https://api.company1.com",
  FLP: "https://api.company2.com",
  SNP: "https://api.company2.com",
  MYN: "https://api.company2.com",
  AZO: "https://api.company2.com",
};

export async function fetchProducts(company, category) {
  try {
    const response = await axios.get(
      `${API_ENDPOINTS[company]}/products?category=${category}`
    );

    return response.data;
  } catch (error) {
    console.error(`Error fetching products from ${company}: ${error}`);
    return [];
  }
}

export function generateProductId(company, product) {
  return `${company}-${product.id}`;
}
