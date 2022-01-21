import { useEffect, useState } from "react"
import { useContext } from "react/cjs/react.development"
import FormRow from '../../components/FormRow'
import AppContext from "../../context/appContext"
import { useNavigate } from "react-router-dom"
import './Login.css'
const initialState = {
    username: '',
    email: '',
    password: '',
}


const Login = () => {
    const navigate = useNavigate();
    const { userInfo, registerUser, isLoading, isMember, setIsMember } = useContext(AppContext)
    const [values, setValues] = useState(initialState)

    const toggleMember = () => {
        setIsMember(!isMember)
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        const { username, email, password, isMember } = values

        if (!email || !password || (!isMember && !username)) {
            alert('Please fill all values');
            return
        }

        const currentUser = { username, email, password }
        if (!isMember) {
            registerUser(currentUser)

        }
        console.log(values);
    }
    useEffect(() => {
        if (userInfo) {

            navigate('/')
            setIsMember(true)
        }

    }, [userInfo, navigate]);



    return (

        <form className="form" onSubmit={onSubmit}>
            <h3>{isMember ? "Login" : "Register"}</h3>
            {!isMember &&
                <FormRow type="text" name="username" value={values.username} handleChange={handleChange} />
            }
            <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />
            <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />
            <button type="submit" className="btn btn-block" disabled={isLoading}>Submit</button>
            <p>
                {isMember ? 'Not a member yet?' : 'Already a member?'}
                <button type="button" onClick={toggleMember} className="member-btn" >{isMember ? 'Register' : 'Login'}</button>
            </p>
        </form>

    )
}

export default Login
