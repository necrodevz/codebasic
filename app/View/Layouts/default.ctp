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
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php
		echo $this->Html->meta('icon');

		echo $this->Html->css('default');
		echo $this->Html->css('component');
		echo $this->Html->css('galleria.classic');
		echo $this->Html->css('cms-slide');			
		echo $this->Html->script('classie');
		echo $this->Html->script('modernizr.custom');

		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
	?>
		<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Raleway:200' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Roboto:500italic' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Abril+Fatface' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300italic' rel='stylesheet' type='text/css'>
		<link href='//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Libre+Baskerville:400italic|Gilda+Display' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Pathway+Gothic+One' rel='stylesheet' type='text/css'>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
<!-- bxSlider Javascript file -->
<!-- bxSlider CSS file -->
<link href="/css/jquery.bxslider.css" rel="stylesheet" />

		        <style>

            /* Demo styles */
            h1{font-size:12px;font-weight:normal;color:#ddd;margin:0;}
            p{margin:0 0 20px}
            a {color:#22BCB9;text-decoration:none;}
            .cred{margin-top:20px;font-size:11px;}

            /* This rule is read by Galleria to define the gallery height: */
            #galleria{height:400px; margin-top:50px;}

        </style>
</head>
<body style="background:url('/img/binding_dark.png') repeat scroll 0 0 rgba(0, 0, 0, 0);">
    	<?php  
		     if ($this->Session->read('Auth.User')){
                 echo $this->element('topbar_loggedin');
              }
			  
        else  {
                 echo $this->element('topbar_loggedout');
              }

             ?>

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
