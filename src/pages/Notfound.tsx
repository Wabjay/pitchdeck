import React from 'react'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
//     <div className="fixed top-0 left-0 w-screen z-50 h-screen flex flex-grow items-center justify-center bg-gray-50">
//   <div className="rounded-lg bg-white p-8 text-center shadow-xl">
//     <h1 className="mb-4 text-4xl font-bold">404</h1>
//     <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
//     <Link to='/'  className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </Link>
//   </div>
// </div>
<section className="fixed top-0 left-0 w-screen z-50 h-screen flex flex-grow items-center justify-center bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-32 font-bold tablet:text-48 laptop:text-64 text-[#21AB68]">404</h1>
            <p className="mb-4 text-24 laptop:text-32 font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
            <p className="mb-4 text-16 laptop:text-24 font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
             
             <Link to='/' className="inline-flex text-white bg-[#21AB68] hover:bg-[#40af7a] focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-16 p-5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</Link>
        </div>   
    </div>
</section>
  )
}
