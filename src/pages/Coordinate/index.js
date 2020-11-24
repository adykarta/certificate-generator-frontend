import React from "react";

const containerStyle = {
  fontFamily: 'Nunito',
  textAlign: 'center',
  backgroundColor: '#F5F5F5',
  paddingTop: '20px',
  maxHeight: '100vh',
  maxWidth: '100vw',
  height: '100vh',
  width: '100vw'
};

const title1Style = {
  fontSize: '60px',
  fontWeight: '700',
  margin: '0 50px 0 0',
  color: '#4C837A',
};

const title2Style = {
  fontSize: '60px',
  fontWeight: '700',
  margin: '0 0 0 50px',
  color: '#04253A',
};

const CoordinatePage = () => {
  return (
    <div style={containerStyle}>
      <p style={title1Style}>CERTIFICATE</p>
      <p style={title2Style}>GENERATOR</p>
      <p>Certificate Generator is here to help you create all<br/>your certicate just a blink with your own template</p>
    </div>
  );
};
export default CoordinatePage;
