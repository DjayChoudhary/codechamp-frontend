import CodeMirror from "@uiw/react-codemirror";
import "codemirror/addon/display/autorefresh";
import "codemirror/addon/comment/comment";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/theme/monokai.css";
import { useState } from "react";

export default function Editor({ handleSubmit, response }: any) {
  const [code, setCode] = useState(`print('Hello World!')`);

  const langs = ["python", "cpp", "c", "java", "js"];

  const [language, setLanguage] = useState(langs[0]);

  const defaultEditorOptions = {
    theme: "monokai",
    keyMap: "sublime",
    mode: language,
  };
  const [editorOptions, setEditorOptions] = useState(defaultEditorOptions);
  function handleLanguageChange(e: any) {
    setLanguage(e.target.value);
    setEditorOptions({
      theme: "monokai",
      keyMap: "sublime",
      mode: e.target.value,
    });
  }
  function handleCodeChange(params: any) {
    console.log(params.length);
    console.log(params.doc.getValue());
    setCode(params.doc.getValue());
  }
  return (
    <>
      {/* <div className="editor-top"></div> */}
      <select
        name="language-options"
        id="language-options"
        onChange={handleLanguageChange}
      >
        {langs.map((lang) => {
          return (
            <option key={lang} value={lang}>
              {lang.toUpperCase()}
            </option>
          );
        })}
      </select>
      <CodeMirror
        value={code}
        options={editorOptions}
        onChange={handleCodeChange}
      />
      <button
        className="execute"
        type="submit"
        onClick={() => {
          handleSubmit(language, code);
        }}
      >
        Execute
      </button>
      <code color="red">{JSON.stringify(response)}</code>
      <div className="result-section">
        <div>
          <label htmlFor="input">Input:</label>
          <br />
          <textarea
            className="input-box"
            name="input"
            id="input"
            cols={30}
            rows={10}
            placeholder="please enter your input values here..."
          ></textarea>
        </div>
        <div>
          <label htmlFor="output">Output:</label>
          <br />
          <textarea
            className="output-box"
            name="output"
            id="output"
            cols={30}
            rows={10}
            disabled
          ></textarea>
        </div>
        <div>
          <label htmlFor="expected-output">Expected Output:</label>
          <br />
          <textarea
            className="output-box"
            name="expected-output"
            id="expected-output"
            cols={30}
            rows={10}
            disabled
          ></textarea>
        </div>
      </div>
    </>
  );
}
