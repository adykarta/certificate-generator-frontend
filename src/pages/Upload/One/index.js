import React, { useState, Fragment, useContext } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { PictureContext } from "../../../utils/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Flex, Wrapper, Upload, Footer } from "./style.js";
import Logo from "./Media/Logo2.svg";
import { useDropzone } from "react-dropzone";
import { baseUrl } from "../../../utils/api";

const OneUpload = () => {
  const navigate = useNavigate();
  const { image, setImage } = useContext(PictureContext);
  const [files, setFiles] = useState([]);
  const [pic, setPic] = useState("");
  const [loading, setLoading] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const onFileUpload = async () => {
    if (files.length === 0) {
      alert("You must upload your image first");
    } else {
      const formData = new FormData();
      formData.append("file", files[0]);
      setLoading(true);
      await axios.post(`${baseUrl}/upload`, formData).then((res) => {
        console.log(res.data);
        console.log(res.data.data);
        setPic(res.data.data.path);
        setImage({ url: res.data.data.path, filename: res.data.data.filename });
        setLoading(false);
        navigate("/edit-one");
      });
    }
  };
  // const [progress, setProgress] = React.useState(0);
  // React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((oldProgress) => {
  //         if (oldProgress === 100) {
  //           return 0;
  //         }
  //         const diff = Math.random() * 10;
  //         return Math.min(oldProgress + diff, 100);
  //       });
  //     }, 500);

  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);

  console.log(files);
  return (
    <Fragment>
      <Wrapper>
        <Flex direction="column" justify="center" alignItems="center">
          <img src={Logo} alt="Logo_svg" />
          <p>
            Certificate Generator is here to help you create all your certicate
            just a blink with your own template
          </p>

          <Upload>
            <Flex direction="column" justify="center" alignItems="center">
              <p className="header">
                Please upload your certificate template here...
              </p>
              <div className="box">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {files.length === 0 ? (
                    <p>Upload Photo</p>
                  ) : (
                    <p>{files[0].name}</p>
                  )}
                </div>
              </div>
            </Flex>
          </Upload>
          <Button
            variant="contained"
            disabled={loading}
            className="submit"
            onClick={onFileUpload}
          >
            Go!!!
          </Button>
          {loading ? (
            <Flex
              direction="column"
              justify="center"
              alignItems="center"
              style={{ width: "50em" }}
            >
              <LinearProgress style={{ width: "40em", marginTop: "2em" }} />
              <LinearProgress style={{ width: "40em" }} />
            </Flex>
          ) : null}
        </Flex>
      </Wrapper>
      <Flex direction="row" justify="center">
        <Footer style={{ marginTop: "5em" }}>
          Copyright © 2020 Certificate Generator. All Rights Reserved.
        </Footer>
      </Flex>
    </Fragment>
  );
};

export default OneUpload;
