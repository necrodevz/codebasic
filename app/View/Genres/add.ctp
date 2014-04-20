<head>
 <link rel="stylesheet" href="//code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css">
<script src="//code.jquery.com/jquery-1.9.1.js"></script>
<script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<link rel="stylesheet" href="/resources/demos/style.css">
</head>

<div class="add_ondemand">
<h1>Add category</h1>
<?php
echo $this->Form->create('post');
echo $this->Form->input('name', array('placeholder'=>'name'));
echo $this->Form->end('Add Category');
?>
</div>

	 <script>
$(function() {
$( "#datepicker" ).datepicker();
});
</script>



