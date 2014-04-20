<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo $cakeDescription ?>:
		<?php echo $title_for_layout; ?>
	</title>
	<?php
		echo $this->Html->meta('icon');

		echo $this->Html->css('default');
		echo $this->Html->css('component');
		echo $this->Html->script('classie');
		echo $this->Html->script('modernizr.custom');

		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Raleway:200' rel='stylesheet' type='text/css'>
        <script src="//code.jquery.com/jquery-1.10.2.js"></script>
		<script src="//www.youtube.com/iframe_api"></script>
</head>
<body>
	<div id="container">
		<div id="header">
		    <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
			<h3>Menu</h3>
			<a href="#">
			   <div class="on-demand-cont" style="background:url('screens/screen1.jpg'); background-size:389px">
			       <div class="info-cont">
				   </div>
			   </div>
			</a>
			<a href="#">
			   <div class="on-demand-cont">
			   </div>
			</a>
			<a href="#">
			   <div class="on-demand-cont">
			   </div>
			</a>			
		</nav>
		<nav class="cbp-spmenu cbp-spmenu-horizontal cbp-spmenu-top" id="cbp-spmenu-s3">
			<h3>Menu</h3>
			<a href="#"><i class="fa icon-top fa-laptop"></i><div>Regular TV</div></a>
			<a href="indexondemand.html"><i class="fa icon-top fa-outdent"></i><div>On Demand</div></a>
			<a href="#" class="active"><i class="fa icon-top fa-cogs"></i><div>Settings</div></a>
		</nav>
			</header>
			<div class="main">
				<section>
					<!-- Class "cbp-spmenu-open" gets applied to menu -->
					<button id="showTop">Menu</button>
				</section>
			</div>
		</div>
		<!-- Classie - class helper functions by @desandro https://github.com/desandro/classie -->
		<script src="js/classie.js"></script>
		<script>
			var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
				menuRight = document.getElementById( 'cbp-spmenu-s2' ),
				menuTop = document.getElementById( 'cbp-spmenu-s3' ),
				menuBottom = document.getElementById( 'cbp-spmenu-s4' ),	
				showTop = document.getElementById( 'showTop' ),
				body = document.body;

			showTop.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuTop, 'cbp-spmenu-open' );
				disableOther( 'showTop' );
			};

			function disableOther( button ) {
				if( button !== 'showLeft' ) {
					classie.toggle( showLeft, 'disabled' );
				}
				if( button !== 'showRight' ) {
					classie.toggle( showRight, 'disabled' );
				}
				if( button !== 'showTop' ) {
					classie.toggle( showTop, 'disabled' );
				}
				if( button !== 'showBottom' ) {
					classie.toggle( showBottom, 'disabled' );
				}
				if( button !== 'showLeftPush' ) {
					classie.toggle( showLeftPush, 'disabled' );
				}
				if( button !== 'showRightPush' ) {
					classie.toggle( showRightPush, 'disabled' );
				}
			}
		</script>
		</div>
		<div id="content">

			<?php echo $this->Session->flash(); ?>

			<?php echo $this->fetch('content'); ?>
		</div>
		<div id="footer">
		</div>
	</div>
</body>
</html>