import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onResetForm = () => {
        setFormState(initialForm)
    }

    const onInputChange = ({ target }) => {  //{target} se refiere a destructurar el event --> event.target

        const { name, value } = target;
        setFormState({
            ...formState, //con esto dejamos todas las propiedades iniciales de formState como estaban y solo modificamos la que queremos
            [name]: value // la propiedad name es la que voy a establecer en el objeto y va a valer = value
        })
    }

    return {

        ...formState,
        formState, //valor del formulario
        onInputChange, //función para cambiarlo
        onResetForm

    }

}
