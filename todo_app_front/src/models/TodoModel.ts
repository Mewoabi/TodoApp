export interface Todo {
    id: number, 
    todo: string, 
    isDone: boolean
}

export interface props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAddTodo: (e: React.FormEvent) => void
}

export interface todoListProps {
    todos: Todo[], 
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
}