import React from "react";
import Kiwi from "../assets/Kiwi1.jpg";
import  Orange from "../assets/Orange.jpg";
import Strawberry from "../assets/Strawberry.jpg";
import Grapes from "../assets/Grape.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
    return(
        //text content section
       <div className="container py-14 relative ">
       <div>
        <h1 className="py-8 tracking-wider font-semibold text-2xl text-center text-green-500">
            Taste the Healthy Difference</h1>
         <div className="space-y-10">
         <div className="grid grid-cols-1 sm.grid-cols-2 gap-4 py-10">
           <div className="text-black-600 text-lg ">
            <p>You deserve <span className="text-green-500">meals</span> that support your goals and your energy. 
                With each recipe you choose and every plan you create, you’re investing in your future self. 
                Let this be your space to grow, to prioritize yourself, and to build habits that last.</p>
           </div>
          
         </div>
        
         <div className="grid grid-cols-1 sm.grid-cols-2 gap-4 py-10">
            
           <div className="text-black-600 text-lg ">
            <p>Every <span className="text-green-500">Healthy</span> choice you make is a step toward a stronger, happier you.
             This planner helps you stay consistent, stay focused, and stay proud of the small victories that lead to big results.
             Your journey doesn’t have to be perfect—just start, and keep going.</p>
           </div>
          
         </div>
       </div>
       {/*button section*/}
       <div className="flex justify-center mt-10 sm:mt-14"></div>
       <Link to="/planner" className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 hover:shadow-lg"
                 >
                   Plan Your Weekly Meals
                 </Link>
       </div>
        {/*fruits section*/}
        <div className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100  
        transform hover:scale-105 transition-transform duration-[2500ms] ease-in-out animate-floating">
            <img src={Kiwi} alt="not found" className="max-w-[160px] ">
            </img>
        </div>
         <div className="absolute bottom-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100 
          transform hover:scale-105 transition-transform duration-[2500ms] ease-in-out animate-floating">
            <img src={Strawberry} alt="not found" className="max-w-[150px]">
            </img>
        </div>
         <div className="absolute top-10 -right-16 sm:right-20 opacity-50 sm:opacity-100 
          transform hover:scale-105 transition-transform duration-[2500ms] ease-in-out animate-floating">
            <img src={Orange} alt="not found" className="max-w-[200px]">
            </img>
        </div>
         <div className=" hidden absolute sm:block bottom-0 right-0 opacity-50 sm:opacity-100 
          transform hover:scale-105 transition-transform 
         duration-[2500ms] ease-in-out animate-floating">
            <img src={Grapes} alt="not found" className="max-w-[200px]">
            </img>
        </div>
        
        </div>
    )
}
export default Banner;    