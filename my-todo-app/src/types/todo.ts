export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoList {
    id: string;
    name: string;
    todos: Todo[];
}
