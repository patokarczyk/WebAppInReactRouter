import type { Profil } from "~/resources/types/ProfilType";

export default function ProfilComponent({ profilepicture, profileName }: Profil) {
    return (
        <div className="d-flex flex-column flex-sm-row align-items-center gap-2 my-2">
            <img
                src={profilepicture}
                alt="Picture"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", objectFit: "cover", flexShrink: 0 }}
            />
            <span className="fw-semibold text-center text-sm-start">
                {profileName}
            </span>
        </div>
    );
}