import { useState } from 'react';
import './style.css';

const ToggleBgColor = () => {
    const [bgColor, setBgColor] = useState('white');
    const [buttonColor, setButtonColor] = useState('white');
    const [textColor, setTextColor] = useState('#1b1b1b');

    const clicked = () => {
        setBgColor(bgColor === 'white' ? '#1b1b1b' : 'white');
        setTextColor(bgColor === 'white' ? '#ffa31a' : '#1b1b1b');
        setButtonColor(buttonColor === 'white' ? 'black' : 'white');
    };

    return (
        <div style={{ backgroundColor: bgColor, color: textColor, minHeight: '100vh', padding: '1rem' }}>
            <button
                onClick={clicked}
                style={{
                    backgroundColor: buttonColor,
                    color: textColor,
                    border: `2px solid ${textColor}`,
                    padding: '0.5rem 1rem',
                    cursor: 'pointer',
                }}
            >
                {bgColor === '#1b1b1b' ? 'Black theme' : 'White theme'}
            </button>
            <section className='content'>
                <h1>
                    I am the best <br />
                    I am AYMAN
                </h1>
            </section>
        </div>
    );
};

export default ToggleBgColor;
