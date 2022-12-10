import axios from "axios"
import Inquiry from "./Inquiry"
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"


export default function Dashboard(){
    const [inquiries, setInquiries] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    const currentUserId = localStorage.getItem('id')


    // let inquiries = []
    // useEffect(()=>{
    //     const getInquiries = async () =>{
    //         try{
    //             const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/inquiries/`)
    //             setInquiries(response.data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
        // getInquiries()
//working out this function to post to the api on checkbox click
    //     const updateViewed = async () => {
    //         try {
    //             const reqBody = {
    //                 viewed: true
    //             }
    //             await axios.put(`${process.env.REACT_APP_SERVER_URL}/api/inquiries/`, reqBody)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // },[])
    // console.log(inquiries)
    
    // const checkedBox =  async (id) => {
    //     try{
    //         const reqBody = {
    //             viewed: true,
    //         }
    //         console.log( 'does this do anything?')
    //         await axios.put(`/api/inquiries/${id}/`, reqBody)
    //     }catch(err){
    //         console.log(err.response.data)
    //     }
    // }

    // if (id === currentUserId) {

//     const unreadMap = inquiries.map(inquiry =>{
//         if (inquiry.preferred_teacher == id && inquiry.viewed == false){
//             return(
//                 <div key={`key${inquiry.id}`}>
//                 <div className="block p-6 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md  hover:bg-gray-100">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
//                         {inquiry.student_name}
//                     </h5>
                    
//                     <ul className="font-normal text-gray-700">
//                         <li>
//                             <span className='font-bold'>
//                                 Email: </span>
//                             {inquiry.email}
//                         </li>

//                         <li>
//                             <span className='font-bold'>
//                                 Phone: </span>
//                             {inquiry.phone_number}
//                         </li>

//                         <li>
//                             <span className='font-bold'>
//                                 Instrument: </span>
//                             {inquiry.instrument}
//                         </li>

//                         <li>
//                             <span className='font-bold'>
//                                 Availability: </span> 
//                             {inquiry.availability}
//                         </li>

//                         <li>
//                             <span className='font-bold'>Inquiry content: </span>{inquiry.content}
//                         </li>
//                     </ul>

//                     <div className="flex justify-end">
//                         <label htmlFor="checked-checkbox" className="mr-2 text-sm font-medium text-gray-900">Contacted</label>
                        
//                         <input 
//                             type="checkbox" 
//                             onChange={() => checkedBox(inquiry.id)}
//                             className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
//                     </div>
//                 </div>  
//             </div> 
//             )
//         }
//     })

//     const readMap = inquiries.map(inquiry =>{
//         if (inquiry.preferred_teacher == id && inquiry.viewed == true){
//             return(
//                 <div key={`key${inquiry.id}`}>
//                 <div className="block p-6 max-w-sm mx-auto bg-white rounded-lg border border-gray-200 shadow-md  hover:bg-gray-100">
//                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
//                         {inquiry.student_name}
//                     </h5>
                    
//                     <ul className="font-normal text-gray-700">
//                         <li>
//                             <span className='font-bold'>
//                                 Email: </span>
//                             {inquiry.email}
//                         </li>

//                         <li>
//                             <span className='font-bold'>
//                                 Phone: </span>
//                             {inquiry.phone_number}
//                         </li>

//                         <li>
//                             <span className='font-bold'>
//                                 Instrument: </span>
//                             {inquiry.instrument}
//                         </li>

//                         <li>
//                             <span className='font-bold'>
//                                 Availability: </span> 
//                             {inquiry.availability}
//                         </li>

//                         <li>
//                             <span className='font-bold'>Inquiry content: </span>{inquiry.content}
//                         </li>
//                     </ul>

//                     <div className="flex justify-end">
//                         <label htmlFor="checked-checkbox" className="mr-2 text-sm font-medium text-gray-900">Contacted</label>
                        
//                         <input type="checkbox" value="" readOnly checked className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
//                     </div>
//                 </div>  
//             </div> 
//             )
//         }
//     })



    return(
        <>
        <p className="flex justify-center mt-6 text-6xl">Lesson inquiries</p>
        <div className="flex justify-center">
            <Inquiry 
                id={1}
                student_name= {"Miguel Guaderrama"}
                email={'fasthands123@gmail.com'}
                phone_number={'555-123-4567'}
                instrument={'Tenors'}
                availability={'m-f 8-5'}
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            />
            
            <Inquiry 
                id={2}
                student_name= {"Caleb Gasteiger"}
                email={'dropthebass@gmail.com'}
                phone_number={'555-123-4567'}
                instrument={'Bass'}
                availability={'Tuesday 3-7'}
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'}
            />

            <Inquiry 
                id={1}
                student_name= {"Stephanie Vasilakis"}
                email={'ladydrummer@gmail.com'}
                phone_number={'555-123-4567'}
                instrument={'Snare'}
                availability={'F,Sat,Sun all day'}
                content={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.'}
            />
        </div>
        </>
    )
}
