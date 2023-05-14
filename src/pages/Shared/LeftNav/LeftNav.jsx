// import React from 'react';

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsInsights from "../../News/EditorsInsights/EditorsInsights";
import { Card, Col, Row } from "react-bootstrap";
import first from "../../../assets/1.png"
import second from "../../../assets/2.png"
import tharid from "../../../assets/3.png"

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
        // .catch(error => console.log(error))
    }, [])
    return (
        <div>

            <div>
                <h4>All Categories</h4>
                {
                    categories.map(category => <p key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className="text-decoration-none text-black">{category.name}</Link>
                    </p>)
                }
            </div>
            <Row xs={1} md={1} lg={1} className="g-4 mt-3">

                <Col>
                    <Card>
                        <Card.Img variant="top" src={first} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={tharid} />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    );
};

export default LeftNav;