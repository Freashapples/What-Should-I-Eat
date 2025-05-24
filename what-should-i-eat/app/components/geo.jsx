"use client"

import { useState } from "react";

export const Geo = () => {
    console.log("Geo Component")

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)

    function handleClick(){
        console.log("Clicked!")

        if(navigator.geolocation){
            console.log("Geo Location")
            navigator.geolocation.getCurrentPosition(success, error)
        }

        function success(position){
            console.log(position)
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        }

        function error(){
            alert("Error with position")
        }
    }

    return (
        <div>
            <button type="button" className="bg-black text-white rounded-sm p-3 hover:bg-green-950 place-self-center" id="geobutton" onClick={handleClick}>Location</button>
            <h2>Longitue: {longitude}</h2>
            <h2>Latitude: {latitude}</h2>
        </div>
    )
}