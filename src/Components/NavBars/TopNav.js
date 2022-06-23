import { Container } from "@mui/material";
import classes from "./TopNav.module.css";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import AttachFileIcon from "@mui/icons-material/AttachFile";
const TopNav = (props) => {
  return (
    <Container maxWidth="xl">
      <div className={classes.top__nav}>
        <div className={classes.control}>
          <AddIcon sx={{ color: "white", padding: "2px", cursor: "pointer" }} />
          <AttachFileIcon
            sx={{ color: "white", padding: "2px", cursor: "pointer" }}
          />
          <PersonIcon
            sx={{ color: "white", padding: "2px", cursor: "pointer" }}
          />
          <select>
            <option value="0">English</option>
            <option value="1">DEMO</option>
            <option value="2">DEMO</option>
          </select>
          <div className={classes.ham__container}>
            <div className={classes.ham}></div>
            <div className={classes.ham}></div>
            <div className={classes.ham}></div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default TopNav;
