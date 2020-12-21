import React, { useState, Fragment, useContext, useEffect } from 'react';
import axios from 'axios';
import Logo from './Media/Logo2.svg';
import { Button } from "@material-ui/core";
import { baseUrl } from '../../../utils/api';
import { Flex, Wrapper, Box, Edit } from './styles';
import { useNavigate, Navigate } from "react-router-dom";
import { PictureContext, HeaderContext } from '../../../utils/context';

const MultipleEdit = () => {
	const navigate = useNavigate();
	const { image } = useContext(PictureContext);
	const { header, setHeader } = useContext(HeaderContext);
	const [link, setLink] = useState("");
	const [able, setAble] = useState(true);
	const [loading, setLoading] = useState(false);

	// const handleChange = (event, index) => {
	// 	const values = [...inputList];
	// 	values[index][event.target.name] = event.target.value;
	// 	setInputList(values);
	// }
	console.log(image);

	const [isPressed, setIsPressed] = useState(false);
	const [pos, setPos] = useState({
		x: 0,
		y: 0,
	});

	const dragMouseDown = (e) => {
		e = e || window.event;
		e.preventDefault();
		setPos((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
		setIsPressed(true);
	};

	function closeDragElement(e) {
		console.log("in");
		setIsPressed(false);
	};

	function elementDrag(e, idx) {
		e = e || window.event;
		e.preventDefault();

		let pos1 = pos.x - e.clientX;
		let pos2 = pos.y - e.clientY;
		setPos({
			x: e.clientX,
			y: e.clientY,
		});
		console.log(e.clientX, e.clientY);
		console.log(pos);
		console.log(e.target.offsetTop, e.target.offsetLeft);
		console.log(e.target);

		e.target.style.top = e.target.offsetTop - pos2 + "px";
		e.target.style.left = e.target.offsetLeft - pos1 + "px";

		let prevList = [...header];
		let curr = prevList[idx];
		curr = { ...curr, x: e.target.offsetLeft, y: e.target.offsetTop };
		prevList[idx] = curr;
		setHeader(prevList);
	}
	console.log(header);

	const onMultUpload = async () => {
		if (header.length === 0 && header[0].column !== '') {
			alert("You must insert atleast 1 column!")
		}
		else {
			let formData = {};
			formData["image"] = JSON.stringify({ path: image.url, filename: image.filename });
			for (let index = 0; index < header.length; index++) {
				formData[`item${index + 1}`] = JSON.stringify({ text: header[index].data, width: header[index].x, height: header[index].y });
			}
			formData["item3"] = "";
			// if (header.length < 3)
			console.log(formData);
			setLoading(true)
			await axios.post(`${baseUrl}/certificate/multiple`, formData).then((res) => {
				console.log(res.data.data)
				console.log(res.data.data[0].url)
				setTimeout(() => {
					setLink(res.data.data[0].url);
					setAble(false);
					// window.open(res.data.data[0].url);
				}, 3000);
				setLoading(false)
				// navigate('/done')
			})
		}
	}

	const multDownload = (zip) => {
		var url = zip;
		window.open(url, 'Download');
	}

	const dragStyle = {
		borderRadius: "10px",
		fontFamily: "Nunito",
		fontSize: "20px",
		backgroundColor: "white",
		color: "black"
	};

	return (
		<Wrapper>
			<Flex direction="column" justify="center" alignItems="center">
				<img src={Logo} alt="Logo_svg" />
				<p>Certificate Generator is here to help you create all your certicate just a blink with your own template</p>
				<Flex direction="row" width="100%" justify="space-around" alignItems="center">
					<Flex direction="row" width="40%" justify="space-around" alignItems="center">
						<Box>
							<Flex direction="column" justify="flex-start" alignItems="flex-start" style={{ padding: '2em' }}>
								{header.map((item, i) => {
									return (
										<Fragment key={i}>
											<label for="column1">Column {i + 1}</label>
											<Flex direction="row" alignItems="flex-start">
												<Flex direction="column" alingItems="flex-start">
													<input type="text" name="column" value={item.header}/>
												</Flex>
											</Flex>
										</Fragment>
									)
								})}
								<Button variant="contained" color="primary" className="generate" onClick={onMultUpload}>Generate</Button>
								<a href={link} download/>
								<Button disabled={able} variant="contained" color="primary" className="download" onClick={() => multDownload(link)}>Download</Button>
							</Flex>
						</Box>
					</Flex>
					<Flex direction="row" width="60%" justify="space-around" alignItems="center">
						<Flex direction="column" justify="start" alignItems="start">
							<div style={{ position: "relative", width: "842px", height: "595px" }}>
								{header.map((item, i) => {
									return (
										<div
											style={dragStyle}
											id="mydiv"
											onMouseOut={closeDragElement}
											onMouseDown={dragMouseDown}
											onMouseMove={isPressed ? (e) => elementDrag(e, i) : null}
											onMouseUp={closeDragElement}
											key={i}
										>
											{item.header}
										</div>
									)
								})}
								<img src={image.url} alt="Multiple header" style={{ width: "100%", height: "100%" }} />
							</div>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Wrapper>
	)
}

export default MultipleEdit