// import axios from 'axios'
// import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TeacherCard from '../partials/TeacherCard'

export default function Search(){
    // const [teachers, setTeachers] = useState([])
    // const [input, setInput] = useState('')
    const location = {
        pathname: '/search'
    }
    // ** useEffect to hit backend API **

    // useEffect(() =>{
    //     const getTeachers = async () =>{
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/`)
    //             setTeachers(response.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getTeachers()
    // },[])
    
    // const getData = async e => {
    //     try {
    //         const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/`)
    //         console.log(response.data)
    //         setTeachers(response.data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // *** Teacher map for fullstack data ***

    // const teacherMap = teachers.map(teacher => {
    //     if (teacher.is_teacher === true)
    //     return(
    //         <div key={teacher.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
    //             <section className="overflow-hidden rounded-lg shadow-lg">

    //                 <a href={`/teacher/${teacher.id}`}>
    //                     <img alt="Your teacher" className="max-h-60 max-w-sm block h-auto w-full" src={teacher.image}/>
    //                 </a>

    //                 <header className="flex items-center justify-between leading-tight p-2 md:p-4">
    //                     <h1 className="text-lg ml-2">
    //                         <a className="no-underline hover:underline text-black" href={`/teacher/${teacher.id}`}>
    //                             {teacher.name}
    //                         </a>
    //                     </h1>
    //                 </header>

    //                 <footer className="items-center justify-between leading-none p-2">
    //                     <a className="items-center no-underline hover:underline text-black" href={`/teacher/${teacher.id}`}>
    //                         <p className='ml-2'>
    //                             {teacher.tag_line}
    //                         </p>
    //                         <br/>
    //                         <p className="ml-2 mb-2 text-sm">
    //                             Years Experience: {teacher.years_experience}
    //                         </p>
    //                         <p className='ml-2 mb-2 text-sm'>Average Rating: {teacher.average_rating}</p>
    //                         <p className='ml-2 mb-2 text-sm'>Location: {teacher.location}</p>
    //                         <p className='ml-2 mb-2 text-sm'>Accepting new students? {teacher.accepting_students ? '✅' : '🚫'}</p>
    //                     </a>
    //                 </footer>
    //             </section>
    //         </div>
    //     )
    // })



    return(
        <div>
            {/* ** SEARCH BAR ** */}

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
                    <TeacherCard 
                        id = {1}
                        name = {"Walt Flannigan"}
                        image = {`data:image/jpeg;base64,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`}
                        tag_line = {"You can learn anything with the right tools!"}
                        years_experience = {12}
                        average_rating = {4.3}
                        location = {"Los Angeles"}
                        accepting_students = {true}
                    />
                    <TeacherCard 
                        id = {2}
                        name = {"Kristen Bell"}
                        image = {`https://media.istockphoto.com/id/1305462782/photo/front-view-portrait-of-a-spanish-beautiful-woman.jpg?b=1&s=170667a&w=0&k=20&c=R6tFTI3y10lRGWbMsFfTMKYmxeGDoNIZmLKKeBuyrOg=`}
                        tag_line = {"Music is the heart's love letter to the ears."}
                        years_experience = {17}
                        average_rating = {3.2}
                        location = {"Minneapolis"}
                        accepting_students = {false}
                    />
                    <TeacherCard 
                        id = {3}
                        name = {"Pierre Thomas"}
                        image = {`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiy8ps6hKVVBPypvdXZCh5V8x-tZ-9-VqTvg&usqp=CAU`}
                        tag_line = {"Drums are the soul of the band!"}
                        years_experience = {24}
                        average_rating = {4.7}
                        location = {"Boston"}
                        accepting_students = {true}
                    />
                </div>
            </div>
        </div>
    )
}