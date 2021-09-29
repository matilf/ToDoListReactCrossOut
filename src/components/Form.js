import React, { useState } from "react"
import Todo from "./Todo"



const Form = () => {
    const [todos, setTodos] = useState([{}]);
    const [todo, setTodo] = useState("")



    const handleChange = e => setTodo({ [e.target.name]: e.target.value })

    const handleClick = e => setTodos([...todos, todo])

    const handleSubmit = e => { e.preventDefault() }

    const deletetodo = indice => {
        const resetTodos = [...todos]
        resetTodos.splice(indice, 1)
        setTodos(resetTodos)
    }




    return (

        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todo" onChange={handleChange} />
                <button onClick={handleClick}>add</button>
            </form>

            {todos.map((value, index) => (
                <Todo todo={value.todo} key={index} index={index} deletetodo={deletetodo} />
            ))
            }



        </>
    )
}

export default Form