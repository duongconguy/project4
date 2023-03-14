import React from "react";
import imgModelS from "../img/Model-S.png"

const ModelS = () => {
    return (
        <div className="w-[100vw] flex justify-center">
            <img className="h-[100vh] w-[100vw]" src={imgModelS} alt="" />
            <div className="absolute top-[15vh]">
                <p className="text-[34px] font-semibold">Model S</p>
                <p className="text-[14px] text-center">Plaid</p>
            </div>
            <div className="absolute top-[85vh] flex text-white">
                <div className="mx-[35px] text-center flex-col">
                    <p className="text-[24px] font-semibold">396mi</p>
                    <p className="text-[12px]">Range (EPA est.)</p>
                </div>
                <div className="mx-[35px] text-center flex-col">
                    <p className="text-[24px] font-semibold">1.99s</p>
                    <p className="text-[12px]">0-60 mph*</p>
                </div>
                <div className="mx-[35px] text-center flex-col">
                    <p className="text-[24px] font-semibold">200mph</p>
                    <p className="text-[12px]">Top Speed</p>
                </div>
                <div className="mx-[35px] text-center flex-col">
                    <p className="text-[24px] font-semibold">1,020hp</p>
                    <p className="text-[12px]">Peak Power</p>
                </div>
                <div className="mx-[35px] w-[160px] ">
                    <button className="absolute top-[9px] w-[160px] h-[30px] rounded-[3px] mx-[10px] text-[14px] font-normal border-[3px] border-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default ModelS