import React, { useState, useContext } from "react";
import { Button, LinearProgress } from "@material-ui/core";
import { PictureContext, HeaderContext } from "../../../utils/context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Flex, Wrapper, Footer, Paper } from "./style.js";
import Logo from "./Media/Logo2.svg";
import Sample from "./Media/sample.png";
import { useDropzone } from "react-dropzone";
import { baseUrl } from "../../../utils/api";

const UploadMultiple = () => {
  const navigate = useNavigate();
  const { setImage } = useContext(PictureContext);
  const { header, setHeader } = useContext(HeaderContext);
  const [files, setFiles] = useState([]);
  const [excel, setExcel] = useState([]);
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

  function ExcelDropzone(props) {
    const { getRootProps, getInputProps } = useDropzone({
      accept: ".xlsx",
      onDrop: (acceptedFiles) => {
        setExcel(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      },
    });
    console.log(excel);
    console.log(files);
    return (
      <div className="container">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {excel.length === 0 ? <p>Upload Excel</p> : <p>{excel[0].name}</p>}
        </div>
      </div>
    );
  }
  const fileList = [excel[0], files[0]];
  console.log(fileList);
  const onFileUpload = async () => {
    if (files.length === 0) {
      alert("You must upload your image first");
    } else {
      const formData = new FormData();
      formData.append("files", fileList[0]);
      formData.append("files", fileList[1]);
      // formData.append("file", excel[0])
      console.log(formData.getAll("files"));
      setLoading(true);
      await axios.post(`${baseUrl}/upload/multiple`, formData).then((res) => {
        console.log(res.data);
        console.log(res.data.data);
        console.log(res.data.data.excel, res.data.data.excel.length);
        setImage({
          url: res.data.data.image.path,
          filename: res.data.data.image.filename,
        });
        let data = [];
        for (let idx = 0; idx < res.data.data.excel.length; idx++) {
          console.log(res.data.data.excel[idx]);
          data = [
            ...data,
            {
              header: res.data.data.excel[idx].header,
              data: res.data.data.excel[idx].data,
              x: 0,
              y: 0,
            },
          ];
        }
        console.log(data);
        setHeader(data);
        setLoading(false);
        navigate("/edit-multiple");
      });
    }
  };

  return (
    <>
      <Wrapper>
        <Flex direction="column" justify="center" alignItems="center">
          <img src={Logo} alt="Logo_svg" />
          <p className="title">
            Certificate Generator is here to help you create all your certicate
            just a blink with your own template
          </p>
          <Flex direction="row" justify="space-around">
            <Paper>
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
            </Paper>
            <Paper>
              <Flex direction="column" justify="center" alignItems="center">
                <img src={Sample} alt="excel-sample" />
                <p className="header">Please upload your Excel here...</p>
                <div className="box">
                  <ExcelDropzone />
                </div>
              </Flex>
            </Paper>
          </Flex>

          {files.length !== 0 && excel.length !== 0 ? (
            <p style={{ fontSize: "23px", fontWeight: 600 }}>
              Your certificate is ready to be made!
            </p>
          ) : null}
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
    </>
  );
};

export default UploadMultiple;
