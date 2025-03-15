import React, { useEffect } from "react";
import { setCookie } from "./utils/helpers/cookie";

export default function App() {
  useEffect(() => {
    const createCookie = async () => {
      await setCookie("jwta", {
        name: "fa",
        access_token: "1234324432",
        refresh_token: "fdsfdsdsfds",
      });
    };
    createCookie();
  }, []);

  return <div>Appdsfdsffds</div>;
}
