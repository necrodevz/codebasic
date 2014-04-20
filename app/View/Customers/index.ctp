<div class="container-fluid">
    <div class="title">
	    Please Select What You Want To View
	</div>
	<div class="row">
	    <div class="col-md-6">
		  <div class="view-pa">
		    <div class="view-cus">
			    <h1 class="title-mini">View Customers</h1>
			    <a href="#"><i class="fa fa-users fa-cus"></i></a>
			</div>
			<div class="add-cus">
			    <h1 class="title-mini">Add Customers</h1>
				<?php echo $this->Html->link('<i class="fa fa-plus-square fa-cus"></i>', array('controller'=>'customers', 'action'=>'add'), array('class'=>'user-link', 'escape'=>false)); ?>
			</div>
		  </div>
		</div>
		<div class="col-md-6">
		  <div class="view-pa">
		    <div class="view-cus">
			     <h1 class="title-mini">View Orders</h1>
			     <a href="#"><i class="fa fa-shopping-cart fa-cus"></i></i></a>
			</div>
			<div class="add-cus">
			    <h1 class="title-mini">Add Orders</h1>
				<?php echo $this->Html->link('<i class="fa fa-pencil fa-cus"></i>', array('controller'=>'orders', 'action'=>'add'), array('class'=>'user-link', 'escape'=>false)); ?>
			</div>
		  </div>
		</div>
		<div class="add-prod">
		  <div class="view-pa">
		    <div class="view-cus">
			     <h1 class="title-mini">View Products</h1>
                 <?php echo $this->Html->link('<i class="fa fa-list-alt fa-cus"></i>', array('controller'=>'orders', 'action'=>'add'), array('class'=>'user-link', 'escape'=>false)); ?>
			</div>
			<div class="add-cus">
			    <h1 class="title-mini">Add Products</h1>
				<?php echo $this->Html->link('<i class="fa fa-plus-square-o fa-cus"></i>', array('controller'=>'products', 'action'=>'add'), array('class'=>'user-link', 'escape'=>false)); ?>
			</div>
		  </div>		
		</div>
	</div>
</div>