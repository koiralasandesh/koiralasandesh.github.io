import React from "react";
import { Image} from "react-bootstrap";
import {pageContainer,desc} from "./pageStyle";

export default class Home extends React.Component{
    render (){
        return(
            <div style={pageContainer} id="home" >
                    <p style={desc}>
                        👋 Hello,<br/> I am Sandesh Koirala. <br/> So glad to have you here!<hr/>👨‍💻 I am a Web Developer!
                        <br/>I build all sorts of websites from scratch.<br/>
                        Visit the <a href="#projects">Projects</a> section to see projects I have worked in.
                    </p>
                <Image src="/assets/main.png" thumbnail roundedCircle style={imageStyle}/>
            </div>

        )
    }
};

const imageStyle = {
  height: "60%",
}
