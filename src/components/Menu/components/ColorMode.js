import React from "react";

export const ColorModeContext = React.createContext({
	mode: "",
	setMode: () => {
		alert("setMode ainda não configurado.");
	},
	toggleMode: () => {
		alert("toggleMode ainda não configurado.");
	},
});

export default function ColorModeProvider(props) {
	const [modeState, setModeState] = React.useState(props.initialValue);
	function functionToggleMode() {
		modeState == "dark" ? setModeState("light") : setModeState("dark");
	}
	return (
		//pq ta ignorando o valor de value?
		//PQ o contexto estava sendo criado antes do ColorModeProvider ser chamado.
		<ColorModeContext.Provider
			value={{
				mode: modeState,
				setMode: setModeState,
				toggleMode: functionToggleMode,
			}}
		>
			{props.children}
		</ColorModeContext.Provider>
	);
}
