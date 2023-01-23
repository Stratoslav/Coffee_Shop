import React, { useState } from "react";
import axios from "axios";

export const Api = () => {
  let [coffee, setCoffe] = useState([]);

  return axios.get(`https://api.sampleapis.com/coffee/iced`).then((res) => {
    // console.log(res.data);
    setCoffe(res.data);
  });
};
