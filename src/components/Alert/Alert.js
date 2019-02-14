import React from 'react';
import './Alert.css';


function Alert(props) {
    let alertType;
    switch(props.type) {
        case "warning":
            alertType = 'warning';
            break;
        case "success":
            alertType = 'success';
            break;
    }


    return (
        <div className={'Alert' + (props.show ? ' Alert-Show': '') + ' ' + alertType}>
            {props.children}
        </div>

    )

}

export default Alert;