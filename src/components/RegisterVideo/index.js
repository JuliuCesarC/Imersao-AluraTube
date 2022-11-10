import React from "react";
import { StyledRegisterVideo } from "./styles";

function RegisterVideo() {
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
				<form>
					<div>
						<button
							className="close-modal"
							onClick={() => {
								setShowForm(false);
							}}
						>
							X
						</button>
						<input type="text" placeholder="Titulo do video" />
						<input type="text" placeholder="URL" />
						<button type="submit">Adicionar</button>
					</div>
				</form>
			) : null}
		</StyledRegisterVideo>
	);
}

export default RegisterVideo;
