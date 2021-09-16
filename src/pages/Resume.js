import React from "react";
import {desc, pageContainer} from "./pageStyle";
import {Image,Button} from "react-bootstrap";


export default class Resume extends React.Component{
    render (){
        return (
            <div style={pageContainer} id="resume">
                <div>
                    <h2> 📄 Resume</h2>
                    <hr/>
                    <p style={desc}>
                        <h5>Download a PDF version of my resume here.</h5>
                    </p>
                    <Button size="lg" target="_blank" href="../assets/resume.pdf" variant="outline-warning">Download resume as a PDF</Button>
                </div>
                <Image src="/assets/resume.png" thumbnail style={imageStyle}/>

            </div>
        )
    }
};

const imageStyle={
    height:"60%",
}
