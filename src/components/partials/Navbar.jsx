import { Link } from 'react-router-dom'

export default function Navbar(){
    
    const id = localStorage.getItem('id')

    const logOut = () =>{
        localStorage.removeItem('id')

    }

    const loggedOut =(
        <ul className='flex justify-between'>
            <li className='m-3'>
                <Link 
                    className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'
                    to='/search'
                    >
                    Search Teachers
                </Link>
            </li>

            <li className='m-3 flex inline'>
                <Link
                    className='flex inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 text-2xl font-bold transition duration-150 ease-in-out' 
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
                    to='/login'
                >
                    Log in
                </Link>
            </li>
        </ul>
    )
    const loggedIn = (window.localStorage.getItem('isTeacher') == 'teacher') 
        ?
            <ul className='flex justify-between'>
                <li className='m-3'>
                    <Link 
                        className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'
                        to={`/teacher/${id}/dashboard`}
                        >
                        My Dashboard
                    </Link>
                </li>

                <li className='m-3 flex inline'>
                    <Link
                        className='flex inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 text-2xl font-bold transition duration-150 ease-in-out' 
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
                        to='/'
                        
                    >
                        <span onClick={logOut}>Log out</span>
                    </Link>
                </li>
            </ul>
        :
            <ul className='flex justify-between'>
                <li className='m-3'>
                    <Link 
                        className='inline-block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white transition duration-150 ease-in-out'
                        to={`/search`}
                        >
                        Search Teachers
                    </Link>
                </li>

                <li className='m-3 flex inline'>
                    <Link
                        className='flex inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 text-2xl font-bold transition duration-150 ease-in-out' 
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
                        to='/'
                        
                    >
                        <span onClick={logOut}>Log out</span>
                    </Link>
                </li>
            </ul>
    
    return(
        <nav className='bg-white'>
            {localStorage.id ? loggedIn : loggedOut}
        </nav>
    )
}