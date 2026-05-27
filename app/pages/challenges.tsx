import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Form,
  InputGroup,
  Offcanvas,
} from "react-bootstrap";
import { CourseLanguage, CourseLevel, type Course } from "~/resources/types/CardsType";
import CardsChallenges from "./components/cardsChallenges";
import data from "../resources/Data/cours.json";
import TopBorder from "./components/topBorder";
import './challenges.css';
import './customStyle.css';

export default function Challenges() {
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState<CourseLanguage[]>([]);
  const [level, setLevel] = useState<CourseLevel[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const parsedData: Course[] = data.map((course) => ({
      ...course,
      language: course.language?.map((lang: string) => CourseLanguage[lang as keyof typeof CourseLanguage]),
      level: CourseLevel[course.level as keyof typeof CourseLevel],
    }));
    setAllCourses(parsedData);
    inputRef.current?.focus();
  }, []);

  const filteredCourses = useMemo(() => {
    return allCourses.filter((item) =>
      (search === "" || item.title.toLowerCase().includes(search.toLowerCase())) &&
      (language.length === 0 || item.language?.some((lang) => language.includes(lang))) &&
      (level.length === 0 || (item.level && level.includes(item.level)))
    );
  },
    [search, language, allCourses, level]
  );

  function otworzFiltrowanie() {
    handleShow();
  }

  const handleCheckboxChangeLanguage = (type: CourseLanguage) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setLanguage((prev) => [...prev, type]);
    } else {
      setLanguage((prev) => prev.filter((item) => item !== type));
    }
  };

  const handleCheckboxChangeLevel = (type: CourseLevel) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setLevel((prev) => [...prev, type]);
    } else {
      setLevel((prev) => prev.filter((item) => item !== type));
    }
  };

  return (
    <>
      <TopBorder>Challenges</TopBorder>
      <div className="custom-container2 mt-4" >
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-5 position-relative mb-3 mb-md-0">
            <InputGroup>
              <Form.Control
                ref={inputRef}
                placeholder="Search challenges"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <span className="material-symbols-outlined" style={{ position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#999" }}>
                search
              </span>
            </InputGroup>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex justify-content-start ">
            <Button onClick={otworzFiltrowanie} className="w-30 w-md-auto">
              Filtruj
            </Button>
          </div>
        </div>
        <div className="mt-3">
          Showing {filteredCourses.length} of {allCourses.length} challenges
        </div>
      </div>
      <div className="custom-container row g-4">
        <CardGroup>
          {filteredCourses.map((item, id) => <CardsChallenges {...item} key={id} />)}
        </CardGroup>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1>Filters</h1> </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h1>Language</h1>
          <Form>
            {Object.keys(CourseLanguage).map((key) => {
              const value = CourseLanguage[key as keyof typeof CourseLanguage]
              return (
                <div key={`language-${value}`} className="mb-4">
                  <Form.Check
                    type={'checkbox'}
                    id={`language-${value}`}
                    label={`${key}`}
                    onChange={handleCheckboxChangeLanguage(value)}
                    checked={language.includes(value)}
                    className="custom-checkbox"
                  />
                </div>
              );
            })}
          </Form>
          <h1>Dificulty</h1>
          <Form>
            {Object.keys(CourseLevel).map((key) => {
              const value = CourseLevel[key as keyof typeof CourseLevel]
              return (
                <div key={`level-${value}`} className="mb-4">
                  <Form.Check
                    type={'checkbox'}
                    id={`level-${value}`}
                    label={`${key}`}
                    onChange={handleCheckboxChangeLevel(value)}
                    checked={level.includes(value)}
                    className="custom-checkbox"
                  />
                </div>
              )
            })}
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}