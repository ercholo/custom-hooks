

export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload];

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload); //el filter no muta el array, si no que devuelve uno nuevo. Pd. en el payload solo vamos a enviar el id.

        case '[TODO] Toggle Todo':
            return initialState.map(todo => {

                if (todo.id === action.payload) { //id 
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            }); //el filter no muta el array, si no que devuelve uno nuevo. Pd. en el payload solo vamos a enviar el id.

        default:
            return initialState;
    }

}