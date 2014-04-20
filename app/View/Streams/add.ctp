<h1>Add Post</h1>
<!--<?php
//echo $this->Form->create('post');
//echo $this->Form->input('stream_name');
//echo $this->Form->input('stream_url');
//echo $this->Form->end('Save Post');
?>-->


<html>

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<link href='//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css' rel='stylesheet' type='text/css'>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>
<body>
<!-- Button trigger modal -->
<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



<div style="margin-top:53px;"></div>

<div class="container-fluid">
<a href="#" role="button" class="btn popovers btn-success" data-toggle="popover" title="" data-content="test content <a href='' title='test add link'>link on content</a>" data-original-title="test title">test link</a>


<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap-scrollspy.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.3.1/js/bootstrap-transition.min.js"></script>
<script>
$("[data-toggle=popover]")
.popover({html:true})
</script>
</body>

</html>