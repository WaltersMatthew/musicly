import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <nav>
            <p>Musicly</p>
            <Link to=''>Home</Link>
            <> | </>
            <Link to='/search'>Search Teachers</Link>
            <> | </>
            <Link to='/login'>Log in</Link>
        </nav>
    )
}