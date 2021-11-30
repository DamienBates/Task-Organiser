import { Paper, FormControl, InputLabel, Input, FormHelperText } from '@mui/material'
import React from 'react'

const Login = () => {
    return (
        <Paper>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </Paper>
    )
}

export default Login
