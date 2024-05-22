import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone_1 from '../../../assets/qZone1.png'
import qZone_2 from '../../../assets/qZone2.png'
import qZone_3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
   return (
      <div>
         <div className="space-y-4 p-4">
            <h2 className="text-2xl font-semibold">Login With</h2>
            <button className="btn btn-outline w-full border-blue-500 text-blue-500">
            <FaGoogle className="text-xl" />
               Login with Google
            </button>
            <button className="btn btn-outline w-full">
            <FaGithub className="text-xl"/>
               Login with Github
            </button>
         </div>

         <div className="space-y-4 p-4">
            <h2 className="text-2xl font-semibold">Find Us on</h2>
            <button className="btn btn-outline w-full border-green-500 text-green-500">
            <FaFacebook className="text-xl" />
               Facebook
            </button>

            <button className="btn btn-outline w-full border-green-500 text-green-500">
            <FaTwitter className="text-xl"/>
               Twitter
            </button>

            <button className="btn btn-outline w-full border-green-500 text-green-500">
            <FaInstagram className="text-xl"/>
               Instagram
            </button>
         </div>

         <div className="p-4 bg-gray-100">
            <h2 className="text-2xl font-semibold pb-4">Q-Zone</h2>
            <div className="space-y-4">
                <img src={qZone_1} alt="" />
                <img src={qZone_2} alt="" />
                <img src={qZone_3} alt="" />
            </div>
         </div>
      </div>
   );
};

export default RightSideNav;