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
            <div key={teacher.id}>
               <p>{teacher.name}</p>
               <p>{teacher.email}</p> 
               <p>{teacher.bio}</p>
               <p>Years of experience: {teacher.years_experience}</p>
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