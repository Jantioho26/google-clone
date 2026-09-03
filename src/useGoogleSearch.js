import { useState, useEffect } from "react";

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!term) return;

    const search = async () => {
      try {
        const response = await fetch(
  `/api/search?q=${encodeURIComponent(term)}`
);

        if (!response.ok) {
          throw new Error("Search request failed");
        }

        const results = await response.json();

        setData(results);
      } catch (error) {
        console.error("Search error:", error);
      }
    };

    search();
  }, [term]);

  return { data };
};

export default useGoogleSearch;