import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import toast from 'react-hot-toast';

const validationSchema = Yup.object().shape({
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
	email: '',
	password: '',
};
const LoginForm = () => {
	const dispatch = useDispatch();

	const handleSubmit = (values, actions) => {
		dispatch(logIn(values))
			.unwrap()
			.then(() => toast.success('You are in!)'));
		actions.resetForm();
	};
	return (
		<>
			<h1>Log in</h1>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={validationSchema}
			>
				<Form className={css.form} autoComplete="off">
					<label className={css.label}>
						Email
						<Field type="email" name="email" />
					</label>
					<ErrorMessage className={css.error} name="email" as="span" />
					<label className={css.label}>
						Password
						<Field type="password" name="password" />
					</label>
					<ErrorMessage className={css.error} name="password" as="span" />

					<button className={css.button} type="submit">
						Login
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default LoginForm;