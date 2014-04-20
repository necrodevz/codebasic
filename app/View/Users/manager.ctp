

<div style="margin-top:53px;"></div>

<div class="container-fluid">
  <div class="row">
      <div class="col-xs-12 col-md-8">
	          <div class="player-title">Artistes I Fan</div>
			  <div class="sug-mov-suzi">
			      <a href="#" role="button" class="btn popovers btn-success" id="example" data-toggle="popover" title="" data-content="This is where artistes whom you had fanned is stored">Help</a>
			  </div>
	          <div class="player-title">Artistes I Manage</div>
			  <div class="sug-mov-suzi">
				  <button class="btn btn-success" data-toggle="modal" data-target="#myModal">Add Artiste
                  </button>

			  </div>
	  </div>
      <div class="col-xs-6 col-md-4 sidebar">
	     <div class="user_sidebar">
		 <div class="user_side-title">My Info<?//php echo $userinfo['User']['email']; ?></div>
	      <div class="user_name"><span>Name: </span>Horace Cunningham</div>
	      <div class="user_email"><span>Email: </span>Horace@gmail.com</div>
         </div>		  
	  </div>
	  </div>
  </div>
  
  
  <?php echo $this->element('manager_modal'); ?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap-scrollspy.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap-transition.min.js"></script>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>


<script>
$("[data-toggle=popover]")
.popover({html:true}, 'show')
</script>