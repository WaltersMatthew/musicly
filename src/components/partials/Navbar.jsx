import { Link } from 'react-router-dom'

export default function Navbar(){    
    return(
        <nav className='bg-white'>
        <ul className='flex justify-between'>
            <li className='ml-3 mt-3'>
                <Link 
                    className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'
                    to='/search'
                    >
                    <p className=''>Search Teachers</p>
                </Link>
            </li>

            <li className='mr-3 mt-3 flex inline'>
                <Link
                    className='my-3 sm:my-0 flex inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 text-2xl font-bold transition duration-150 ease-in-out' 
                    to='/'
                    >
                    <img 
                        src='/favicon.ico' 
                        width='30px'
                        className='mr-3 md:max-w-10'
                        alt='8th note logo'
                        /> 
                    Musicly
                </Link>
            </li>

            <li className='m-3'>
                <Link
                    className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'
                    to='/teacher/1/dashboard'
                >
                    Lesson Home
                </Link>
            </li>
        </ul>
            
        </nav>
    )
}