import { useState } from "react"

export const ReccomendedFoods = ({selectedFoods, city}) => {
    // items = props.props

    const [recomendation, setRecomendation] = useState("N/A")
    const [isLoading, setLoading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);
    // debounce delay to prevent spamming

    const api_key = "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"
    const url = "https://api.groq.com/openai/v1/chat/completions"

    const prompt = `Generate exactly 3 food recommendations based of the users liked types of foods: ${selectedFoods}. For each item, provide the name of the dish, a brief description (1-2 sentences), why it fits the category. format as a JSON array with objects containing: name, description, reason.`;

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
                "content": `A user needs help deciding what he would like to eat. Here are the types of foods he likes: ${selectedFoods}. Your task is to return 3 foods he should eat. Keep them very short. 1 short sentence per. Only return the text he should read. Also the user lives here: ${city}, try to come up with some local resturants if possible.`
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
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </span>
                )}
            </button>
            <h1 className="font-semibold">Your Reccomended Options:</h1>
            <p className="text-2xl text-center px-50">{recomendation}</p>
        </div>
    )
}