<?php

class Product extends AppModel {

	public $hasMany = array('Image', 'Comment');
	public $belongsTo = array(
	        'Genre'=> array(
			'foreignkey'=> 'genre_id'
			),
			
			'Rating' => array(
			'foreignkey' => 'rating_id'
			));

	/*public $validate = array(
        'name' => array(
            'nonEmpty' => array(
                'rule' => array('notEmpty'),
                'message' => 'A stage name is required',
				'allowEmpty' => false
            ),
			 'unique' => array(
				'rule'    => array('isUniqueUsername'),
				'message' => 'This stage name is already in use'
			),
        ),
		
        'user_id' => array(
            'nonEmpty' => array(
                'rule' => array('notEmpty'),
                'message' => 'You need to enter the artiste real name',
				'allowEmpty' => false
            ),
			 'unique' => array(
				'rule'    => array('isUniqueUsername'),
				'message' => 'This name already have an account'
			),
        ),
		
        'summary' => array(
            'nonEmpty' => array(
                'rule' => array('notEmpty'),
                'message' => 'You need to enter a description',
				'allowEmpty' => false
            ),
        ),
		
        'role_model' => array(
            'nonEmpty' => array(
                'rule' => array('notEmpty'),
                'message' => 'You need to enter a role model',
				'allowEmpty' => false
            ),
        ),
		
        'summary' => array(
            'nonEmpty' => array(
                'rule' => array('notEmpty'),
                'message' => 'You need to enter a description',
				'allowEmpty' => false
            ),
        ),
		
        'fav_song' => array(
            'nonEmpty' => array(
                'rule' => array('notEmpty'),
                'message' => 'You need to enter a favourite song',
				'allowEmpty' => false
            ),
        ),
		
        'genre_id' => array(
            'nonEmpty' => array(
                'rule' => array('notEmpty'),
                'message' => 'You need to select your music genre',
				'allowEmpty' => false
            ),
        ));*/
        

}

