import { useState } from 'react';
import './style.css';

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const testimonials = [
        {
            author: "Sarah Johnson",
            quote: "This course completely changed how I approach coding. The explanations were clear, and the projects helped me build real skills."
        },
        {
            author: "Michael Lee",
            quote: "I loved how practical and hands-on the lessons were. I could apply what I learned immediately to my job."
        },
        {
            author: "Aisha Khan",
            quote: "The community and support system are amazing. I never felt lost or stuck during my learning journey."
        },
        {
            author: "Carlos Martinez",
            quote: "From zero to building my own websites in just a few weeks—this course is worth every minute."
        },
        {
            author: "Emily Zhang",
            quote: "Thanks to this program, I landed my first developer job. The React section was especially helpful!"
        }
    ];

    const prev = () => {
        setIndex((index + testimonials.length - 1) % testimonials.length);
    };

    const next = () => {
        setIndex((index + 1) % testimonials.length);
    };

    return (
        <div className='testimonials'>
            <div className="testimonials-quote">
                "{testimonials[index].quote}"
            </div>
            <div className="testimonials-author">
                - {testimonials[index].author}
            </div>
            <div className="testimonials-nav">
                <button onClick={prev}>Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default Testimonials;
