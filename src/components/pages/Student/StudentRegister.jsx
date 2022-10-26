import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function StudentRegister(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async e =>{
        e.preventDefault()
        try{
            const reqBody = {
                name,
                email,
                password
            }
            await axios.post('http://localhost:8000/api/students/', reqBody)
        }catch(err){
            console.log(err)
            if (err.response){
                setMsg(err.response.data.msg)
            }
        }
        navigate('/search')
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
                                        <p>Find your perfect teacher</p>
                                    </div>
                                </div>
                            </div>
                            {/* FORM STARTS HERE */}
                            <form onSubmit={handleSubmit} className="mt-6 space-y-2">
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
                                    <label htmlFor="username" className="sr-only">Username</label>
                                    <input 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" 
                                    placeholder="Create a username"
                                    onChange={e => setUsername(e.target.value)}
                                    value={username}
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
                                        placeholder="Create your password" 
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
                                        Not a student?  
                                        
                                        <a className="text-blue-500 underline" href='/student/register'>
                                             Register as a teacher
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className="order-first hidden w-full lg:block">
                            <img 
                                className="object-cover h-full bg-cover rounded-l-lg" 
                                src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" 
                                alt="music student" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}