<?php

class ProductsController extends AppController {

var $uses = array('User','Product');
	public function beforeFilter() {
		parent::beforeFilter();
		$this->Auth->allow('index','item'); 
	}

  public function index()  {
  }

//for the manager
  public function add_product() {
    $genres = $this->Product->Genre->find('list', array(
      'fields' => array('Genre.name')
      ));

    $lstname = $this->User->find('list', array('fields' => array('User.id','User.username')));
    $this->set('genres', $genres);
    $this->set('lstname', $lstname);

    if ($this->request->is('post')) {
      if (!empty($this->request->data)) {

        $this->Product->create();
        $this->Product->save($this->request->data);
        $this->Session->setFlash(__('Product Has Been Added'));

      }
    } 

  }

  public function add() {



   $genres = $this->Product->Genre->find('list', array(
    'fields' => array('Genre.name')
    ));
   $this->set('genres', $genres);

   if ($this->request->is('post')) {
     if (!empty($this->request->data)) {

      $this->Product->create();
      $this->Product->save($this->request->data);
      $this->Session->setFlash(__('Product Has Been Added'));

    }
  } 
}



public function item($id = null) {

  if (!$id) {
    throw new NotFoundException(__('product not found'));
  }

  $items = $this->Product->findById($id);


  if (!$items) {
    throw new NotFoundException(__('Invalid post'));
  }
  $this->set('item', $items);

}


public function add_rating()  {

	if ($this->request->is('post')) {
   if (!empty($this->request->data)) {
    $this->Product->Rating->create();
    $this->Product->Rating->save($this->request->data['post']);
    $this->Session->setFlash(__('Rating Has Been Added'));

  }
}	

}



}