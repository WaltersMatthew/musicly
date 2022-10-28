import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Teacher(){
    const [teacher, setTeacher] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()
    const [tagline, setTagline] = useState()
    const [bio, setBio] = useState()
    const [yearsExperience, setYearsExperience] = useState()
    const [acceptingStudents, setAccceptingStudents] = useState()
    const [instruments, setInstruments] = useState()
    const [location, setLocation] = useState()
    
    const { id } = useParams()
    
    useEffect(() =>{
        const getTeacher = async () => {
            try {
                const response = await axios.get(`/api/users/${id}/`)
                setTeacher(response.data)
                console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getTeacher()
    },[])

    return(
        <section className="bg-blueGray-50">
            <div className="w-full lg:w-4/12 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className='flex justify-center'>
                                    <img alt="Teacher" src={teacher.image} className="shadow-xl rounded-full h-auto align-middle -mt-6 border-none  max-w-150-px" />
                                </div>
                            </div>
                            <div className="w-full px-4 text-center mt-0">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {teacher.years_experience}
                                        </span>
                                        <span className="text-sm text-blueGray-400">Years experience</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {teacher.average_rating}/5
                                        </span>
                                        <span className="text-sm text-blueGray-400">
                                            Average rating
                                        </span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {teacher.accepting_students ? `✅` :`🚫`}
                                        </span>
                                        <span className="text-sm text-blueGray-400">
                                            Accepting students
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <a href={`/teacher/${id}/inquiry`}>
                                        <button  className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'>
                                            Lesson inquiry
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                Jenna Stones
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                Los Angeles, California
                            </div>
                            <div className="mb-2 text-blueGray-600 mt-10">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                Now teaching: (Instruments go here)
                            </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <a href={`/teacher/${id}/edit`}>
                                <button  className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'>
                                        Edit my profile
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}