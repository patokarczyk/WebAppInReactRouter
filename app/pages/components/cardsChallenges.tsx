import { useMemo } from "react";
import { Card, CardText, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { CourseLanguage, type Course } from "~/resources/types/CardsType";

function getLevelNumber(level: string): number {
  switch (level) {
    case "NEWBIE":
      return 1;
    case "JUNIOR":
      return 2;
    case "INTERMEDIATE":
      return 3;
    case "ADVANCED":
      return 4;
    case "GURU":
      return 5;
    default:
      return 0;
  }
}

function getLevelColor(level: string): string {
  switch (level) {
    case "NEWBIE":
      return "darkcyan";
    case "JUNIOR":
      return "green";
    case "INTERMEDIATE":
      return "rgba(185, 158, 8, 0.84)";
    case "ADVANCED":
      return "orange";
    case "GURU":
      return "red";
    default:
      return "white";
  }
}


export default function CardsChallenges(item: Course) {
  const navigate = useNavigate();

  const levelColor = useMemo(() => {
    if (!item.level) return "white";
    return getLevelColor(item.level);
  }, [item.level]);

  const levelSpanStyle = useMemo(() => ({
    backgroundColor: levelColor,
    color: "white",
    minWidth: "30px",
    textAlign: "center" as "center",
  }), [levelColor]);

  const levelContainerStyle = useMemo(() => ({
    border: "1px solid",
    backgroundColor: "white",
    color: levelColor,
  }), [levelColor]);

  return (
    <Col xs={12} sm={12} md={6} lg={4} className="p-3 d-flex">
      <Card className="h-100 w-100 d-flex flex-column"
        style={{ cursor: "pointer" }}
        onClick={() => item.hreff && navigate(item.hreff)}
      >
        <Card.Img variant="top" src={item.icon}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <Card.Body className="d-flex flex-column p-4">
          <Card.Title style={{ fontSize: "1.5rem" }}>
            {item.title}
          </Card.Title>
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between flex-wrap gap-2">
              <div className="d-flex flex-wrap gap-2">
                {item.language?.includes(CourseLanguage.HTML) && <span style={{ color: "darkcyan" }}>HTML</span>}
                {item.language?.includes(CourseLanguage.CSS) && <span style={{ color: "blue" }}>CSS</span>}
                {item.language?.includes(CourseLanguage.JS) && <span style={{ color: "magenta" }}>JS</span>}
                {item.language?.includes(CourseLanguage.API) && <span style={{ color: "green" }}>API</span>}
              </div>
              {item.level && (
                <div className="d-flex align-items-center gap-2 pr-2 rounded"
                  style={levelContainerStyle}
                >
                  <span style={levelSpanStyle}>
                    {getLevelNumber(item.level)}
                  </span>
                  <span>
                    {item.level}
                  </span>
                </div>
              )}
            </div>
            <div className="mt-3">
              {item.text}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
