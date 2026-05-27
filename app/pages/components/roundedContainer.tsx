import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router";

type MyProps = {
    color: string;
    href: string
}

export default function RoundedContainer(props: PropsWithChildren<MyProps>) {
    const navigate = useNavigate();

    return (
        <button
            type="button"
            onClick={() => props.href && navigate(props.href)}
            className="rounded-pill px-4 py-2 text-white text-center d-flex justify-content-center m-2 w-100 w-md-auto border-0"
            style={{ background: props.color, cursor: "pointer" }}
        >
            {props.children}
        </button>
    );
}