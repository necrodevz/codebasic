<?php

class StreamsController extends AppController {


        public function add() {
	if ($this->request->is('post')) {
 if (!empty($this->request->data)) {
  $this->Stream->create();
  $this->Stream->save($this->request->data['post']);
 }
} 

$this->layout='test';
    }
	
	
	   public function index()  {
		 $streams = $this->Stream->find('all');
		 $this->set('streams', $streams);
	     $this->layout = 'regular';
	   }
	   
	   public function ondemand()  {
	     $this->loadModel('Product');
		 $products = $this->Product->find('all');
		 $this->set('streams', $products);
	     
	   }
	   
	   
	   public function item()  {
	   }
	   
	   public function schedule() {
	   }
}