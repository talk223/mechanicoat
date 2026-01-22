import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function ServicesList() {
  const services = [
    "Oil changes",
    "Brake repairs",
    "Engine diagnostics",
    "Transmission services",
  ];

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 300,
        "& ul": { padding: 0 },
      }}
      subheader={<ListSubheader>Our Services</ListSubheader>}
    >
      {services.map((service, index) => (
        <ListItem key={index}>
          <ListItemText primary={service} />
        </ListItem>
      ))}
    </List>
  );
}
