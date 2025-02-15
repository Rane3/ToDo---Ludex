//Todo item
export interface Todo {
    id: string;
    text: string;
    completed: boolean;
    listId: string;
}
//The current todo list that is selected
export interface SelectedTodoList {
    id: string;
    todoItems: Todo[];
    name: string;
}
//Used to control current Todo Lists
export interface TodoListProps  {
    todoLists: SelectedTodoList[];
    setToDoLists: React.Dispatch<React.SetStateAction<SelectedTodoList[]>>;
    setSelectedList: React.Dispatch<React.SetStateAction<SelectedTodoList>>;
}
//Used to control a current item, 1 to 1 relationship with listId
export interface  TodoItemProps  {
    todo: Todo;
    listId: string;
    deleteTodo: (id: string) => void;
    setCompleted: (id: string, completed: boolean) => void;
}
//Filters interface
export interface TodoFilterProps{
    currentFilter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
}