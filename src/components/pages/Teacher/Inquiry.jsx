export default function inquiry(props){
    return(
        <div key={`key${props.id}`} className="pt-10 mx-10">
        <div className="block p-6 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md  hover:bg-gray-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {props.student_name}
            </h5>
            
            <ul className="font-normal text-gray-700">
                <li>
                    <span className='font-bold'>
                        Email: </span>
                    {props.email}
                </li>

                <li>
                    <span className='font-bold'>
                        Phone: </span>
                    {props.phone_number}
                </li>

                <li>
                    <span className='font-bold'>
                        Instrument: </span>
                    {props.instrument}
                </li>

                <li>
                    <span className='font-bold'>
                        Availability: </span> 
                    {props.availability}
                </li>

                <li>
                    <span className='font-bold'>Inquiry content: </span>{props.content}
                </li>
            </ul>
            {/* checkbox wrapper */}
            <div className="flex justify-end mt-6">
                <label htmlFor="checked-checkbox" className="mr-2 text-sm font-medium text-gray-900">Contacted</label>
                
                <input 
                    type="checkbox" 
                    
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            </div>
        </div>  
    </div> 
    )
}