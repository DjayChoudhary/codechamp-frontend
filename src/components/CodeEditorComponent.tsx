import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";

export default function CodeEditorComponent({ handleSubmit }: any) {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  const langs = ["PYTHON", "CPP", "C", "JAVA", "JAVASCRIPT"];

  const [language, setLanguage] = useState(langs[0]);
  return (
    <div className="code-editor">
      <select
        name="language-options"
        id="language-options"
        onChange={(e) => setLanguage(e.target.value)}
      >
        {langs.map((lang) => {
          return (
            <option key={lang} value={lang}>
              {lang}
            </option>
          );
        })}
      </select>
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn: { target: { value: React.SetStateAction<string> } }) =>
          setCode(evn.target.value)
        }
        padding={15}
        style={{
          fontSize: 12,
          backgroundColor: "#f5f5f5",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
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
    </div>
  );
}

/* <select name="language-options" id="language-options">
        <option value="python">Python</option>
        <option value="cpp">C++</option>
        <option value="c">C</option>
        <option value="java">Java</option>
      </select>
      <textarea
        placeholder="Please Enter your Code here"
        name="code-editor-pane"
        id="code-id"
        cols={120}
        rows={20}
      />
 */
