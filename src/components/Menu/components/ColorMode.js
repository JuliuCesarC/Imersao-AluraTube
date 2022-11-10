import React from "react";

export const ColorModeContext = React.createContext({
	mode: "",
	setMode: () => {
		alert("setMode ainda não configurado.");
	},
	toggleMode: ()=>{alert("toggleMode ainda não configurado.");}
});

export default function ColorModeProvider(props) {
	const [mode, setMode] = React.useState(props.initialValue);
	function toggleMode() {
		mode == "dark" ? setMode("light") : setMode("dark");
	}
	return (
		//pq ta ignorando o valor de value?
		//PQ o contexto estava sendo criado antes do ColorModeProvider ser chamado.
		<ColorModeContext.Provider
			value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}
		>
			{props.children}
		</ColorModeContext.Provider>
	);
}
