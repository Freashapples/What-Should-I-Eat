"use client"

import { useState } from "react";

export const Foods = () => {
    const [items, setItems] = useState([])

    const foods = [
        "Pizza 🍕",
        "Burgers 🍔",
        "Sushi 🍣",
        "Tacos 🌮",
        "Pasta 🍝",
        "Salad 🥗",
        "Ramen 🍜",
        "BBQ 🍖",
        "Mexican 🌯",
        "Indian 🍛",
        "Chinese 🥡",
        "Thai 🍲",
        "Italian 🇮🇹",
        "French 🇫🇷",
        "Seafood 🐟",
        "Vegan 🌿"
        ];
    
    function onClick(item){
        console.log("Div Clicked!" + item)
       
        if(items.includes(item)){
            setItems(items.filter(foodItem => foodItem !== item))
        } else {
            setItems([...items, item])
        }

        console.log(items)
    }

    let divs = foods.map(function(item, index, array){
        return <div key={index} className={items.includes(item) 
            ? `bg-slate-200 select-none border-lime-800 w-50p rounded-lg min-h-[50px] hover:shadow-md hover:border-2 transition-all duration-200 ease-in-out cursor-pointer border-2 box-border`
            : `bg-slate-50 select-none border-lime-800 w-50p rounded-lg min-h-[50px] hover:bg-slate-100 hover:shadow-md hover:border-2 transition-all duration-200 ease-in-out cursor-pointer box-border`
        } onClick={() => onClick(item)}>
            <h1>{item}</h1>
        </div>
    })
    
    return (
        <div className="h-120px border-1 m-5 overflow-x-scroll rounded-2xl border-lime-800">
            <div className="grid grid-cols-4 gap-2 m-10">
                {divs}
            </div>
        </div>
    
    )
}