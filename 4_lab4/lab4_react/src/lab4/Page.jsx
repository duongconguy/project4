import React from "react";
import { useState } from 'react';

function Page(props) {

    // const bt1Click = () => { 
    //     props.page1() 
    //     setBg_bt1("w-6 h-6 text-sm border border-gray-400 bg-red-400");
    //     setBg_bt2("w-6 h-6 text-sm border border-gray-400");}

    // const bt2Click = () => { 
    //     props.page2() 
    //     setBg_bt1("w-6 h-6 text-sm border-y-[1px] border-gray-400");
    //     setBg_bt2("w-6 h-6 text-sm border border-gray-400 bg-red-400")}

    // đổi màu nền nút nhấn chuyển trang
    var pageMax = (props.UserLenght - (props.UserLenght % 5))/5 +1;
    const [pageLeft, setpageLeft] = useState(1)
    const [pageRight, setpageRight] = useState(2)
    const [bgButtonLeft, setbgButtonLeft] = useState("bg-red-400")
    const [bgButtonRight, setbgButtonRight] = useState("")

    const btIncreaseClick = () => { 
        props.Increase()
        setpageLeft(props.page)
        setpageRight(props.page + 1)
        setbgButtonLeft("")
        setbgButtonRight("bg-red-400")
    }

    const btDecreaseClick = () => { 
        props.Decrease()
        setpageLeft(props.page-1)
        setpageRight(props.page)
        setbgButtonLeft("bg-red-400")
        setbgButtonRight("")
    }
    const pageRightClick = () => { 
        if (bgButtonRight === "") {btIncreaseClick()}
    }

    const pageLeftClick = () => { 
        if (bgButtonLeft === "") {btDecreaseClick()}
    }

    return (
        <div className="flex items-start mt-[20px]">
            <h1 className="mx-[10px]">Page:  </h1>
            { (!((pageLeft === 1 ) && (bgButtonRight === ""))) && <button
                className="w-6 h-6 text-sm border-y-[1px] border-l-[1px] border-gray-400"
                onClick={btDecreaseClick}
            > &lt; </button>}
            
            {(pageLeft > 1) && <button className="w-6 h-6 text-sm border-y-[1px] border-l-[1px] border-gray-400"> ... </button>}
            
            <button
                className={"w-6 h-6 text-sm border border-gray-400 " + bgButtonLeft }
                onClick={pageLeftClick}
            > {pageLeft} </button>
            
            {(pageMax>=2) && <button
                className={"w-6 h-6 text-sm border-y-[1px] border-r-[1px] border-gray-400 " + bgButtonRight}
                onClick={pageRightClick}
            > {pageRight} </button>}
            
            { (pageRight < pageMax) && <button className="w-6 h-6 text-sm  border-y-[1px] border-r-[1px] border-gray-400"> ... </button>}
            
            { (!((pageLeft === (pageMax-1)) && (bgButtonLeft === ""))) && (pageMax >=2 ) && <button
                className="w-6 h-6 text-sm border-y-[1px] border-r-[1px] border-gray-400"
                onClick={btIncreaseClick}
            > &gt; </button>}
        </div>
    );
}

export default Page;