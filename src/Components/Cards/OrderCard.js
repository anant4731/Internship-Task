import { Typography } from "@mui/material";
import classes from "./OrderCard.module.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const OrderCard = (props) => {
  return (
    <div className={classes.order__card}>
      <div className={classes.order__card_div1}>
        <p>
          <Typography variant="p">{props.status}</Typography>
        </p>
        <p>
          <Typography variant="h6">{props.amount}</Typography>
        </p>
      </div>
      <div className={classes.order__card_div2}>
        <ShoppingBasketIcon sx={{color:'white', backgroundColor:`${props.bgCol}`, padding:'9px', borderRadius:'50%'}}/>
      </div>
    </div>
  );
};

export default OrderCard;
