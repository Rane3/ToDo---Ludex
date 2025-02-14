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

