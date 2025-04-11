import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
const Home = () => {
    var[user,setUser]=useState([])

    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
        console.log(response.data)
        setUser(response.data)    
    })
  return (
    <div>
        <br></br><br></br><br></br>
       <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>TITLE</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {user.map((val)=>{
                        return(
                        <TableRow>
                        <TableCell>{val.id}</TableCell>
                        <TableCell>{val.title}</TableCell>
                    </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
  )}
export default Home