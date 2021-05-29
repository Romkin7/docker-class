import React from 'react';

const Message = ({text, color, visible}) => {
    return (
        <div className={`message ${color} ${visible ? 'hidden' : ''}`}>
            {text}
        </div>
    )
}

export default Message;
