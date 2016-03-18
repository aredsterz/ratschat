<?php
/*
	@Auth from client apps
	@
	@
*/
class auth extends ModelAuth{
	public $v_record;
	public $v_msg;
	public $v_notiClass;
	function __construct(){
		$data = json_decode(file_get_contents('php://input'), true);
		if(isset($data)){
			$u_uname		=trim(addslashes($data["u_uname"]));
			$u_pwd			=trim(addslashes($data["u_pwd"]));
			$this->jsondata =$this->Getuser($u_uname,$u_pwd);
		}else{
			//echo json_encode(array('response' => false, "error" => "505: Internal server error."));
			$this->jsondata =array('response' => false, "error" => "505: Internal server error.");
		}
	}
	
}