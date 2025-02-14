export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoList {
    id: string;
    todos: Todo[];
}

export interface TodoGroup {    
    id: string;
    name: string;
    todoList: TodoList[];
}