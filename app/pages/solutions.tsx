import "bootstrap/dist/css/bootstrap.min.css";
import TopBorder from "./components/topBorder";
import { Button, ButtonGroup, CardGroup, Col, Container, Row } from "react-bootstrap";
import CardsSoulutions from "./components/cardsSolutions";
import data from "../resources/Data/solutions.json";
import type { Course } from "~/resources/types/CardsType";
import type { Profil } from "~/resources/types/ProfilType";
import { useEffect, useMemo, useState } from "react";
import './solutions.css';

type SolutionsCards = Course & Profil;

export default function Solutions() {
    const [solutions, setSolutions] = useState<SolutionsCards[]>([]);
    const [view, setView] = useState<"all" | "feedback">("feedback");
    useEffect(() => {
        setSolutions(data as SolutionsCards[]);
    }, []);

    const filteredSolutions = useMemo(() => {
        if (view === "feedback") {
            return solutions.filter(item => item.feedbackRequested === true);
        }
        return solutions;
    }, [solutions, view]);

    return (
        <>
            <TopBorder>SOLUTIONS</TopBorder>
            <Container className="custom-container2 mt-4">
                <ButtonGroup className="mb-4 flex-column flex-sm-row">
                    <Button variant="link"
                        className={view === "feedback" ? "active-tab" : ""}
                        style={{ fontSize: "20px"}}
                        onClick={() => setView("feedback")}
                    >
                        Feedback Requested
                    </Button>
                    <Button variant="link"
                        className={view === "all" ? "active-tab" : ""}
                        style={{ fontSize: "20px"}}
                        onClick={() => setView("all")}
                    >
                        All Solutions
                    </Button>
                </ButtonGroup>
                <Row>
                    {filteredSolutions.map((item, id) => (
                        <Col key={id} xs={12} md={6} lg={4} className="mb-4">
                            <CardsSoulutions {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}