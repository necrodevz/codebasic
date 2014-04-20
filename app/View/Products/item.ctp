<head>
  <style>
    
	body  {
            background:url('/img/binding_dark.png') repeat !important;
		  }
  </style>
</head>

    <div class="container-fluid">
        <div class="container-fluid-child">
		       <div class="row">
      <div class="col-xs-12 col-md-8">
	          <div class="player-title">Chronixx</div>
	          <div id="galleria" style="margin-top:0px;">
            <a href="http://i1.ytimg.com/vi/LfeIfiiBTfY/maxresdefault.jpg">
                <img 
                    src="http://i1.ytimg.com/vi/LfeIfiiBTfY/maxresdefault.jpg",
                    data-big="http://i1.ytimg.com/vi/LfeIfiiBTfY/maxresdefault.jpg">
            </a>
            <a href="http://urbanboss.files.wordpress.com/2013/03/chronixx-banner-bigger-c-datas.png">
                <img 
                    src="http://urbanboss.files.wordpress.com/2013/03/chronixx-banner-bigger-c-datas.png",
                    data-big="http://4hdwallpapers.com/wp-content/uploads/2013/05/Batman-Movies-Avatar.jpg"
                >
            </a>
            <a href="http://moneymax101.com/wp-content/uploads/chronixxfb.jpg">
                <img 
                    src="http://moneymax101.com/wp-content/uploads/chronixxfb.jpg",
                    data-big="http://moneymax101.com/wp-content/uploads/chronixxfb.jpg"
                >
            </a>
        </div>
		
		 <div class="player-title">About Chronix</div>
		 <div class="main-1">
		    <p>Chronixx was the 'stage' name his friends bestowed on him, replacing the name 'Little Chronicle' he was given as the 'junior' to his father, the artist Chronicle. A little star amongst his peers, he had shown a love for music and song writing from an early age. He was born October 10, 1992 and was named Jamar Rolando McNaughton. His father, a musician, recognised his talents and nurtured him in an environment in which he could grow into whatever area of music he chose. Always accompanying him to the studio, Jamar grew up around the likes of Burro Banton, Norris Man and the legendary Gregory Isaacs.</p>
		 </div>
		 <div class="player-title">Video</div>
		 <div class="main-1-player">
		    <div id="player"></div>
		 </div>
		 <div class="player-title">Comments</div>
		 <div class="main-1-player">
		 
		 
            <?php foreach ($comments['Comment'] as $comment): ?>
<div class="comment" style="margin-left:50px;">
        <p><?php echo h($comment['body'])?></p>
    </div>
<?php endforeach;

echo $this->element('newcomment', array("product_id" => $product['Product']['id']));?>
		 </div>
	  </div>
      <div class="col-xs-6 col-md-4 sidebar">
	      <div class="sidebar-1">
		      <button class="like"><i class="fa fa-thumbs-up"></i></button>
		  </div>
		  <div class="player-sidebar">Fav Song</div>
	      <div class="sidebar-2">
		      <p>My favourite song is "Na Falla Nuh Body". Why? Because it is meant to highlight that I won't be a follower, I will be a leader</p>
		  </div>
		  <div class="player-sidebar">Role Model</div>
	      <div class="sidebar-2">
		      <p>My favourite song is "Na Falla Nuh Body". Why? Because it is meant to highlight that I won't be a follower, I will be a leader</p>
		  </div>
		  <div class="player-sidebar">Similar Artistes</div>
	      <div class="sidebar-2">
		     <div class="side-bar-child">
              <div class="item-parent">
                  <div class="item-child" style="background:url('http://iamreggaedaily.com/wp-content/uploads/2011/12/Sizzla123.jpg') no-repeat -20px center/ 325px auto;">
                  <div class="banner">
                      <h2 class="banner-text">Sizzla</h2>
                  </div>
                 </div>
              </div>
              <div class="item-parent">
                  <div class="item-child" style="background:url('http://jamaica-gleaner.com/gleaner/20111031/ent/images/BobAndyUnpluggedW20111029RM.jpg') no-repeat -20px center/ 325px auto;">
                  <div class="banner">
                      <h2 class="banner-text">Marcia Griffiths</h2>
                  </div>
                 </div>
              </div>
              <div class="item-parent">
                  <div class="item-child" style="background:url('http://www.reggaeholland.com/wp-content/uploads/beenie_man.jpg') no-repeat -20px center/ 325px auto;">
                  <div class="banner">
                      <h2 class="banner-text">Beenie Man</h2>
                  </div>
                 </div>
              </div>
			</div>
		  </div>
	  </div>
	  </div>
	    </div>
    </div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="/js/galleria-1.2.9.min.js"></script>
	<script src="//www.youtube.com/iframe_api"></script>
	
	<script>

/* get height of browser window */

var windowWidth = $('.col-md-8').width();
    /**
     * Put your video IDs in this array
     */
    var videoIDs = ['vofff0Ei3kk',];

    var player, currentVideoId = 0;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
		  playerVars: {
          modestbranding: 1,
		  autohide: 1,
		  theme: 'light',
		  autoplay: 0,
		  rel: 0
          },
            height: 400,
            width: windowWidth,
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


	<script>
	
	/* get height of browser window */


    // Load the classic theme
    Galleria.loadTheme('/js/galleria.classic.min.js');

    // Initialize Galleria
    Galleria.run('#galleria', {
	transition: 'slide',
	autoplay: false,
	transitionSpeed:500,
	showInfo:true,
	_toggleInfo: false,
    imageCrop: true,
	thumbnails:false,
});

    </script>