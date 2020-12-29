import React, {useState, Fragment, useContext} from "react"
import {Button, LinearProgress, Dialog, DialogActions, DialogContent, DialogTitle, Stepper, Step, StepLabel, Typography} from "@material-ui/core"
import {PictureContext} from "../../../utils/context" 
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { Flex, Wrapper, Upload, Footer } from "./style.js"
import Logo from "./Media/Logo2.svg"
import { useDropzone } from 'react-dropzone';
import { baseUrl} from '../../../utils/api'


const OneUpload = () => {
    const navigate = useNavigate()
    const {image, setImage} = useContext(PictureContext)
    const [files, setFiles] = useState([])
    // const [pic, setPic] = useState('')
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

    const onFileUpload = async () => {
        if(files.length === 0 ){
            alert("You must upload your image first")
        }
        else{
            const formData = new FormData();
            formData.append("file", files[0])
            setLoading(true)
            await axios.post(`${baseUrl}/upload`, formData).then((res) => {
                console.log(res.data)
                console.log(res.data.data)
                // setPic(res.data.data.path)
                setImage(res.data.data.path)
                setLoading(false)
                // navigate('/edit-one')
            })
            
        }
       
    }
    console.log(files)

    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setActiveStep(0)
    }

    function getSteps() {
    return ['Upload your template', "Click 'Go' Button", 'Edit your certificate'];
    }
    
    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
            return 'You can upload your certificate tempalate by click the upload text or just drag and drop the file';
            case 1:
            return 'Wait until process is done and you will be redirected to edit page';
            case 2:
            return 'You can edit your certificate by adding the header and adjust the text position';
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
        <Fragment>
            <Wrapper>
                <Flex direction="column" justify="center" alignItems="center">
                    <img src={Logo} alt="Logo_svg" />
                    <p>Certificate Generator is here to help you create all your certicate just a blink with your own template</p>

                    <Upload>
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
                    </Upload>

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
                 <DialogTitle id="alert-dialog-title">{"Edit Certificate Tutorial"}</DialogTitle>
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
        </Fragment>
            
    )
}

export default OneUpload