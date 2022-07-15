import{signInWithGooglePopup , CreatUserDocFromuth} from '../../utils/firebase/firebase.utels'


const SignIn =()=>{
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup()
        const userDucRef =CreatUserDocFromuth(user)
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