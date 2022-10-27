export default function Inquiry(){
    
    const handleSubmit = async e => {
        e.preventDefault()
        try{
            const reqBody = {
                // name,
                // instrument,
                // inquiry_content,
                // availability,
                // phone_number,
                // email

            }
        }catch(err){
            console.log(err)
        }
    }
    return(
        <form onSubmit={handleSubmit} className="mx-auto mt-10 border p-10 bg-white rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        First and last name
                    </label>
                    
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" placeholder="Jane Doe"/>
                    
                </div>
                
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="instrument">
                        Instrument
                    </label>
                    
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="instrument" type="text" placeholder="Piano"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inquiry_content">
                        Previous experience and goals
                    </label>

                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="inquiry_content" type="text" placeholder="3 years flute, make my high school orchestra"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="availability">
                        Availability
                    </label>

                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="availability" type="text" placeholder="M/W/F 4pm-7pm"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone_nuber">
                        Phone Number
                    </label>
                    
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="phone_number" type="tel" placeholder="805-555-5555"/>
                    
                </div>
                
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        email
                    </label>
                    
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="me@music.com"/>
                </div>
                <button type='submit' className="inline-block border border-blue-500 rounded py-2 px-10 my-4
                -mb-10 bg-blue-500 hover:bg-blue-700 mx-auto text-white transition duration-150 ease-in-out">Submit</button>
            </div>
        </form>
    )
}