import './styles.css'


interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAddTodo: (e:React.FormEvent) => void
}

const InputField:React.FC<props> = ({ todo, setTodo, handleAddTodo } ) => {

    return (
        <form className='searchBar' onSubmit={handleAddTodo}>
            <input
                type="text"
                className="searchInput"
                placeholder='Enter a task'
                value={todo} 
                onChange={(e) => {setTodo(e.target.value)}}/>
            <button type="submit" className="searchButton">Go</button>
        </form>
    );
}

export default InputField;