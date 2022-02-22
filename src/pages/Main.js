import React from "react";
import NextPage from "../components/NextPage";
import Footer from "../components/Footer";

export default function Main() {
    return (
        <div style={{ "display": "flex", "justifyContent": "center" }}>
            <div style={{"margin":"auto"}}>
                <h1>Specs Mafia Game</h1>
                <NextPage link="/AddUsers" label="New Game"/>
                <Footer />
            </div>
        </div>
    )
}