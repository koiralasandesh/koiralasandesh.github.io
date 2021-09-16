import React from "react";
import {pageContainer,desc} from "./pageStyle";
import { Image} from "react-bootstrap";

export default class Education extends React.Component{
    render (){
        return (
            <div style={pageContainer} id="education">
                <div>
                <h2> 🎓 Education</h2>
                 <hr/>
                <p style={desc}>
                    <h4>Honors Bachelor of Science in Computer Science </h4><h5>Aug 2017 - May 2021</h5><br/>
                    <h5>University of Texas at Arlington </h5>
                </p>
                    </div>
                <Image src="assets/grad.png" thumbnail style={imageStyle}/>
            </div>
        )
    }
};

const imageStyle={
    height: "60%",
}