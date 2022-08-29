import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import ProductCard from "../../components/card/ProductCard";

import { useSelector } from "react-redux";
import { fetchProductData } from "../../services/services";

function Products({ type }) {

    const [categoryType, setCategoryType] = useState(type);

    const { productData } = useSelector(state => state.productDetails);


    useEffect(() => {
        fetchProductData();
        setCategoryType(type ? type : "All");
    }, [type]);

    return (
        <>
            <h1 style={{ color: "green" }}>Products</h1>
            <Container>
                <Row>
                    {
                        productData?.filter(({ category }) => categoryType === "All" || category === categoryType)
                            .map((item) => {
                                return (
                                    <Col sm={8} lg={3} md={3} key={item.id} data-testid="data">
                                        <ProductCard item={item}></ProductCard>
                                    </Col>
                                );
                            })
                    }
                </Row>
            </Container>
        </>
    );
}

export default Products;
