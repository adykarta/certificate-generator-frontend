import React, {useState, useMemo} from "react"
import { Flex, Wrapper, Upload, Thumb, ThumbInner, Footer } from "./style.js"
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
    const [values, setValues] = useState(false)
    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
        open
      } = useDropzone({
        accept: "image/*",
        noClick: true,
        noKeyboard: true,
        onDrop: acceptedFiles => {
            var val = acceptedFiles.map(file =>
                    Object.assign(file, {
                    preview: URL.createObjectURL(file)
                    })
                ) 
            
            setValues(prev=>({...prev,file:[...prev['file'].concat(val)]}))
      
        }
      });

      const style = useMemo(
        () => ({
          ...baseStyle,
          ...(isDragActive ? activeStyle : {}),
          ...(isDragAccept ? acceptStyle : {}),
          ...(isDragReject ? rejectStyle : {})
        }),
        [isDragActive, isDragReject, isDragAccept]
      );
    

      const thumbs =
        values.file === null ? null : (
            <Thumb key={values.file?.name}>
                <ThumbInner>
                    <img
                    src={values.file?.preview}
                    className="img"
                    alt={values.file?.preview}
                    />
                </ThumbInner>
            </Thumb>
      );
  

    return(
        <>
            <Wrapper>
                <Flex direction="column" justify="center" alignItems="center">
                    <img src={Logo} alt="Logo_svg" />
                    <p>Certificate Generator is here to help you create all your certicate just a blink with your own template</p>

                    <Upload>
                        <Flex direction="column" justify="center" alignItems="center">
                                {/* <input
                                    type="file"
                                    name="file"
                                    id="contained-button-file"
                                    style={{display: 'none'}}
                                    // onChange={uploadImage}
                                /> */}
                           
                                
                                <label htmlFor="contained-button-file">
                                    <div className="box" >
                                    <div style={{width: '90%'}}>
                                        <div {...getRootProps({ style })}>
                                        <input {...getInputProps()} />
                                        <div className="box"
                                            display="flex"
                                            alignItems="center"
                                            onClick={open}
                                            // className={classes.photo}
                                        >
                                        
                                            <p color="textSecondary" variant="body1">
                                            Upload
                                            </p>
                                        </div>
                                        </div>

                                        <aside style={thumbsContainer}>{thumbs}</aside>
                                    </div>
                                    </div>
                                </label>
                            
                        </Flex>
                       
                        
                    </Upload>
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