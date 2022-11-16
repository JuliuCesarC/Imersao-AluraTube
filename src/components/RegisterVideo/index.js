import React from "react";
import { StyledRegisterVideo } from "./components/StyledRegisterVideo";
import { createClient } from "@supabase/supabase-js";
import { UpdatePageContext } from "./components/UpdatePage";

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
		},
		getUrlID: (url) => {
			setUrlImg(getThumbnail(url));
		},
		clearForm() {
			setValues(props.initialValue);
			setUrlImg('')
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

export default function RegisterVideo() {
	const formState = useForm({
		initialValue: {
			title: "",
			url: "",
			selectCategory: "",
			addCategory: "",
		},
	});
	const [showForm, setShowForm] = React.useState(false);
	const [changeAddVideoToAddCategory, setChangeAddVideoToAddCategory] =
		React.useState(false);
	const [selectOptions, setSelectOptions] = React.useState([]);
	const updateContext = React.useContext(UpdatePageContext);

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
	}, [updateContext.update]);

	function randomID() {
		let mathRandom;
		do {
			mathRandom = String(Math.floor(Math.random() * 100000000000));
		} while (mathRandom.length < 10);
		return mathRandom.slice(0, 9);
	}
	return (
		<StyledRegisterVideo>
			<button
				className="openCardAdd"
				onClick={() => {
					setShowForm(true);
				}}
			>
				+
			</button>
			{showForm ? (
				<div id="pageForm">
					<div>
						<div id="navAdd">
							<button
								type="button"
								className="navVideo active"
								onClick={(e) => {
									if (e.target.classList.length < 2) {
										e.target.parentNode.children[1].classList.remove("active");
										e.target.classList.add("active");
										setChangeAddVideoToAddCategory(false);
										formState.clearForm();
									}
								}}
							>
								Adicionar video
							</button>
							<button
								type="button"
								className="navCategory"
								onClick={(e) => {
									if (e.target.classList.length < 2) {
										e.target.parentNode.children[0].classList.remove("active");
										e.target.classList.add("active");
										setChangeAddVideoToAddCategory(true);
										formState.clearForm();
									}
								}}
							>
								Adicionar categoria
							</button>
							<button
								type="button"
								className="close-modal"
								onClick={() => {
									setShowForm(false);
									setChangeAddVideoToAddCategory(false);
									formState.clearForm()
								}}
							>
								✖
							</button>
						</div>
						{changeAddVideoToAddCategory ? (
							<form
								id="formAddCategory"
								onSubmit={(submit) => {
									submit.preventDefault();
									if (submit.target.children[0].value.trim() == "") {
										alert("ERRO nome da categoria invalido.");
										return;
									}
									let newCategory =
										submit.target.children[0].value.toLowerCase();
									setSelectOptions([...selectOptions, newCategory]);
								}}
							>
								<input
									type="text"
									name="addCategory"
									placeholder="Nome da categoria"
									value={formState.values.addCategory}
									onChange={formState.handleChange}
									id="inputAddCategory"
								/>
								<button type="submit" className="ADD">
									Adicionar
								</button>
							</form>
						) : (
							<form
								id="formAdd"
								onSubmit={(submit) => {
									submit.preventDefault();
									if (submit.target.children[2].value == "disabled") {
										alert("Selecione uma categoria.");
										return;
									}
									Supabase.from("video")
										.insert({
											id: randomID(),
											title: formState.values.title,
											url: formState.values.url,
											thumb: getThumbnail(formState.values.url),
											playlist:
												formState.values.selectCategory ||
												submit.target.children[2].value,
										})
										.then((res) => {
											console.log("response inset video", res);
											updateContext.toggleUpdate();
										})
										.catch((err) => {
											console.log("error insert video", err);
										});
									formState.clearForm();
								}}
							>
								<input
									type="text"
									name="title"
									placeholder="Titulo do video"
									value={formState.values.title}
									onChange={formState.handleChange}
									required="required"
								/>
								<input
									type="url"
									name="url"
									placeholder="URL"
									value={formState.values.url}
									onChange={(e) => {
										formState.handleChange(e);
										formState.getUrlID(formState.values.url);
									}}
									required="required"
								/>
								<select
									name="selectCategory"
									onChange={formState.handleChange}
									placeholder="Selecione"
									required
								>
									<option value="disabled">Selecione uma Categoria</option>
									{selectOptions.sort().map((eOption) => {
										return (
											<option value={eOption} key={eOption}>
												{eOption}
											</option>
										);
									})}
								</select>
								<button type="submit" className="ADD">
									Adicionar
								</button>
								{formState.urlImg && <img src={formState.urlImg} />}
							</form>
						)}
					</div>
				</div>
			) : null}
		</StyledRegisterVideo>
	);
}
