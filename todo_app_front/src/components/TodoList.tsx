import React from 'react'
import { Todo, todoListProps } from '../models/TodoModel'
import TodoListItem from './TodoListItem'
import './styles.css'

const TodoList: React.FC<todoListProps> = ({ todos, setTodos}) => {
    const activeTodos = todos.filter(todo => todo.isDone===false);
    const completedTodos = todos.filter(todo => todo.isDone === true);
    return (
        <div className="todo-container">
            <div className='active-todos'>
                <span className='todo-heading'>Active</span>
                <div className='todoList'>
                    {
                        todos.map(todo => (
                                <div key={todo.id} className='active'>
                                    <TodoListItem todo={todo} todos={todos} setTodos={setTodos} />
                                </div>
                        ))
                    }
                </div>
            </div>
            <div className='completed-todos'>
                <span className='todo-heading'>Completed</span>
                <div className='todoList'>
                    {
                        todos?.map(todo => (
                            <div key={todo.id} className='completed'>
                                <TodoListItem todo={todo} todos={todos} setTodos={setTodos} />
                            </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoList