<?php

class UsersController extends AppController {
	

	public $paginate = array(
		'limit' => 25,
		'conditions' => array('status' => '1'),
		'order' => array('User.username' => 'asc' ) 
		);
	
	public function beforeFilter() {
		parent::beforeFilter();
		$this->Auth->allow('login','add'); 
	}
	




	public function addArtiste()
	{
		if ($this->request->is('post')) {
			if (!empty($this->request->data))
			{
				if($this->User->addArtiste($this->request->data))
				{

					$this->Session->setFlash(__('The user has been saved'));
					return $this->redirect(array('action' => 'index'));

				}
				else
				{
					$this->Session->setFlash(
						__('The user could not be saved. Please, try again.')
						);
				}
			}
		}


		$this->render('regartiste');
	}


	public function login() {
		
		//if already logged-in, redirect
		if($this->Session->check('Auth.User')){
			$this->redirect(array('action' => 'index'));		
		}
		
		// if we get the post information, try to authenticate
		if ($this->request->is('post')) {

			if ($this->Auth->login()) {
				if ($this->Auth->user('role')=='manager') {
					$this->Session->setFlash(__('Welcome Manager, '. $this->Auth->user('username')));
					$this->redirect(array('action'=>'manager'));
				}

				
				if ($this->Auth->login()) {
					if ($this->Auth->user('role')=='artiste') {
						$this->Session->setFlash(__('Welcome Artiste, '. $this->Auth->user('username')));
						$this->redirect(array('action'=>'artiste'));
					}

					if ($this->Auth->user('role')=='master') {
						$this->Session->setFlash(__('Welcome admin, '. $this->Auth->user('username')));
						$this->redirect(array('action'=>'index'));
					}


					else {
						$this->Session->setFlash(__('Welcome, '. $this->Auth->user('username')));
						$this->redirect(array('action'=>'favourites'));
					}
				} else {
					$this->Session->setFlash(__('Invalid username or password'));
				}
			} 
		}
		
		$this->layout = 'homepage';
	}

	public function logout() {
		$this->redirect($this->Auth->logout());
	}

	public function index() {


		if ($this->Auth->user('role')=='master') {
			$this->paginate = array(
				'limit' => 6,
				'order' => array('User.username' => 'asc' )
				);
			$users = $this->paginate('User');
			$this->set(compact('users'));
		}
		if ($this->Auth->user('role')=='artiste') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'artiste'));
		}

		if ($this->Auth->user('role')=='fan') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'favourites'));
		}

		if ($this->Auth->user('role')=='manager') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'manager'));
		}		
	}
	
	public function favourites() {
		if ($this->Auth->user('role')=='artiste') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'artiste'));
		}


		if ($this->Auth->user('role')=='manager') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'manager'));
		}
	}
	
	public function artiste() {

		if ($this->Auth->user('role')=='fan') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'favourites'));
		}

		if ($this->Auth->user('role')=='manager') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'manager'));
		}
	}
	
	public function manager() {
	if ($this->Auth->user('role')=='artiste') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'artiste'));
		}

		if ($this->Auth->user('role')=='fan') {
			$this->redirect(array( 'controller'=>'users', 'action'=>'favourites'));
		}

	}


	public function add() {
		if ($this->request->is('post')) {

			$this->User->create();
			if ($this->User->save($this->request->data)) {
				$this->Session->setFlash(__('Congrats! You have registered'));
				if ($this->Auth->login()) {
					if ($this->Auth->user('role')=='manager') {
						$this->Session->setFlash(__('Welcome Manager, '. $this->Auth->user('username')));
						$this->redirect(array('action'=>'manager'));
					}


					if ($this->Auth->login()) {
						if ($this->Auth->user('role')=='artiste') {
							$this->Session->setFlash(__('Now Please Complete Your Profile '));
							$this->redirect(array( 'controller'=>'products', 'action'=>'add_product'));
						}

						if ($this->Auth->user('role')=='master') {
							$this->Session->setFlash(__('Welcome admin, '. $this->Auth->user('username')));
							$this->redirect(array('action'=>'index'));
						}


						else {
							$this->Session->setFlash(__('Welcome, '. $this->Auth->user('username')));
							$this->redirect(array('action'=>'favourites'));
						}
					} else {
						$this->Session->setFlash(__('Invalid username or password'));
					}
				} 
				//$this->redirect(array('action' => 'login'));
			} else {
				$this->Session->setFlash(__('You could not register, please try again'));
			}	
		}
	}

	public function edit($id = null) {

		if (!$id) {
			$this->Session->setFlash('Please provide a user id');
			$this->redirect(array('action'=>'index'));
		}

		$user = $this->User->findById($id);
		if (!$user) {
			$this->Session->setFlash('Invalid User ID Provided');
			$this->redirect(array('action'=>'index'));
		}

		if ($this->request->is('post') || $this->request->is('put')) {
			$this->User->id = $id;
			if ($this->User->save($this->request->data)) {
				$this->Session->setFlash(__('The user has been updated'));
				$this->redirect(array('action' => 'edit', $id));
			}else{
				$this->Session->setFlash(__('Unable to update your user.'));
			}
		}

		if (!$this->request->data) {
			$this->request->data = $user;
		}
	}

	public function delete($id = null) {
		
		if (!$id) {
			$this->Session->setFlash('Please provide a user id');
			$this->redirect(array('action'=>'index'));
		}
		
		$this->User->id = $id;
		if (!$this->User->exists()) {
			$this->Session->setFlash('Invalid user id provided');
			$this->redirect(array('action'=>'index'));
		}
		if ($this->User->saveField('status', 0)) {
			$this->Session->setFlash(__('User deleted'));
			$this->redirect(array('action' => 'index'));
		}
		$this->Session->setFlash(__('User was not deleted'));
		$this->redirect(array('action' => 'index'));
	}
	
	public function activate($id = null) {
		
		if (!$id) {
			$this->Session->setFlash('Please provide a user id');
			$this->redirect(array('action'=>'index'));
		}
		
		$this->User->id = $id;
		if (!$this->User->exists()) {
			$this->Session->setFlash('Invalid user id provided');
			$this->redirect(array('action'=>'index'));
		}
		if ($this->User->saveField('status', 1)) {
			$this->Session->setFlash(__('User re-activated'));
			$this->redirect(array('action' => 'index'));
		}
		$this->Session->setFlash(__('User was not re-activated'));
		$this->redirect(array('action' => 'index'));
	}

}

?>