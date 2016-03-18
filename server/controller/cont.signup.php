<?php
/*
	@Auth from client apps
	@
	@
*/
class signup extends ModelSignup{
	public $v_record;
	public $v_msg;
	public $v_notiClass;
	function __construct(){
		$data=json_decode(file_get_contents('php://input'), true);
		if(isset($data)){
			$u_name			=trim(addslashes($data["u_name"]));
			$u_email		=trim(addslashes($data["u_email"]));
			$u_pwd			=trim(addslashes($data["u_pwd"]));
			$u_gnd			=trim(addslashes($data["u_gnd"]));
			$u_cn			=trim(addslashes($data["u_cn"]));
			if($u_name!=null){
				$this->jsondata =$this->Reguser($u_name,$u_email,$u_pwd,$u_gnd,$u_cn);
			}else{
				//echo json_encode(array('response' => false, "error" => "Post Error:$u_lnm"));
				$this->jsondata =array('response' => false, "error" => "Post Error");
			}
		}else{
			//echo json_encode(array('response' => false, "error" => "Json Error"));
			$this->jsondata =array('response' => false, "error" => "Json Error");
		}
		
	}
	
}