<div class="add_ondemand">
<h1>Add Post</h1>
<?php
echo $this->Form->create('post');
echo $this->Form->input('rating_type', array('placeholder'=>'Rating Type'));
echo $this->Form->input('url', array('placeholder'=>'Url To Icon'));
echo $this->Form->submit('Add Rating');
?>
</div>