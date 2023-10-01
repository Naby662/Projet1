
import React, { useState } from 'react';

import {useForm} from "react-hook-form"
import {useNavigate } from "react-router-dom";
import { useLoginMutation } from '../api/todo';
import { useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingTodoIndex, setEditingTodoIndex] = useState(-1);
  const [showList, setShowList] = useState(false);


  const { register, handleSubmit, reset} = useForm();
const navigate = useNavigate();
const [Todo, {data, isSuccess}] = useTodoMutation();
useEffect(() => {
  if(isSuccess) {
      localStorage.setItem('user', JSON.stringify(data))
          navigate('/admin');
  }
}, [isSuccess, data, navigate]);

const onSubmit = async (data) => {
  Login(data);
  reset();
}



  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([
        ...todos,
        { title: newTodo, description: newDescription, date: new Date().toLocaleString() },
      ]);
      setNewTodo('');
      setNewDescription('');
    }
  };

  const editTodo = (index) => {
    setEditingTodoIndex(index);
    setNewTodo(todos[index].title);
    setNewDescription(todos[index].description);
  };

  const updateTodo = () => {
    if (newTodo.trim() !== '') {
      const updatedTodos = [...todos];
      updatedTodos[editingTodoIndex] = {
        title: newTodo,
        description: newDescription,
        date: new Date().toLocaleString(),
      };
      setTodos(updatedTodos);
      setNewTodo('');
      setNewDescription('');
      setEditingTodoIndex(-1);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  return (
    <div className="max-w-md mx-auto ml-40">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Titre"
          className="w-full border border-gray-300 p-2"
          // value={newTodo}
          {...register("title")} 
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full border border-gray-300 p-2 mt-2"
          rows="3"
          // value={newDescription}
          {...register("description")} 
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
      </div>
      {editingTodoIndex === -1 ? (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addTodo}
        >
          Ajouter
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={updateTodo}
        >
          Modifier
        </button>
      )}
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-600"
        onClick={toggleList}
      >
        {showList ? 'Masquer Liste' : 'Afficher Liste'}
      </button>
      {showList && (
        <ul className="mt-4">
          {todos.map((todo, index) => (
            <li key={index} className="mb-2">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold">{todo.title}</h2>
                  <p className="text-gray-600">{todo.description}</p>
                  <p className="text-gray-400 mt-2">{todo.date}</p>
                </div>
                <div>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                    onClick={() => editTodo(index)}
                  >
                    Modifier
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 ml-2"
                    onClick={() => deleteTodo(index)}
                  >
                    Supprimer
                  </button>
                 
                </div>
                
              </div>

            </li>
          ))}
        </ul>
      )}
       <button type='submit'
        onSubmit={handleSubmit(onSubmit)}
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 ml-2">
        Appliquer
        </button>
    </div>
    
  );
}

export default TodoList;
