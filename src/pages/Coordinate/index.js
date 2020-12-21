import React, { useState } from "react";
import Logo from "./Media/Logo2.svg";
import Certificate from "./Media/TERNGAKAK.png";
import CloseIcon from "@material-ui/icons/Close";
import { Flex, Wrapper, Card, Footer, WrapperImage } from "./style.js";

const CoordinatePage = () => {
  const [values, setValues] = useState({
    column1: "",
    column2: "",
    column3: "",
  });

  const handleChange = (opt) => (e) => {
    if (opt === 1) {
      setValues({ column1: e.target.value });
    } else if (opt === 2) {
      setValues({ column2: e.target.value });
    } else {
      setValues({ column3: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    alert("A name was submitted: " + values.column1);
    e.preventDefault();
  };

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
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    let pos1 = pos.x - e.clientX;
    let pos2 = pos.y - e.clientY;
    setPos({
      x: e.target.offsetLeft + pos1,
      y: e.target.offsetTop + pos2,
    });
    console.log(e.clientX, e.clientY);
    console.log(pos);
    console.log(e.target.offsetTop, e.target.offsetLeft);
    console.log(e.target);

    e.target.style.top = e.target.offsetTop - pos2 + "px";
    e.target.style.left = e.target.offsetLeft - pos1 + "px";
  }

  const inputStyle = {
    width: "70%",
    height: "2rem",
    borderRadius: "10px",
    fontFamily: "Nunito",
    fontSize: "20px",
  };

  const submitStyle = {
    width: "30%",
    height: "2rem",
    borderRadius: "10px",
    fontFamily: "Nunito",
    fontSize: "20px",
    marginTop: "15px",
    backgroundColor: "#04253A",
    color: "white",
  };

  const dragStyle = {
    borderRadius: "10px",
    fontFamily: "Nunito",
    fontSize: "20px",
    backgroundColor: "white",
    color: "black",
  };

  return (
    <>
      <Wrapper>
        <Flex
          direction="column"
          width="100%"
          justify="center"
          alignItems="center"
        >
          <img src={Logo} alt="Logo_svg" />
          <p>
            Certificate Generator is here to help you create all your certicate
            just a blink with your own template
          </p>
          <div style={{ padding: "0 2rem" }}>
            <Flex
              direction="row"
              width="100%"
              justify="center"
              alignItems="center"
            >
              <Flex
                direction="column"
                width="40%"
                justify="center"
                alignItems="center"
              >
                <Card>
                  <form
                    style={{ textAlign: "left", margin: "0px 0px 0px 5rem" }}
                    onSubmit={handleSubmit}
                  >
                    <p style={{ margin: "25px 0px 0px 0px", color: "white" }}>
                      Column 1
                    </p>
                    <input
                      style={inputStyle}
                      type="text"
                      value={values.column1}
                      onChange={handleChange(1)}
                    />
                    <br />
                    <p style={{ margin: "15px 0px 0px 0px", color: "white" }}>
                      Column 2
                    </p>
                    <input
                      style={inputStyle}
                      type="text"
                      value={values.column2}
                      onChange={handleChange(2)}
                    />
                    <CloseIcon />
                    <br />
                    <p style={{ margin: "15px 0px 0px 0px", color: "white" }}>
                      Column 3
                    </p>
                    <input
                      style={inputStyle}
                      type="text"
                      value={values.column3}
                      onChange={handleChange(3)}
                    />
                    <CloseIcon />
                    <br />
                    <input style={submitStyle} type="submit" value="Submit" />
                  </form>
                </Card>
              </Flex>
              <Flex
                direction="column"
                width="60%"
                justify="start"
                alignItems="start"
              >
                <div
                  style={{
                    position: "relative",
                    width: "842px",
                    height: "595px",
                  }}
                >
                  <div
                    style={dragStyle}
                    id="mydiv"
                    onMouseOut={closeDragElement}
                    onMouseDown={dragMouseDown}
                    onMouseMove={isPressed ? elementDrag : null}
                    onMouseUp={closeDragElement}
                  >
                    Column 1
                  </div>
                  <div
                    style={dragStyle}
                    id="mydiv"
                    onMouseOut={closeDragElement}
                    onMouseDown={dragMouseDown}
                    onMouseMove={isPressed ? elementDrag : null}
                    onMouseUp={closeDragElement}
                  >
                    Column 1
                  </div>
                  <img
                    src={Certificate}
                    alt="cert"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </Wrapper>
      <Flex direction="row" width="100%" justify="center">
        <Footer>
          Copyright © 2020 Certificate Generator. All Rights Reserved.
        </Footer>
      </Flex>
    </>
  );
};

export default CoordinatePage;
