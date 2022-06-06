import { useEffect, useState } from "react";
import { useGetToken } from "./useGetToken";

export const useGetCategories = () => {
  const [categories, setCategories] = useState(null);
  let token = useGetToken();
  useEffect(() => {
    if (token !== null) {
      fetch("https://api.spotify.com/v1/browse/categories?country=MX", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        response.json().then((data) => {
          let myAlbum = data.categories.items;
          myAlbum = myAlbum.map((album) => {
            let { name, icons } = album;
            return { name, icons };
          });
          setCategories(myAlbum);
        });
      });
    }
  }, [token]);

  return categories;
};
