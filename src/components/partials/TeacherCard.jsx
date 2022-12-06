import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar(props){
    const location = useLocation()
    const { from } = location.state
return(
    <div key={props.id} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <section className="overflow-hidden rounded-lg shadow-lg">

                    <a href={`/teacher/${props.id}`}>
                        <img alt="Your teacher" className="max-h-60 max-w-sm block h-auto w-full" src={props.image}/>
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg ml-2">
                            <Link
                                className="no-underline hover:underline text-black" 
                                to={{
                                    pathname: `/teacher/${props.id}`,
                                    state: {
                                        id: props.id,
                                        image: props.image,
                                        name: props.name,
                                        tag_line: props.tag_line,
                                        years_experience: props.years_experience,
                                        average_rating: props.average_rating,
                                        location: props.location,
                                        accepting_students: props.accepting_students

                                    }
                                }}
                            >
                            </Link>
                            {props.name}
                        </h1>
                    </header>

                    <footer className="items-center justify-between leading-none p-2">
                        <a className="items-center no-underline hover:underline text-black" href={`/teacher/${props.id}`}>
                            <p className='ml-2'>
                                {props.tag_line}
                            </p>
                            <br/>
                            <p className="ml-2 mb-2 text-sm">
                                Years Experience: {props.years_experience}
                            </p>
                            <p className='ml-2 mb-2 text-sm'>Average Rating: {props.average_rating}</p>
                            <p className='ml-2 mb-2 text-sm'>Location: {props.location}</p>
                            <p className='ml-2 mb-2 text-sm'>Accepting new students? {props.accepting_students ? '✅' : '🚫'}</p>
                        </a>
                    </footer>
                </section>
            </div>
)
}