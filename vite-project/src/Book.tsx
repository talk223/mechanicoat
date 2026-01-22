import Header from "./Header.tsx";
function Book(){
    return (
        <div>
            <Header />
            <h1 style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>Book Me</h1>
            <h2 style = {{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>Book me through *api here*</h2>     
        </div>
    )
} export default Book