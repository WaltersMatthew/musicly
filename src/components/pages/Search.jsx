import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Search(){
    const [teachers, setTeachers] = useState([])
    const [input, setInput] = useState('')
    
    
    useEffect(() =>{
        const getTeachers = async () =>{
            try {
                const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/`)
                setTeachers(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getTeachers()
    },[])
    
    const getData = async e => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/`)
            console.log(response.data)
            setTeachers(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const teacherMap = teachers.map(teacher => {
        if (teacher.is_teacher === true)
        return(
            <div key={teacher.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <section className="overflow-hidden rounded-lg shadow-lg">

                    <a href={`/teacher/${teacher.id}`}>
                        <img alt="Your teacher" className="max-h-60 max-w-sm block h-auto w-full" src={teacher.image}/>
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg ml-2">
                            <a className="no-underline hover:underline text-black" href={`/teacher/${teacher.id}`}>
                                {teacher.name}
                            </a>
                        </h1>
                    </header>

                    <footer className="items-center justify-between leading-none p-2">
                        <a className="items-center no-underline hover:underline text-black" href={`/teacher/${teacher.id}`}>
                            <p className='ml-2'>
                                {teacher.tag_line}
                            </p>
                            <br/>
                            <p className="ml-2 mb-2 text-sm">
                                Years Experience: {teacher.years_experience}
                            </p>
                            <p className='ml-2 mb-2 text-sm'>Average Rating: {teacher.average_rating}</p>
                            <p className='ml-2 mb-2 text-sm'>Location: {teacher.location}</p>
                            <p className='ml-2 mb-2 text-sm'>Accepting new students? {teacher.accepting_students ? '✅' : '🚫'}</p>
                        </a>
                    </footer>
                </section>
            </div>
        )
    })



    return(
        <div>
            {/* <form className="w-full max-w-sm mx-auto mt-20">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <label htmlFor="search"></label>
                    <input 
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                        name="search"
                        type="text" 
                        placeholder="Trombone"
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        />

                    <button 
                        onClick={() => getData()}
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" 
                        type="submit"
                        >
                        Search
                    </button>
                </div>
            </form> */}

            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {teacherMap}
                </div>
            </div>
        </div>
    )
}