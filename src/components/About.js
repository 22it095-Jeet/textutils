import React, { useState } from 'react'

export default function About() {
    const [mystyle, setMystyle] = useState({
        color: "black",
        backgroundColor: "white",

    })
    const [btntext, setBtntext] = useState("Enable Dark Mode");
    const toggleStyle = () => {
        if (mystyle.color === "black") {
            setMystyle({
                color: "white",
                backgroundColor: "black",
                border : '1px solid white'
            })
            setBtntext("Enable light Mode");
        } else {
            setMystyle({
                color: "black",
                backgroundColor: "white",
            })
            setBtntext("Enable Dark Mode");
        }
    }
    return (
    <div className="container" style={mystyle}>
        <h1 className='my-3'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" >
            <h2 className="accordion-header" id='headingOne'>
            <button className="accordion-button"  style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Text Manipulation and Analysis Features</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                Your website is a versatile tool for both developers and general users who need to analyze and manipulate text. It provides a range of functionalities that go beyond simple text editing. For instance, it can convert text to uppercase or lowercase, remove extra spaces, count words and characters, and even reverse sentences or words. These features are highly valuable for tasks like data cleaning, preparing text for specific formats, or simply getting quick statistics about a piece of writing.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>User-Friendly Interface with React</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                Built with React.js, your website offers a dynamic and responsive user experience. React's component-based architecture makes the application efficient and modular. The use of hooks like useState allows for real-time updates and seamless interactions, meaning users can see the results of their text manipulation instantly without a full page reload. This provides a fast, smooth, and intuitive feel to the application. Your use of a dark mode feature is a great example of enhancing the user experience.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Component-Based Architecture</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                The project's structure likely follows a component-based design, which is a core strength of React. This means the application is broken down into reusable, self-contained pieces. For example, you probably have separate components for the navigation bar, the main text input area, and the output display. This approach makes the code more organized, easier to maintain, and simpler to scale. It also allows you to add new text manipulation tools or features in the future without having to rewrite large parts of the application.
            </div>
            </div>
        </div>
        </div>
        <div className="container my-4">
            <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div>
    </div>
  )
}
