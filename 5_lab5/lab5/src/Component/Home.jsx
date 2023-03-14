import React from "react";
import Homepage from "../img/Homepage.png"

const Home = () => {
    return (
        <div className="w-[100vw] flex justify-center">
            <img className="h-[100vh] w-[100vw]" src={Homepage} alt="" />
            <div className="absolute top-[15vh]">
                <p className="text-[34px] font-semibold">Model 3</p>
                <p className="text-[14px] text-center underline underline-offset-2">Schedule a Test Drive</p>
            </div>
            <div className="absolute top-[85vh] flex">
                <button className="w-[200px] h-[30px] rounded-[3px] mx-[10px] bg-[#3a3d40] text-[14px] font-medium text-[#e5e5e3]">Custom Order</button>
                <button className="w-[200px] h-[30px] rounded-[3px] mx-[10px] bg-[#e5e5e3] text-[14px] font-medium text-[#3a3d40]">Existing Inventory</button>
            </div>
        </div>
    );
};

export default Home