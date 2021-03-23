import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            paddingTop: "1em",
            paddingBottom: "1em",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            elevation: 0
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: "#4c4c4c",
            fontFamily: "Montserrat,helvetica neue,Helvetica,Arial,sans-serif",
            fontWeight: "700",
        },
        title: {
            color: "#4c4c4c",
            fontFamily: "Montserrat,helvetica neue,Helvetica,Arial,sans-serif",
            fontWeight: "700",
            paddingLeft: "1em",
            fontSize: "large",
            display: "inline-block",
        },
    })
);

export default function HeaderBarContent() {
    const classes = useStyles();
    const matches = useMediaQuery("(min-width:800px)");
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <div>
                <Link to="/">
                    <h1 className={classes.title}>ROBERT CLEGG</h1>
                </Link>
            </div>

            {matches && (
                <div>
                    <Button
                        component={Link}
                        to={"/experience"}
                        className={classes.menuButton}
                    >
                        EXPERENCE
                    </Button>
                    <Button
                        component={Link}
                        to={"/cert"}
                        className={classes.menuButton}
                    >
                        CERTIFICATION
                    </Button>
                    <Button
                        component={Link}
                        to={"/contact"}
                        className={classes.menuButton}
                    >
                        CONTACT
                    </Button>

                    <Button
                        component={Link}
                        to={"/photo"}
                        className={classes.menuButton}
                    >
                        PHOTOS
                    </Button>
                </div>
            )}
            {!matches && (
                <div>
                    <Button
                        className={classes.menuButton}
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        Menu
                    </Button>
                    <Menu
                        id="main-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem 
                            component={Link}
                            to={"/experience"}
                            className={classes.menuButton}
                            onClick={handleClose}
                        >
                                EXPERIENCE
                        </MenuItem>
                        <MenuItem 
                            component={Link}
                            to={"/cert"}
                            className={classes.menuButton}
                            onClick={handleClose}
                        >
                                CERTIFICATIOM
                        </MenuItem>
                        <MenuItem 
                            component={Link}
                            to={"/contact"}
                            className={classes.menuButton}
                            onClick={handleClose}
                        >
                                CONTACT
                        </MenuItem>
                        <MenuItem 
                            component={Link}
                            to={"/photo"}
                            className={classes.menuButton}
                            onClick={handleClose}
                        >
                                PHOTOS
                        </MenuItem>
                    </Menu>
                </div>
            )}
        </div>
    );
}
