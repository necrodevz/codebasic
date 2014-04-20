<?php


class OrdersController extends AppController {
var $uses = array('Product');

      public function index()  {
		$order_details = $this->Product->Order->find('all');
	    $this->set('order_details', $order_details);
	  }
	  
	    	    public function add()  {
			$customers = $this->Order->Customer->find('list', array(
        'fields' => array('Customer.first_name')
    ));

			$products = $this->Order->Product->find('list', array(
        'fields' => array('Product.name')
    ));
	
	

	
	$this->set('customers', $customers);
	$this->set('products', $products);
	if ($this->request->is('post')) {
 if (!empty($this->request->data)) {
  $this->Order->create();
  $this->Order->save($this->request->data['post']);
   $this->Session->setFlash(__('Product Has Been Added'));
 }
}
  }
}