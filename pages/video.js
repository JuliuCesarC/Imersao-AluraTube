import React from "react";

function Video() {
	const link = `https://www.youtube.com/embed/${"0oJQUs5oRiM"}`;

	return (
		<div>
			<h1>Hello World!</h1>
			<div>
				<iframe
					width="560"
					height="315"
					src={link}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				></iframe>
			</div>
		</div>
	);
}

export default Video;
