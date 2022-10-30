import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Teacher(){
    const [teacher, setTeacher] = useState()
    const [reviews, setReviews] = useState()
    // const [email, setEmail] = useState()
    // const [image, setImage] = useState()
    // const [tagline, setTagline] = useState()
    // const [bio, setBio] = useState()
    // const [yearsExperience, setYearsExperience] = useState()
    // const [acceptingStudents, setAccceptingStudents] = useState()
    const [instruments, setInstruments] = useState()
    // const [location, setLocation] = useState()
    let currentTeacherReviews = null
    const { id } = useParams()
    const editButton = (
        <div>
            <Link
                to='/teacher/:id/edit'
            />
        </div>
    )
    useEffect(() =>{
        const getTeacher = async () => {
            try {
                const response = await axios.get(`/api/users/${id}/`)
                setTeacher(response.data)
                // console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getTeacher()
    },[])

    useEffect(() =>{
        const getReviews = async () => {
            try {
                const response = await axios.get(`/api/reviews/`)
                setReviews(response.data)
                // console.log(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getReviews()
    },[])

    // if (teacher.instruments) {
    //     setInstruments(teacher.instruments)
    // }

    const teacherId = localStorage.getItem('id')



// mapping of reviewsin process!!
    if (reviews) {
        currentTeacherReviews = reviews.map(review => {
            if (review.teacher == id) {
                return(
                    <div key={`review${review.id}`}>
    
                    <ul className="flex justify-center">
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                      </svg>
                    </li>
                    <li>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" className="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                      </svg>
                    </li>
                  </ul>
                  <div>
                    <h1>
                        {review.title}
                    </h1>
                    <p>
                        {review.content}
                    </p>
                  </div>
                    </div>
    
    
                )
            }
        })
    }


    return(
        <section className="bg-blueGray-50">
            <div className="w-full lg:w-10/12 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className='flex justify-center'>
                                    <img 
                                        alt="Teacher" 
                                        src={teacher ? teacher.image : 'http://www.placecorgi.com/200/200'} 
                                        className="shadow-xl rounded-full h-auto align-middle -mt-6 border-none  max-w-150-px" 
                                    />
                                </div>
                            </div>
                            <div className="w-full px-4 text-center mt-0">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {teacher ? teacher.years_experience : 'hello'}
                                        </span>
                                        <span className="text-sm text-blueGray-400">Years experience</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {teacher ? teacher.average_rating : ''}/5
                                        </span>
                                        <span className="text-sm text-blueGray-400">
                                            Average rating
                                        </span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            {teacher ? teacher.accepting_students ? `✅` :`🚫` : ''}
                                        </span>
                                        <span className="text-sm text-blueGray-400">
                                            Accepting students
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                {teacher ? teacher.name : ''}
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                {teacher ? teacher.location : ''}
                            </div>
                            <div className="mb-2 text-blueGray-600 mt-10">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                Now teaching: fjkdlfd
                            </div>
                            <div>
                                    <a href={`/teacher/${id}/inquiry`}>
                                        <button  className='inline-block border border-blue-500 rounded py-2 my-4 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'>
                                            Lesson inquiry
                                        </button>
                                    </a>
                                </div>
                                <div>
                                    <a href={`/teacher/${id}/review`}>
                                        <button  className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'>
                                            Leave a review
                                        </button>
                                    </a>
                                </div>
                        </div>
                        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4">
                                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                        {teacher ? teacher.bio: ''} 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto'>
                            <a href={`/teacher/${id}/edit`} className={teacherId === id ? 'inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 mb-6  text-white transition duration-150 ease-in-out' : 'hidden'}>
                                        Edit my profile
                            </a>
                        </div>
                        <div>
                            <div className='flex justify-center mb-4 border-b'>
                                <h1 className='text-2xl'>Reviews</h1>
                            </div>
                            {currentTeacherReviews ? currentTeacherReviews : '' }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}