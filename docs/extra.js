(function() {
  var stopPlayAt = 10, // Stop play at time in seconds
      stopPlayTimer;   // Reference to settimeout call

  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script");
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  // after the API code downloads.
  var player;
  window.onYouTubeIframeAPIReady = function() {
    player = new YT.Player("player", {
      "height": "315",
      "width": "560",
      "videoId": "L6cVcbkx8l8",
      "events": {
        "onReady": onPlayerReady,
        "onStateChange": onPlayerStateChange
      }
    });
  }

  // The API will call this function when the video player is ready.
  // This automatically starts the video playback when the player is loaded.
  function onPlayerReady(event) {
    event.target.playVideo();
  }

  // The API calls this function when the player's state changes.
  function onPlayerStateChange(event) {
    var time, rate, remainingTime;
    clearTimeout(stopPlayTimer);
    if (event.data == YT.PlayerState.PLAYING) {
      time = player.getCurrentTime();
      // Add .4 of a second to the time in case it's close to the current time
      // (The API kept returning ~9.7 when hitting play after stopping at 10s)
      if (time + .4 < stopPlayAt) {
        rate = player.getPlaybackRate();
        remainingTime = (stopPlayAt - time) / rate;
        stopPlayTimer = setTimeout(pauseVideo, remainingTime * 1000);
      }
    }
  }
  function pauseVideo() {
    player.pauseVideo();
  }
})();