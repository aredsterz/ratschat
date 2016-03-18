<?php
/*
	@Auth from client apps
	@
	@
*/
class a extends ModelAuth{
	public $v_record;
	public $v_msg;
	public $v_notiClass;
	function __construct(){
		
		$_unm			=isset($_POST["u_uname"]) ? $_POST["u_uname"] :null;
		$_pwd			=isset($_POST["u_pwd"]) ? $_POST["u_pwd"] :null;
		echo "{'TEST':'TEST'}";
	}
	
}