import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function TeacherRegister(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [image, setImage] = useState('')
    const [bio, setBio] = useState('')
    const [instruments_teach, setInstruments_teach] = useState('')
    const [location, setLocation] = useState('')
    const [accepting_students, setAccepting_students] = useState('')
    const [years_experience, setYears_experience] = useState('')
    const [msg, setMsg] = useState('')
    const [id, setId] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async e =>{
        e.preventDefault()
        const is_teacher = true
        try{
            const reqBody = {
                name,
                email,
                password,
                username,
                image,
                bio,
                instruments_teach,
                location,
                // accepting_students,
                years_experience,
                is_teacher
            }
            console.log(reqBody)
            await axios.post(`http://localhost:8000/api/users/`, reqBody)

            const teacherResponse = await axios.get(`http://localhost:8000/api/users/`)
            window.localStorage.setItem('isTeacher', 'teacher')
            console.log(teacherResponse.data)
            await teacherResponse.data.map(user => {
                if (user.email === email) {
                    window.localStorage.setItem('id', user.id)
                }
            })
            // console.log(reqBody)
        }catch(err){
            console.log(err)
            if (err.response){
                setMsg(err.response.data.msg)
            }
        }
        navigate('/search')
        window.location.reload()
    }
    return(
        
        <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto mt-8 border-2 p-4 rounded-xl drop-shadow-xl bg-white">
        {msg}
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
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
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="password"
                    >
                        password
                    </label>
                    
                    <input 
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                        id="password" 
                        type="password" 
                        placeholder="******"
                    />
                </div>

                <div className="w-full md:w-1/2 px-3">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="username"
                    >
                        Username
                    </label>
                    
                    <input 
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="username" 
                        type="text" 
                        placeholder="MisterMaestro"
                    />
                </div>
            </div>
            
            <div className="flex flex-wrap -mx-3 mb-2">
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
            <div className="flex flex-wrap -mx-3 mb-2">
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
                <div className="w-full px-3">
                    <label 
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                        htmlFor="instruments"
                    >
                        Instruments you teach
                    </label>
                    
                    <input 
                        onChange={e => setInstruments_teach(e.target.value)}
                        value={instruments_teach}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                        id="instruments_teach" 
                        type="text" 
                        placeholder="guitar, drums, trombone, voice, etc."/>
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
                Register
            </button>
        </form>
    )
}