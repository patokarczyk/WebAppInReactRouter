import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout
    (
        "pages/layout/layout.tsx",
        [
            index("pages/home.tsx"),
            route("/challenges", "pages/challenges.tsx"),
            route("/solutions", "pages/solutions.tsx"),
            route("/solutions/:id", "pages/solutionDetails.tsx"),
            route("/login", "pages/login.tsx"),
        ]
    )
] satisfies RouteConfig;
