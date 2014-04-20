<?php $this->layout = 'mytrip' ?>


<div class="select-cont">
     <div class="trip-framed-header trip-framed-header-rounded framed2-header">
	 Choose What You Want To Join As
	 </div>
     <div class="trip-framed-header trip-framed-header-rounded framed2-header" style="color:#333; font-size:15px; font-family: 'Lato', sans-serif; font-weight:100;">
	 Manager for artiste managers, artistes for.. you know who, fans for persons looking to connect with these people
	 </div>	 
     <div class="span4 select-cont-child ma">
	     <?php echo $this->Html->link('<i></i>', '/users/register/manager', array('class'=>'fa fa-briefcase fa-choice', 'escape'=>false)); ?>
		 <h3 class="select-head">Manager</h3>
		 
	 </div>

     <div class="span4 select-cont-child">
	     <?php echo $this->Html->link('<i></i>', '/users/register/artiste', array('class'=>'fa fa-music fa-choice', 'escape'=>false)); ?>
		 <h3 class="select-head">Artiste</h3>
		 
	 </div>	 

	 

     <div class="span4 select-cont-child">
	     <?php echo $this->Html->link('<i></i>', '/users/add', array('class'=>'fa fa-thumbs-up fa-choice', 'escape'=>false)); ?>
		 <h3 class="select-head">Fan</h3>
		 
	 </div>	 

</div>