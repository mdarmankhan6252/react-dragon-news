import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
   {
      path:'/',
      element:<Root></Root>,
      children:[
         {
            path:'/',
            element:<Home></Home>
         },
         {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/about',
            element:<About></About>
         },
         {
            path:'/career',
            element:<Career></Career>
         },
         {
            path:'/register',
            element:<Register></Register>
         }
      ]
   }
])

export default router;