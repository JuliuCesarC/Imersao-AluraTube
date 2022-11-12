import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Logo from "../src/components/logo";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import { StyledMenu } from "../src/components/Menu/components/StyledMenu";


const StyledDivVideo = styled.div`
		width: 80vw;
		margin: auto;
		padding-top: 70px;
		div {
			width: 100%;
			text-align: center;
		}
		iframe {
			width: 70vw;
			height: calc(70vw / 1.76);
			margin: auto;
		}
		`;

function getVideoID(url){
	if(url){
		console.log(url.indexOf('v=')+2);
		let indexV = url.indexOf('v=')+2
		let indexE = url.indexOf('&')

		return url.slice(indexV, indexE)
	}
}
function Video() {
	const contextMode = React.useContext(ColorModeContext);
	const [video, setVideo] = useState({});
	useEffect(() => {
		setVideo(JSON.parse(localStorage.getItem("videoID")));
	}, []);
	return (
		<>
			<StyledMenu>
				<a href="/">
					<Logo />
				</a>
				<button
					id="ChangeColorTheme"
					className="Dark"
					onClick={(e) => {
						let btn = document.getElementById("ChangeColorTheme");
						contextMode.mode == "dark"
							? btn.classList.remove("Dark")
							: btn.classList.add("Dark");
						contextMode.toggleMode();
					}}
				>
					🌞 🌙
					<div></div>
				</button>
			</StyledMenu>
			<StyledDivVideo>
				<div>
					<iframe
						src={`https://www.youtube.com/embed/${getVideoID(video.id)}`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					></iframe>
					<h1>{video.title}</h1>
				</div>
			</StyledDivVideo>
		</>
	);
}

export default Video;
