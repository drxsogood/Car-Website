import { useState, useEffect } from "react";
import axios from "axios";

export const useSales = () => {
  const [salesRecords, setSalesRecords] = useState([]);
  const [salesCategories, setSalesCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSalesCategories = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/salescategories");
      const { data } = response.data;
      console.log("salescategories data:", data);
      setSalesCategories(data);
    } catch (error) {
      console.error("Error fetching salescategories:", error);
      setError("Error fetching salescategories");
    }
  };

  const fetchSalesRecords = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/salesrecords?populate=*");
      const responseData = response.data;
      console.log("salesrecords response:", responseData); // Log the entire response
      const { data } = responseData;
      console.log("salesrecords data:", data);
      setSalesRecords(data);
    } catch (error) {
      console.error("Error fetching salesrecords:", error);
      setError("Error fetching salesrecords");
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    console.log("Fetching Sales records and Sales categories...");
    fetchSalesRecords();
    fetchSalesCategories();
  }, []);

  return { salesRecords, salesCategories, loading, error };
};

export default useSales;
