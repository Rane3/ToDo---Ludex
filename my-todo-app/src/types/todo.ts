export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export interface TodoGroup {
    id: string;
    name: string;
    todos: Todo[];
}
