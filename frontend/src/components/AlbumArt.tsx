import albumCover from "../assets/rox.png";

function AlbumArt() {
    return (
        <div className="album-art-container vinyl">
            <img
                className="album-art"
                src={albumCover}
                alt="Album cover"
            />
        </div>
    );
}

export default AlbumArt;