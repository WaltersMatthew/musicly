import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Teacher(){
    const [teacher, setTeacher] = useState()
    
    const { id } = useParams()
    
    useEffect(() =>{
        const getTeacher = async () => {
            try {
                const response = await axios.get(`/api/teachers/${id}`)
                setTeacher(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getTeacher()
    },[])

    return(
        <section class="bg-blueGray-50">
            <div class="w-full lg:w-4/12 mx-auto">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10">
                    <div class="px-6">
                        <div class="flex flex-wrap justify-center">
                            <div class="w-full px-4 flex justify-center">
                                <div className='flex justify-center'>
                                    <img alt="Teacher" src="http://www.placecorgi.com/200/200" class="shadow-xl rounded-full h-auto align-middle -mt-6 border-none  max-w-150-px" />
                                </div>
                            </div>
                            <div class="w-full px-4 text-center mt-0">
                                <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div class="mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {22}
                                        </span>
                                        <span class="text-sm text-blueGray-400">Years experience</span>
                                    </div>
                                    <div class="mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {3}/5
                                        </span>
                                        <span class="text-sm text-blueGray-400">
                                            Average rating
                                        </span>
                                    </div>
                                    <div class="lg:mr-4 p-3 text-center">
                                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            ✅
                                        </span>
                                        <span class="text-sm text-blueGray-400">
                                            Accepting students
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-12">
                            <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                Jenna Stones
                            </h3>
                            <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                Los Angeles, California
                            </div>
                            <div class="mb-2 text-blueGray-600 mt-10">
                                <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                Now teaching: (Instruments go here)
                            </div>
                        </div>
                        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full lg:w-9/12 px-4">
                                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}