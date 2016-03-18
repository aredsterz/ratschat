<?php
/*
	@Auth from client apps
	@
	@
*/
class ModelSignup extends model{
	public $dataArray;
	function __construct(){
	}
	protected function Reguser($u_name,$u_email,$u_pwd,$u_gnd,$u_cn){
		$salt =substr(base64_encode(rand()),1,6);
		$u_pwd=md5($u_pwd.$salt);
		
		$sql = "
		INSERT INTO 
			`rats_user`
		(
			 `username`
			, `pwd_salt`
			, `pwd_enc`
			, `pwd_last_update`
			, `user_level`
			, `status`
			, `last_login`
			, `register_time`
			, `update_time`
		) 
		VALUES 
		(
			'$u_name'
			,'$salt'
			,'$u_pwd'
			,now()
			,'2'
			,'1'
			,null
			,now()
			,null
		)
		";
		$q= $this->query($sql);
		if($this->sqlquery){
			
			$sqlsel="SELECT max(uid) as uid FROM rats_user";
			$this->query($sqlsel);
			$row=mysqli_fetch_assoc($this->sqlquery);
			$uid =$row['uid'];
			$sql2 = "
			INSERT INTO 
				`rats_profile`
			(
				`uid`
				, `firstname`
				, `gender`
				, `email`
				, `country`
				, `update_date`
			) VALUES (
				'$uid'
				, '$u_name'
				, '$u_gnd'
				, '$u_email'
				, '$u_cn'
				, now()
			)
			";
			$q2= $this->query($sql2);
			
			if($this->sqlquery){
				$login_token=md5(time());
				$this->query("DELETE FROM rats_authsession WHERE uid='$uid'");
				$this->query("INSERT INTO `rats_authsession`(`uid`, `token_key`, `datetime`) VALUES ('$uid','$login_token',now())");
				//echo json_encode(array("response" => true,"uid" => "$uid" , "token" => $login_token));
				return array("response" => true,"uid" => "$uid" , "token" => $login_token);
			}else{
				//echo json_encode(array("response" => false,"error" =>"SQL 2 Error"));
				return array("response" => false,"error" =>"SQL 2 Error");
			}
		}else{
			//echo json_encode(array('response' => false, "error" => "SQL 1 Error"));
			return array('response' => false, "error" => "SQL 1 Error");
		}
		
	}
}

