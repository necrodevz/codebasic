
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Add An Artiste</h4>
      </div>
      <div class="modal-body">
	    <p>
        When you register an artiste you will be logged out from your manager account and into the account you are
		creating for the artiste. You can configure the artiste account and profile and log back into your manager 
		account at anytime.
		</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">Cancel</button>
        <!--<button type="button" class="btn btn-default">Continue</button>-->
		<?php echo $this->html->link('Continue', array('controller'=>'users', 'action' => 'add'), array('class'=>'btn btn-default')); ?>
      </div>
    </div>
  </div>
</div>