

			
			<?php $this->layout='homepage'; ?>
			
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!--[if lt IE 9]>
<link rel='stylesheet' id='ie9lt-css'  href='http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/css/ie-lt-9.css?ver=1.0' type='text/css' media='screen' />
<![endif]-->



<body class="home page page-id-162 page-template page-template-front-page-tpl-php">

<div class="tp-bar tp-bar-abs">
    <div class="container">
        <div class="row">
            
            <!--<div class="logo span2">
				                <a href="http://extracoding.com/demo/wp/iloverockband/dark">
                    <img src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/images/logo.png" alt="I &hearts; Rockband"> 
                </a> 
            </div>
            <!-- logo ends -->
            
            <div class="span10">
                <div class="tp-up clearfix">
                        
                                        
                    <div class="socialize">
					      <form class="navbar-form" role="search">
        <div class="form-group">
		 <div class="ui-widget">
          <input type="text" id="tags" class="form-control search-query-main" placeholder="Search for an Artiste">
        <button type="submit" class="btn btn-default btn-front"><i class="icon-search front-page"></i></button>
		</div>
		</div>
      </form>
                     </div>
                </div>
                <!-- menu-bar ends --> 
            </div>
        </div>
    </div>
</div>
<!-- tp-links end -->



<div id="da-slider" class="da-slider">
            <div class="da-slide">
            <div class="container">
                <div class="slide-content">
                    <h2>Fusce at purus vel sem isque gravida</h2>
                    <p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nulla, sed convallis eros. Nunc pharetra justo eleifend mauris sodales ut tincidunt purus coLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui adipiscing&#8230;</p>
</p>
                                                        </div>
                <hr>
                                <div class="da-img" style="background-image:url(http://www.hdwallpapers.in/walls/party_night-wide.jpg);"></div>
            </div>
        </div>
            <div class="da-slide">
            <div class="container">
                <div class="slide-content">
                    <h2>Fusce at purus vel sem isque gravida</h2>
                    <p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nulla, sed convallis eros. Nunc pharetra justo eleifend mauris sodales ut tincidunt purus coLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui adipiscing&#8230;</p>
</p>
                                                        </div>
                <hr>
                                <div class="da-img" style="background-image:url(http://2.bp.blogspot.com/-BS1t_Dxs4eA/UGW2Kamp-TI/AAAAAAAADjU/Jy5Qbs4PvZg/s1600/DSC_2205.JPG);"></div>
            </div>
        </div>
            <div class="da-slide">
            <div class="container">
                <div class="slide-content">
                    <h2>Fusce at purus vel sem isque gravida</h2>
                    <p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui nulla, sed convallis eros. Nunc pharetra justo eleifend mauris sodales ut tincidunt purus coLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis dui adipiscing&#8230;</p>
</p>
                                                        </div>
                <hr>
                                <div class="da-img" style="background-image:url(http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/slider-1-1024x357.jpg);"></div>
            </div>
        </div>
        
    
    <div class="da-arrows">
    	<span class="da-arrows-prev"><i class="fa fa-arrow-left"></i></span>
      <span class="da-arrows-next"><i class="fa fa-arrow-right"></i></span>
    </div>
	
	<div class="login">
	    
		<div class="banner-container">
			<div class="banner">
						<?php echo $this->Session->flash(); ?>
			    <div class="login-front">
				   <div class="login-header">
				   </div>
			<?php echo $this->Form->create('User', array(
				'class' => '',
				'id'=>'update_user',
				'inputDefaults' => array(
					'format' => array('before', 'label', 'between', 'input', 'error', 'after'),
					'label' => false,
					'error' => array('attributes' => array('wrap' => 'span', 'class' => 'help-inline')),
				)));?>

			<?php echo $this->Form->input('username', array(
				'label' => false, 'placeholder'=>'Username', 'class'=>'form-control login-input', 'div'=>'form-group'
			)); ?>
			
			<?php echo $this->Form->input('password', array('size'=>30,
				'label' => false,'placeholder'=>'Password', 'class'=>'form-control login-input', 'div'=>'form-group'
			)); ?>
			
			<?php echo $this->Form->submit('Login', array('type'=>'submit',
						'class' => 'btn btn-success btn-submit',
						'div' =>'form-group',
						'label' => false
				)); ?>	
			</form>
			
			 
			<div class="signup-front"><?php echo $this->Html->link('Sign Up', array('controller'=>'users', 'action'=>'add'), array('class'=>'btn btn-info btn-larg')); ?></div>
				</div>

			</div>
			
			</div>
	</div>
</div>
<!-- da-slider ends --><div class="container">
	    
	            <div class="block-picSlide">
        
            <h2>Latest Artistes</h2>
            <ul class="picSlide">
             <li>
                <div class="carousel-box"> 
            	     <a href="#" title="Lipsum dolor sit amet mac uis">
						<img alt="Lipsum dolor sit amet mac uis" title="Lipsum dolor sit amet mac uis" src="http://chatychaty.com/wp-content/uploads/2013/01/chronixx.jpg" />
                     </a>
   				                
                     <a href="#" class="title">
                         <h4>Chronixx</h4>
                     </a>
                    <div class="btm"> 
                    <a href="#" class="listen-now">
                        <i class="icon-listen"></i>Reggae                    
					</a> 
                </div>
            </div>
          </li>
		  
             <li>
                <div class="carousel-box"> 
            	     <a href="#" title="Lipsum dolor sit amet mac uis">
						<img alt="Lipsum dolor sit amet mac uis" title="Lipsum dolor sit amet mac uis" src="http://www.reggaeholland.com/wp-content/uploads/beenie_man.jpg" />
                     </a>
   				                
                     <a href="#" class="title">
                         <h4>Beenie man</h4>
                     </a>
                    <div class="btm"> 
                    <a href="#" class="listen-now">
                        <i class="icon-listen"></i>Dancehall                    
					</a> 
                </div>
            </div>
          </li>
             <li>
                <div class="carousel-box"> 
            	     <a href="#" title="Lipsum dolor sit amet mac uis">
						<img alt="Lipsum dolor sit amet mac uis" title="Lipsum dolor sit amet mac uis" src="http://www.jamaicans.com/bm~pix/b1_5605~s600x600.jpg" />
                     </a>
   				                
                     <a href="#" class="title">
                         <h4>Etana</h4>
                     </a>
                    <div class="btm"> 
                    <a href="#" class="listen-now">
                        <i class="icon-listen"></i>Reggae                   
					</a> 
                </div>
            </div>
          </li>
             <li>
                <div class="carousel-box"> 
            	     <a href="#" title="Lipsum dolor sit amet mac uis">
						<img alt="Lipsum dolor sit amet mac uis" title="Lipsum dolor sit amet mac uis" src="http://2.bp.blogspot.com/_0dvWMIzTPkc/TKyqaanENRI/AAAAAAAABYE/zAnfC_TWaFg/s1600/gyptian.jpg" />
                     </a>
   				                
                     <a href="#" class="title">
                         <h4>Gyptian</h4>
                     </a>
                    <div class="btm"> 
                    <a href="#" class="listen-now">
                        <i class="icon-listen"></i>Reggae
					</a> 
                </div>
            </div>
          </li>
             <li>
                <div class="carousel-box"> 
            	     <a href="http://extracoding.com/demo/wp/iloverockband/dark/?fw_audio=lipsum-dolor-sit-amet-mac-uis" title="Lipsum dolor sit amet mac uis">
						<img alt="Lipsum dolor sit amet mac uis" title="Lipsum dolor sit amet mac uis" src="http://www.billionaireentertainment.com/mag/mymp3player/2011/12/khago.jpg" />
                     </a>
   				                
                     <a href="http://extracoding.com/demo/wp/iloverockband/dark/?fw_audio=lipsum-dolor-sit-amet-mac-uis" class="title">
                         <h4>Khago</h4>
                     </a>
                    <div class="btm"> 
                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/?fw_audio=lipsum-dolor-sit-amet-mac-uis" class="listen-now">
                        <i class="icon-listen"></i>Reggae                    
					</a> 
                </div>
            </div>
          </li>
       </ul>
        </div>
	    
                    
        <div class="alert">
            <h4 class="text-red">Want to see more?</h4> 
							<?php echo $this->html->link('View All Artistes', array('controller'=>'products', 'action'=>'index'), array('class'=>'btn btn-primary')); ?>
                    </div>
    
    
</div>

<footer>
    <div class="footer">
        <div class="container">
            <div class="row">
               <div id="widget-gallery-2" class="widget widget_widget-gallery"><h2>Gallery</h2>        <div class="gallery-thumbs">
        <ul class="clearfix">
        	            	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_111867800.jpg" title="shutterstock_111867800">
                    	<img alt="shutterstock_111867800" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_111867800-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_101515084.jpg" title="shutterstock_101515084">
                    	<img alt="shutterstock_101515084" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_101515084-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_97224443.jpg" title="shutterstock_97224443">
                    	<img alt="shutterstock_97224443" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_97224443-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_81556783.jpg" title="shutterstock_81556783">
                    	<img alt="shutterstock_81556783" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_81556783-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_76474024.jpg" title="shutterstock_76474024">
                    	<img alt="shutterstock_76474024" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_76474024-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_21.jpg" title="shutterstock_68250934_21">
                    	<img alt="shutterstock_68250934_21" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_21-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_20.jpg" title="shutterstock_68250934_20">
                    	<img alt="shutterstock_68250934_20" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_20-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_19.jpg" title="shutterstock_68250934_19">
                    	<img alt="shutterstock_68250934_19" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_19-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_17.jpg" title="shutterstock_68250934_17">
                    	<img alt="shutterstock_68250934_17" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_17-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_16.jpg" title="shutterstock_68250934_16">
                    	<img alt="shutterstock_68250934_16" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_16-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_15.jpg" title="shutterstock_68250934_15">
                    	<img alt="shutterstock_68250934_15" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_15-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_14.jpg" title="shutterstock_68250934_14">
                    	<img alt="shutterstock_68250934_14" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_14-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_12.jpg" title="shutterstock_68250934_12">
                    	<img alt="shutterstock_68250934_12" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_12-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_11.jpg" title="shutterstock_68250934_11">
                    	<img alt="shutterstock_68250934_11" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_11-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_10.jpg" title="shutterstock_68250934_10">
                    	<img alt="shutterstock_68250934_10" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_10-85x62.jpg" />
                    </a>
                </li>
                        	<li>
					                    <a href="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_9.jpg" title="shutterstock_68250934_9">
                    	<img alt="shutterstock_68250934_9" src="http://extracoding.com/demo/wp/iloverockband/dark/wp-content/uploads/2013/07/shutterstock_68250934_9-85x62.jpg" />
                    </a>
                </li>
                    </ul>
        </div>
        
		</div>
		<div id="categories-2" class="widget widget_categories"><h2>Categories</h2>		<ul>
	<li class="cat-item cat-item-2"><a href="#" title="View all posts filed under Blog">Reggae</a>
</li>
	<li class="cat-item cat-item-3"><a href="#" title="View all posts filed under Music">Dancehall</a>
</li>
	<li class="cat-item cat-item-4"><a href="#" title="View all posts filed under News">RnB</a>
</li>
	<li class="cat-item cat-item-1"><a href="#" title="View all posts filed under Support">HipHop</a>
</li>
	<li class="cat-item cat-item-6"><a href="#" title="View all posts filed under Updates">Soul</a>
</li>
		</ul>
</div><div id="widget-contact-2" class="widget widget_widget-contact"><h2>Contact Us</h2>        
         <p>Want to hire us for your Party ? What you waiting for ! We are rockers</p>
         <ul class="contact-matter">
            <li class="addrs">I Love Rockband
50 Avenue Du President Wilson 93214 Saint-denis Newyork</li>
            <li class="contact">T +33(0)1 49 46 63 63  /  </li>
            <li class="cell">M +33(0)1 49 46 63 64</li>
            <li class="email"><a href="mailto:Info@iloverockband.com,">Info@iloverockband.com,</a></li>
            <li class="web"><a href="http://http://www.iloverockband.com" target="_blank">www.iloverockband.com</a></li>
        </ul>
		</div>            </div>
        </div>
    </div>
    <!-- footer ends -->
    <div class="bottom">
        <div class="container">
            <div class="row">
                <div class="span3"> 
                	                    
                                    </div>
                <div class="span9">
                    
                    <ul id="menu-footer-menu" class="nav pull-right"><li id="menu-item-203" class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-162 current_page_item menu-item-203"><a href="http://extracoding.com/demo/wp/iloverockband/dark/">Home</a></li>
<li id="menu-item-200" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-200"><a href="#">Home</a></li>
<li id="menu-item-205" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-205"><a href="#">Artistes</a></li>
<li id="menu-item-202" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-202"><a href="#">About Us</a></li>
<li id="menu-item-204" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-204"><a href="#">Contact Us</a></li>
</ul>                    
                    <p>&Acirc;&copy; 2013 support. All Rights Reserved.
</p>
            </div>
        </div>
    </div>
    <!-- bottom ends --> 
</footer>
<!-- Dialog -->
<!-- dialog ends -->
<!-- dialog ends -->
<div class="dialog-overlay"></div>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-includes/js/jquery/ui/jquery.ui.core.min.js?ver=1.10.3'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-includes/js/jquery/ui/jquery.ui.widget.min.js?ver=1.10.3'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-includes/js/jquery/ui/jquery.ui.button.min.js?ver=1.10.3'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-includes/js/jquery/ui/jquery.ui.position.min.js?ver=1.10.3'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-includes/js/jquery/ui/jquery.ui.dialog.min.js?ver=1.10.3'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-includes/js/mediaelement/wp-mediaelement.js?ver=3.6'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/js/jquery.cslider.js?ver=3.6'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/js/modernizr.custom.28468.js?ver=3.6'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/js/jquery.jcarousel.min.js?ver=3.6'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-includes/js/jquery/ui/jquery.ui.tabs.min.js?ver=1.10.3'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/js/sha1.js?ver=3.6'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/js/codebird.js?ver=3.6'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/js/script.js?ver=3.6'></script>
<script type='text/javascript' src='http://extracoding.com/demo/wp/iloverockband/dark/wp-content/themes/rockband/js/custom.js?ver=3.6'></script>
		<script type="text/javascript">
        /*** Slides Script ***/
        jQuery(document).ready( function($){
            /*** Home page slider ***/	
			if( $('#da-slider').length !== 0 ){
				$('#da-slider').cslider({
					bgincrement	: 10,	// increment the bg position (parallax effect) when sliding
					autoplay	: false,// slideshow on / off
					interval	: 4000  // time between transitions
				});
			}        
        });
        </script>
		
		<script>
  $(function() {
    var availableTags = [
      "Chronixx",
	  "beenie man",
	  "gytian",
	  "etana",
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  });
  </script>
       