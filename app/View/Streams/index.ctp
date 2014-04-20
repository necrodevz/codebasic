<div class="main-cont">
	    <div id="player"></div>
		
<script src="//www.youtube.com/iframe_api"></script>
<script>

/* get height of browser window */

var windowHeight = $(window).height();
var windowWidth = $(window).width();
var movieWH = windowHeight - 54;
var movieWW = windowWidth - 20;
    /**
     * Put your video IDs in this array
     */
    var videoIDs = [
 <?php 
 foreach($streams as $stream)
 {
 ?>
   '<?php echo $stream['Stream']['stream_url'];?>',  
       <?php
        }
       ?>
    ];

    var player, currentVideoId = 0;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
		  playerVars: {
          modestbranding: 1,
		  autohide: 1,
		  theme: 'light',
		  rel: 0
          },
            height: movieWH,
            width: movieWW,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {
        event.target.loadVideoById(videoIDs[currentVideoId]);
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.ENDED) {
            currentVideoId++;
            if (currentVideoId < videoIDs.length) {
                player.loadVideoById(videoIDs[currentVideoId]);
            }
        }
    }
</script>
</div>
<?php 

 foreach($streams as $stream)
 {
 ?>
    '<?php echo $stream['Stream']['stream_url'];?>',


        <?php
        }
       ?>
	   

