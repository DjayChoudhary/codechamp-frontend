// import CodeEditorComponent from "./CodeEditorComponent";
import CodeProblem from "./CodeProblem";
import axiosPostRequest from "../api/axios";
import { RequestBody } from "../types/RequestBody";
import Editor from "./Editor";
import Header from "./Header";

export default function App() {
  let response;
  function handleSubmit(lang: string, code: string) {
    let requestBody: RequestBody = {
      id: crypto.randomUUID(),
      languageType: lang.toUpperCase(),
      codeBody: code,
    };
    console.log(requestBody);

    response = axiosPostRequest(requestBody);

    console.log(response);
  }
  return (
    <main className="container bg-gray-400">
      <Header />
      <section className="app-container">
        <article className="problem-container">
          <CodeProblem />
        </article>
        <section className="editor-container">
          {/* <Editor handleSubmit={handleSubmit} response={response} /> */}
          {/* <CodeEditorComponent handleSubmit={handleSubmit} /> */}
        </section>
      </section>
    </main>
  );
}
