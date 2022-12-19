import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const {loginWithRedirect,isAuthenticated,logout,user} = useAuth0();
  return (
    <div> 
        <div>Home</div>
        <div>Products</div>
        <div>Cart Items</div>
        <div>About us</div>
        {
            isAuthenticated && (
                <div>{user.name}</div>
            )
        }
        <div>
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