export default function Home(){
    return(
        <section className="pt-10 bg-[#F3F4F6]">
            <div className="container mx-auto">
                <div className="flex flex-wrap mx-auto">
                    <div className="w-full md:w-1/2 xl:w-1/2 px-4 mx-auto">
                        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-10">
                            <img
                                src="https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-08/musical-kid-te-220822-cbd13d.jpg"
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
                            src="data:image/jpeg;base64,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"
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