import React from "react";
import { Outlet, Link } from "react-router-dom";
import TeslaBlack from "../img/teslaBlack.png"
import TeslaWhite from "../img/teslaWhite.png"
import { useState } from 'react';

const Main = () => {
    const [TextColor, setTextColor] = useState(" text-black")
    const [Logo, setLogo] = useState(TeslaBlack)
    const TextWhite = () => {
        console.log(typeof TextColor)
        setTextColor(" text-white");
        setLogo(TeslaWhite)
    }
    const TextBlack = () => {
        setTextColor(" text-black");
        setLogo(TeslaBlack)
    }
    return (
        <main>
            <div className="flex justify-between h-[30px] w-[100%] my-[5px] text-[12px] font-medium absolute">
                <div className="w-[180px] flex">
                    <Link className="w-[100px] mx-auto flex px-[5px] items-center hover:bg-zinc-600/25 rounded-sm" to="/" onClick={TextBlack}>
                        <img className="h-[15px] w-[100px]" src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="flex mx-[20px] mt-[5px]" >
                    <Link className={"mx-[15px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor} to="/ModelS" onClick={TextBlack}>Model S</Link>
                    <Link className={"mx-[15px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor} to="/Model3" onClick={TextWhite}>Model 3</Link>
                    <Link className={"mx-[15px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor} to="/ModelX" onClick={TextBlack}>Model X</Link>
                    <Link className={"mx-[15px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor} to="/ModelY" onClick={TextBlack}>Model Y</Link>
                    <Link className={"mx-[15px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor} to="" onClick={TextBlack}>Solar Roof</Link>
                    <Link className={"mx-[15px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor} to="" onClick={TextBlack}>Solar Panels</Link>
                </div>
                <div className="flex w-[185px] mx-[20px] mt-[5px]">
                    <Link className={"mx-[10px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor}>Shop</Link>
                    <Link className={"mx-[10px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor}>Account</Link>
                    <Link className={"mx-[10px] px-[5px] align-middle hover:bg-zinc-600/25 rounded-sm" + TextColor}>Menu</Link>
                </div>
            </div>
            <Outlet />
        </main>
    );
};

export default Main