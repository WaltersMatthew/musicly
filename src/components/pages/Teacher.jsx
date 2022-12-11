import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams, useLocation} from 'react-router-dom'

export default function Teacher(props){
    // const location = useLocation()
    // const { from } = location.state

    const [teacher, setTeacher] = useState()
    const [reviews, setReviews] = useState()
    // const [email, setEmail] = useState()
    // const [image, setImage] = useState()
    // const [tagline, setTagline] = useState()
    // const [bio, setBio] = useState()
    // const [yearsExperience, setYearsExperience] = useState()
    // const [acceptingStudents, setAccceptingStudents] = useState()
    // const [instruments, setInstruments] = useState()
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
    // useEffect(() =>{
    //     const getTeacher = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/users/${id}/`)
    //             setTeacher(response.data)
    //             // console.log(response.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getTeacher()
    // },[])

    // useEffect(() =>{
    //     const getReviews = async () => {
    //         try {
    //             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/reviews/`)
    //             setReviews(response.data)
    //             // console.log(response.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getReviews()
    // },[])

    // if (teacher.instruments) {
    //     setInstruments(teacher.instruments)
    // }

    const teacherId = localStorage.getItem('id')
    
    // mapping of reviews in process!!
    // if (reviews) {
    //     currentTeacherReviews = reviews.map(review => {
    //         if (review.teacher === id) {
    //             let stars = 0
    //             console.log(review)
    //             if(reviews){
    //                 if(review.rating === 5){ 
    //                     stars = '⭐️⭐️⭐️⭐️⭐️'
    //                 }else if (review.rating === 4) {
    //                     stars = '⭐️⭐️⭐️⭐️'
    //                 }else if (review.rating === 3){
    //                     stars = '⭐️⭐️⭐️'
    //                 }else if (review.rating === 2){
    //                     stars = '⭐️⭐️'
    //                 }else if (review.rating === 1){
    //                     stars = '⭐️'
    //                 }
    //             }
                                
    //             return(
    //                 <div 
    //                     key={`review${review.id}`}
    //                     className='border m-2 bg-white drop-shadow-lg p-2 rounded-xl'
    //                 >
    //                     <div>
    //                         {stars}
    //                         <h1 className='font-bold'>
    //                             {review.title}
    //                         </h1>
    //                         <p>
    //                             {review.content}
    //                         </p>
    //                     </div>
    //                 </div>
    
    
    // )
// }
// })
// }

console.log(props)
return(
    <section className="bg-blueGray-50">
            <div className="w-full sm:w-10/12 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-10">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center">
                                <div className='flex justify-center'>
                                    <img 
                                        alt="Teacher" 
                                        src='https://media.istockphoto.com/id/1144287292/photo/headshot-portrait-of-happy-mixed-race-african-girl-wearing-glasses.jpg?s=612x612&w=0&k=20&c=cdW-kkerUEhV80xLvE-Jg8Zpf4sR5YTR2YiH3K5IkNQ='
                                        className="shadow-xl rounded-full h-auto align-middle -mt-6 border-none md:max-w-sm xs:max-w-xs" 
                                        />
                                </div>
                            </div>
                            <div className="w-full px-4 text-center mt-0">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            17
                                        </span>
                                        <span className="text-sm text-blueGray-400">Years experience</span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            4.7/5
                                        </span>
                                        <span className="text-sm text-blueGray-400">
                                            Average rating
                                        </span>
                                    </div>
                                    <div className="lg:mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                            ✅
                                        </span>
                                        <span className="text-sm text-blueGray-400">
                                            Accepting students
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <h3 className="text-3xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                Lorraine Jones
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                Riverside, CA
                            </div>
                            <div className="mb-2 text-blueGray-600 mt-10">
                                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                Now teaching: Trumpet, Saxaphone
                            </div>
                            <div>
                                    <button  className='inline-block border border-blue-500 rounded py-2 my-4 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'>
                                        Lesson inquiry
                                    </button>
                                </div>
                                <div>
                                    <button  className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'>
                                        Leave a review
                                    </button>
                                </div>
                        </div>
                        <div className='flex justify-center mb-4 py-1 border-b'>
                                <h1 className='text-2xl mt-4'>Bio</h1>
                            </div>
                        <div className="mt-1 py-1 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12">
                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className='mx-auto flex justify-center'>
                            <a href={`/teacher/${id}/edit`} className={teacherId === id ? 'inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 mb-6  text-white transition duration-150 ease-in-out' : 'hidden'}>
                                        Edit my profile
                            </a>
                        </div>
                        <div>
                            <div className='flex justify-center mb-4 border-b'>
                                <h1 className='text-2xl'>Reviews</h1>
                            </div>
                            <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10'>
                                <li className='border p-2 rounded-lg'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                </li>
                                <li className='border p-2 rounded-lg'>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </li>
                                <li className='border p-2 rounded-lg'>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </li>
                                <li className='border p-2 rounded-lg'>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

)
}
{/* <ul className="flex justify-center">
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
</ul> */}