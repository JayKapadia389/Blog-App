import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Explore from "./Explore.jsx";
import Article from "./Article.jsx";
import AuthorProfile from "./AuthorProfile.jsx";
import PostArticle from "./PostArticle.jsx";
import UserProfile from "./Userprofile.jsx";
import EditProfile from "./Editprofile.jsx";
import UserState from '../contexts/userState';
import ExploreHeader from './ExploreHeader.jsx';

function App() {

    return(
    <UserState>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/signup" element={<Signup/>}></Route>
                <Route exact path="/explore" element={<Explore/>}></Route>
                <Route exact path="/article" element={<Article/>}></Route>
                <Route exact path="/postarticle" element={<PostArticle/>}></Route>
                <Route exact path="/userprofile" element={<UserProfile/>}></Route>
                <Route exact path="/editprofile" element={<EditProfile/>}></Route>
                <Route exact path="/:slug" element={<CustomRoute/>}></Route>
                <Route exact path="/authorprofile" element={<AuthorProfile/>}></Route>
                <Route exact path="/exploreheader" element={<ExploreHeader/>}></Route>
            </Routes>
        </Router>
    </UserState>
    )
}

function CustomRoute(){

    let location = useLocation();
    console.log(location)

    return(<div>
        custom route
    </div>)
}

export default App