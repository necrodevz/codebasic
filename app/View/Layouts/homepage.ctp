<!DOCTYPE html>
<head>
<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"> 
   
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo ('Music Connections') ?>
	</title>	
	<?php
		echo $this->Html->meta('icon');
	?>
<?php
        	
        echo $this->Html->css('font-awesome.min');			
		echo $this->Html->css('prettyPhoto');								
		echo $this->Html->css('rs-settings');
		echo $this->Html->css('home');
		echo $this->Html->css('home-style');
		echo $this->Html->css('responsive');
		echo $this->Html->css('cslider');
	?>
	
	<link rel='stylesheet' id='google_font_family-css'  href='http://fonts.googleapis.com/css?family=Open+Sans%3A300italic%2C400italic%2C600italic%2C700italic%2C400%2C300%2C600%2C700&#038;ver=3.6' type='text/css' media='all' />
	<link href='http://fonts.googleapis.com/css?family=Raleway:200' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Lato:300' rel='stylesheet' type='text/css'>
	<link rel='stylesheet' id='goog_font_content_family-css'  href='http://fonts.googleapis.com/css?family=Oswald%3A400%2C700%2C300&#038;ver=3.6' type='text/css' media='all' />
	<script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
	<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.2.1'></script>
	<link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">

	<script type="text/javascript">var ajaxurl="0";</script>
	<?php
		echo $this->fetch('meta');
		echo $this->fetch('css');
		echo $this->fetch('script');
		
	?>
	<link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" rel="stylesheet">
	
</head>

<body style="background:url('/img/binding_dark.png') repeat scroll 0 0 rgba(0, 0, 0, 0);">			
     
				
			<?php echo $this->fetch('content'); ?>
	
</body>
</html>

