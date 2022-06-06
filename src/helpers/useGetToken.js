import { useEffect, useState } from "react";
import api from "../config";
export const useGetToken = () => {
  const [token, setToken] = useState(null);
  const { clientId, clientSecret, authUrl } = api.api;
  useEffect(() => {
    fetch(authUrl, {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        clientId +
        "&client_secret=" +
        clientSecret,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((response) => {
      response.json().then((data) => {
        setToken(data.access_token);
      });
    });
  }, [clientId, clientSecret, setToken, authUrl]);

  return token;
};
