import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

function App() {

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/Signup" element={<Signup/>}></Route>
            </Routes>
        </Router>
    )
}

export default App