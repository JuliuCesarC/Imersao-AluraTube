import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm(props) {
	const [values, setValues] = React.useState(props.initialValue);
	const [urlImg, setUrlImg] = React.useState('')
	return {
		values,
		urlImg,
		handleChange: (e) => {
			const value = e.target.value;
			const nomeDoCampo = e.target.name;
			setValues({
				...values,
				[nomeDoCampo]: value,
			});
			// Utilizando o array com uma variável dentro de um objeto, podemos utilizar o valor dessa variável como nome do campo no objeto.
			if(nomeDoCampo == 'url' && value.includes('youtube')){
				let indexID = value.indexOf('v=')+2
				if(indexID>0){
					let ID = value.slice(indexID, indexID+11)
					if(!ID.includes('&') && ID.length == 11){
						setUrlImg(`https://img.youtube.com/vi/${ID}/hqdefault.jpg`)
					}
				}
			}
		},
		clearForm() {
			setValues(props.initialValue);
		},
		getUrlID: ()=>{
			
		}
	};
}

function RegisterVideo() {
	const formState = useForm({
		initialValue: { titulo: "", url: "" },
	});
	const [showForm, setShowForm] = React.useState(false);

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
							required="required"
							/>
						<input
							type="text"
							name="url"
							placeholder="URL"
							value={formState.values.url}
							onChange={formState.handleChange}
							required="required"
						/>
						<button type="submit">Adicionar</button>
						
						{formState.urlImg && <img src={formState.urlImg} />}
					</div>
				</form>
			) : null}
		</StyledRegisterVideo>
	);
}

export default RegisterVideo;
