import { useState, useEffect } from "react";
import { getCards } from "../services/omise.services";

const useGetCard = (cust_id: string | undefined) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  const fetchData = async () => {
    if (cust_id === undefined) return;
    setIsLoading(true);

    try {
      const response = await getCards(cust_id);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(true);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [cust_id]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useGetCard;