<?php
/*
	@Auth from client apps
	@
	@
*/
class ModelAuth extends model{
	public $querydata;
	public $fetch;
	protected $record;
	function __construct(){
	}
	protected function Getuser($v_uname,$v_password){
		$sql = "SELECT pwd_salt FROM `rats_user` WHERE username='$v_uname'";
		$this->query($sql);
		$record= mysqli_num_rows($this->sqlquery);
		if(!empty($record)){
			$fetch=mysqli_fetch_assoc($this->sqlquery);
			$pwd_salt 	= $fetch['pwd_salt'];
			$v_password =md5($v_password.$pwd_salt);
			$sql = "SELECT uid FROM `rats_user` WHERE username='$v_uname' AND pwd_enc='$v_password'";
			$q= $this->query($sql);
			$record= mysqli_num_rows($this->sqlquery);
			if(!empty($record)){
				$fetch=mysqli_fetch_assoc($this->sqlquery);
				$uid = $fetch['uid'];
				$login_token=md5(time());
				$this->query("DELETE FROM rats_authsession WHERE uid='$uid'");
				$this->query("INSERT INTO `rats_authsession`(`uid`, `token_key`, `datetime`) VALUES ('$uid','$login_token',now())");
				//echo json_encode(array('response' => true, "uid" => $uid , "token" => $login_token));
				return array('response' => true, "uid" => $uid , "token" => $login_token);
			}else{
				//echo json_encode(array('response' => false, "error" => "Wrong username and password."));
				return array('response' => false, "error" => "Wrong username and password.");
			}
		}else{
			//echo json_encode(array('response' => false, "error" => "Username not exists."));
			return array('response' => false, "error" => "Username not exists.");
		}
	}
}

