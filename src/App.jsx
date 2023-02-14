import "./App.css";
import Navbar from "./component/Navbar";
import Item from "./component/Item";
import { useState } from "react";
import Checkbox from "./component/Checkbox";
function App(){
    const [checker, setChecker] = useState(true)

    return(
        <div className="wrap">
            <Checkbox checker={checker} setChecker={setChecker} />
        </div>
    )
}
export default App;