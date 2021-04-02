import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../App.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        mainDiv: {
            alignItems: "center",
            paddingTop: "6em",
            paddingBottom: "4em",
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
        // gridContainer: {
        //     display: 'grid',
        //     gridTemplateColumns: '50% 50%',
        //     gridTemplateRows: "100px 100px",
        //     gridTemplateAreas: "'a | a1' 'b | b1'"
        // },
        gridItem: {
            padding: theme.spacing(2),
        },
        gridLeft: {
            gridArea: "a",
            textAlign: "right",
            borderRight: "1px solid grey",
        },
        // gridEl2: {
        //     gridArea: "a1",
        //     background: 'red'
        // },
        // gridEl3: {
        //     gridArea: "b",
        //     background: 'green'
        // },
        // gridEl4: {
        //     gridArea: "b1",
        //     background: 'yellow'
        // }
    })
);

export default function Contact() {
    const classes = useStyles();

    // const above1000 = useMediaQuery("(min-width:1000px)");
    // const above600 = useMediaQuery("(min-width:600px)");
    // const above400 = useMediaQuery("(min-width:400px)");

    return (
        <div className={classes.mainDiv}>
            <Grid container>
                <Grid
                    zeroMinWidth
                    item
                    xs={4}
                    className={classes.gridLeft + " " + classes.gridItem}
                >
                    <span>Email </span>
                </Grid>
                <Grid
                    item
                    xs={8}
                    className={classes.gridRight + " " + classes.gridItem}
                >
                    <Link href="mailto:rjclegg@hotmail.co.uk" color="inherit">
                        <span>RJClegg@hotmail.co.uk</span>
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={4}
                    className={classes.gridLeft + " " + classes.gridItem}
                >
                    <span>LinkedIn </span>
                </Grid>
                <Grid
                    item
                    xs={8}
                    className={classes.gridRight + " " + classes.gridItem}
                >
                    <Link
                        href="http://www.linkedin.com/in/robjclegg"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                    >
                        <span>linkedin.com/in/robjclegg</span>
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={4}
                    className={classes.gridLeft + " " + classes.gridItem}
                >
                    <span>GitHub </span>
                </Grid>
                <Grid
                    item
                    xs={8}
                    className={classes.gridRight + " " + classes.gridItem}
                >
                    <Link
                        href="http://www.github.com/roberto198"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                    >
                        <span>github.com/roberto198</span>
                    </Link>
                </Grid>
                <Grid
                    item
                    xs={4}
                    className={classes.gridLeft + " " + classes.gridItem}
                >
                    <span>Instagram </span>
                </Grid>
                <Grid
                    item
                    xs={8}
                    className={classes.gridRight + " " + classes.gridItem}
                >
                    <Link
                        href="http://www.instagram.com/rob_the_tog"
                        target="_blank"
                        rel="noopener"
                        color="inherit"
                    >
                        <span>instagram.com/rob_the_tog</span>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}
