<div class="add-cust-title">
     Make An Order
</div>
<div class="add-customer">

<?php
echo $this->Form->create('post', array('class'=>'form-horizontal'));
echo $this->Form->input('customer_id', array(
    'type' => 'select',
    'options' => $customers,
    'empty' => 'Select Customer',
	'class'=>'form-control',
	'label'=>false,
	'div'=>'form-group',
));

echo $this->Form->input('product_id', array(
    'type' => 'select',
    'options' => $products,
    'empty' => 'Select Product',
	'class'=>'form-control',
	'label'=>false,
	'div'=>'form-group',
));
echo $this->Form->input('delivery', array('placeholder'=>'Select Date To Deliver', 'id'=>'datepicker', 'label'=>false, 'div'=>'form-group', 'class'=>'form-control'));
echo $this->Form->submit('Submit Order', array('class'=>'btn btn-success'));
?>

</div>

 <script>
$(function() {
$( "#datepicker" ).datepicker();
});
</script>