import * as React from "react";

export class CodeEditor extends React.Component {
    render() {
        return (
            <div className="code-editor">
                <select name="language-options" id="language-options">
                    <option value="python">Python</option>
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                    <option value="java">Java</option>
                </select>
                <input type="text" name="code-editor-pane" id="code-id" />
            </div>
        );
    }
}
