import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header style = {headerStyle}> 
            <h1>Todolist</h1>
            <Link style = {LinkStyle} to = "/"> Home </Link> | <Link 
            style = {LinkStyle} to = "/about"> About </Link> 
        </header>
    )
}

const LinkStyle ={
    color : "#fff"
}
const headerStyle ={
    background : '#333',
    color : '#fff',
    textAlign : 'center'
}

export default Header;