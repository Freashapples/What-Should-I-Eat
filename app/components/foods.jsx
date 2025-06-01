"use client"

import { useState } from "react";
import { ReccomendedFoods } from "./reccomend";
import { Geo } from "./geo"

export const Foods = ({selectedFoods, setSelectedFoods}) => {
    const foods = [
        "Healthy 🥗",
        "Fast 🍟",
        "Comfort 🍲",
        "Fresh 🥒",
        "Spicy 🌶️",
        "Sweet 🍰",
        "Cheap 💰",
        "Premium 💎",
        "Light 🌿",
        "Filling 🍖",
        "Asian 🥡",
        "Mexican 🌮",
        "Italian 🍝",
        "American 🍔",
        "Popular ⭐",
        "Local 🏪"
    ];
    
    function onClick(item){
       
        if(selectedFoods.includes(item)){
            setSelectedFoods(selectedFoods.filter(foodItem => foodItem !== item))
        } else {
            setSelectedFoods([...selectedFoods, item])
        }

    }

    let divs = foods.map(function(item, index, array){
        return <div key={index} className={selectedFoods.includes(item) 
            ? ` bg-slate-200 select-none border-lime-800 w-50p rounded-lg min-h-[50px] hover:shadow-md hover:border-2 transition-all duration-200 ease-in-out cursor-pointer border-2 box-border`
            : ` bg-slate-50 select-none w-50p rounded-lg min-h-[50px] hover:bg-slate-100 hover:shadow-md border-2 border-transparent hover:border-lime-800 transition-all duration-200 ease-in-out cursor-pointer box-border text-wrap`
        } onClick={() => onClick(item)}>
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl break-words whitespace-normal">{item}</h1>
        </div>
    })
    
    return (
        <div className="sm:px-20 px-2">
            <div className="mx-auto grid grid-cols-4 gap-2 rounded-2xl border-lime-800 border-2 p-2">
                {divs}
            </div>
         </div>
    )
}