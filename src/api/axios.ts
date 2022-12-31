import axios from "axios";
import { RequestBody } from "../types/RequestBody";

export default function axiosPostRequest(requestBody: RequestBody) {
  let headersList = {
    "Content-Type": "application/json",
  };

  let response = axios
    .post("http://localhost:8080/api/compile", JSON.stringify(requestBody), {
      headers: headersList,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });

  return response;
}
