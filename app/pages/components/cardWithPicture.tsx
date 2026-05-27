import {
  type ReactElement,
  type JSXElementConstructor,
  type ReactNode,
  type ReactPortal,
  useState,
  type PropsWithChildren,
} from "react";
import { Card, Col } from "react-bootstrap";

type MyProps = {
  img: string;
}

export default function CardWithPicture(props: PropsWithChildren<MyProps>) {
  return (
    <Col xs={12} sm={6} md={6} lg={6} className="mb-4  d-flex">
      <Card className="text-center w-100 h-100 shadow-sm">
        <div className="pt-4">
          <Card.Img variant="top" src={props.img}
            className="mx-auto"
            style={{ height: "52px", width: "61px", objectFit: "contain" }}
          />
        </div>
        <Card.Body className="ps-3 py-4 mb-4">
          {props.children}
        </Card.Body>
      </Card>
    </Col>
  );
}
