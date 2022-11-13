import React from "react";
import { StyledRegisterVideo } from "./StyledRegisterVideo";
import { createClient } from "@supabase/supabase-js";

function useForm(props) {
	const [values, setValues] = React.useState(props.initialValue);
	const [urlImg, setUrlImg] = React.useState("");
	return {
		values,
		urlImg,
		handleChange: (e) => {
			console.log(e.target.value);
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
			titulo: "",
			url: "",
			category: "",
		},
	});
	const [showForm, setShowForm] = React.useState(false);
	const [selectOptions, setSelectOptions] = React.useState([]);

	React.useEffect(() => {
		Supabase.from("video")
			.select("*")
			.then((dados) => {
				let supPlayNames = dados.data.map((x) => x.playlist);
				let playlistNames = supPlayNames.filter(
					(e, i) => supPlayNames.indexOf(e) == i
				);
				setSelectOptions(playlistNames);
			})
			.catch((err) => {
				console.log("error insert video", err);
			});
	}, []);

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
						if (submit.target.children[0].children[3].value == "disabled") {
							alert("Selecione uma categoria.");
							return;
						}

						setShowForm(false);
						Supabase.from("video")
							.insert({
								title: formState.values.titulo,
								url: formState.values.url,
								thumb: getThumbnail(formState.values.url),
								playlist: formState.values.category,
							})
							.then((res) => {
								console.log("response inset video", res);
							})
							.catch((err) => {
								console.log("error insert video", err);
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
							type="url"
							name="url"
							placeholder="URL"
							value={formState.values.url}
							onChange={formState.handleChange}
							required="required"
						/>
						<select
							name="category"
							onChange={formState.handleChange}
							placeholder="Selecione"
							required
						>
							<option value="disabled">Selecione uma Categoria</option>
							{selectOptions.map((eOption) => {
								return (
									<option value={eOption} key={eOption}>
										{eOption}
									</option>
								);
							})}
						</select>
						<button type="submit">Adicionar</button>

						{/* {formState.urlImg && <img src={formState.urlImg} />} */}
					</div>
				</form>
			) : null}
		</StyledRegisterVideo>
	);
}

export default RegisterVideo;
