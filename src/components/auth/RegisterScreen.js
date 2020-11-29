import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../hooks/useForm'

export const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: 'Pedro',
        email: 'pedro.cate.7@gmail.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = formValues;

    return (
        <>
            <h3 className="auth__title">Register</h3>

            <form>
                <input type="text" placeholder="Name" name="name" className="auth__input" autoComplete="off" value={name} onChange={handleInputChange} />
                <input type="text" placeholder="Email" name="email" className="auth__input" autoComplete="off" value={email} onChange={handleInputChange} />
                <input type="password" placeholder="Password" name="password" className="auth__input" autoComplete="off" value={password} onChange={handleInputChange} />
                <input type="password" placeholder="Confirm password" name="password2" className="auth__input" autoComplete="off" value={password2} onChange={handleInputChange} />
            
                <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>

                <Link to="/auth/login" className="link">Already registered?</Link>
            </form>
        </>
    )
}
