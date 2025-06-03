import {useState} from 'react';
import "./style.css"

const Form = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [errorUsername, setErrorUsername] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

    const [userColor , setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');

    const validate  = (e) => {
        e.preventDefault();

        if (username.length > 8) {
            setUserColor('green');
            setErrorUsername('')
        }else{
            setUserColor('red');
            setErrorUsername('Name must be more than 8 characters');
        }

        if (email.includes('@gmail.com')) {
            setEmailColor('green');
            setErrorEmail('')
        }else {
            setEmailColor('red');
            setErrorEmail('Email must contain "@gmail.com"');
        }

        if(password.length > 8) {
            setPasswordColor('green');
            setErrorPassword('')
        }else{
            setPasswordColor('red');
            setErrorPassword('Password must be more than 8 characters');
        }

        if (confirmPassword !== '' && confirmPassword === password) {
            setErrorConfirmPassword('');
            setConfirmPasswordColor('green');
        }else{
            setConfirmPasswordColor('red');
            setErrorConfirmPassword("Passwords are not the same")
        }
    }

    return (
        <>
          <div className="card">
              <div className="card-image"></div>
              <form >
                  <input type="text" placeholder='name' style={{borderColor : userColor}} value={username}
                         onChange={e  => setUsername(e.target.value)}/>
                  <p className="error">{errorUsername}</p>

                  <input type="email" placeholder='email' style={{borderColor : emailColor}} value={email}
                         onChange={e  => setEmail(e.target.value)}/>
                  <p className="error">{errorEmail}</p>

                  <input type="password" placeholder='password' style={{borderColor : passwordColor}} value={password}
                         onChange={e  => setPassword(e.target.value)}/>
                  <p className="error">{errorPassword}</p>

                  <input type="password" placeholder='Confirm password' style={{borderColor : confirmPasswordColor}} value={confirmPassword}
                         onChange={e  => setConfirmPassword(e.target.value)}/>
                  <p className="error">{errorConfirmPassword}</p>

                  <button className='submit-btn' onClick={validate}>Submit</button>
              </form>
          </div>


        </>
    );
};

export default Form;