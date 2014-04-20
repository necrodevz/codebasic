<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel"><h1>Submit Request For A DVD</h4>
      </div>
      <div class="modal-body">
	    <div class="buy-dvd-form">
        <?php
      echo $this->Form->create('post', array('class'=>'form-horizontal'));
      echo $this->Form->input('stream_name', array('placeholder'=>'Phone Number', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
      echo $this->Form->input('stream_url', array('placeholder'=>'Street Address', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
	  echo $this->Form->input('stream_url', array('placeholder'=>'Town/City', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
	  echo $this->Form->input('stream_url', array('placeholder'=>'State', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
	  echo $this->Form->input('stream_url', array('placeholder'=>'Country', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
        ?>
		</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
        <?php echo $this->Form->submit('Submit', array('class'=>'btn btn-default', 'div'=>false)); ?>
      </div>
    </div>
  </div>
</div>