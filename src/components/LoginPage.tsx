import { useState } from "react"
import MainPage from "./MainPage";

function LoginPage(){
    const [login, setLogin] = useState(false);
    console.log("Response of my login state", login);
    return (
        <div>
            <div>
            {
               login ? "" : "Please Login before continuing"
            }

            </div>
            <div>
            {
                login ?  <MainPage /> : <button onClick={() => setLogin(true)}>Click to login </button>
            }
            </div>
           
           
           
        </div>
    )
}

export default LoginPage