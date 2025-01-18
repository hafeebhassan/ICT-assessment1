import { Button, Container, TextareaAutosize, TextField } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <div>
        <h1>Welcome To The Blog App</h1>
        <p>Enter blog details to submit your blog</p>
        <br /><br /><br />
        <Container maxWidth="sm"style={{backgroundColor:"black",borderRadius:"50px"}}>
            <br /><br />
            <TextField variant='outlined'label="Enter Blog Name"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField variant='outlined'label="Enter Author Name"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br />
            <TextField variant='outlined'label="Enter Description"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField variant='outlined'label="Enter blog"style={{backgroundColor:"white",borderRadius:"10px",fontFamily:"cursive"}}/><br /><br /><br /><br /><br />
            <Button variant='contained'style={{backgroundColor:"white",color:"black"}}>Submit Blog</Button><br /><br /><br /><br />
        </Container>
    </div>
  )
}

export default AddBlog