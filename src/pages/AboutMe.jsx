import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AboutMe() {
    return (
        <div className="container pt-4">
            <h1 className="lead mb-0">
                Hello, I'm Jayce. Welcome to my portfolio.
            </h1>
            <p className="py-4 w-50 d-inline-block">
                I am a web developer in training hoping to learn all I can. As you can see I'm still learning but luckily I'm quick about it and have plenty of help. Currently I am well versed in HTML, CSS, JavaScript, NodeJS, and TypeScript; while still learning SQL and React. Thank you for taking the time to view my portfolio, I hope you have a great day.
            </p>
            <img src="./src/assets/IMG_9204.jpeg" className="pfp"/>
        </div>
    );
}