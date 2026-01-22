import Header from "./Header.tsx"; 
import List from "@mui/material/List"; 
import ListItem from "@mui/material/ListItem"; 
import ListItemText from "@mui/material/ListItemText"; 
import ListSubheader from "@mui/material/ListSubheader";

export default function Services() {
  const services = [
    "Oil changes",
    "Brake repairs",
    "Engine diagnostics",
    "Transmission services",
  ];

  return (
    <div>
      <Header />

      {/* Centering wrapper */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <List
          sx={{
            width: "600px",              // make it bigger
            bgcolor: "#111",             // match your theme
            color: "white",
            borderRadius: "12px",
            padding: "24px",
          }}
          subheader={
            <ListSubheader
              sx={{
                bgcolor: "#111",
                color: "white",
                fontSize: "28px",        // bigger title
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              Our Services
            </ListSubheader>
          }
        >
          {services.map((service, index) => (
            <ListItem key={index} sx={{ justifyContent: "center" }}>
              <ListItemText
                primary={service}
                primaryTypographyProps={{
                  fontSize: "22px",     // bigger items
                  textAlign: "center",
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
