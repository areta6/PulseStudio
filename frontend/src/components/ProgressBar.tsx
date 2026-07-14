import song from "../data/dummySong.json";

function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function ProgressBar() {
    const progress =
        (song.currentTime / song.duration) * 100;

    return (
        <div className="progress-panel">

            <div className="progress-container">

                <span>
                    {formatTime(song.currentTime)}
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
                    {formatTime(song.duration)}
                </span>

            </div>

        </div>
    );
}

export default ProgressBar;