import type { PropsWithChildren } from "react";

type MyProps = {
    icon: string;
    title: string;
}

export default function TextHome(props: PropsWithChildren<MyProps>) {
    return (
        <>
            <div className="px-3 py-4">
                <div className="mb-3"
                    style={{ fontSize: "40px" }}
                >
                    {props.icon}
                </div>
                <h2 className="fw-bold mb-3">
                    {props.title}
                </h2>
                <div className="pt-2">
                    {props.children}
                </div>
            </div>
        </>
    )

}