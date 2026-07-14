import type React from "react";
import albumCover from "../assets/rox.png";

function AlbumArt() {

    const glowColor = "#aa3bff";

    return (
        <div
            className="album-art-container vinyl"
            style={{
                "--glow-color": glowColor
            } as React.CSSProperties}
        >
            <img
                className="album-art"
                src={albumCover}
                alt="Album cover"
            />
        </div>
    );
}

export default AlbumArt;