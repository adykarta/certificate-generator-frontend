import React, {useState, Fragment} from 'react'
import {Flex, Wrapper, Box, Edit} from './styles'
import {Button} from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Logo from './Media/Logo2.svg'
import { PictureConsumer } from '../../../utils/context'

const OneEdit = () => {

    const [inputList, setInputList] = useState([
        {column: ""},

    ])
    const handleChange = (event, index) => {
        const values = [...inputList];
        values[index][event.target.name] = event.target.value
        setInputList(values)
    }

    const handleAddInput = () => {
        setInputList([...inputList, {column: ""}])
    }
    const handleRemoveInput = () => {
        const list = [...inputList]
        const index = inputList.length - 1
        list.splice(index, 1)
        setInputList(list)
    }
    const image = window.location.search.substring(1)
    return(
        <Wrapper>
            <Flex direction="column" justify="center" alignItems="center">
                <img src={Logo} alt="Logo_svg" />
                <p>Certificate Generator is here to help you create all your certicate just a blink with your own template</p>
                <Flex direction="row" justify="space-around" alignItems="center">
                    <Box>
                        <Flex direction="column" justify="flex-start" alignItems="flex-start" style={{padding: '2em'}}>
                            {inputList.map((item, i) => {
                                return(
                                    <Fragment key={i}>
                                        <label for="column1">Column {i+1}</label>
                                        <Flex direction="row" alignItems="flex-start">
                                            <Flex direction="column"  alingItems="flex-start">
                                                <input type="text" name="column" value={item.column} onChange={e => handleChange(e, i)} />
                                                {inputList.length - 1 === i && (
                                                    inputList.length < 3 ?
                                                    <Button variant="contained" className="addBtn" onClick={handleAddInput}>
                                                        <AddIcon /> 
                                                    </Button>
                                                    :
                                                    null
                                                )}
                                            </Flex>
                                            {inputList.length - 1 === i && i > 0 &&
                                                <Button variant="contained" className="delBtn" onClick={handleRemoveInput} >
                                                    <DeleteIcon />
                                                </Button>
                                            }
                                        </Flex>
                                    </Fragment>
                                )  
                            })} 
                            <Button variant="contained" color="primary" className="generate">Generate</Button>
                        </Flex>
                    </Box>
                    <Edit>
                        <Flex direction="column" alignItems="center">
                            <Flex direction="row" justify="flex-start">
                                {inputList.map((item, i) => {
                                    return(
                                        <Fragment key={i}>
                                            <p>{item.column}</p>
                                        </Fragment>
                                    )
                                })}
                            </Flex>
                            <img src={image} style={{width: '35em', height: '25em', marginTop: '3em'}} />
                        </Flex>
                    </Edit>
                </Flex>
            </Flex>
        </Wrapper>

    )
}

export default OneEdit