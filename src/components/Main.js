import useMediaQuery from "@material-ui/core/useMediaQuery";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "../App.css";

import React from "react";

const useStyles = makeStyles((theme) =>
    createStyles({
        titleDiv: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "4em",
            background: "#F7F9FF",
            margin: "1em",
        },
        mainDiv: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "4em 20em",
            background: "#F7F9FF",
            margin: "1em",
        },
        mainDivMobile: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "4em 5em",
            background: "#F7F9FF",
            margin: "1em",
        },
        titleBlurb: {},
        titleName: {
            paddingTop: "1em",
        },
        titleImage: {
            width: "175px",
            height: "175px",
            borderRadius: "100%",
            padding: "0.5em",
            background: "white",
            border: "1px solid black",
        },
    })
);

export default function Main() {
    const classes = useStyles();
    const above1000 = useMediaQuery("(min-width:1000px)");
    const above600 = useMediaQuery("(min-width:600px)");
    const above400 = useMediaQuery("(min-width:400px)");

    return (
        <div className={classes.root}>
            <div className={classes.titleDiv}>
                <img
                    src={"../background.jpg"}
                    alt="Headshot of myself"
                    className={classes.titleImage}
                />
                {above600 && (
                    <h1 className={classes.titleName}>Robert Clegg</h1>
                )}
                {above400 && !above600 && (
                    <h2 className={classes.titleName}>Robert Clegg</h2>
                )}
                {!above400 && (
                    <h3 className={classes.titleName}>Robert Clegg</h3>
                )}
                <span className={classes.titleBlurb}>
                    Software Developer specializing in cloud native web and
                    mobile server development.
                </span>
            </div>
            <div
                className={above1000 ? classes.mainDiv : classes.mainDivMobile}
            >
                <p>
                    Hello. Im Rob, a software developer from Manchester,
                    currently working remotely from Glasgow Scotland. I work for
                    Apadmi, a leading mobile-first digital agency. I specialise
                    in server development and architecture with cloud native
                    serverless technologies. I enjoy solving problems, and
                    helping to create solutions that perform well. I work
                    comfortably with a large range of offerings from cloud
                    providers, and while specialising in AWS have gained AWS
                    accredited certification.
                </p>
                <p>
                    To view these and other accreditations, please visit my{" "}
                    <Link to={"/cert"}>certification</Link> page, or you can see
                    more detailed technical experience in the{" "}
                    <Link to={"/experience"}> experience</Link> page.
                    Alternatively if you would like to view some of my
                    photography then please feel free to check out my{" "}
                    <Link to={"/photo"}>photography</Link> page, thanks!
                </p>
            </div>
        </div>
    );
}
