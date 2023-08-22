import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Explore from "./Explore.jsx";

function App() {

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/signup" element={<Signup/>}></Route>
                <Route exact path="/explore" element={<Explore/>}></Route>
            </Routes>
        </Router>
    )
}

export default App