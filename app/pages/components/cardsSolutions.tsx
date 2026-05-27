import { useState } from "react";
import type { PropsWithChildren } from "react";
import { Card, CardFooter, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import type { Course } from "~/resources/types/CardsType";
import type { Profil } from "~/resources/types/ProfilType";
import ProfilComponent from "./profil";
type SolutionsCards = Course & Profil;

export default function CardsSoulutions(props: PropsWithChildren<SolutionsCards>) {
    const [likes, setLikes] = useState(props.likes ?? 0);
    const [comments, setComments] = useState(props.comments ?? 0);
    const [bookmarked, setBookmarked] = useState(false);
    const [liked, setLiked] = useState(false);
    const [commented, setCommented] = useState(false);
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent, type: "like" | "comment" | "bookmark") => {
        e.stopPropagation();
        if (type === "like") {
            if (liked) {
                setLikes((prev) => prev - 1);
                setLiked(false);
            } else {
                setLikes((prev) => prev + 1);
                setLiked(true);
            }
        }
        if (type === "comment") {
            if (commented) {
                setComments((prev) => prev - 1);
                setCommented(false);
            } else {
                setComments((prev) => prev + 1);
                setCommented(true);
            }
        }
        if (type === "bookmark") {
            setBookmarked((prev) => !prev);
        }
    };

    const navigateToDetails = () => {
        navigate("/solutions/${props.id}", { state: { cardData: props } });
    };

    return (
        <div className="d-flex h-100 w-100">
            <Card className="h-100 w-100 h-100 d-flex flex-column shadow-sm">
                <Card.Img
                    variant="top"
                    src={props.icon}
                    style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                    onClick={navigateToDetails}
                />
                <Card.Body className="d-flex flex-grow-1 flex-column p-4">
                    <div className="mb-4"
                        style={{ cursor: "pointer" }}
                        onClick={navigateToDetails}
                    >
                        <Card.Title style={{ fontSize: "1.25rem" }}>
                            {props.title}
                        </Card.Title>
                        <ProfilComponent
                            profilepicture={props.profilepicture}
                            profileName={props.profileName} 
                            feedbackRequested={false}                        />
                        <Card.Text className="flex-grow-1 mt-2">
                            {props.text}
                        </Card.Text>
                    </div>
                    <CardFooter className="bg-transparent px-0 pt-3 mt-auto ">
                        <div className="d-flex justify-content-between text-muted flex-wrap">
                            <div className="d-flex align-items-center mb-2 me-3"
                                style={{ cursor: "pointer" }}
                                onClick={(e) => handleClick(e, "comment")}
                            >
                                <span className="material-symbols-outlined me-1"
                                    style={{ fontSize: "20px", color: commented ? "blue" : "" }}
                                >
                                    chat_bubble
                                </span>
                                <small>
                                    {comments} Comments
                                </small>
                            </div>
                            <div className="d-flex align-items-center mb-2 me-3"
                                style={{ cursor: "pointer" }}
                                onClick={(e) => handleClick(e, "like")}
                            >
                                <span className="material-symbols-outlined me-1"
                                    style={{ fontSize: "20px", color: liked ? "red" : "" }}
                                >
                                    favorite
                                </span>
                                <small>
                                    {likes} Likes
                                </small>
                            </div>
                            <div className="d-flex align-items-center mb-2"
                                style={{ cursor: "pointer" }}
                                onClick={(e) => handleClick(e, "bookmark")}
                            >
                                <span className="material-symbols-outlined"
                                    style={{ fontSize: "20px", color: bookmarked ? "#007bff" : "" }}
                                >
                                    bookmark
                                </span>
                            </div>
                        </div>
                    </CardFooter>
                </Card.Body>
            </Card>
        </div>
    );
}
