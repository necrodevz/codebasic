<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control search-query" placeholder="Search for an Artiste">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-left">
	    <li><?php echo $this->Html->link('My Fan List', array('controller'=>'users', 'action'=>'index'), array('class'=>'user-link')); ?></li>
	    <li><?php echo $this->Html->link('Browse Artistes', array('controller'=>'products', 'action'=>'index'), array('class'=>'user-link')); ?></li>
	    <li><?php echo $this->Html->link('About Us', array('controller'=>'users', 'action'=>'index'), array('class'=>'user-link')); ?></li>
	    <li><?php echo $this->Html->link('Contact Us', array('controller'=>'users', 'action'=>'index'), array('class'=>'user-link')); ?></li>
		<li><?php echo $this->Html->link('Log Out', array('controller'=>'users', 'action'=>'logout'), array('class'=>'user-link')); ?></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>