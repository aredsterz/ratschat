<?php
/*
	@Auth from client apps
	@
	@
*/
class ModelLogout extends model{
	public $querydata;
	public $fetch;
	protected $record;
	function __construct(){
		
	}
	protected function logout($uid){
		$this->query("DELETE FROM rats_authsession WHERE uid='$uid'");
		//echo json_encode(array('response' => true, "msg"=>"Successfully Logout."));
	}
}

