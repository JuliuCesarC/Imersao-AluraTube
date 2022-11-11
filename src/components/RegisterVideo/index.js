import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

function useForm(props) {
	const [values, setValues] = React.useState(props.initialValue);
	const [urlImg, setUrlImg] = React.useState("");
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
			if (nomeDoCampo == "url" && value.includes("youtube")) {
				let indexID = value.indexOf("v=") + 2;
				if (indexID > 0) {
					let ID = value.slice(indexID, indexID + 11);
					if (!ID.includes("&") && ID.length == 11) {
						setUrlImg(`https://img.youtube.com/vi/${ID}/hqdefault.jpg`);
					}
				}
			}
		},
		clearForm() {
			setValues(props.initialValue);
		},
		getUrlID: () => {},
	};
}

const PROJECT_URL = "https://cuumiwqjbuglmdcukchy.supabase.co";
const API_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1dW1pd3FqYnVnbG1kY3VrY2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzgyOTcsImV4cCI6MTk4Mzc1NDI5N30.W6js41CqAvkOEo1ZSTjN5gKC5cvYnDOdzn-oBubiRiQ";
const Supabase = createClient(PROJECT_URL, API_KEY);

function getThumbnail(url) {
	let indexID = url.indexOf("v=") + 2;
	if (indexID > 0) {
		let ID = url.slice(indexID, indexID + 11);

		return `https://img.youtube.com/vi/${ID}/hqdefault.jpg`;
	}
}

function RegisterVideo() {
	const formState = useForm({
		initialValue: {
			titulo: "LocalStorage NextJS",
			url: "https://www.youtube.com/watch?v=zSl_n-9yGRs&ab_channel=MarioSouto-DevSoutinho",
		},
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
						Supabase.from("video")
							.insert({
								title: formState.values.titulo,
								url: formState.values.url,
								thumb: getThumbnail(formState.values.url),
								playlist: "jogos",
							})
							.then((res) => {
								console.log(res);
							})
							.catch((err) => {
								console.log(err);
							});
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
