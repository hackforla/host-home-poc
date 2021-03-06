/*** sandbox component to view component lib : check out at route localhost:8080/componentlibrary ***/

import React from 'react'
import {
    Checkbox,
    Select,
    RadioButtons,
    LargeTextInput,
    TextInput,
    TextArea,
    Button,
    Paper,
    Card,
    Stepper,
} from './index'
import { theme } from './theme'
import { MuiThemeProvider } from '@material-ui/core/styles'

const AllInputs = () => {
    //mocking options key in Questions interface
    const options = {
        check: ['yes', 'no'],
        drop: ['10', '20'],
        radio: ['yes', 'no'],
    }

    //checkbox -> should only be used for multi-selecton
    const [checked, setChecked] = React.useState({
        yes: false,
        no: false,
    })
    const handleCheck = (event: any) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked })
    }

    //input, radio, dropdown, text
    const [value, setValue] = React.useState('')
    const [text, setText] = React.useState('')
    const [select, setSelect] = React.useState('')

    //radio + dropdown
    const handleChange = (event: any) => {
        setValue(event.target.value)
    }

    const handleSelect = (event: any) => {
        setSelect(event.target.value)
    }

    //text inputs
    const handleText = (event: any) => {
        setText(event.target.value)
    }

    //injects color palette from our theming

    const { palette } = theme

    return (
        //themes can be inlined or injected via withStyles api (latter preferred)
        <MuiThemeProvider theme={theme}>
            <div style={{ padding: theme.spacing(2) }}>
                <h1
                    style={{
                        color: palette.primary.main,
                        margin: theme.spacing(1),
                        padding: theme.spacing(1),
                    }}
                >
                    Check out these mui inputs
                </h1>
                <div
                    style={{
                        border: `1px solid black`,
                        margin: theme.spacing(1),
                        padding: theme.spacing(1),
                    }}
                >
                    <Stepper></Stepper>
                </div>
                <Card></Card>
                <div
                    style={{
                        border: `1px solid ${palette.primary.main}`,
                        margin: theme.spacing(1),
                        padding: theme.spacing(1),
                    }}
                >
                    <Checkbox
                        options={options.check}
                        label={`checkbox`}
                        helperText={`checked input`}
                        onChange={(event) => {
                            handleCheck(event)
                        }}
                    ></Checkbox>
                </div>

                <div
                    style={{
                        border: `1px solid black`,
                        margin: theme.spacing(1),
                        padding: theme.spacing(1),
                    }}
                >
                    <RadioButtons
                        id={'1'}
                        options={options.radio}
                        name={`test`}
                        value={value}
                        ariaLabel={`test`}
                        formLabel={`radio buttons`}
                        onChange={(event) => {
                            handleChange(event)
                        }}
                    ></RadioButtons>
                </div>
                <div>
                    <Select
                        id={`demo-simple-select-outlined-label`}
                        labelId={`demo-simple-select-outlined-label`}
                        label={`Age`}
                        options={options.drop}
                        value={select}
                        onChange={(event) => {
                            handleSelect(event)
                        }}
                    ></Select>
                </div>

                <div>
                    <TextInput
                        id={'1'}
                        name={`test`}
                        type={`text`}
                        value={text}
                        placeholder={`test`}
                        onChange={(event) => {
                            handleText(event)
                        }}
                    ></TextInput>
                </div>
                <div>
                    <LargeTextInput
                        id={'1'}
                        rows={8}
                        name={`test`}
                        type={`text`}
                        value={text}
                        placeholder={`test`}
                        onChange={(event) => {
                            handleText(event)
                        }}
                    ></LargeTextInput>
                </div>
            </div>
        </MuiThemeProvider>
    )
}

export default AllInputs
