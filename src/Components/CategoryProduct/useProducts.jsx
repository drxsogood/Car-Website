import { useState, useEffect } from "react";
import axios from "axios";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/categories");
      const { data } = response.data;
      console.log("Categories data:", data);
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError("Error fetching categories");
    }
  };

 const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:1337/api/products?populate=*");
    const { data } = response.data;
    console.log("Products data:", data);
    setProducts(data);
  } catch (error) {
    console.error("Error fetching products:", error);
    setError("Error fetching products");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    console.log("Fetching products and categories...");
    fetchProducts();
    fetchCategories();
  }, []);

  return { categories, products, loading, error };
};
