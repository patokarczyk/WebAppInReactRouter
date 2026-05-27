import "bootstrap/dist/css/bootstrap.min.css";
import TextAndImage from "./components/textAndImage";
import home1 from "../resources/images/home1.webp";
import home2 from "../resources/images/home2.webp";
import home3 from "../resources/images/home3.webp";
import home4 from "../resources/images/home4.webp";
import home5 from "../resources/images/home5.webp";
import home6 from "../resources/images/home6.webp";
import RoundedContainer from "./components/roundedContainer";
import CardWithPicture from "./components/cardWithPicture";
import profil1 from "../resources/images/profil1.jpg";
import profil2 from "../resources/images/profil2.jpg";
import icon1 from "../resources/images/icon1.jpg";
import icon2 from "../resources/images/icon2.jpg";
import quote from "../resources/images/quote.jpg";
import { Card, CardGroup, CardText, CardTitle } from "react-bootstrap";
import TextHome from "./components/textHome";
import './customStyle.css';
import TopBorder from "./components/topBorder";

export default function Home() {
    return (
        <>
            <TopBorder>Home</TopBorder>
            <div className="custom-container2 py-4">
                <div className="row">
                    <TextAndImage img={home1} placeForPicture={"Right"}>
                        <h1 className="py-4 text-primary" style={{ color: "hsl(227 45% 44%"}}>
                            Improve your coding skills by building realistic projects
                        </h1>
                        <p>
                        Our professionally designed challenges help you gain hands-on experience writing HTML, CSS, and JavaScript. We create the designs so you can focus on the code and see your skills skyrocket!
                        </p>
                        <div className="py-4">
                            <RoundedContainer color="hsl(351 84% 55%)" href="/login">
                                <div className="d-flex justify-content-center align-items-center" >
                                    LOG IN WITH GITHUB
                                    <span className="ms-2 d-flex">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                                            alt="GitHub"
                                            width="20"
                                            height="20"
                                            style={{ filter: "invert(1)"}}
                                        />
                                    </span>
                                </div>
                            </RoundedContainer>
                        </div>
                    </TextAndImage>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-4 mb-5">
                    <CardWithPicture img={quote}>
                        <div className="text-center">
                            <h5>
                                I highly recommend Frontend Mentor. Skip the search for project ideas and dive into ready-made challenges that help you level up as a developer.
                            </h5>
                            <img src={profil1} className="rounded-circle my-3 mx-auto d-block" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                            <h4>ARTUR KOWALSKI</h4>
                            <p>Web Developer & YouTuber</p>
                        </div>
                    </CardWithPicture>
                    <CardWithPicture img={quote}>
                        <div className="text-center">
                            <h5>
                                Frontend Mentor is a win-win. You can sharpen your skills building websites and add finished projects to your portfolio to help land a job!
                            </h5>
                            <img src={profil2} className="rounded-circle my-3 mx-auto d-block" style={{ width: "120px", height: "120px", objectFit: "cover" }} />
                            <h4>JAKUB KOWALSKI</h4>
                            <p>Web Developer & YouTuber</p>
                        </div>
                    </CardWithPicture>

                </div>
                <TextAndImage img={home2} placeForPicture={"Left"}>
                    <TextHome icon="😈" title="Escape tutorial hell">
                        Add projects to your learning journey and put your knowledge to the test. The real learning happens when you start solving real-world problems yourself.
                    </TextHome>
                </TextAndImage>
                <TextAndImage img={home3} placeForPicture={"Right"}>
                    <TextHome icon="🤩" title="Build portfolio-worthy projects">
                        Design is hard. We take care of the project ideas and design so you can focus on the coding. You’ll end up with an incredible portfolio of stunning projects!
                    </TextHome>
                </TextAndImage>
                <TextAndImage img={home4} placeForPicture={"Left"}>
                    <TextHome icon="🚀" title="Banish impostor syndrome">
                        We’ve all felt out of our depth before. Getting hands-on experience is an incredible way to build confidence, refine your workflow, and supercharge your learning.
                    </TextHome>
                </TextAndImage>
                <TextAndImage img={home5} placeForPicture={"Right"}>
                    <TextHome icon="🛠️" title="Practice new tools">
                        The front-end landscape changes constantly. Our design-led challenges let you pick your tools to help you adapt, experiment, and keep up with the latest trends.
                    </TextHome>
                </TextAndImage>
                <TextAndImage img={home6} placeForPicture={"Left"}>
                    <TextHome icon="🤝" title="Create job opportunities">
                        We have a Hiring Platform that runs alongside this platform. Just by building projects and engaging with the community, you could open up job opportunities!
                    </TextHome>
                </TextAndImage>
                <div className="d-flex flex-column align-items-center text-center my-5">
                    <div className="custom-container mb-4" 
                    style={{ maxWidth: "700px", width: "100%" }}
                    >
                        <h1>Take your skills to the next level with our Pro subscription</h1>
                        <div className="mt-3">
                            Step into the shoes of a professional developer and build projects in the most realistic way possible. Our Pro subscription will help you prepare for life as a professional developer.
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2 g-4 custom-container">
                        <CardWithPicture img={icon1}>
                            <div>
                                <h2>
                                    Access each challenge’s design file
                                </h2>
                                <div>
                                    Professional teams use tools like Figma. By using these tools when building projects, you’ll save time, create more accurate solutions, and gain hands-on experience working like a pro.
                                </div>
                            </div>
                        </CardWithPicture>
                        <CardWithPicture img={icon2}>
                            <div>
                                <h2>
                                    Tackle our premium challenges
                                </h2>
                                <div>
                                    Our premium challenges are the most realistic, comprehensive practice projects you’ll find. They also make incredible portfolio pieces to help you “wow!” recruiters and get hired.
                                </div>
                            </div>
                        </CardWithPicture>
                    </div>
                </div>
            </div>
        </>
    );
}