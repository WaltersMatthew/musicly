import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

export default function Inquiry(){
    const [name, setName] = useState('')
    const [instrument, setInstrument] = useState('')
    const [content, setContent] = useState('')
    const [availability, setAvailability] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [preferred_teacher, setPreferredTeacher] = useState()
    
    const { id } = useParams()
    const navigate = useNavigate()
    // setPreferredTeacher(id)

    const handleSubmit = async e => {
        e.preventDefault()
        try{
            const reqBody = {
                student_name: name,
                instrument,
                content,
                availability,
                phone_number: phone,
                email,
                inquirer_id: 1,
                preferred_teacher: id
            }
            console.log(reqBody)
            await axios.post('http://localhost:8000/api/inquiries/', reqBody)

        }catch(err){
            console.log(err)
        }
        navigate(`/teacher/${id}`)
    }
    return(
        <form onSubmit={handleSubmit} className="mx-auto mt-10 border p-10 bg-white rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        First and last name
                    </label>
                    
                    <input 
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="name" 
                        type="text" 
                        placeholder="Jane Doe"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    
                    />
                    
                </div>
                
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="instrument">
                        Instrument
                    </label>
                    
                    <input 
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="instrument" 
                        type="text" 
                        placeholder="Piano"
                        onChange={e => setInstrument(e.target.value)}
                        value={instrument}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inquiry_content">
                        Previous experience and goals
                    </label>

                    <input 
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="inquiry_content" 
                        type="text" 
                        placeholder="3 years flute, make my high school orchestra"
                        onChange={e => setContent(e.target.value)}
                        value={content}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="availability">
                        Availability
                    </label>

                    <input 
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="availability" 
                        type="text" 
                        placeholder="M/W/F 4pm-7pm"
                        onChange={e => setAvailability(e.target.value)}
                        value={availability}
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone_nuber">
                        Phone Number
                    </label>
                    
                    <input 
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="phone_number" 
                        type="tel" 
                        placeholder="805-555-5555"
                        onChange={e => setPhone(e.target.value)}
                        value={phone}
                    />
                    
                </div>
                
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                        email
                    </label>
                    
                    <input 
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="email" 
                        type="text" 
                        placeholder="me@music.com"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <button type='submit' className="inline-block border border-blue-500 rounded py-2 px-10 my-4
                -mb-10 bg-blue-500 hover:bg-blue-700 mx-auto text-white transition duration-150 ease-in-out">Submit</button>
            </div>
        </form>
    )
}