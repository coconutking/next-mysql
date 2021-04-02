import { signIn } from 'next-auth/client'

function Unauthorized() {

    return (
        <div className="row">
            <div className="col-lg-10 col-offset-1">

               <h1>Account Required. Please sign in here.</h1>

               <p> <button className="font-bold text-white rounded-md p-2 bg-black" onClick={signIn}>Sign in</button></p>
            </div>
        </div>
    )
}

export default Unauthorized