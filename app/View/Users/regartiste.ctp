

<!-- app/View/Users/add.ctp -->
<div class="users-parent">
<div class="users form">
   <div class="form-header">
      Artiste Registration
   </div>
<?php echo $this->Form->create('User', array('class'=>'form-horizontal'));?>
        <?php echo $this->Form->input('username', array('placeholder'=>'Username', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->input('email', array('placeholder'=>'Email', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->input('first_name', array('placeholder'=>'First Name', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->input('last_name', array('placeholder'=>'Last Name', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->input('middle_name', array('placeholder'=>'Middle Name', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
        echo $this->Form->input('password', array('placeholder'=>'Password', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Form->input('password_confirm', array( 'maxLength' => 255, 'title' => 'Confirm password', 'type'=>'password', 'placeholder'=>'Confirm Password', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));
		echo $this->Html->div('info', 'Add an artiste');
        echo $this->Form->input('role', array(
             'options' => array('artiste' => 'Artiste'),'placeholder'=>'Confirm Password', 'div'=>'form-group', 'label'=>false, 'class'=>'form-control'));

		
		echo $this->Form->submit('Sign Up', array('class' => 'form-submit btn btn-default',  'title' => 'Click here to add the user') ); 
?>
<?php echo $this->Form->end(); ?>
</div>
</div>
