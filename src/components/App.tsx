// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { CodeEditor } from "./CodeEditor";
import { CodeProblem } from "./CodeProblem";

export class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header>CodeChamp</header>
                <div className="container">
                    <div className="left-pane">
                        <CodeProblem />
                    </div>
                    <div className="right-pane">
                        <CodeEditor />
                    </div>
                </div>
            </div>
        );
    }
}

// export default App;
