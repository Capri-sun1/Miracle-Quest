<?php

	$file = 'data/my_data.json';
   $values = json_decode($_POST['value']);
   $prods = json_decode($_POST['prod']);
   

   if( file_exists($file) ){

   		$data = json_decode( file_get_contents( $file ), TRUE );

   		
   			if( $data['value'] === null || $data['value'] === 0 ) {
   				$data['value']= 100;
   				$data['prod'] = 1.0;
   			}
   			else {
   				if( $values != null ) {
   					$data['value'] = $values;
   					$data['prod'] = $prods;
   				}
   			}
			file_put_contents( $file, json_encode($data));
		}
	
	
	else {
		$data = array(
			'value' => 100,
			'prod' => 1.0
		);

		file_put_contents( $file, json_encode($data));
	}

?>