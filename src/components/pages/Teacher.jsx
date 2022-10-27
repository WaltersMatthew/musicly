import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Teacher(){
    const [teacher, setTeacher] = useState()
    
    const { id } = useParams()
    
    useEffect(() =>{
        const getTeacher = async () => {
            try {
                const response = await axios.get(`/api/teachers/${id}`)
                setTeacher(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getTeacher()
    })

    return(
        <div>
            <p className='text-xl m-10'></p>
        </div>
    )
}