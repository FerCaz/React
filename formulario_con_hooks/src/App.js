import React, { useState } from "react";
import "./App.css";
import UserForm from "C:/Users/ferna/OneDrive/Documentos/Coding dojo/formulario_con_hooks/src/Userform.js";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    return (
        <div className="App bg-light">
            <div className="row justify-content-center">
                <div className="col-4">
                    <UserForm inputs={state} setInputs={setState} />
                </div>
            </div>
        </div>
    );
}

export default App;