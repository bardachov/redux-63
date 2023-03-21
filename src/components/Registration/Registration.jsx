import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import axios from 'axios';

export const Registration = () => {
	const submitHandler = (e) => {
		e.preventDefault();

		const {
			elements: { email, name, password },
		} = e.target;

		axios
			.post('/register', {
				email: email.value,
				name: name.value,
				password: password.value,
			})
			.then((res) => {
				alert(res.data.result);
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
						<h1>Registration</h1>
						<div className='auth-form__item'>
							<Input
								inputId='name'
								inputName='name'
								labelText='Name'
								placeholderText='Enter name'
								required
							/>
						</div>
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
								inputName='password'
								labelText='Password'
								inputType='password'
								placeholderText='Enter password'
								required
							/>
						</div>
						<Button
							buttonType='submit'
							buttonText='Registration'
							buttonId='registration'
						/>

						{/* <p className='mt-2'>
							If you already have an account you can
							<Link to={'/login'}>Login</Link>
						</p> */}
					</form>
				</div>
			</section>
		</main>
	);
};
