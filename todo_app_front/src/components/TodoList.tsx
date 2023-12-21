import React from 'react'
import { Todo, todoListProps } from '../models/TodoModel'
import TodoListItem from './TodoListItem'
import './styles.css'

const TodoList: React.FC<todoListProps> = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
            <div className='active-todos'>
                <span className='heading'>Active</span>
                <ul className='todoList'>
                    {
                        todos.map(todo => (
                            <li key={todo.id}>
                                <TodoListItem todo={todo} todos={todos} setTodos={setTodos} />
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='completed-todos'>
                <span className='heading'>Completed</span>
                <ul>
                    
                </ul>
            </div>
        </div>
    )
}

export default TodoList