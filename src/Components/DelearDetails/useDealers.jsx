import { useState, useEffect } from "react";
import axios from "axios";

export const useDealers = () => {
  const [dealers, setDealers] = useState([]);
  const [groupdealers, setGroupdealers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGroupdealers = async () => {
    try {
      const response = await axios.get("http://localhost:1337/api/groupdealers");
      const { data } = response.data;
      console.log("Groupdealers data:", data);
      setGroupdealers(data);
    } catch (error) {
      console.error("Error fetching Groupdealers:", error);
      setError("Error fetching Groupdealers");
    }
  };

 const fetchDealers = async () => {
  try {
    const response = await axios.get("http://localhost:1337/api/dealers?populate=*");
    const { data } = response.data;
    console.log("Dealers data:", data);
    setDealers(data);
  } catch (error) {
    console.error("Error fetching dealers:", error);
    setError("Error fetching dealers");
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    console.log("Fetching groupdealers and dealers...");
    fetchDealers();
    fetchGroupdealers();
  }, []);

  return { groupdealers, dealers, loading, error };
};
