import React, { useState, Fragment, useContext } from "react";
import { Flex, Wrapper, Box, Edit } from "./styles";
import { Button, LinearProgress } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Logo from "./Media/Logo2.svg";
import { PictureContext } from "../../../utils/context";
import axios from "axios";
import { baseUrl } from "../../../utils/api";
import { useNavigate, Navigate } from "react-router-dom";

const OneEdit = () => {
  const navigate = useNavigate();
  const { image, setImage } = useContext(PictureContext);
  const [inputList, setInputList] = useState([{ column: "", x: 0, y: 0 }]);
  const [loading, setLoading] = useState(false);

  const handleChange = (event, index) => {
    const values = [...inputList];
    values[index][event.target.name] = event.target.value;
    setInputList(values);
  };

  const handleAddInput = () => {
    setInputList([...inputList, { column: "", x: 0, y: 0 }]);
  };

  const handleRemoveInput = () => {
    const list = [...inputList];
    const index = inputList.length - 1;
    list.splice(index, 1);
    setInputList(list);
  };
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
  }

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

    let prevList = [...inputList];
    let curr = prevList[idx];
    curr = {
      ...curr,
      x: e.target.offsetLeft,
      y: e.target.offsetTop,
    };
    prevList[idx] = curr;
    setInputList(prevList);
  }
  console.log(inputList);

  const onCertUpload = async () => {
    if (inputList.length === 0 && inputList[0].column !== "") {
      alert("You must insert atleast 1 column!");
    } else {
      let formData = {};
      formData["image"] = JSON.stringify({
        path: image.url,
        filename: image.filename,
      });
      for (let index = 0; index < inputList.length; index++) {
        formData[`item${index + 1}`] = JSON.stringify({
          text: inputList[index].column,
          width: inputList[index].x,
          height: inputList[index].y,
        });
      }
      setLoading(true);
      await axios.post(`${baseUrl}/certificate`, formData).then((res) => {
        console.log(res.data.data[0]);
        setTimeout(() => {
          window.open(res.data.data[0].url);
        }, 3000);
        setLoading(false);
        navigate("/done");
      });
    }
  };

  const dragStyle = {
    borderRadius: "10px",
    fontFamily: "Nunito",
    fontSize: "20px",
    backgroundColor: "white",
    color: "black",
  };

  return (
    <Wrapper>
      <Flex direction="column" justify="center" alignItems="center">
        <img src={Logo} alt="Logo_svg" />
        <p>
          Certificate Generator is here to help you create all your certicate
          just a blink with your own template
        </p>
        <Flex
          direction="row"
          width="100%"
          justify="space-around"
          alignItems="center"
        >
          <Flex
            direction="row"
            width="40%"
            justify="space-around"
            alignItems="center"
          >
            <Box>
              <Flex
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                style={{ padding: "2em" }}
              >
                {inputList.map((item, i) => {
                  return (
                    <Fragment key={i}>
                      <label for="column1">Column {i + 1}</label>
                      <Flex direction="row" alignItems="flex-start">
                        <Flex direction="column" alingItems="flex-start">
                          <input
                            type="text"
                            name="column"
                            value={item.column}
                            onChange={(e) => handleChange(e, i)}
                          />
                          {inputList.length - 1 === i &&
                            (inputList.length < 3 ? (
                              <Button
                                variant="contained"
                                className="addBtn"
                                onClick={handleAddInput}
                              >
                                <AddIcon />
                              </Button>
                            ) : null)}
                        </Flex>
                        {inputList.length - 1 === i && i > 0 && (
                          <Button
                            variant="contained"
                            className="delBtn"
                            onClick={handleRemoveInput}
                          >
                            <DeleteIcon />
                          </Button>
                        )}
                      </Flex>
                    </Fragment>
                  );
                })}
                <Button
                  variant="contained"
                  color="primary"
                  className="generate"
                  onClick={onCertUpload}
                >
                  Generate
                </Button>
              </Flex>
              {/* {loading ?
                <Flex direction="column" justify="center" alignItems="center" style={{ width: '50em' }}>
                  <LinearProgress style={{ width: '40em', marginTop: '2em' }} />
                  <LinearProgress style={{ width: '40em' }} />
                </Flex>
                :
                <p></p>
              } */}
            </Box>
          </Flex>
          <Flex
            direction="row"
            width="60%"
            justify="space-around"
            alignItems="center"
          >
            <Flex direction="column" justify="start" alignItems="start">
              <div
                style={{
                  position: "relative",
                  width: "842px",
                  height: "595px",
                }}
              >
                {inputList.map((item, i) => {
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
                      {item.column}
                    </div>
                  );
                })}
                <img
                  src={image.url}
                  alt="Edited photo"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default OneEdit;
