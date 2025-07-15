import { useEffect, useState } from "react";

export const useFetch = (params) => {
    const [data, setData] = useState([]);
    const url = `http://localhost:8000/${params}`

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }
        fetchProducts();
    }, [url]);
  return { data }
}
