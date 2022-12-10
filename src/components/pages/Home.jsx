import { useState } from "react"
export default function Home(){
    const [teacherOne] = useState({
        
    })
    return(
        <section className="pt-10 bg-[#F3F4F6]">
            {/* <div className="container mx-auto flex justify-center"> */}
                {/* card wrapper */}
                <div className="flex flex-wrap xl:px-60 justify-around">
                    {/* CARD 1 */}
                    <div className="w-full md:w-1/2 xl:w-2/5 xl:gap-x-5 px-4">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/musical-kid-te-220822-cbd13d.jpg"
                                alt="music student"
                                className="w-full max-h-60"
                                />
                            
                            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                <h3
                                    className="
                                    font-semibold
                                    text-dark text-xl
                                    sm:text-[22px]
                                    md:text-xl
                                    lg:text-[22px]
                                    xl:text-xl
                                    2xl:text-[22px]
                                    mb-4
                                    block
                                    hover:text-primary
                                    "
                                >
                                    Students    
                                </h3>

                                <p className="text-base text-body-color leading-relaxed mb-7">
                                    Sign up and find the an experienced teacher to help you to take your skills to the next level.  
                                </p>
                                <a
                                    href="/search"
                                    className="
                                    inline-block
                                    py-2
                                    px-7
                                    border border-[#E5E7EB]
                                    rounded-full
                                    text-base text-body-color
                                    font-medium
                                    hover:border-primary hover:bg-blue-500 hover:text-white
                                    transition
                                    "
                                    >
                                See the Student route
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="w-full md:w-1/2 xl:w-2/5 px-4">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-10">
                        <img
                            src="https://www.cmuse.org/wp-content/uploads/2016/05/music-teacher.jpg"
                            alt="teaching music"
                            className="w-full max-h-60"
                            />
                        <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3
                                className="
                                font-semibold
                                text-dark text-xl
                                sm:text-[22px]
                                md:text-xl
                                lg:text-[22px]
                                xl:text-xl
                                2xl:text-[22px]
                                mb-4
                                block
                                hover:text-primary
                                "
                            >
                                Teachers
                            </h3>

                            <p className="text-base text-body-color leading-relaxed mb-7">
                                Create your account today to start connecting with students all over the country
                            </p>

                            <a
                                href="teacher/1/dashboard"
                                className="
                                inline-block
                                py-2
                                px-7
                                border border-[#E5E7EB]
                                rounded-full
                                text-base text-body-color
                                font-medium
                                hover:border-primary hover:bg-blue-500 hover:text-white
                                transition
                                "
                            >
                                See the Teacher route
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )
}