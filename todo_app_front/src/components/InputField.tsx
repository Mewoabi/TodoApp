import { useRef } from 'react';
import './styles.css'
import { props } from '../models/TodoModel'


const InputField: React.FC<props> = ({ todo, setTodo, handleAddTodo }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form className='searchBar' onSubmit={(e) => {
            handleAddTodo(e);
            inputRef.current?.blur()
        }}>
            <input
                ref={inputRef}
                type="text"
                className="searchInput"
                placeholder='Enter a task'
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }} />
            <button type="submit" className="searchButton">Go</button>
        </form>
    );
}

export default InputField;