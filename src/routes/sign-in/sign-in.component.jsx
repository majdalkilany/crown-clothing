import{signInWithGooglePopup} from '../../utils/firebase/firebase.utels'


const SignIn =()=>{
    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup()
        console.log(response)
    }
    return(
        <div>
        
            <h1>
                SIGN iN PAGE 
            </h1>
            <button onClick={logGoogleUser}> sign in wwith Google Popup </button>
        </div>
    )
}

export default SignIn