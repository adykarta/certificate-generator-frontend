import React, {useState, useContext} from 'react'
import {Button, LinearProgress, Dialog, DialogContent, DialogTitle, Stepper, Step, StepLabel, Typography} from "@material-ui/core"
import {PictureContext, HeaderContext} from "../../../utils/context" 
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Flex, Wrapper, Footer, Paper } from "./style.js"
import Logo from "./Media/Logo2.svg"
import Sample from "./Media/sample.png"
import { useDropzone } from 'react-dropzone';
import { baseUrl } from '../../../utils/api'


const UploadMultiple = () => {

    const navigate = useNavigate()
    const {setImage} = useContext(PictureContext)
    const {setHeader} = useContext(HeaderContext)
    const [files, setFiles] = useState([])
    const [excel, setExcel] = useState([])
    const [loading, setLoading] = useState(false)
    const { getRootProps, getInputProps} 
    = useDropzone({
        accept: "image/*",
        onDrop: acceptedFiles => {
            setFiles(
                acceptedFiles.map((file) => 
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                    
                }))
            )
        }
      });
    
    function ExcelDropzone(props){
        const { getRootProps, getInputProps} 
        = useDropzone({
        accept: ".xlsx",
        onDrop: acceptedFiles => {
            setExcel(
                acceptedFiles.map((file) => 
                Object.assign(file, {
                    preview: URL.createObjectURL(file)
                
                }))
                
            )
        }
      });
      console.log(excel)
      console.log(files)
   
        return (
            <div className="container">
              <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {excel.length === 0 ?
                        <p>Upload Excel</p>
                        :
                        <p>{excel[0].name}</p>
                    }
                </div> 
            </div>
          );
    }
    const fileList = [excel[0], files[0]]
    console.log(fileList)
    const onFileUpload = async () => {
        if(files.length === 0 ){
            alert("You must upload your image first")
        }
        else{
            const formData = new FormData();
            formData.append("files", fileList[0])
            formData.append("files", fileList[1])
            // formData.append("file", excel[0])
            console.log(formData.getAll('files'))
            setLoading(true)
            await axios.post(`${baseUrl}/upload/multiple`, formData).then((res) => {
                console.log(res.data)
                console.log(res.data.data)
                setImage(res.data.data.image.path)
                setHeader(res.data.data.excel)
                console.log(res.data.data.excel)
                setLoading(false)
                navigate('/edit-multiple')
            })
            
        }
       
    }
    
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setActiveStep(0)
    }

    function getSteps() {
    return ['Upload your template photo', 'Upload your excel file', "Click 'Go' Button", 'Edit your certificate'];
    }
    
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
            return 'You can upload your certificate tempalate by click the upload text or just drag and drop the file';
            case 1:
            return 'Makesure your excel file is in accordance with the format'
            case 2:
            return 'Wait until process is done and you will be redirected to edit page';
            case 3:
            return 'Your header is set according to your excel file. You can edit your certificate by adjust the text position';
            default:
            return 'Unknown stepIndex';
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return(
        <>
            <Wrapper>
                <Flex direction="column" justify="center" alignItems="center">
                    <img src={Logo} alt="Logo_svg" />
                    <p className="title">Certificate Generator is here to help you create all your certicate just a blink with your own template</p>
                    <Flex direction="row" justify="space-around">
                        <Paper>
                            <Flex direction="column" justify="center" alignItems="center">
                                <p className="header">Please upload your certificate template here...</p>
                                <div className="box">
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {files.length === 0 ?
                                            <p>Upload Photo</p>
                                            :
                                            <p>{files[0].name}</p>
                                        }
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

                    {files.length !== 0 && excel.length !== 0 ?
                        <p style={{fontSize: '23px', fontWeight: 600}}>Your certificate is ready to be made!</p>
                        :
                        null
                    }
                    <Button variant="contained" className="submit" onClick={onFileUpload}>Go!!!</Button>
                    <Button variant="outlined" color="primary" onClick={handleOpen} style={{marginTop: '2em'}}>
                        Open Tutorial Dialog
                    </Button>
                    {loading ? 
                        <Flex direction="column" justify="center" alignItems="center" style={{width: '50em'}}>
                            <LinearProgress style={{width: '40em', marginTop: '2em'}} />
                            <LinearProgress style={{width: '40em'}} />
                        </Flex>
                        
                        :
                        null
                    }
                </Flex>
            </Wrapper>
            <Dialog 
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Edit Multiple Certificate Tutorial"}</DialogTitle>
                <DialogContent>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <div>
                        {activeStep === steps.length ? (
                        <div>
                            <Typography>All steps completed</Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                        ) : (
                        <div>
                            <Typography >{getStepContent(activeStep)}</Typography>
                            <div style={{marginTop: '2em', marginBottom: '2em'}}>
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                // className={classes.backButton}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={ activeStep === steps.length - 1 ? handleClose : handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                            </div>
                        </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
            <Flex direction="row" justify="center">
                <Footer style={{marginTop: '5em'}}>
                    Copyright © 2020 Certificate Generator. All Rights Reserved.
                </Footer>
            </Flex>
        </>
    )
}

export default UploadMultiple