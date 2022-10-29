export default function Home(){
    return(
        <section className="pt-10 bg-[#F3F4F6]">
            <div className="container mx-auto">
                <div className="flex flex-wrap mx-auto">
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4 mx-auto">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-10">
                            <img
                                src="/student.png"
                                alt="music student"
                                className="w-full max-h-52"
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
                                    href="/student/register"
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
                                Create an account
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-10">
                        <img
                            src="/teacher.jpg"
                            alt="teaching music"
                            className="w-full max-h-52"
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
                                href="/teacher/register"
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
                                Sign up
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}