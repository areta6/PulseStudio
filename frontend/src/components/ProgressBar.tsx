import song from "../data/dummySong.json";

function ProgressBar() {
    const progress =
        (song.currentTime / song.duration) * 100;

    return (
        <div className="progress-panel">

            <div className="progress-container">

                <span>
                    {song.currentTime}s
                </span>

                <div className="progress-background">
                    <div
                        className="progress-fill"
                        style={{
                            width: `${progress}%`
                        }}
                    />
                </div>

                <span>
                    {song.duration}s
                </span>

            </div>

        </div>
    );
}

export default ProgressBar;