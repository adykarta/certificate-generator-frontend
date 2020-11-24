import React from "react";
import { Flex, Wrapper, Option, Button, Footer } from './style.js'
import Logo from './Media/Logo2.svg'

const Homepage = () => {
  return (
    <>
    <Wrapper>
      <Flex direction="column" alignItems="center" justify="center">
        <img src={Logo} alt="Logo_png" />
        <p>Certificate Generator is here to help you create all your certicate just a blink with your own template</p>

        <Option>
          <Flex direction="column" alignItems="center">
            <p>Hello, how many certificate(s) would you like to make?</p>
            <Flex direction="row" justify="space-around">
              <Button href="/upload-one">One</Button>
              <Button>Two</Button>
            </Flex>    
          </Flex>
        </Option>
      </Flex>
      
      
    </Wrapper>
    <Flex direction="row" justify="center">
      <Footer>
        Copyright © 2020 Certificate Generator. All Rights Reserved.
      </Footer>
    </Flex>
    
    </>
  )
};
export default Homepage;
