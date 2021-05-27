 import './App.css';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Profile from './components/profile'
// import Home from './components/profile'
// import Resume from './components/Resume'
// import Project from './components/Project'
// import Contact from './components/Contact'
function App() {
  return (
      <Profile
      Title="Hello,"
      subTitle="Full stack JS student"
      subTitle2="a bit about me:"
      bio= ""
      Name = "Cerine Kibboua "
      // Home = "Home"
      // Resume= "Resume"
      // Project = "Project"
      // Contact = "Contact"
      work = "My Work"
      resume = "My resume"
      skills = "My skills"
      Call = "0542889005"
      Email = "cerinekibboua@65.com"
      FollowMe = "sum"

    >
    </Profile>     

    // <div>
    //  <Router>
    //     <Switch>
    //     <Switch>
    //       <Route path="/Home" component={Home}></Route>
    //       <Route path="/Resume" component={Resume}> </Route>
    //       <Route path="/Project" component={Project}> </Route>
    //       <Route path="/Contact" component={Contact}></Route>
    //     </Switch>
    //     </Switch>
    //   </Router>
    // </div>
  );
}
export default App; 
   
