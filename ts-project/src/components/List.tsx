import React from "react";
import {IState as Props} from "../App";

// !A interface não precisa de estar apresentada aqui porque foi importada de app.js, como IProps.

interface IProps {
    people: Props["people"];

  }

const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map ((person) => {
            return (
            <li className="List">
                <div className="List-header">
                    <img src={person.img} alt="" className="List-img" />
                    <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                    </li>
                    )
                })
            }
return (
    <ul>
        {renderList()}
    </ul>
    )
}
 
export default List;