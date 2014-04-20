<h1>Add Comment</h1>
<?php
echo $this->Form->create('Comment',array('action' => 'comment',
                                             'url' => array($product_id)));
echo $this->Form->input('body', array('rows' => '3'));
echo $this->Form->end('Add comment');
?>