import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import "../App.css";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
    createStyles({
        mainDiv: {
            // display: "flex",
            alignItems: "center",
            // flexDirection: "column",
            paddingTop: "4em",
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
            textAlign: 'right'
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
                    item
                    xs={4}
                    className={classes.gridLeft + " " + classes.gridItem}
                >
                    <span>email :</span>
                </Grid>
                <Grid
                    item
                    xs={8}
                    className={classes.gridRight + " " + classes.gridItem}
                >
                    <span>RJClegg@hotmail.co.uk</span>
                </Grid>
                <Grid
                    item
                    xs={4}
                    className={classes.gridLeft + " " + classes.gridItem}
                >
                    <span>linkedIn :</span>
                </Grid>
                <Grid
                    item
                    xs={8}
                    className={classes.gridRight + " " + classes.gridItem}
                >
                    <span>linkedin.com/in/robjclegg</span>
                </Grid>
            </Grid>
            {/* <div className={classes.gridContainer}> */}
            {/* <div className={classes.gridEl1 + ' ' + classes.gridItem}> item 1</div>
                <div className={classes.gridEl2 + ' ' + classes.gridItem}> item 2</div>
                <div className={classes.gridEl3 + ' ' + classes.gridItem}> item 3</div>
                <div className={classes.gridEl4 + ' ' + classes.gridItem}> item 4</div> */}
            {/* </div> */}
        </div>
    );
}
