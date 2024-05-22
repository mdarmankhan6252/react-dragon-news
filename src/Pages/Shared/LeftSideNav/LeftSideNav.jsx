import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img_1 from '../../../assets/1.png'
import img_2 from '../../../assets/2.png'
import img_3 from '../../../assets/3.png'
import { CiCalendar } from "react-icons/ci";
import moment from "moment";
const LeftSideNav = () => {

   const [categories, setCategories] = useState([]);

   useEffect(() =>{
      fetch('categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
   },[])
   return (
      <div className="p-4">
         <h2 className="text-2xl">All Categories: </h2>
         {
            categories.map((category, i) => <NavLink className="block p-1 text-gray-600"
             key={i}
             to={`/category${category.id}`}
             >{category.name}
             </NavLink>)
         }
         <div className="pt-6 space-y-10">
            <div>
               <img src={img_1} alt="" />
               <h3 className="font-semibold text-lg py-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
               <div className="flex items-center justify-between">
                  <span className="font-semibold">Sports</span>
                  <div className="flex items-center">
                  <CiCalendar className="mr-2 text-lg"/>
                  {moment().format('MMMM D, YYYY')}
                  </div>
               </div>
            </div>

            <div>
               <img src={img_2} alt="" />
               <h3 className="font-semibold text-lg py-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
               <div className="flex items-center justify-between">
                  <span className="font-semibold">Sports</span>
                  <div className="flex items-center">
                  <CiCalendar className="mr-2 text-lg"/>
                  {moment().format('MMMM D, YYYY')}
                  </div>
               </div>
            </div>
            <div>
               <img src={img_3} alt="" />
               <h3 className="font-semibold text-lg py-4">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
               <div className="flex items-center justify-between">
                  <span className="font-semibold">Sports</span>
                  <div className="flex items-center">
                  <CiCalendar className="mr-2 text-lg"/>
                  {moment().format('MMMM D, YYYY')}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LeftSideNav;