import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate()
    
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const reqBody = {
                email,
                password
            }
            const response = await axios.get('http://localhost:8000/api/users/', reqBody)
            for(let i = 0; i < response.data.length; i++){
                if (email == response.data[i].email){
                    window.localStorage.setItem('id', response.data[i].id)
                    if(response.data[i].is_teacher == true){
                        window.localStorage.setItem('isTeacher', 'teacher')
                        navigate(`/teacher/${response.data[i].id}/dashboard`)
                        window.location.reload()
                    }
                    else{
                        window.localStorage.setItem('isTeacher', 'student')
                        // do a force page reload
                        navigate(`/search`)
                        window.location.reload()
                    }
                }
                else{
                    setMsg('Your username or password are incorrect, please try again')
                }
            }
        }catch(err){
            console.log(err.message)
        }

    }

    return(
        <section>
            <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Sign in to your account</h2>
                    <p>{msg}</p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="border-2 shadow-xl rounded-xl px-4 py-8 sm:px-10">
                        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email address </label>
                                <div className="mt-1">
                                    <input 
                                        id="email" 
                                        name="email" 
                                        type="email" 
                                        required="" 
                                        onChange={e => setEmail(e.target.value)}
                                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
                                <div className="mt-1">
                                    <input 
                                        id="password" 
                                        name="password" 
                                        type="password"  
                                        required="" 
                                        onChange={e => setPassword(e.target.value)}
                                        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-center">
                                    <div className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                                        <button type="submit" className="mx-auto rounded mr-1 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-10 transition duration-150 ease-in-out">
                                                Log in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </section>
    )
}