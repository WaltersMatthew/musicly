import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function TeacherRegister(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                username: name,
                email,
                password,
                is_teacher
            }
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
        navigate('/dashboard')
    }
    return(
        <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto mt-8 border-2 p-4 rounded-xl drop-shadow-xl bg-white">
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
            <div className="w-full px-3">
                <label 
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
                    htmlFor="password"
                >
                    Password
                </label>
                
                <input 
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="password" 
                    type="password" 
                    placeholder="*******"/>
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
            Register
        </button>
    </form>
)
       
        // <section>
        //     <p>{msg}</p>
        //     <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        //         <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
        //             <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
        //                 <div className="w-full px-6 py-3">
        //                     <div>
        //                         <div className="mt-3 text-left sm:mt-5">
        //                             <div className="inline-flex items-center w-full">
        //                                 <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">Sign up</h3>
        //                             </div>

        //                             <div className="mt-4 text-base text-gray-500">
        //                                 <p>Start connecting with new students</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* FORM STARTS HERE */}
        //                     <form
        //                         onSubmit={handleSubmit} 
        //                         className="mt-6 space-y-2"
        //                     >
        //                         <div>
        //                             <label htmlFor="name" className="sr-only">Full Name</label>
        //                             <input 
        //                                 type="text" 
        //                                 name="name" 
        //                                 id="name" 
        //                                 className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" 
        //                                 placeholder="Enter your full name" 
        //                                 onChange={e => setName(e.target.value)}
        //                                 value={name}
        //                             />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="email" className="sr-only">Email</label>
        //                             <input 
        //                                 type="text" 
        //                                 name="email" 
        //                                 id="email" 
        //                                 className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" 
        //                                 placeholder="Enter your email"
        //                                 onChange={e => setEmail(e.target.value)}
        //                                 value={email}
        //                             />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="password" className="sr-only">Password</label>
        //                             <input 
        //                                 type="password" 
        //                                 name="password" 
        //                                 id="password" 
        //                                 className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" 
        //                                 placeholder="Enter your password" 
        //                                 onChange={e => setPassword(e.target.value)}
        //                                 value={password}
        //                             />
        //                         </div>
        //                         {/* SUBMIT BUTTON */}
        //                         <div className="flex flex-col mt-4 lg:space-y-2">
        //                             <button 
        //                                 type="submit" 
        //                                 className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        //                             >
        //                                 Sign up
        //                             </button>
        //                             <p className="text-sm text-gray-500">
        //                                 Already signed up?

        //                                 <a className="text-blue-500 underline" href='/login'>
        //                                     Log in
        //                                 </a>
        //                             </p>
        //                             <p className="text-sm text-gray-500">
        //                                 Not a teacher? 
                                        
        //                                 <a className="text-blue-500 underline" href='/student/register'>
        //                                     Register as a student
        //                                 </a>
        //                             </p>
        //                         </div>
        //                     </form>
        //                 </div>

        //                 <div className="order-first hidden w-full lg:block">
        //                     <img 
        //                         className="object-cover h-full bg-cover rounded-l-lg" 
        //                         src="https://cutewallpaper.org/24/conductor-pictures/181347423.jpg" 
        //                         alt="Music teacher" 
        //                     />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>

    // )
}