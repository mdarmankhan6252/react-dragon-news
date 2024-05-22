import moment from 'moment';
import logo from '../../../assets/logo.png'
import BreakingNews from '../../Home/BreakingNews';
import SubNavbar from './SubNavbar';
const Navbar = () => {
   
   return (
      <div className='space-y-3 text-center py-10'>
         <img className='mx-auto' src={logo}  />
         <h5 className='text-lg text-gray-600'>Journalism Without Fear or Favour</h5>
         <h3 className='text-xl'>{moment().format('dddd,MMMM D, YYYY')}</h3>
         <BreakingNews></BreakingNews>
         <SubNavbar></SubNavbar>         
      </div>
   );
};

export default Navbar;