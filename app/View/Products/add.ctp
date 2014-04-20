


<div class="users-parent">
    <div class="form-add-artiste">
       <div class="form-header">
        Complete Profile
       </div>
      <?php echo $this->Form->create('Product', array('class'=>'form-horizontal'));?>
        <?php echo $this->Form->input('name', array('placeholder'=>'Your Name', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->textarea('summary', array('placeholder'=>'Describe yourself, your history in the music business and more', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->textarea('role_model', array('placeholder'=>'Your role model in life, start this as: My role model is...', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->textarea('fav_song', array('placeholder'=>'Your favourite song, start this as: My favourite song is...', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control', 'rows'=>'6', 'cols'=>'5'));
		echo $this->Form->input('trailer', array('placeholder'=>'Put the last 11 letters and digits of your youtube video url here', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
        echo ('<div class="ui-widget">');
        echo $this->Form->input('genre_id', array(
          'type' => 'select',
          'options' => $genres,
          'empty' => 'Your Music Genre',
	      'class'=>'form-control',
	      'id' => 'combobox',
	      'label'=>false,
	      'div'=>'form-group',
           ));
          echo ('</div>');
		echo ('<div class="btn-group"> ');
		echo $this->Form->submit('Continue', array('class' => 'form-submit btn btn-default',  'title' => 'click to continue to add photos') ); 
      ?>
	</div>
</div>

</script>



