import React from "react" ; 
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from "react-router-dom" ;
import "./App.css" ; 

import LoginForm from "./pages/LoginForm/LoginForm" ;
import Profile from "./pages/Profile/Profile" ; 

export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<LoginForm/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

const Root = () => {
  return (
    <> 
  {/* <div> This shows the navigation bar up top 
        <Link to="/"> Login </Link>
        <Link to="/profile"> Profile </Link></>
      </div>                                      */}

      <div>
        <Outlet/>
      </div>
    </>
  )
}