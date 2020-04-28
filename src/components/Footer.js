import React from 'react';
import { Typography } from "@material-ui/core";
import Link from '@material-ui/core/Link';


var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "65px",
    width: "100%",
};

function Footer() {
    return (
            <div style={style}>
                <Typography>&copy; 2020 Zoomers</Typography>

                <Link href="#"> Yksityisyys </Link>
                <Link href="#"> Käyttöehdot </Link>
                <Link href="#"> Tuki </Link>
                
            </div>
      );
}

export default Footer;