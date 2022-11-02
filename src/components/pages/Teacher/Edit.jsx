import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function Edit(){

    const [teacher, setTeacher] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [image, setImage] = useState('')
    const [bio, setBio] = useState('')
    const [tag_line, setTag_line] = useState('')
    const [location, setLocation] = useState('')
    const [accepting_students, setAccepting_students] = useState('')
    const [years_experience, setYears_experience] = useState('')
    
    const { id } = useParams()
    const currentUserId = localStorage.getItem('id')
    const navigate = useNavigate()

    useEffect(() =>{
        const getTeacher = async () => {
            try {
                
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/${id}`)
                setTeacher(response.data)
                setName(response.data.name)
                setEmail(response.data.email)
                setUsername(response.data.username)
                setImage(response.data.image)
                setBio(response.data.bio)
                setTag_line(response.data.tag_line)
                setLocation(response.data.location)
                setAccepting_students(response.data.accepting_students)
                setYears_experience(response.data.years_experience)
                console.log(teacher)
            } catch (error) {
                console.log(error)
            }
        }
        getTeacher()
    },[])

    console.log(teacher)
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const reqBody = {
                name,
                username,
                email,
                image,
                bio,
                tag_line,
                location,
                accepting_students,
                years_experience
            }
            console.log(reqBody)
            console.log(id)
            await axios.patch(`${process.env.REACT_APP_SERVER_URL}/api/users/${id}/`, reqBody)
        } catch (error) {
            console.log(error)
        }
        navigate(`/teacher/${id}`)
    }

    if (id === currentUserId) {

    return(
        <form 
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto mt-8 border-2 p-4 rounded-xl drop-shadow-xl bg-white">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="name"
                    >
                        Name
                    </label>
                    
                    <input 
                        onChange={e => setName(e.target.value)}
                        value={name}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="name" 
                        type="text" 
                        placeholder="Jane Doe"
                    />
                </div>

                <div className="w-full md:w-1/2 px-3">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="email"
                    >
                        Email
                    </label>
                    
                    <input 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="email" 
                        type="text" 
                        placeholder="music@teacher.com"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="image"
                    >
                        Profile Picture
                    </label>
                    
                    <input 
                        onChange={e => setImage(e.target.value)}
                        value={image}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="image" 
                        type="text" 
                        placeholder="www.imgur.com/myprettypicture"/>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="bio"
                    >
                        Tagline
                    </label>

                    <input 
                        onChange={e => setTag_line(e.target.value)}
                        value={tag_line}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="tag_line"
                        placeholder="I am a passionate violin teacher!"
                    />
                    
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="bio"
                    >
                        Bio
                    </label>

                    <textarea 
                        onChange={e => setBio(e.target.value)}
                        value={bio}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="bio"
                        placeholder="Education, experience, awards, etc."
                    >
                    </textarea>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="location"
                    >
                        Location
                    </label>
                    
                    <input 
                        onChange={e => setLocation(e.target.value)}
                        value={location}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="location" 
                        type="text" 
                        placeholder="Albuquerque"
                    />
                </div>

                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="accepting_students">
                        new students?
                    </label>

                    <div className="relative">
                        <select 
                            onChange={e => setAccepting_students(e.target.value)}
                            value={accepting_students}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                            id="accepting_students"
                        >
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        
                        <div 
                            className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        >
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="years_experience"
                    >
                        Years experience
                    </label>

                    <input 
                        onChange={e => setYears_experience(e.target.value)}
                        value={years_experience}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"        
                        id="years_experience" 
                        type="number" 
                        min="0" 
                        placeholder="0"
                    />
                </div>
            </div>
            <button
                type='submit'
                className='inline-block border border-blue-500 rounded mt-4 mb-2 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'
            >
                Submit Edits
            </button>
        </form>
    )

} else {
    return(
     <div>
         <p>
         You do not have access to this page. Please return to the <a href='/'>home page.</a>
         </p>
     </div>
    ) 
}
}