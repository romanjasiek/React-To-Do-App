import React from "react";
// * Import font-awesome icons - remember to install these modules using NPM before trying to use an icon!
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const checkIcon = <FontAwesomeIcon icon={faCircle} />

const ToDoItem = props => {
    return (
        <div className="todo-item">
            {/* Take the "todo" object received in the "item" prop, and use the value of its "text" property */}
            <p>{props.item.text}</p>
            <div>
                {/* Use a font awesome icon to render a "check" icon - see line 9 for creating the icon component */}
                <button className="btn">{checkIcon}</button>
            </div>
        </div>
    );
}

export default ToDoItem;