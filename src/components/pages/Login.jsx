export default function Login(){
    return(
        <section>
            <div className="flex flex-col justify-center min- py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-neutral-600">Sign in to your account</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="border-2 px-4 py-8 sm:px-10">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label for="email" className="block text-sm font-medium text-gray-700"> Email address </label>
                                <div className="mt-1">
                                    <input id="email" name="email" type="email" autocomplete="email" required="" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>

                            <div>
                                <label for="password" className="block text-sm font-medium text-gray-700"> Password </label>
                                <div className="mt-1">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required="" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300" />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div class="flex items-center justify-center">
                                    <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                                        <button type="submit">
                                            <a
                                                href="#"
                                                aria-current="page"
                                                class="rounded mr-1 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-10 transition duration-150 ease-in-out"
                                            >
                                                Teacher log in
                                            </a>
                                        </button>
                                        <button type="submit">
                                            <a
                                                href="#"
                                                class="rounded ml-1 px-6 py-2.5 bg-blue-500 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 transition duration-150 ease-in-out"
                                            >
                                                Student log in
                                            </a>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </section>
    )
}