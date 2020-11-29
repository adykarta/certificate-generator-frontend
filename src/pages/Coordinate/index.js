import React, { useState } from "react"
import Logo from "./Media/Logo2.svg"
import Certificate from "./Media/TERNGAKAK.png";
import CloseIcon from "@material-ui/icons/Close";
import { Flex, Wrapper, Card, Footer } from "./style.js";

const CoordinatePage = () => {
  const [values, setValues] = useState({
    column1: '',
    column2: '',
    column3: '',
  })

  const handleChange = (opt) => event => {
    if (opt === 1) {
      setValues({ column1: event.target.value });
    } else if (opt === 2) {
      setValues({ column2: event.target.value });
    } else {
      setValues({ column3: event.target.value });
    }
  }

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + values.column1);
    event.preventDefault();
  }

  const inputStyle = {
    width: "70%",
    height: "2rem",
    borderRadius: "10px",
    fontFamily: "Nunito",
    fontSize: "20px",
  }

  const submitStyle = {
    width: "30%",
    height: "2rem",
    borderRadius: "10px",
    fontFamily: "Nunito",
    fontSize: "20px",
    marginTop: "15px",
    backgroundColor: "#04253A",
    color: "white",
  }

  const dragStyle = {
    margin: "2rem",
    borderRadius: "10px",
    fontFamily: "Nunito",
    fontSize: "20px",
    backgroundColor: "white",
    color: "black"
  };

  return (
    <>
      <Wrapper>
        <Flex direction="column" justify="center" alignItems="center">
          <img src={Logo} alt="Logo_svg" />
          <p>
            Certificate Generator is here to help you create all your certicate
            just a blink with your own template
          </p>
          <Flex direction="row" justify="center" alignItems="center">
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
                <CloseIcon />
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
                <br />
                <input style={submitStyle} type="submit" value="Submit" />
              </form>
            </Card>
            <Card>
              <Flex direction="column" justify="center" alignItems="center">
                <Flex direction="row" justify="center" alignItems="center">
                  <p style={dragStyle}>Column 1</p>
                  <p style={dragStyle}>Column 2</p>
                  <p style={dragStyle}>Column 3</p>
                </Flex>
                <Flex direction="column" justify="center" alignItems="center">
                  <img
                    src={Certificate}
                    alt="Certificate"
                    style={{ width: "55%", height: "75%" }}
                  />
                </Flex>
              </Flex>
            </Card>
          </Flex>
        </Flex>
      </Wrapper>
      <Flex direction="row" justify="center">
        <Footer>
          Copyright © 2020 Certificate Generator. All Rights Reserved.
        </Footer>
      </Flex>
    </>
  );
}

export default CoordinatePage