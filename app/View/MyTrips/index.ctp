<style>
  
  .framed2-header  {
  color:#333;
  }
  
  ul, ol {
padding: 0;
margin: 0 !important;
}

.control-label {
width: 108px;
}

.edit-pro  {
margin-left:186px;
}
  
</style>

<div class="fav-div">
    <div style="display:inline-block; width:100%; margin-bottom: 150px;">	
	   <div class='span8'>
		   <div class='framed2 framed2-flat'>
		   	<div class="trip-framed-header trip-framed-header-rounded framed2-header">
			   My Home
			</div>
			<div>
			    <div style="color:#999; font-size:15px; font-family: 'Lato', sans-serif" class="trip-framed-header trip-framed-header-rounded framed2-header">
				   This is your home portal where everything is stored
				</div>
			    <div class="fav-header">
				   <div class="dashboard-container">
	<?php foreach($my_trips as $category):?>
		<?php if(!empty($category)):?>
		<ul class="items clearfix">
			<div class="cat-div"><h3 class="category"><?php echo $category[0]['Product']['Category']['name'];?>(s)</h3></div>
			<?php foreach($category as $trip): $trip = $trip['Product'];?>
<a href="/product/<?php echo $trip['url'];?>" title="view product" role="button">			
				 <li class="box item_<?php echo $trip['category_id'];?>">
				 
					 <div class="element" style="background-image:url(/files/products/<?php 		 
							for($i=0; $i < sizeof($trip['Image']); $i++)
							{
								if($trip['Image'][$i]['position'] == 0)
									echo $trip['Image'][$i]['image'];
							}
						?>);background-size: 300px;">
					 </div>
					 <?php
					 
						$sub_categories = '';
						$i = 0;
						$previous_cat = array();
						
						foreach($trip['SubCategory'] as $subcat)
						{
							if(!isset($previous_cat[$subcat['name']]))
							{					
								if($i == 0)
									$sub_categories = $subcat['name']; 
								else
									$sub_categories = $sub_categories.'+'.$subcat['name']; 
							
								$previous_cat[$subcat['name']] = $subcat['id'];
							}
							$i++;
						}
					 ?>
				
					 <ul class="icon-element">
						<div class="li-div<?php echo $trip['category_id'];?>">
							 <!--<a href="/products/search?cat=<?php echo $trip['category_id'];?><?php if($sub_categories != '') echo '&q='.$sub_categories; ?>" title="find similar" role="button" >
								<li class="edit"><i class="icon-search icon-white"></i></li>
							</a>
							 <li class="divider<?php echo $trip['category_id'];?>"></li>
							
							 </a>
							 <li class="divider<?php echo $trip['category_id'];?>"></li>-->
							 <a href="/my_trips/remove/<?php echo $trip['url'];?>?r=/home" title="view product" role="button">
								 <li class="tick" title="remove">
									<i class="icon-remove icon-white"></i>
									
								 </li>
							 </a>
						</div>
					</ul>
					 
                	 <div class="mybanner">

               <div class="title"><?php echo $trip['name']; ?></div>

               <div class="tagline"><?php echo $trip['address']; ?></div>
      

               <div class="clearfix"></div>

            </div>
				 </li>
				 </a>
			<?php endforeach; ?>
		</ul>
		<?php endif; ?>
		
					 <?php if ($category == 0)  {
			 echo $this->Html->div('notice', 'start liking artistes to populate this area');
			 }  ?>
	<?php endforeach; ?>
</div>
				</div>
				
				
			</div>
			
		   </div>         			
	   </div>
	   
	   <?php echo $this->element('dash_manager'); ?>

</div>
</div>