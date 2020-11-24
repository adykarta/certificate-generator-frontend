import React, {useState, useMemo} from "react"
import { Flex, Wrapper, Upload, Button, Footer } from "./style.js"
import Logo from "./Media/Logo2.svg"
import { useDropzone } from 'react-dropzone';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    backgroundColor: 'transparent',
    outline: 'none',
    color: '#587AF7',
    transition: 'border .24s ease-in-out',
    border: '2px dashed #587AF7'
  };
  
  const activeStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
  };
  
  
  

const OneUpload = () => {
    const [files, setFiles] = useState([])
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
      const images = files.map((file) => (
        <div key={file.name}>
            <div>
               <p>{file.name}</p>
            </div>
            
        </div>
      ))

  
    console.log(files)
    return(
        <>
            <Wrapper>
                <Flex direction="column" justify="center" alignItems="center">
                    <img src={Logo} alt="Logo_svg" />
                    <p>Certificate Generator is here to help you create all your certicate just a blink with your own template</p>

                    <Upload>
                        <Flex direction="column" justify="center" alignItems="center">
                            <div className="box">
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {files.length == 0 ?
                                        <p>Upload photo</p>
                                        :
                                        <p>{files[0].name}</p>
                                    }
                                </div>   
                            </div>
                        
                        </Flex>
                    </Upload>
                    <Button>Go!!!</Button>
                </Flex>
                
            </Wrapper>
            <Flex direction="row" justify="center">
                <Footer>
                    Copyright © 2020 Certificate Generator. All Rights Reserved.
                </Footer>
            </Flex>
        </>
    )
}

export default OneUpload