import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const {loginWithRedirect,isAuthenticated,logout,user} = useAuth0();

  return (
    <div style={{display:"flex", justifyContent:"space-evenly", paddingTop:"10px"}}> 
        <div style={{border:"1px solid black", width:"100px", height:"40px", backgroundColor:"blue", color:"white", paddingTop:"10px"}}>Home</div>
        <div style={{border:"1px solid black", width:"100px", height:"40px", backgroundColor:"green", color:"white", paddingTop:"10px"}}>Products</div>
        <div style={{border:"1px solid black", width:"100px", height:"40px", backgroundColor:"teal", color:"white", paddingTop:"10px"}}>Cart Items</div>
        <div style={{border:"1px solid black", width:"100px", height:"40px", backgroundColor:"black", color:"white", paddingTop:"10px"}}>About us</div>
        {
            isAuthenticated && (
                <div style={{border:"1px solid black", width:"100px", height:"40px"}}>{user.name}</div>
            )
        }
        <div style={{border:"1px solid black", width:"100px", height:"40px", backgroundColor:"maroon", color:"white", paddingTop:"10px"}}>
           {
                isAuthenticated ? (
                    <button onClick={() => logout({ returnTo: window.location.origin })}>
                       Log Out
                    </button>
                ) : (
                    <button onClick={() => loginWithRedirect()}>Log In</button>
                )
            }
        </div>
    </div>
  )
}

export default Navbar;