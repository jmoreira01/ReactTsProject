import React, { useState } from "react";
import {IState as Props} from "../App";

interface IProps {
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList: React.FC<IProps> = ({setPeople, people}) => {

    const [input, setInput] = useState({
        name:"",
        age: "",
        img: "", 
        note: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
      setInput({
        ...input, // whatever input is (...)
        [e.target.name]: e.target.value
      })
}

const handleClick = (): void => {
    if(
        !input.name ||
        !input.age
        ) 
        return

    setPeople([
        ...people,
        {
            name: input.name,
            age: parseInt(input.age),
            img: input.img,
            note: input.note
        }
    ])

    setInput({
        name: "",
        age: "",
        img: "",
        note: ""
    })
}

    return (
        <div className="AddToList">
            <input 
            type="text" 
            placeholder="name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"
            />
             <input 
            type="text" 
            placeholder="age"
            className="AddToList-input"
            value={input.age}
            onChange={handleChange}
            name="age"
             />
             <input 
            type="text" 
            placeholder="ImageUrl"
            className="AddToList-input"
            value={input.img}
            onChange={handleChange}
            name="img"
             />
             <textarea
            placeholder="notes"
            className="AddToList-input"
            value={input.note}
            onChange={handleChange}
            name="note"
             />
             <button 
             className="AddToList-btn"
             onClick={handleClick}
             >
                Add to List
             </button>
        </div>
    )
}
 
export default AddToList;