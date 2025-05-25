"use client"
export const Foods = () => {
    function onClick(){
        console.log("Div Clicked!")
    }
    return (
        <div className="h-120px border-1 m-5 overflow-x-scroll rounded-2xl border-lime-800">
            <div className="grid grid-cols-4 gap-2 m-10">
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer box-border' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] min-w-[200px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] min-w-[200px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] min-w-[200px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] min-w-[200px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] min-w-[200px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] min-w-[200px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] min-w-[200px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
                <div className='bg-slate-100 border-lime-800 w-50p rounded-lg min-h-[50px] min-w-[200px] hover:bg-slate-50 hover:shadow-md hover:border-2 transition-shadow duration-200 ease-in-out cursor-pointer' onClick={onClick}></div>
            </div>
        </div>
    
    )
}