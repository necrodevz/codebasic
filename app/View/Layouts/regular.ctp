<?php
/**
 *
 *
 * CakePHP(tm) : Rapid Development Framework (http://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (http://cakefoundation.org)
 * @link          http://cakephp.org CakePHP(tm) Project
 * @package       app.View.Layouts
 * @since         CakePHP(tm) v 0.10.0.1076
 * @license       http://www.opensource.org/licenses/mit-license.php MIT License
 */

$cakeDescription = __d('cake_dev', 'CakePHP: the rapid development php framework');
?>
<!DOCTYPE html>
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
		echo $this->Html->css('galleria.classic');
		echo $this->Html->script('classie');
		echo $this->Html->script('modernizr.custom');
		echo $this->Html->script('galleria-1.2.9.min');

		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>
	        <script src="../js/galleria-1.9.min.js"></script>
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Raleway:200' rel='stylesheet' type='text/css'>
		<link href='//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script src="//www.youtube.com/iframe_api"></script>
		        <style>

            /* Demo styles */
            h1{font-size:12px;font-weight:normal;color:#ddd;margin:0;}
            p{margin:0 0 20px}
            a {color:#22BCB9;text-decoration:none;}
            .cred{margin-top:20px;font-size:11px;}

            /* This rule is read by Galleria to define the gallery height: */
            #galleria{height:320px}

        </style>
</head>
<body onload="onYouTubeIframeAPIReady()">
<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control search-query" placeholder="Search for a movie">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-left">
	    <li><?php echo $this->Html->link('How It Works', array('controller'=>'users', 'action'=>'index'), array('class'=>'user-link')); ?></li>
	    <li><?php echo $this->Html->link('Login', array('controller'=>'users', 'action'=>'index'), array('class'=>'user-link')); ?></li>
	    <li><?php echo $this->Html->link('Disclaimer', array('controller'=>'users', 'action'=>'index'), array('class'=>'user-link')); ?></li>
	    <li><?php echo $this->Html->link('Contact Us', array('controller'=>'users', 'action'=>'index'), array('class'=>'user-link')); ?></li>
        <li><button class="btn btn-premium" id="showTop"><i class="fa fa-top-menu fa-caret-square-o-down"></i>Menu</button></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


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
			<a href="/streams/"><i class="fa icon-top fa-laptop"></i><div>Regular TV</div></a>
			<a href="/streams/ondemand"><i class="fa icon-top fa-outdent"></i><div>On Demand</div></a>
			<a href="/streams/schedule"><i class="fa fa-list-ul icon-top"></i><div>TV Schedule</div></a>
			<a href="/streams/settings"><i class="fa icon-top fa-cogs"></i><div>Settings</div></a>
		</nav>
			<div class="main">
				<section>
					<!-- Class "cbp-spmenu-open" gets applied to menu -->
					
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
