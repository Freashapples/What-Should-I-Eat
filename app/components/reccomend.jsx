import { useState } from "react"

export const ReccomendedFoods = ({selectedFoods, city}) => {
    // items = props.props

    const [recomendation, setRecomendation] = useState("N/A")
    const [isLoading, setLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);
    // debounce delay to prevent spamming

    const api_key = "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"
    const url = "https://api.groq.com/openai/v1/chat/completions"

    const prompt = `Hi, i need help choosing what i should eat. Please respond very short!!!! like a short sentence per food option but i want it to be unique, like instead of "burger" be like "a double cheeseburger". Here are the types of things i like to see in my food: ${selectedFoods} now if you can, i also live here: ${city} so try to find some local food options, if not no wories just give me ideas on what i should make to eat! make sure to come up with food options that use a blend of the options, not just "oh you like fast food, burger" more like "oh you like fast food but want something premium, try a chicken sandwich from chick fil a" but keep it short! also return in bullet point format`;

    const options = {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${api_key}`,
            "Content-Type" : "application/json"
        },

        body : JSON.stringify({
            "model" : "llama-3.3-70b-versatile",
            "messages": [{
                "role": "user",
                "content": prompt
            }]
        })
    }

    async function submit(){
        setLoading(true)
        if(isDisabled){
            setLoading(false)
            return
        }

        setIsDisabled(true)

        const response = await fetch(url, options)
        const json = await response.json()

        setRecomendation(json["choices"][0]["message"]["content"])
        console.log(city)
        console.log(selectedFoods)
        setLoading(false)

        setTimeout(() => {
            setIsDisabled(false);
            setLoading(false)
        }, 5000)
    }

    return (
        <div className="flex flex-col items-center">
            <button className="bg-black text-white rounded-lg text-2xl p-5 hover:scale-110 hover:bg-green-950 transition:all duration-200 w-60 h-15 m-5 flex items-center gap-2 justify-center" onClick={() => submit()}>
                Submit
                {isLoading && (
                    <span>
                        <svg class="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </span>
                )}
            </button>
            <h1 className="font-semibold">Your Reccomended Options:</h1>
            <ul className="text-2xl px-10 list-disc text-left">
            {recomendation.split("*").map((item, index) => {
                const text = item.trim();
                if (!text) return null;
                return <li key={index}>{text}</li>;
            })} 
            </ul>
        </div>
    )
}