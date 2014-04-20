
<div class="add-cust-title">
     Add A Customer
</div>
<div class="add-customer">

<?php
echo $this->Form->create('post', array('class'=>'form-horizontal'));
echo $this->Form->input('first_name', array('placeholder'=>'First Name', 'label'=>false, 'div'=>'form-group', 'class'=>'form-control'));
echo $this->Form->input('last_name', array('placeholder'=>'Last Name', 'label'=>false, 'div'=>'form-group', 'class'=>'form-control'));
echo $this->Form->input('address', array('placeholder'=>'Address', 'label'=>false, 'div'=>'form-group', 'class'=>'form-control'));
echo $this->Form->submit('Add Customer', array('class'=>'btn btn-success'));
?>

</div>