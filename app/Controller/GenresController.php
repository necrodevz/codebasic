<?php

class GenresController extends AppController {

        public function add() {
	if ($this->request->is('post')) {
 if (!empty($this->request->data)) {
  $this->Genre->create();
  $this->Genre->save($this->request->data['post']);
  $this->Session->setFlash(__('Category Has Been Added'));
 }
} 
    }
	
	

}