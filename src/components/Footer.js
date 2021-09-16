export default function Footer(){
    return (
        <div style={footerStyle}> <p>Built with <a target="_blank" href="https://reactjs.org/"> <img style={{height:"32px",width:"32px"}} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/></a> by Sandesh Koirala. </p></div>
    )
};

const footerStyle={
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    fontWeight: 600
}