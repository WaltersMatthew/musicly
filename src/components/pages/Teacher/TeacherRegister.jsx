import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function TeacherRegister(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

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
            await axios.post('http://localhost:8000/api/users/', reqBody)
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
        <section>
            <p>{msg}</p>
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
                <div className="justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full">
                    <div className="grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl">
                        <div className="w-full px-6 py-3">
                            <div>
                                <div className="mt-3 text-left sm:mt-5">
                                    <div className="inline-flex items-center w-full">
                                        <h3 className="text-lg font-bold text-neutral-600 l eading-6 lg:text-5xl">Sign up</h3>
                                    </div>

                                    <div className="mt-4 text-base text-gray-500">
                                        <p>Start connecting with new students</p>
                                    </div>
                                </div>
                            </div>
                            {/* FORM STARTS HERE */}
                            <form
                                onSubmit={handleSubmit} 
                                className="mt-6 space-y-2"
                            >
                                <div>
                                    <label htmlFor="name" className="sr-only">Full Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" 
                                        placeholder="Enter your full name" 
                                        onChange={e => setName(e.target.value)}
                                        value={name}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input 
                                        type="text" 
                                        name="email" 
                                        id="email" 
                                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" 
                                        placeholder="Enter your email"
                                        onChange={e => setEmail(e.target.value)}
                                        value={email}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" 
                                        placeholder="Enter your password" 
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}
                                    />
                                </div>
                                {/* SUBMIT BUTTON */}
                                <div className="flex flex-col mt-4 lg:space-y-2">
                                    <button 
                                        type="submit" 
                                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Sign up
                                    </button>
                                    <p className="text-sm text-gray-500">
                                        Already signed up?

                                        <a className="text-blue-500 underline" href='/login'>
                                            Log in
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Not a teacher? 
                                        
                                        <a className="text-blue-500 underline" href='/student/register'>
                                            Register as a student
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className="order-first hidden w-full lg:block">
                            <img 
                                className="object-cover h-full bg-cover rounded-l-lg" 
                                src="/conductor.jpg" 
                                alt="Music teacher" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}