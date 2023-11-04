import { useEffect, useReducer, useState } from 'react'
import { todoReducer } from '../11-useReducer/todoReducer';


const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime() * 3,
    //     description: 'Recolectar la piedra del Tiempo',
    //     done: false,
    // }
]


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || []; //voy a parsear para hacer persistente la información del localStorage y si es nulo devuelvo un array vacío.
}


export const useTodos = () => {

    const [ todoState, setTodoState ] = useState();

    const [todos, dispatch] = useReducer(todoReducer, initialState, init); //este state es el que tiene que modificarse con los cambios que mis componentes reciban


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {

        dispatch({
            type: '[TODO] Add Todo',
            payload: todo
        });

    }

    const handleDeleteTodo = (id) => {

        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }
    const handleToggleTodo = (id) => {

        console.log({id})

        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }


  return {
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo

  }
}
