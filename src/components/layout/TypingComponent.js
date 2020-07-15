import React from 'react';
import Typing from 'react-typing-animation';

const TypingComponent = ({ msg }) => {
    return (
        <Typing speed={200}>
            <h5>{msg}</h5>
        </Typing>
    );
};

export default TypingComponent;
