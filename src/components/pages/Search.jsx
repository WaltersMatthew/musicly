import axios from 'axios'
import { useState } from 'react'

export default function Search(){
    const [teachers, setTeachers] = useState([])
    
    const getData = async e => {
        e.preventDefault()
        try {
            const response = await axios.get('/api/teachers')
            setTeachers(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    
    const teacherMap = teachers.map(teacher => {
        return(
            <div key={teacher.id} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href={`/teacher/${teacher.id}`}>
                    <img className="rounded-t-lg" src="/music-teacher.jpg" alt="teacher" />
                </a>
                <div className="p-5">
                    <a href={`/teacher/${teacher.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{teacher.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{teacher.bio}</p>
                    <a href={`/teacher/${teacher.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Book with this teacher
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>  
        )
    })



    return(
        <div>
            <form className="w-full max-w-sm mx-auto mt-20">
                <div className="flex items-center border-b border-teal-500 py-2">
                    <label htmlFor="search"></label>
                    <input 
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
                        name="search"
                        type="text" 
                        placeholder="Trombone" 
                        />

                    <button 
                        onClick={getData}
                        className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit"
                        >
                        Search
                    </button>
                </div>
            </form>

            <div>
                {teacherMap}
            </div>
        </div>
    )
}