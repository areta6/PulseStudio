import AlbumArt from "./AlbumArt";
import SongInfo from "./SongInfo";
import ProgressBar from "./ProgressBar";

function Widget() {
    return (
        <div className="widget">
            <AlbumArt />
            <SongInfo />
            <ProgressBar />
        </div>
    );
}

export default Widget;