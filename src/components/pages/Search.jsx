import axios from 'axios'
import { useState } from 'react'

export default function Search(){
    const [teachers, setTeachers] = useState([])
    
    const getData = async e => {
        e.preventDefault()
        try {
            const response = await axios.get('/api/teachers')
            setTeachers(response.data)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    // const instrumentMap = teachers.instruments.map(instrument => {
    //     return <li>{instrument}</li>
    // }) 
    
    const teacherMap = teachers.map(teacher => {
        return(
            // Start
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <section className="overflow-hidden rounded-lg shadow-lg">

                            <a href={`/teacher/${teacher.id}`}>
                                <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                            </a>

                            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                                <h1 className="text-lg">
                                    <a className="no-underline hover:underline text-black" href={`/teacher/${teacher.id}`}>
                                       {teacher.name}
                                    </a>
                                </h1>
                            </header>

                            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                                <a className="flex items-center no-underline hover:underline text-black" href={`/teacher/${teacher.id}`}>
                                    <p className="ml-2 text-sm">
                                        {teacher.bio}
                                    </p>
                                </a>
                            </footer>
                        </section>
                    </div>
                

            // <div key={teacher.id} className="max-w-xs bg-white rounded-lg border shadow-md m-5 mx-auto">
            //     <a href={`/teacher/${teacher.id}`}>
            //         <img className="mx-auto mt-10 w-24 h-24 rounded-full shadow-lg" src="/music-teacher.jpg" alt="teacher" />
            //     </a>
            //     <div className="p-5">
            //         <a href={`/teacher/${teacher.id}`}>
            //             <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{teacher.name}</h5>
            //         </a>
            //         <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{teacher.bio}</p>
            //         <a href={`/teacher/${teacher.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            //             Book with this teacher
            //             <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            //         </a>
            //     </div>
            // </div>  
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

            <div className="container my-12 mx-auto px-4 md:px-12">
                <div className="flex flex-wrap -mx-1 lg:-mx-4">
                    {teacherMap}
                </div>
            </div>
        </div>
    )
}