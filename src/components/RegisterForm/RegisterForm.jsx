import { Field, Form, Formik, ErrorMessage } from 'formik';
import css from './RegisterForm.module.css';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, <span className={css.error}>Too Short!</span>)
		.max(20, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
	email: Yup.string()
		.min(10, <span className={css.error}>Too Short!</span>)
		.max(50, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
	password: Yup.string()
		.min(6, <span className={css.error}>Too Short!</span>)
		.max(20, <span className={css.error}>Too Long!</span>)
		.required(<span className={css.error}>Required</span>),
});

const initialValues = {
	name: '',
	email: '',
	password: '',
};
const RegisterForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(register(values));
		actions.resetForm();
	};
	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
		>
			<Form className={css.form} autoComplete="off">
				<label className={css.label}>
					Username
					<Field type="text" name="name" placeholder="Antony Hopkins" />
				</label>
				<ErrorMessage className={css.error} name="name" as="span" />
				<label className={css.label}>
					Email
					<Field type="email" name="email" placeholder="test@google.com" />
				</label>
				<ErrorMessage className={css.error} name="email" as="span" />
				<label className={css.label}>
					Password
					<Field type="password" name="password" />
				</label>
				<ErrorMessage className={css.error} name="password" as="span" />

				<button className={css.button} type="submit">
					Register
				</button>
			</Form>
		</Formik>
	);
};

export default RegisterForm;