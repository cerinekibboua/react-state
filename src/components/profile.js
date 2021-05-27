import React, { components } from 'react'; 
import pic from  './pfp.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 
} from "react-router-dom";
// import Icons from 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
const ProfileContent =({Pic,Title,work,Name,NavLink,bio,resume,skills,subTitle,subTitle2,footer,Call,Email,FollowMe}) =>{
  const styleProfile = {
    fontFamily:'cursive' , backgroundColor:'#DBDBDB'  , marginBottom:'0px'
  }
  const styleNav = {
    display:'flex' , color:'#525151' , marginTop:'0px' , marginLeft:'400px'
  }
  const Nav = {
    marginTop:'90px' , marginLeft:'100px' , justifyContent:'spaceBetween' , display:'flex'
  }
  const styleNav1 = {
    marginRight:'50px' , fontSize:'20px' ,  color:'#6F6F6F'
  }

  const styleMiddle = {
    marginLeft:'400px' , marginTop:'0px' ,  color:'#525151' , display:'flex'

  }
  const title = {
    fontSize:'50px' , marginLeft: '50px'
  }
  const works = {
    display:'flex' , 
  }
  const styleWork= {
    marginLeft:'50px' , backgroundColor:'cadetblue' , color:'white' , padding:'10px' ,  borderRadius:'50%', paddingTop:'40px' , paddingBottom:'40px' ,paddingRight:'20px' , paddingLeft:'20px' 

  }
  const Bio = {
    marginLeft: '50px' , marginRight:'250px'
  }
  const subtitle = {
    color:'#6F6F6F' , fontSize:'20px' ,marginLeft: '5px'
  }
  const subtitle2 = {
    color:'#6F6F6F' , fontSize:'20px' ,marginLeft: '5px'
  }
const Footer ={
  backgroundColor:'#714921' , color:'white' , display:'flex' , marginBottom:'0px' , paddingBottom:'11px'
}
const media ={
  marginLeft: '200px' , marginRight: '200px' , marginTop:'50px'
}
const image ={
  marginLeft:'50px' , marginTop:'50px'
}
const hello={
  marginLeft:'30px'
}
  return(
    <div style={styleProfile}>
      <div style={styleNav}>
         <h1>{Name}
         <p style={subtitle}>{subTitle}</p>

         </h1>
        
      <div>
        {/* <nav>
          <Router>
         <ul style={Nav}>
            <li>
              <NavLink style={styleNav1} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink  style={styleNav1} to="/resume">Resume</NavLink>
            </li>
            <li>
              <NavLink  style={styleNav1} to="/project">Project</NavLink>
            </li>
            <li>
              <NavLink  style={styleNav1} to="/contact">Contact</NavLink>
            </li>
          </ul>
          </Router>
          </nav>   */}
          
      </div>
   

      </div>
      <div style={styleMiddle}>
       <div>
          <img style={image} src={pic} alt='image'>{Pic}</img>
       </div>
        <div style={hello}>
            <h1 style={title}>{Title}
            <p style={subtitle2}>{subTitle2}</p>
            </h1>
            <div style = {works}>
           <div style={styleWork}>{work}</div>
           <div style={styleWork}>{resume}</div>         
           <div style={styleWork}>{skills}</div> 
            </div>
            <p style={Bio}>{bio}
            I am here to show you why react js is so powerful 
            to build you're web applications. and why you should become a developer!
            </p>

            
        </div>
      </div>
      <div style={Footer}>
        {footer}
           <div style={media}>
           <h3>Call</h3>
             {Call}
           </div>
           <div style={media}>
           <h3>Email</h3>
           {Email}
           </div>         
           <div style={media}>
           <h3>Follow Me</h3>
           {FollowMe}
           </div> 
      </div>
    </div>
  )
}
export default ProfileContent;
// Home,Resume,Project,Contact, 