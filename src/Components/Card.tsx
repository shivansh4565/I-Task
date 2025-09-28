import React, { useState } from "react";
import type { ChangeEvent } from "react";

import { v4 as uuidv4 } from "uuid";

// Define Todo type
interface Todo {
    id: string;
    todo: string;
    isCompleted: boolean;
}

const Card: React.FC = () => {
    const [Todos, setTodos] = useState<Todo[]>([]);
    const [todo, setTodo] = useState<string>("");

    // Edit a todo by index
    const handleEdit = (index: number) => {
        const newTodo = prompt("Edit Todo:", Todos[index].todo);
        if (newTodo !== null && newTodo.trim() !== "") {
            const updatedTodos = [...Todos];
            updatedTodos[index].todo = newTodo;
            setTodos(updatedTodos);
        }
    };

    // Delete a todo by index
    const handleDelete = (index: number) => {
        const updatedTodos = Todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    // Add a new todo
    const handleAdd = () => {
        if (todo.trim() === "") return;
        setTodos([...Todos, { id: uuidv4(), todo, isCompleted: false }]);
        setTodo("");
    };

    // Handle input change
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value);
    };

    // Toggle checkbox completion
    const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement; // ✅ type assertion
        const id = target.id;
        const index = Todos.findIndex((t) => t.id === id);
        if (index === -1) return;
        const updatedTodos = [...Todos];
        updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
        setTodos(updatedTodos);
    };

    return (
        <div className="mt-2 bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-2xl p-6 text-white min-h-screen w-screen">
            {/* Add Todo Section */}
            <div className="addTodo flex flex-col items-center mb-10">
                <h1 className="font-bold text-center text-2xl text-gray-100 mb-4">
                    Add a Todo
                </h1>
                <input
                    onChange={handleChange}
                    value={todo}
                    type="text"
                    placeholder="Enter Your Todo"
                    className="border border-gray-600 rounded-lg p-3 mb-4 w-1/2 bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all"
                />
                <button
                    type="button"
                    onClick={handleAdd}
                    className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition-transform transform hover:scale-105"
                >
                    ➕ Add Todo
                </button>
            </div>

            {/* Todos Section */}
            <h1 className="font-bold text-center text-3xl text-gray-100 mb-6">
                Your Todos
            </h1>
            <div className="todos space-y-4 max-w-3xl mx-auto">
                {Todos.length === 0 ? (
                    <p className="text-gray-400 text-center">No todos yet. Add one!</p>
                ) : (
                    Todos.map((item, index) => (
                        <div
                            key={item.id}
                            className="todo flex justify-between items-center bg-gray-800 px-4 py-3 rounded-lg shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    id={item.id}
                                    checked={item.isCompleted}
                                    onChange={handleCheckbox}
                                    className="w-5 h-5 accent-green-500"
                                />
                                <span
                                    className={`text-gray-200 font-medium ${item.isCompleted ? "line-through text-gray-500" : ""
                                        }`}
                                >
                                    {item.todo}
                                </span>
                            </div>
                            <div className="button flex gap-3">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-sm rounded-md text-white transition"
                                >
                                    ✏️ Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="px-3 py-1 bg-red-600 hover:bg-red-500 text-sm rounded-md text-white transition"
                                >
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Card;
