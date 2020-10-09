import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return{
        background : '#f4f4f4',
        textDecoration : this.props.todo.isCompleted ?
        'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style = {this.getStyle()}>
               <p>
                   <input type="checkbox" onChange ={this.props.markComplete.bind(
                       this, this.props.todo.id)} />
                   {this.props.todo.title}
                   <button onClick = {this.props.delTodo.bind(this, this.props.todo.id)}
                   style ={btnStyle }>X</button>
                </p>
            </div>
        )
    }
}

Todoitem.propTypes ={
    todo : PropTypes.object.isRequired
}

const btnStyle ={
    background : '#ff0000',
    color : '#fff',
    border : 'none',
    padding : '5px 10px',
    borderRadius : '50%',
    cursor : 'pointer',
    float : 'right'
}

export default Todoitem
