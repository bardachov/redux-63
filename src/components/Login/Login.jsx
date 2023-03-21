import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';

export const Login = () => {
	const navigate = useNavigate();
	const { login } = useUser();

	const submitHandler = (e) => {
		e.preventDefault();

		const {
			elements: { email, password },
		} = e.target;

		axios
			.post('/login', {
				email: email.value,
				password: password.value,
			})
			.then((res) => {
				login(res.data.result);
				navigate('/');
			})
			.catch((error) => {
				const { data } = error.response;
				alert(data.errors.join('. '));
			})
			.finally((data) => {
				console.log(data);
			});
	};

	return (
		<main className='container'>
			<section className='row'>
				<div className='col'>
					<form className='auth-form' onSubmit={submitHandler}>
						<h1>Login</h1>

						<div className='auth-form__item'>
							<Input
								inputId='email'
								inputName='email'
								labelText='Email'
								placeholderText='Enter email'
								required
							/>
						</div>

						<div className='auth-form__item'>
							<Input
								inputId='password'
								inputType='password'
								inputName='password'
								labelText='Password'
								placeholderText='Enter password'
								required
							/>
						</div>

						<Button buttonType='submit' buttonText='Login' buttonId='login' />

						{/* <p className='mt-2'>
							If you not have an account you can{' '}
							<Link to={'/registration'}>Register</Link>
						</p> */}
					</form>
				</div>
			</section>
		</main>
	);
};
