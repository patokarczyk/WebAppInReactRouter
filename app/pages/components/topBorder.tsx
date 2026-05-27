import { useContext, type PropsWithChildren } from "react";
import { UserContext, useUser } from "../userContext";

export default function TopBorder(props: PropsWithChildren) {
  const userContext = useContext(UserContext);
  const { username } = useUser();

  if (!userContext) return null;

  const handleLogout = () => {
    userContext.setUsername("Guest");
    localStorage.removeItem("username");
  };

  const borderStyle = {
    borderLeft: "4px solid #ccc",
    borderRight: "4px solid #ccc",
  };

  return (
    <div className="w-100 py-3 mb-4"
      style={{ borderTop: "1px solid #ccc", borderBottom: "1px solid #ccc" }}>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="px-4 fw-bold fs-4 text-center text-md-start mx-5"
          style={borderStyle}>
          {props.children}
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center gap-4 px-4 fw-bold fs-5 text-center text-md-end mx-5"
          style={borderStyle}>
          <div className="fs-4" style={{ textAlign: "center"}}>
            Welcome {username}
          </div>
          {username !== "Guest" &&
            <div className="">
              <button onClick={handleLogout}
                className="btn btn-danger btn-sm "
              >
                Wyloguj się
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
