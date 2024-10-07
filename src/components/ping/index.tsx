import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styles from "./styles.module.scss"
import { TypeForm } from '../../interfaces';
import { formatPhoneNumber } from '../../utils/functions';

export const PingbackForm: FC<TypeForm> = ({ fields, onSubmit, title, subtitle }) => {
	const { register, handleSubmit, setValue, formState: { errors } } = useForm()

	const onSubmitHandler: SubmitHandler<{ [key: string]: any }> = (data) => {
		onSubmit(data);
	};

	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.subtitle}>{subtitle}</p>
			<form onSubmit={handleSubmit(onSubmitHandler)} className={styles.form}>

				{fields.map((item, key) => (
					<div key={key}>
						{item.type === 'select' ? (
							<div className={styles.container}>
								<select
									id={item.name}
									{...register(item.name, {
										required: item.required ? `${item.label} is a required field!` : false,
									})}
									className={styles.input}
								>
									<option value="">Your role...</option>
									{item.options?.map((option) => (
										<option key={option} value={option}>
											{option}
										</option>
									))}
								</select>
							</div>
						) : item.type === 'textarea' ? (
							<div className={styles.container}>

								<textarea
									id={item.name}
									{...register(item.name, {
										required: item.required ? `${item.label} is a required field!` : false,
									})}
									placeholder={item.label}
									className={styles.textArea}
								/>
								<span className={styles.border}></span>
							</div>
						) : (
							<div className={styles.container}>
								<input
									id={item.name}
									type="text"
									{...register(item.name, {
										required: item.required ? `${item.label} is a required field!` : false, pattern: item.type === 'email'
											? {
												value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
												message: 'Invalid email format',
											}
											: item.type === 'tel'
												? {
													value: /^\(?\d{2}\)?[\s-]?[\d\s-]{8,9}$/,
													message: 'Invalid phone format. Example: (31) 99999-9999',
												}
												: undefined,
										...(item.type === 'tel' && {
											onChange: (e) => {
												const formattedValue = formatPhoneNumber(e.target.value);
												setValue(item.name, formattedValue);
											},
										}),

									})}
									placeholder={item.label}
									className={styles.input}
								/>
								<span className={styles.border}></span>
							</div>
						)}
						{errors[item.name] && (
							<p className={styles.errorMessage}>
								{errors[item.name]?.message as string}
							</p>
						)}
					</div>
				))}

				<input type="submit" className={styles.submitButton} />
			</form>
		</div>
	)

};


