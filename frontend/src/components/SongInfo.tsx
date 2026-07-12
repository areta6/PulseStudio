import song from "../data/dummySong.json";

function SongInfo() {
    return (
        <div className="song-info">
            <h2>{song.title}</h2>
            <p>{song.artist}</p>
        </div>
    );
}

export default SongInfo;