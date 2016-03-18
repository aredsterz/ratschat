<?php
/*
	@Auth from client apps
	@
	@
*/
class logout extends ModelLogout{
	function __construct(){
		$data = json_decode(file_get_contents('php://input'), true);
		if(isset($data)){
			$uid		=trim(addslashes($data["uid"]));
			$this->logout($uid);
		}else{
			echo json_encode(array('response' => false, "error" => "505: Internal server error."));
		}
		
		
		
	}
	
}