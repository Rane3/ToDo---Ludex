export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoList {
    id: string;
    todoItems: Todo[];
    name: string;
}

export interface TodoListProps  {
    todoLists: TodoList[];
    setToDoLists: React.Dispatch<React.SetStateAction<TodoList[]>>;
    setSelectedList: React.Dispatch<React.SetStateAction<TodoList>>;
}

export interface  TodoItemProps  {
    todo: Todo;
    setCompleted: (id: string, completed: boolean) => void;
};