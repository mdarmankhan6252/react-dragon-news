import { Link } from "react-router-dom";
import SubNavbar from "../Shared/Navbar/SubNavbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
   const {createUser} = useContext(AuthContext)

   const handleRegister = e =>{
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const name = form.get('name')
      const photo = form.get('photo')
      const email = form.get('email');
      const password = form.get('password');
      console.log(name, photo, email, password)

      createUser(email, password)
      .then(result =>{
         console.log(result)
      })
      .catch(error =>{
         console.log(error)
      })

   }
   return (
      <div className="bg-gray-100 w-full h-screen">
         <SubNavbar></SubNavbar>
         <div className="loginContainer bg-white w-[450px] p-10 shadow">
            <h1 className="font-semibold text-center text-3xl pb-6">Register your account</h1>
            <hr />
            <form onSubmit={handleRegister} className="pt-6 space-y-5">
               <p className="font-semibold">Your Name</p>
               <input type="text" name="name" className="border w-full p-2 text-gray-700"/>
               <p className="font-semibold">Photo URL</p>
               <input type="text" name="photo" className="border w-full p-2 text-gray-700"/>
               <p className="font-semibold">Email</p>
               <input type="email" name="email" className="border w-full p-2 text-gray-700"/>
               <p className="font-semibold">Password</p>
               <input type="password" name="password"  className="border w-full p-2 text-gray-700"/>
               <div className="flex items-center space-x-2">
                  <input type="checkbox" required/>
                  <p>Accept Term & Conditions</p>
               </div>
               <input type="submit" value="Register" className="text-white bg-gray-700 w-full p-2 border border-gray-700 hover:bg-transparent hover:text-black cursor-pointer"/>
               <p className="text-center text-sm">Have An Account ? <Link className="text-green-600" to='/login'>Login</Link></p>
            </form>
         </div>
         </div>
   );
};

export default Register;