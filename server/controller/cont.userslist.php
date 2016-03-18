<?php
/*
	@Auth from client apps
	@
	@
*/
class userslist extends ModelUserslist{
	function __construct(){
		$data=json_decode(file_get_contents('php://input'), true);
		
		if(isset($data)){
			$uid			=trim(addslashes($data["uid"]));
			$token			=trim(addslashes($data["token"]));
			
			if($this->tokencheck()){
				if(isset($_GET['list'])){
					$finduser			=trim(addslashes($data["finduser"]));
					$this->jsondata =$this->listall($uid,$finduser);
				}
				if(isset($_GET['detail'])){
					$this->jsondata =$this->detail($uid);
				}
			}else{
				//echo json_encode(array('response' => false,"session" => false, "error" => "Session Expired"));
				$this->jsondata =array('response' => false,"session" => false, "error" => "Session Expired");
			}	
			
		}else{
			//echo json_encode(array('response' => false,"session" => "", "error" => "Json Error"));
			$this->jsondata =array('response' => false,"session" => "", "error" => "Json Error");
		}
	}
	
}