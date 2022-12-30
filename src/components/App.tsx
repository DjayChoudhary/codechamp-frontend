import axios from "axios";
import { useState } from "react";
import "./css/App.css";
import CodeEditorComponent from "./CodeEditorComponent";
import CodeProblem from "./CodeProblem";

type RequestBody = {
  id: string;
  languageType: string;
  codeBody: string;
};
export default function App() {
  // const [requestBody, setRequestBody] = useState<RequestBody>();
  async function handleSubmit(lang: string, code: string) {
    console.log(lang);
    let requestBody: RequestBody = {
      id: crypto.randomUUID(),
      languageType: lang,
      codeBody: code,
    };
    console.log(requestBody);

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

    console.log(response);
  }
  return (
    <div className="App">
      <header>CodeChamp</header>
      <div className="container">
        <div className="left-pane">
          <CodeProblem />
        </div>
        <div className="right-pane">
          <CodeEditorComponent handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
