 

export const Error=()=>{
  return (
      <div className="flex justify-center items-center h-screen error-main ">
      <div className="error-box   text-red-700 p-4 rounded shadow-md w-full max-w-md">
        <div className="flex items-center">
          <svg
            className="h-6 w-6 text-red-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M12 6a9 9 0 100 18 9 9 0 000-18z"
            />
          </svg>
          <h1 className="font-bold" style={{fontFamily:'Unbounded'}}>Error :  </h1>
          <h1 style={{fontFamily:'Unbounded'}}> Not Fount : 404</h1>
        </div>
        <p className="mt-2 text-sm">{}</p>
      </div>
    </div>
    )

}