import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "/src/components/Home.jsx";
import Login from "/src/components/Login.jsx";
import Signup from "/src/components/Signup.jsx";

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