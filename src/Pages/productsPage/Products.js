import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import ProductCard from '../../components/card/ProductCard'
import axios from 'axios'

function Products({ type }) {

    const [products, setProducts] = useState([])
    const [categoryType, setCategoryType] = useState(type);

    const fetchProductDetails = async () => {
        const response = await axios.get("http://localhost:5000/data")
        setProducts(response.data)
    }

    useEffect(() => {
        if (products.length === 0) {
            fetchProductDetails();
        }
        setCategoryType(type ? type : "All")
    }, [categoryType, type, products])

    return (
        <>
            <h1 style={{ color: "green" }}>Products</h1>
            <Container>
                <Row>
                    {
                        products.filter(({ category }) => categoryType === "All" || category === categoryType)
                            .map((item) => {
                                return (
                                    <Col sm={8} lg={3} md={3} key={item.id} data-testid="data">
                                        <ProductCard item={item}></ProductCard>
                                    </Col>
                                )
                            })
                    }
                </Row>
            </Container>
        </>
    )
}

export default Products;
