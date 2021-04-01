import React, { useState, useEffect, Component } from "react";
import { withStyles } from "@material-ui/styles";

const styles = (theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        margin: "4em 1em 1em 1em",
        background: "#F7F9FF",
    },
    item: {
        padding: "3em",
    },
});

class Cert extends Component {
    state = {};

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "http://cdn.youracclaim.com/assets/utilities/embed.js";
        script.async = true;

        console.log(script);

        document.body.appendChild(script);
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.wrapper}>
                    <div className={classes.item}>
                        <div
                            data-iframe-width="150"
                            data-iframe-height="270"
                            data-share-badge-id="f0b4a301-3923-446a-8d82-2cc7a05448b6"
                            data-share-badge-host="https://www.youracclaim.com"
                        ></div>
                    </div>
                    <div className={classes.item}>
                        <div
                            data-iframe-width="150"
                            data-iframe-height="270"
                            data-share-badge-id="6c937f90-30c3-4d6e-858a-5545d77d94a9"
                            data-share-badge-host="https://www.youracclaim.com"
                        ></div>
                    </div>
                    <div className={classes.item}>
                        <div
                            data-iframe-width="150"
                            data-iframe-height="270"
                            data-share-badge-id="67a6a944-a0b9-4e01-8c78-a382c84baa5f"
                            data-share-badge-host="https://www.youracclaim.com"
                        ></div>
                    </div>
                    <div className={classes.item}>
                        <div>
                            <blockquote
                                class="badgr-badge"
                                style={{
                                    fontFamily:
                                        'Helvetica, Roboto, "Segoe UI", Calibri, sans-serif',
                                }}
                            >
                                <a href="https://api.eu.badgr.io/public/assertions/ZQq7t7wWT1mzokAwwgav9Q?identity__email=robc%40apadmi.com">
                                    <img
                                        alt="badge"
                                        width="120px"
                                        height="120px"
                                        src="https://media.eu.badgr.com/uploads/badges/356d8043db2c5bb38176bb584c1535cddd08fdf5d49ff563bad9c497abb2b9df.png"
                                    />
                                </a>
                                <p
                                    class="badgr-badge-name"
                                    style={{
                                        hyphens: "auto",
                                        overflowWrap: "break-word",
                                        wordWrap: "break-word",
                                        margin: 0,
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        fontStyle: "normal",
                                        fontStretch: "normal",
                                        lineHeight: "1.25",
                                        letterSpacing: "normal",
                                        textAlign: "center",
                                        color: "#05012c",
                                    }}
                                >
                                    PSM I
                                </p>
                                <p
                                    class="badgr-badge-date"
                                    style={{
                                        margin: 0,
                                        fontSize: "12px",
                                        fontStyle: "normal",
                                        fontStretch: "normal",
                                        lineHeight: "1.67",
                                        letterSpacing: "normal",
                                        textAlign: "center",
                                        color: "#555555",
                                    }}
                                >
                                    <strong
                                        style={{
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                            fontStyle: "normal",
                                            fontStretch: "normal",
                                            lineHeight: "1.67",
                                            letterSpacing: "normal",
                                            textAlign: "center",
                                            color: "#000",
                                        }}
                                    >
                                        Awarded:
                                    </strong>
                                    Oct 25, 2019
                                </p>
                                <p style={{ disply: 'flex', flexDirection: 'column', margin: "16px 0", padding: 0, textAlign: 'center' }}>
                                    <a
                                        class="badgr-badge-verify"
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://badgecheck.io?url=https%3A%2F%2Fapi.eu.badgr.io%2Fpublic%2Fassertions%2FZQq7t7wWT1mzokAwwgav9Q%3Fidentity__email%3Drobc%2540apadmi.com&amp;identity__email=robc%40apadmi.com"
                                        style={{
                                            boxSizing: "content-box",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            margin: 0,
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            width: "48px",
                                            height: "16px",
                                            borderRadius: "4px",
                                            border: "solid 1px black",
                                            textDecoration: "none",
                                            padding: "6px 16px",
                                            margin: "16px 0",
                                            color: "black",
                                        }}
                                    >
                                        VERIFY
                                    </a>
                                </p>
                                <script
                                    async="async"
                                    src="https://eu.badgr.com/assets/widgets.bundle.js"
                                ></script>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Cert);
