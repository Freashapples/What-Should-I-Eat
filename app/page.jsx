"use client"
import Image from "next/image"
import { Geo } from "./components/geo";
import { Foods } from "./components/foods";
import { ReccomendedFoods } from "./components/reccomend";
import { useState } from "react";

export default function Page() {

  const [selectedFoods, setSelectedFoods] = useState([]);
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [city, setCity] = useState("N/A")
  const [state, setState] = useState("N/A")
  const location = `${city} ${state}`

  return (
    <div className="text-center">
      <h1 className="m-5 text-center transform hover:scale-110 duration-500 items-center">What Should I Eat?</h1>
      <Foods selectedFoods = {selectedFoods} setSelectedFoods = {setSelectedFoods}/>
      <Geo latitude = {latitude} setLatitude = {setLatitude} longitude={longitude} setLongitude={setLongitude} city={city} setCity={setCity} state={state} setState={setState}/>
      <ReccomendedFoods selectedFoods = {selectedFoods} city ={location}/>
    </div>
  );
}
