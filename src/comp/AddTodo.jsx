import { useState } from 'react'
import { Card } from "./ui/Card"
import { Button } from "./ui/Button"
import classes from './AddTodo.module.css'
import { ErrorModal } from './ui/ErrorModal';

export const AddTodo = (props) => {

    const [todo, setTodo] = useState('');
    const [error, setError] = useState(null)

    const todoChangeHandler = (e) => {
        setTodo(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (todo.trim().length === 0) {
            setError({
                title: 'Invalid value, inputs should not be empty',
                message: 'Please enter a not empty values'
            })
            return
        }

        props.onAddTodo(todo)

        setTodo('')
    }

    const closeModalHandler = () => {
        setError(null)
    }

    return <Card className={classes.form}>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={closeModalHandler} />}
        <form onSubmit={submitHandler}>
            <h1>Todo List</h1>
            <input type="text" onChange={todoChangeHandler} value={todo} />
            <Button>Add todo</Button>
        </form>
    </Card>
}