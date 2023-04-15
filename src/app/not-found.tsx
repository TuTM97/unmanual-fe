import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 py-20 text-center">
      <img src="/assets/images/all-img/404-2.svg" alt="" />
      <div className="mx-auto mt-12 w-full max-w-[546px]">
        <h4 className="mb-4 text-[40px] leading-[50px] text-white">
          Page not found
        </h4>
        <div className="mb-10 text-base font-normal text-white">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
      </div>
      <div className="mx-auto w-full max-w-[300px]">
        <Link
          href="/analytics"
          className="btn block bg-white text-center transition-all duration-150 hover:bg-opacity-75"
        >
          Go to homepage
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound
