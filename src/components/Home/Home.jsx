import React from "react";
import Header from "../Header";
import HomeBanner from "./HomeBanner";
import About from "./About";
import WhyNova from "./WhyNova";
import NovaInstitution from "./NovaInstitution";
import Cta from "./Cta";
import Journey from "./Journey";
import HomeFacilities from "./HomeFacilities";
import HomNewsEvents from "./HomeNewsEvents";
import Footer from "../Footer";

const Home = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <About />
            <WhyNova />
            <NovaInstitution />
            <HomeFacilities />
            <Journey />
            <HomNewsEvents />
            <Cta />
            <Footer />
        </>
    )
}

export default Home;