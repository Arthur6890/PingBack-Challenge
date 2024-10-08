import React, { useState } from 'react';
import { PingbackForm } from './components/form';
import { fields } from './utils/fields';
import styles from "./app.module.scss"

type FormValues = {
	[key: string]: string;
};

function App() {

	const [submittedData, setSubmittedData] = useState<FormValues | null>(null);


	const handleSubmit = (data: { [key: string]: string }) => {
		setSubmittedData(data);
	};

	return (
		<div className={styles.wrapper}>
			<PingbackForm
				fields={fields} onSubmit={handleSubmit} title='Pingback Challenge' subtitle='Espero que gostem :)'
			/>

			{submittedData && (
				<div className={styles.submittedData}>
					<h3>Dados Submetidos:</h3>
					<ul>
						{Object.entries(submittedData).map(([key, value]) => (
							<li key={key}>
								<strong>{key}:</strong> {value}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default App;
