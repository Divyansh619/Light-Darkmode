import React, { useState } from "react";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import classes from "./Navbar.module.css";
const Navbar = (props) => {

    return (
        <div className={classes.navcontainer}>
            <div className={classes.logo}>
                <img
                    src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/01921c07e1e9d7ebae527ebc9cacf067.jpg"
                    height={50}
                    width={50}
                />
            </div>
            <div className={classes.navsec}>
                <div>About</div>
                <div>Contact Us</div>
                <div className={classes.togglebtn}>
                    {props.dark ? (
                        <BsToggleOff size={25} onClick={() => props.setDark(!props.dark)} />
                    ) : (
                        <BsToggleOn onClick={() => props.setDark(!props.dark)} size={25} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
