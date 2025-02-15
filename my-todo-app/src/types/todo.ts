export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    listId: string;
}

export interface SelectedTodoList {
    id: string;
    todoItems: Todo[];
    name: string;
}

export interface TodoListProps  {
    todoLists: SelectedTodoList[];

    setToDoLists: React.Dispatch<React.SetStateAction<SelectedTodoList[]>>;
    setSelectedList: React.Dispatch<React.SetStateAction<SelectedTodoList>>;
}

export interface  TodoItemProps  {
    todo: Todo;
    listId: string;
    deleteTodo: (id: string) => void;
    setCompleted: (id: string, completed: boolean) => void;
};
export interface TodoFilterProps{
    currentFilter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}