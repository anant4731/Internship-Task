import classes from "./DeliveryCard.module.css";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import { Typography } from "@mui/material";
const DeliveryCard = (props) => {
  const cls = `${props.className} + ${classes.delivery__card}`;
  return (
    <div
      className={cls}
      style={{
        borderLeft: `7px solid ${props.c}`,
        borderTop: `1px solid ${props.c}`,
        borderBottom: `1px solid ${props.c}`,
        borderRight: `1px solid ${props.c}`,
      }}
    >
      <div className={classes.delivery__card_div1}>
        <Typography variant="body2" className={classes.delivery__card_content}>
          {props.number}
        </Typography>
        <Typography variant="body2" className={classes.delivery__card_content}>
          {props.orderNumber}
        </Typography>
      </div>
      <div>
        <p className={classes.delivery__card_content}>
          <CheckroomIcon sx={{backgroundColor : '#e0e0eb', borderRadius:'7px', padding:'5px'}} />
        </p>
      </div>
    </div>
  );
};

export default DeliveryCard;
