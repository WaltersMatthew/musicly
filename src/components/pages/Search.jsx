export default function Search(){
    return(
        <form class="w-full max-w-sm mx-auto mt-20">
            <div class="flex items-center border-b border-teal-500 py-2">
                <input 
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                    name="search"
                    type="text" 
                    placeholder="Trombone" 
                />

                <button 
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit"
                >
                    Search
                </button>
            </div>
        </form>
    )
}