import type { PropsWithChildren } from "react";

type MyProps = {
    img: string;
    placeForPicture: "Left" | "Right"
}

export default function TextAndImage(props: PropsWithChildren<MyProps>) {
    const image = (
        <div className="col-12 col-md-6 text-center mb-3 mb-md-0 order-0 order-md-0">
            <img src={props.img} alt="Picture"
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
            />
        </div>
    )

    const content = (
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center order-1 order-md-0 ">
            {props.children}
        </div>
    )

    return (
        <div className="container my-5 px-3">
            <div className="row align-items-center">
                {props.placeForPicture === "Left" ? (
                    <>
                        {image}
                        {content}
                    </>
                ) : (
                    <>
                        {content}
                        {image}
                    </>
                )}
            </div>
        </div>
    )
}