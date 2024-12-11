import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Resume() {
    return (
        <div>
            <h1 className="text-center">
                Resume
            </h1>
            <center>
            <embed style={{ width: '800px', height: '800px'}} src='./src/assets/resume.pdf'/>
            </center>
        </div>
    );
}