import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(props) {
	const [values, setValues] = React.useState(props.initialValue);
	return {
		values,
		handleChange: (e) => {
			const value = e.target.value;
			const nomeDoCampo = e.target.name;
			setValues({
				...values,
				[nomeDoCampo]: value,
			});
			// Utilizando o array com uma variável dentro de um objeto, podemos utilizar o valor dessa variável como nome do campo no objeto.
		},
		clearForm() {
			setValues(props.initialValue);
		},
	};
}

function RegisterVideo() {
	const formState = useForm({
		initialValue: { titulo: "", url: "" },
	});
	const [showForm, setShowForm] = React.useState(true);

	return (
		<StyledRegisterVideo>
			<button
				className="add-video"
				onClick={() => {
					setShowForm(true);
				}}
			>
				+
			</button>
			{showForm ? (
				<form
					onSubmit={(submit) => {
						submit.preventDefault();
						// setShowForm(false)
						formState.clearForm();
					}}
				>
					<div>
						<button
						type="button"
							className="close-modal"
							onClick={() => {
								setShowForm(false);
							}}
						>
							X
						</button>
						<input
							type="text"
							name="titulo"
							placeholder="Titulo do video"
							value={formState.values.titulo}
							onChange={formState.handleChange}
						/>
						<input
							type="text"
							name="url"
							placeholder="URL"
							value={formState.values.url}
							onChange={formState.handleChange}
						/>
						<button type="submit">Adicionar</button>
					</div>
				</form>
			) : null}
		</StyledRegisterVideo>
	);
}

export default RegisterVideo;
