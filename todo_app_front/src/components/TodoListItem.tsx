import React, { useEffect, useRef, useState } from 'react'
import './styles.css'
import { Todo } from '../models/TodoModel'
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";

type listProp = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoListItem: React.FC<listProp> = ({ todo, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(
            todos.map(todo => todo.id == id ? { id: todo.id, isDone: todo.isDone, todo: editTodo } : todo)
        );
        setEdit(false)
        console.log(edit);
    }

    const handleDelete = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const handleDone = (e: React.FormEvent, id: number) => {
        e.preventDefault();
        const otherTodos = todos.filter(todo => todo.id !== id);
        const myTodo = todos.find(todo => todo.id === id)!;
        myTodo.isDone = !myTodo.isDone;
        setTodos([...otherTodos, myTodo]);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]);

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='listItem' onSubmit={(e) => { handleSubmit(e, todo.id) }}>
            {
                edit ? (
                    <input
                        type="text"
                        className='list-item-input'
                        value={editTodo}
                        onChange={
                            (e) => {
                                setEditTodo(e.target.value)
                            }}
                        ref={inputRef} />
                ) : !todo.isDone ? (
                    <span className='list-item-text'>{todo.todo}</span>
                ) : (
                    <span className='list-item-text' style={{ textDecoration: "line-through" }}>{todo.todo}</span>
                )
            }
            <div className='list-item-icons'>
                <span className='list-item-icon' onClick={() => setEdit(!edit)}><AiFillEdit /></span>
                <span className='list-item-icon' onClick={(e) => { handleDelete(e, todo.id) }}><AiFillDelete /></span>
                <span className='list-item-icon' onClick={(e) => { handleDone(e, todo.id) }}><MdOutlineDownloadDone /></span>
            </div>
        </form>
    )
}

export default TodoListItem