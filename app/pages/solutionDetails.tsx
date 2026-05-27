import { useLocation, useParams } from "react-router";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import data from "../resources/Data/solutions.json";
import TextAndImage from "./components/textAndImage";
import ProfilComponent from "./components/profil";
import RoundedContainer from "./components/roundedContainer";
import './customStyle.css';

export default function SolutionsDetails() {
  const location = useLocation();
  const { id } = useParams();

  const cardData =
    location.state?.cardData ?? data.find(item => item.id === Number(id));

  if (!cardData) {
    return (
      <Container className="py-5">
        <h2>No Data for ID: {id}</h2>
      </Container>
    );
  }

  const headers = [
    "What are you most proud of, and what would you do differently next time?",
    "What challenges did you encounter, and how did you overcome them?",
    "What specific areas of your project would you like help with?"
  ];

  return (
    <div className="custom-container mb-5">
      <TextAndImage img={cardData.icon} placeForPicture="Right">
        <h2>{cardData.title}</h2>
        <ProfilComponent profilepicture={cardData.profilepicture} profileName={cardData.profileName} feedbackRequested={false}></ProfilComponent>
      </TextAndImage>
      <div className="d-flex border-top border-bottom border-secondary">
        <Container fluid className="d-flex flex-column flex-sm-row custom-container2 justify-content-start gap-3 py-3">
          <RoundedContainer color="hsl(351 84% 55%)" href="/">
            <div>
              VIEW LIVE SITE
            </div>
          </RoundedContainer>
          <RoundedContainer color="hsl(351 84% 55%)" href="/">
          <div>
            VIEW CODE
          </div>
          </RoundedContainer>
        </Container>
      </div>
      <Container className="pt-5" style={{ whiteSpace: "pre-wrap" }}>
        <h4 className="mb-4">Solution retrospective</h4>
        {headers.map((header, i) => (
          <div key={i} className="mb-4">
            <h5>{header}</h5>
            <p>{cardData.fullText?.[i]}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}
