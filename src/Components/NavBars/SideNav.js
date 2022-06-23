import { useState } from "react";
import classes from "./SideNav.module.css";
import {
  mdiHome,
  mdiTag,
  mdiFormatListCheckbox,
  mdiFileDocumentMultiple,
  mdiAccount,
  mdiPoll,
  mdiCog,
  mdiLogout,
} from "@mdi/js";
import PanoramaIcon from "@mui/icons-material/Panorama";
import { Typography } from "@mui/material";
import Icon from "@mdi/react";

const SideNav = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cls = isExpanded
    ? `${classes.side__nav_expanded}`
    : `${classes.side__nav_notexpanded}`;
  const spanCls = isExpanded ? `${classes.nav__span}` : `${classes.hidden}`;
  const showNavHandler = (e) => {
    e.preventDefault();
    if (isExpanded) setIsExpanded(false);
    else setIsExpanded(true);
  };
  return (
    <div className={cls}>
      <div onClick={showNavHandler} className={classes.header}>
        <PanoramaIcon />
        <span className={spanCls}>LAUNDARY</span>
      </div>
      <div className={`${classes.nav__divs} ${classes.active}`}>
        <Icon size={1} className={classes.icon} color="white" path={mdiHome} />
        <span className={spanCls}>
          <Typography variant="body1">Dashboard</Typography>
        </span>
      </div>
      <div className={classes.nav__divs}>
        <Icon size={1} className={classes.icon} color="red" path={mdiTag} />
        <span className={spanCls}>
          <Typography variant="body1">POS</Typography>
        </span>
      </div>
      <div className={classes.nav__divs}>
        <Icon
          size={1}
          className={classes.icon}
          color="yellow"
          path={mdiFormatListCheckbox}
        />
        <span className={spanCls}>
          <Typography variant="body1">Order Status Screen</Typography>
        </span>
      </div>

      <div className={classes.nav__divs}>
        <Icon
          size={1}
          className={classes.icon}
          color="red"
          path={mdiFileDocumentMultiple}
        />
        <span className={spanCls}>
          <Typography variant="body1">Expense</Typography>
        </span>
      </div>
      <div className={classes.nav__divs}>
        <Icon
          size={1}
          className={classes.icon}
          color="purple"
          path={mdiAccount}
        />
        <span className={spanCls}>
          <Typography variant="body1">Customers</Typography>
        </span>
      </div>
      <div className={classes.nav__divs}>
        <Icon size={1} className={classes.icon} color="blue" path={mdiTag} />
        <span className={spanCls}>
          <Typography variant="body1">Services</Typography>
        </span>
      </div>
      <div className={classes.nav__divs}>
        <Icon size={1} className={classes.icon} color="yellow" path={mdiPoll} />
        <span className={spanCls}>
          <Typography variant="body1">Report</Typography>
        </span>
      </div>
      <div className={classes.nav__divs}>
        <Icon size={1} className={classes.icon} color="orange" path={mdiCog} />
        <span className={spanCls}>
          <Typography variant="body1">Tools</Typography>
        </span>
      </div>
      <div className={classes.nav__divs}>
        <Icon size={1} className={classes.icon} color="gray" path={mdiLogout} />
        <span className={spanCls}>
          <Typography variant="body1">Logout</Typography>
        </span>
      </div>
    </div>
  );
};
export default SideNav;
