import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../common/Layout';

function Join() {
	const path = process.env.PUBLIC_URL;

	const history = useHistory();

	const initialValue = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		phone: '',
	};

	const [val, setVal] = useState(initialValue);
	const [err, setErr] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[!@#$%^&*()_+]/;

		if (val.userid.length < 6) {
			errs.userid = 'enter 6 or more characters.';
		}

		if (
			val.pwd1.length < 5 ||
			!eng.test(val.pwd1) ||
			!num.test(val.pwd1) ||
			!spc.test(val.pwd1)
		) {
			errs.pwd1 =
				'enter at least 5 letters and at least 1 letter, number, and special character.';
		}

		if (val.pwd1 !== val.pwd2 || !val.pwd2) {
			errs.pwd2 = 'enter the same password.';
		}

		if (!/@/.test(val.email)) {
			errs.email = 'enter the correct email format.';
		}

		if (val.phone.length < 10) {
			errs.phone = 'enter the correct phone number format.';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};

	useEffect(() => {
		const len = Object.keys(err).length;

		if (len === 0 && isSubmit) {
			history.push('/');
		}
	}, [err]);

	return (
		<Layout name={'join'} bgImage={`${path}/images/loginBg.jpg`}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend className='hidden'>회원가입 폼 양식</legend>
					<div className='joinWrap'>
						<div className='inputBox'>
							<div className='labelWrap'>
								<label htmlFor='userid'>ID</label>
							</div>
							<input
								type='text'
								id='userid'
								name='userid'
								value={val.userid}
								onChange={handleChange}
							/>
							<span className='err'>{err.userid}</span>
						</div>

						<div className='inputBox'>
							<div className='labelWrap'>
								<label htmlFor='pwd1'>PASSWORD</label>
							</div>
							<input
								type='password'
								id='pwd1'
								name='pwd1'
								value={val.pwd1}
								onChange={handleChange}
							/>
							<span className='err'>{err.pwd1}</span>
						</div>

						<div className='inputBox'>
							<div className='labelWrap'>
								<label htmlFor='pwd2'>CONFIRM PASSWORD</label>
							</div>
							<input
								type='password'
								id='pwd2'
								name='pwd2'
								value={val.pwd2}
								onChange={handleChange}
							/>
							<span className='err'>{err.pwd2}</span>
						</div>

						<div className='inputBox'>
							<div className='labelWrap'>
								<label htmlFor='email'>E-MAIL</label>
							</div>
							<input
								type='text'
								id='email'
								name='email'
								value={val.email}
								onChange={handleChange}
							/>
							<span className='err'>{err.email}</span>
						</div>

						<div className='inputBox'>
							<div className='labelWrap'>
								<label htmlFor='phone'>PHONE</label>
							</div>
							<input
								type='number'
								id='phone'
								name='phone'
								value={val.phone}
								onChange={handleChange}
							/>
							<span className='err'>{err.phone}</span>
						</div>

						<div className='inputBox'>
							<input
								type='submit'
								value='JOIN US'
								onClick={() => setIsSubmit(true)}
							/>
						</div>
					</div>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Join;
