import HomePageCarousel from "../../components/carousel/Carousel";
import Products from '../productsPage/Products'
import React from "react";
import TabMenu from "../../components/TabMenu/TabMenu";

const Home = () => {
    return (
        <>
            <h1 style={{ color: "#e76f51" }}>Welcome to Spark Clothing!</h1>
            <HomePageCarousel />
            <TabMenu />
        </>

    )
}

export default Home;