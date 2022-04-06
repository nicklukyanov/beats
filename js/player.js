function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "391.82",
    width: "662",
    videoId: "6WSmneqRFeg",
    events: {
      // onReady: onPlayerReady,
      // onStateChange: onPlayerStateChange
    },
    playerVars: {
      controls: 0,
      disablekb: 1,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    }
  });
 }