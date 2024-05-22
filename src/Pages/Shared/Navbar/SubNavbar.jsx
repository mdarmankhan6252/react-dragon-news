import { Link, NavLink } from 'react-router-dom';
import userLogo from '../../../assets/user.png'
const SubNavbar = () => {
   const navLinks = <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/career'>Career</NavLink>
      <NavLink to='/login'>Login</NavLink>
   </>
   return (
      <div>
         <div className='flex items-center justify-between space-y-5'>
            <div>

            </div>
            <div className='space-x-6'>
               {navLinks}
            </div>
            <div className='flex items-center space-x-6'>
               <img src={userLogo} alt="" className='w-10' />
               <Link to='/login' className='btn btn-primary'>Login</Link>
            </div>
         </div>         
      </div>
   );
};

export default SubNavbar;