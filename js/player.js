const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");
const $currentTime = document.querySelector("#currentTime");
const $endTime = document.querySelector("#endTime");
const $speakerOn = document.querySelector("#speakerOn");
const $speakerOff = document.querySelector("#speakerOff");

const init = () => {
    $pause.hidden = true;
}

const handlePlay = () => {
    if ($video.paused) {
        $video.play();
        $play.hidden = true;
        $pause.hidden = false;
    }
};

const handlePause = () => {
    if (!$video.paused) {
        $video.pause();
        $play.hidden = false;
        $pause.hidden = true;
    }
};

const handleBackward = () => {
    $video.currentTime -= 10;
}

const handleForward = () => {
    $video.currentTime += 10;
}

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

const handleTimeUpdate = () => {
    const videoCurrentTime = $video.currentTime;
    const currentMinutes = Math.floor(videoCurrentTime / 60);
    const remainderSeconds = Math.floor(videoCurrentTime % 60);

    $progress.value = videoCurrentTime;
    $currentTime.innerHTML = `${currentMinutes}:${remainderSeconds}`;
}

const handleLoaded = () => {
    const videoDuration = $video.duration;
    const durationMinutes = Math.floor(videoDuration / 60);
    const remainderSeconds = Math.floor(videoDuration % 60);

    $progress.max = videoDuration;
    $endTime.innerHTML = `${durationMinutes}:${remainderSeconds}`;
}

const handleInput = () => {
    $video.currentTime = $progress.value;
}

const handleToggleMuted = () => {
    if($video.muted) {
        $video.muted = false;
        $speakerOn.hidden = false;
        $speakerOff.hidden = true;
    } else {
        $video.muted = true;
        $speakerOn.hidden = true;
        $speakerOff.hidden = false;
    }
}

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)
$speakerOn.addEventListener('click', handleToggleMuted)
$speakerOff.addEventListener('click', handleToggleMuted)



