import "./css/App.css";
import CodeEditorComponent from "./CodeEditorComponent";
import CodeProblem from "./CodeProblem";
import axiosPostRequest from "../api/axios";
import { RequestBody } from "../types/RequestBody";

export default function App() {
  function handleSubmit(lang: string, code: string) {
    let requestBody: RequestBody = {
      id: crypto.randomUUID(),
      languageType: lang,
      codeBody: code,
    };
    console.log(requestBody);

    let response = axiosPostRequest(requestBody);

    console.log(response);
  }
  return (
    <main className="container">
      <header>
        <div className="header">CodeChamp</div>
      </header>
      <section className="app-container">
        <article className="problem-container">
          <CodeProblem />
        </article>
        <section className="editor-container">
          <CodeEditorComponent handleSubmit={handleSubmit} />
        </section>
      </section>
    </main>
  );
}
