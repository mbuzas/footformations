import { useState } from "react"

import FormRow from '../../components/FormRow'
import './Login.css'
const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
}


const Login = () => {

    const [values, setValues] = useState(initialState)

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(values);
    }



    return (

        <form className="form" onSubmit={onSubmit}>
            <h3>{values.isMember ? "Login" : "Register"}</h3>
            {!values.isMember &&
                <FormRow type="text" name="name" value={values.name} handleChange={handleChange} />
            }
            <FormRow type="email" name="email" value={values.email} handleChange={handleChange} />
            <FormRow type="password" name="password" value={values.password} handleChange={handleChange} />
            <button type="submit" className="btn btn-block">Submit</button>
            <p>
                {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                <button type="button" onClick={toggleMember} className="member-btn">{values.isMember ? 'Register' : 'Login'}</button>
            </p>
        </form>

    )
}

export default Login
