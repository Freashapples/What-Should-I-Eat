"use client"

import { useState } from "react";

export const Geo = ({latitude, setLatitude, longitude, setLongitude, city, setCity, state, setState}) => {
    console.log("Geo Component")
    const [isLoading, setLoading] = useState(false)

    function handleClick(){
        console.log("Clicked!")
        setLoading(true);

        if(navigator.geolocation){
            console.log("Geo Location")
            navigator.geolocation.getCurrentPosition(success, error)
        }

        async function success(position){
            console.log(position)
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            const c = await getCityFromCoords(latitude, longitude)
            setCity(c.city)
            setState(c.state)
            setLoading(false);
        }

        function error(){
            alert("Error with position")
            setLoading(false)
        }
    }

    const getCityFromCoords = async (latitude, longitude) => {
        const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        );
        const data = await response.json();
        return {
            city: data.city || data.locality || "Unknown City",
            state: data.principalSubdivision || "Unkown State"
        }
    }

    return (
        <div className="flex flex-col items-center">
            <button type="button" className="bg-black text-white p-3 hover:bg-green-950 rounded-lg shadow-2xl mt-5 flex items-center gap-2" id="geobutton" onClick={handleClick}>
                Location
                {isLoading && (
                    <span>
                        <svg class="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </span>
                )}
            </button>
            <h2 className="pt-3">Longitue: {longitude}</h2>
            <h2>Latitude: {latitude}</h2>

            <h1>City</h1>
            <p>{city}, {state}</p>
        </div>
    )
}