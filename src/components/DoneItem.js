import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />

const DoneItem = props => {
    return (
        <div className="done-item">
            {/* Take the "todo" object received in the "item" prop, and use the value of its "text" property */}
            <p>{props.item.text}</p>
            <div>
                {/* Use a font awesome icon to render a "check" icon - see line 9 for creating the icon component */}
                <button className="btn">{checkIcon}</button>
            </div>
        </div>
    );
}

export default DoneItem;