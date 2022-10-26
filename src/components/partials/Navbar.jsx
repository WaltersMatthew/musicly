import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className='bg-white'>
            <ul className='flex justify-between'>
                <li className='m-3'>
                    <Link 
                        className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white'
                        to='/search'
                        >
                        Search Teachers
                    </Link>
                </li>

                <li className='m-3 flex inline'>
                    <Link
                        className='flex inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 text-2xl font-bold' 
                        to='/'
                        >
                        <img 
                            src='/favicon.ico' 
                            width='30px'
                            className='mr-3'
                            alt='8th note logo'
                            /> 
                        Musicly
                    </Link>
                </li>

                <li className='m-3'>
                    <Link
                        className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white'
                        to='/login'
                    >
                        Log in
                    </Link>
                </li>
            </ul>
        </nav>
    )
}