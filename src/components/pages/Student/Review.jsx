import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Review(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [rating, setRating] = useState(0)

    const { id } = useParams()
    const navigate = useNavigate()
    const currentUserId = localStorage.getItem('id')

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const reqBody = {
                title,
                content,
                rating,
                author: currentUserId,
                teacher: id
            }
            console.log(reqBody)
            await axios.post('http://localhost:8000/api/reviews', reqBody)

        } catch(err) {
            console.log(err)
        }
        navigate(`/teacher/${id}`)


    }
    

    return(
        <form onSubmit={handleSubmit} className="mx-auto mt-10 border p-10 bg-white rounded-lg shadow-lg w-full max-w-lg">

        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="inquiry_content">
                    Review Title
                </label>

                <input 
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="title" 
                    type="text" 
                    placeholder="Write a short title for your review"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="availability">
                    Review Content
                </label>

                <input 
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="content" 
                    type="text" 
                    placeholder="Write your review here"
                    onChange={e => setContent(e.target.value)}
                    value={content}
                />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone_nuber">
                    Rating
                </label>
                
                <input 
                    required
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
                    id="rating" 
                    type="integer" 
                    // placeholder="805-555-5555"
                    onChange={e => setRating(e.target.value)}
                    value={rating}
                />
                
            </div>
            
            <button type='submit' className="inline-block border border-blue-500 rounded py-2 px-10 my-4
            -mb-10 bg-blue-500 hover:bg-blue-700 mx-auto text-white transition duration-150 ease-in-out">Submit</button>
        </div>
    </form>
    )
}