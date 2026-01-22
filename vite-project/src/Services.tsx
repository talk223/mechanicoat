import Header from "./Header.tsx";
    
function Services(){
    return (
        <div>
            <Header />
            <h1 style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>Services</h1>
            <h2 style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>Details about services will be listed here.</h2>
            <li style = {{ fontFamily: "Arial, sans-serif" }}>Services:
                <ul>
                    <li style = {{ fontFamily: "Arial, sans-serif"}}>Oil changes</li>
                    <li style = {{ fontFamily: "Arial, sans-serif"}}>Brake repairs</li>
                    <li style = {{ fontFamily: "Arial, sans-serif"}}>Engine diagnostics</li>
                    <li style = {{ fontFamily: "Arial, sans-serif"}}>Transmission services</li>
                </ul>
            </li>
        </div>
    )
}export default Services