import React from "react";
import Header from "./Header.tsx";

function HomePage(){
    return(
        <div>
            <Header />
            <h1 style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>Mobile Mechanic Service</h1>
            
            <h2 style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>Go to <a href = "/book">Book</a> Page</h2>
        </div>
    )
} export default HomePage