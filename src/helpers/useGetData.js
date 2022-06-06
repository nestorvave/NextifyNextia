import { useEffect, useState } from "react";
import { useGetToken } from "./useGetToken";

export const useGetData = () => {
  const [newReleases, setNewReleases] = useState(null);
  let token = useGetToken();
  useEffect(() => {
    if (token !== null) {
      fetch("	https://api.spotify.com/v1/browse/new-releases?country=MX", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        response.json().then((data) => {
          let myAlbum = data.albums.items;
          myAlbum = myAlbum.map((album) => {
            let { name, images } = album;
            return { name, images };
          });
          setNewReleases(myAlbum);
        });
      });
    }
  }, [token]);

  return newReleases;
};
