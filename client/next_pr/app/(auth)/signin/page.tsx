function Signin() {
    return (
        <div className="flex  min-w-fit m-3 items-center justify-center flex-wrap z-10 w-2/6 h-2/5 border rounded-lg border-sky-800 bg-gradient-to-r from-green-200 to-blue-300">

            <input className="w-3/4  max-w-md border rounded-lg p-3 border-sky-500
             focus:bg-sky-400 
             focus:outline-none
             focus-within:bg-sky-100
             " type="text" placeholder="Username" />

            <input className="w-3/4 max-w-md border rounded-lg p-3 border-sky-500 focus:bg-sky-400 focus:outline-none " type="text" placeholder="Password" />
            <button className="w-3/4 max-w-sm border rounded-lg border-sky-500" type="submit">Sign In</button>
        </div>
    )
}

export default Signin;