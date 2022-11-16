import React from "react";

export const UpdatePageContext = React.createContext({
	update: false,
	toggleUpdate: () => {
		alert("toggleUpdate ainda não configurado.");
	},
});

function UpdatePageWhenAddVideo(props) {
	const [updatePage, setUpdatePage] = React.useState(false);

	function changeUpdatePage() {
		updatePage ? setUpdatePage(false) : setUpdatePage(true);
	}

	return (
		<UpdatePageContext.Provider
			value={{
				update: updatePage,
				toggleUpdate: changeUpdatePage,
			}}
		>
			{props.children}
		</UpdatePageContext.Provider>
	);
}

export default UpdatePageWhenAddVideo;
