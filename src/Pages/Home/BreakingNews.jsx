import Marquee from "react-fast-marquee";
import '../Home/BreakingNews.css'
const BreakingNews = () => {
   return (
      <div className="flex border shadow bg-[#f2f2ff]">
         <div className="breakingNewsBtn">Click Here</div>
         <Marquee pauseOnHover={true} direction="left" speed={30}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos esse quidem voluptatibus fugit veritatis maxime commodi sed repudiandae amet, quod assumenda. Tempora, omnis repellat. Esse velit a nostrum. Sint consequuntur nostrum maiores expedita aliquid ducimus numquam commodi odio. Saepe nisi aut ut impedit odit aspernatur fugit veritatis sit ea provident, quasi harum quidem animi dolor laudantium           
         </Marquee>
      </div>
   );
};

export default BreakingNews;