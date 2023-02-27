import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../../actions";

export default function SearchBar (){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [inputValue, setInputValue] = useState('')

    function handleInputChange (e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNameCountry(name))
        setInputValue('');
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='text'
                    placeholder='Buscar...'
                    value={inputValue}
                    onChange={(e) => {
                        handleInputChange(e);
                        setInputValue(e.target.value);
                    }}
                />
                <button type='submit'>Buscar</button>
            </form>
        </div>
    )
}
