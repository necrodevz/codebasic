<?php

class Image extends AppModel  {
    
	public $belongsTo = array('Product' => array(
            'className' => 'Product',
            'foreignKey' => 'product_id'
        ));
     
}