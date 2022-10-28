import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Dashboard(){
    const [studentName, setStudentName] = useState('')
    
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        const getInquiries = async () =>{
            try{
                const response = await axios.get(`/api/inquiries/`)
                console.log(response.data)
            }catch(err){
                console.log(err)
            }
        }
        getInquiries()
    },[])

    const inquiryMap = response.data.map(inquiry =>{
        return(
            <div>

            </div>
        )

    }
    )

    return(  
        <div>
            <div className="m-5">
                <h1 className="text-2xl flex justify-center mt-5 shadow-xl border-2"><span className="p-4">Uncontacted</span></h1>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 flex wrap justify-evenly m-10">
                <div className="block p-6 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md  hover:bg-gray-100">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Matthew Walters</h5>
                    <ul className="font-normal text-gray-700">
                        <li>
                        <span className='font-bold'>Email:</span> surfingdrums@gmail.com
                        </li>
                        <li>
                        <span className='font-bold'>Phone:</span> 909-497-4670
                        </li>
                        <li>
                        <span className='font-bold'>Instrument:</span> Guitar
                        </li>
                        <li>
                        <span className='font-bold'>Availability:</span> F/Sat/Sun 12p-4p
                        </li>
                        <li>
                        <span className='font-bold'>Inquiry content:</span> I really wanna impress the ladies, I have no experience, but really wanna get good
                        </li>
                    </ul>
                    <div className="flex justify-end">
                        <label htmlFor="checked-checkbox" className="mr-2 text-sm font-medium text-gray-900">Contacted</label>
                        <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                </div>
                
            </div>    

            <div>
                <h1 className="text-2xl flex justify-center m-5 border-2 p-4 shadow-xl"><span>Contacted</span></h1>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-1 flex wrap justify-evenly m-10">
            <div className="block p-6 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Matthew Walters</h5>
                    <ul className="font-normal text-gray-700">
                        <li>
                        <span className='font-bold'>Email:</span> surfingdrums@gmail.com
                        </li>
                        <li>
                        <span className='font-bold'>Phone:</span> 909-497-4670
                        </li>
                        <li>
                        <span className='font-bold'>Instrument:</span> Guitar
                        </li>
                        <li>
                        <span className='font-bold'>Availability:</span> F/Sat/Sun 12p-4p
                        </li>
                        <li>
                        <span className='font-bold'>Inquiry content:</span> I really wanna impress the ladies, I have no experience, but really wanna get good
                        </li>
                    </ul>
                    <div className="flex justify-end">
                        <label htmlFor="checked-checkbox" className="mr-2 text-sm font-medium text-gray-900">Contacted</label>
                        <input type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    </div>
                </div>
                
            </div>
        </div>

    )
}