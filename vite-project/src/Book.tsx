import Header from "./Header.tsx";

function Book() {
  return (
    <div>
      <Header />

      <h1 style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
        Book Me
      </h1>

      <div style={{ textAlign: "center", marginTop: "40px", fontFamily: "Arial, sans-serif" }}>
        <a
          href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2DRKiJ-KxjneGNTdBK9YMx9-125vmwIC3LMVucpsgcgYmnsKwOUpVLTPbAEymFPuktGiVGwp9h?gv=true"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#039BE5",
            color: "white",
            padding: "14px 28px",
            borderRadius: "8px",
            fontSize: "18px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
          }}
        >
          Book an Appointment
        </a>
      </div>
    </div>
  );
}

export default Book;
