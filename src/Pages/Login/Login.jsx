import { Link } from "react-router-dom";
import SubNavbar from "../Shared/Navbar/SubNavbar";

const Login = () => {
   const handleLogin = e =>{
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget)
      console.log(form.get('email'));
      console.log(form.get('password'));
   }

   return (
      <div className="bg-gray-100 w-full h-screen">
         <SubNavbar></SubNavbar>
         <div className="loginContainer bg-white w-[450px] p-10 shadow">
            <h1 className="font-semibold text-center text-3xl pb-6">Login your account</h1>
            <hr />
            <form onSubmit={handleLogin} className="pt-6 space-y-5">
               <p className="font-semibold">Email address</p>
               <input type="email" name="email" className="border w-full p-2 text-gray-700" required/>
               <p className="font-semibold">Password</p>
               <input type="password" name="password"  className="border w-full p-2 text-gray-700" required/>
               <input type="submit" value="Login" className="text-white bg-gray-700 w-full p-2 border border-gray-700 hover:bg-transparent hover:text-black cursor-pointer"/>
               <p className="text-center text-sm">Dont’t Have An Account ? <Link className="text-green-600" to='/register'>Register</Link></p>
            </form>
         </div>
         </div>
   );
};

export default Login;