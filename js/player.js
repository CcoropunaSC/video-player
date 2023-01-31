const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

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
    $progress.value = $video.currentTime
    // console.log($video.currentTime);
}

const handleLoaded = () => {
    $progress.max = $video.duration;
    console.log($progress);
    console.log('video loaded:' + $video.duration);
}

const handleInput = () => {
    $video.currentTime = $progress.value;
}

$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)



