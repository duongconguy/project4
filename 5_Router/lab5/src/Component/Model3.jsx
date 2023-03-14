import React from "react";
import imgModel3 from "../img/Model-3.png"


const Model3 = () => {
    return (
        <div className="w-[100vw] flex justify-center">

            <img className="w-[100vw] h-[100vh]" src={imgModel3} alt="" />
            <div className="absolute top-[15vh] text-white">
                <p className="text-[34px] font-semibold">Model 3</p>
            </div>
            <div className="absolute top-[85vh] flex text-white">
                <div className="mx-[35px] text-center flex-col">
                    <p className="text-[24px] font-semibold">3.1 s</p>
                    <p className="text-[12px]">0-60 mph*</p>
                </div>
                <div className="mx-[35px] text-center flex-col">
                    <p className="text-[24px] font-semibold">358mi</p>
                    <p className="text-[12px]">Range (EPA est.)</p>
                </div>
                <div className="mx-[35px] text-center flex-col">
                    <p className="text-[24px] font-semibold">AWD</p>
                    <p className="text-[12px]">Dual Motor</p>
                </div>
                <div className="mx-[35px] w-[160px] ">
                    <button className="absolute top-[9px] w-[160px] h-[30px] rounded-[3px] mx-[10px] text-[14px] font-normal border-[3px] border-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Model3