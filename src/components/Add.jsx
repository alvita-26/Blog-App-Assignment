import { Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
        <br></br><br></br><br></br>
      <h1>BLOG FORM</h1>
        <br></br><br></br><br></br>
        <TextField label="BLOG NAME" variant="outlined"/><br></br><br></br>
        <TextField label="DESCRIPTION" variant="outlined" /><br></br><br></br>
        <TextField label="AUTHOR NAME" variant="outlined"/><br></br><br></br>
        <Button variant="contained" color="success">ADD </Button>
    </div>
  )
}

export default Add