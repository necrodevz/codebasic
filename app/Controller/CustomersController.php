<?php

class CustomersController extends AppController {

  public function index()  {
  }
  
  public function add()  {
	if ($this->request->is('post')) {
 if (!empty($this->request->data)) {
  $this->Customer->create();
  $this->Customer->save($this->request->data['post']);
   $this->Session->setFlash(__('Customer Has Been Added'));
 }
}
  }
  
}

?>