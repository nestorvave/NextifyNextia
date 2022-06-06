import { useEffect, useState } from "react";
import { useGetToken } from "./useGetToken";

export const useGetPlaylist = () => {
  const [playlist, setPlaylist] = useState(null);
  let token = useGetToken();
  useEffect(() => {
    if (token !== null) {
      fetch("https://api.spotify.com/v1/browse/featured-playlists?country=MX", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }).then((response) => {
        response.json().then((data) => {
          let myAlbum = data.playlists.items;
          myAlbum = myAlbum.map((album) => {
            let { name, images } = album;
            return { name, images };
          });
          setPlaylist(myAlbum);
        });
      });
    }
  }, [token]);

  return playlist;
};
