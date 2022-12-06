import axios from 'axios'
import TeacherCard from '../partials/TeacherCard'
import { useState, useEffect } from 'react'

export default function Search(){
    const [teachers, setTeachers] = useState([])
    const [input, setInput] = useState('')
    
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
                        name = {"Mike Flannigan"}
                        image = {`https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80`}
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