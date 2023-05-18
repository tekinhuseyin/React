import React from "react";
import { Card, Button, Col, Row, Container } from "react-bootstrap";

//! react alaninda döngülerde foreach yerine sadece map desteklenir. ayni zamanda react alaninda Conditionlardan da sadece ternary desteklenir.

const CourseCard = ({ veri }) => {
  // console.log(veri);

  //! alttaki ilk return reactin ekrana bastirilan kismi

  return (
    <div>
      <Container>
        <Row className="g-3 text-center mt-4">
          {veri.map(({ img, name, text, id }) => {
            
//! arrow(map) süslü ile kullanildiginda return ister.
//!react'ta süslü koymak zorunda degiliz. O zaman returne de ihtiyac olmaz.
//? databaseden cekilen veriler ekrana bastirilirken en dis div uniqe bir veri ister. bunu da key={id } seklinde yazariz. id olmak zorunda degil unique herhangi bir porperty olabilir, mesela img

            return (
              <Col
                className="d-flex justify-content-center"
                sm={12}
                md={6}
                lg={4}
                key={id}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="info">Detaylar</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CourseCard;
