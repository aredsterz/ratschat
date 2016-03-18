<?php
/*
	@Auth from client apps
	@
	@
*/
class ModelUserslist extends model{
	function __construct(){
	}
	protected function tokencheck($uid,$token){
		$this->query("SELECT token_key FROM rats_authsession WHERE uid='$uid'");
		$row=mysqli_fetch_assoc($this->sqlquery);
		$tkn =$row['token_key'];
		if($tkn==$token){
			return true;
		}else{
			return false;
		}	
		
	}
	protected function listall($uid,$finduser){	
		$sqlsel="
		SELECT 
			ru.uid,
			ru.username,
			rp.email,
			rp.favquote,
			rp.about,
			'".SERVER_PATH."storage/userimage/' AS imagepath,
			rp.image
		FROM 
		rats_user ru
		LEFT JOIN	rats_profile rp ON  ru.uid = rp.uid
		WHERE 
			ru.uid <> '$uid' 
		AND
			ru.username LIKE '$finduser%'
		ORDER BY 
			ru.username
		";
		$this->query($sqlsel);
		$json = array();
		if($this->sqlquery){
			$num =mysqli_num_rows($this->sqlquery);
			if(!empty($num)){
				while($row=mysqli_fetch_assoc($this->sqlquery)){
					$json[] = $row;
				}
				//echo json_encode(array("response" => true,"ratslist" =>$json));
				return array("response" => true,"ratslist" =>$json);
			}else{
				//echo json_encode(array("response" => true,"nodata"=>true));
				return array("response" => true,"nodata"=>true);
			}
		}else{
			//echo json_encode(array("response" => false,"session" => true, "error" =>"SQL 2 Error"));
			return array("response" => false,"session" => true, "error" =>"SQL 2 Error");
		}
		
		
	}
	protected function detail($uid){
		$sqlsel="
		SELECT 
			ru.uid,
			ru.username,
			rp.email,
			rp.favquote,
			rp.about,
			'".SERVER_PATH."storage/userimage/' AS imagepath,
			rp.image
		FROM 
		rats_user ru
		LEFT JOIN	rats_profile rp ON  ru.uid = rp.uid
		WHERE 
			ru.uid = '$uid' 
		";
		$this->query($sqlsel);
		$json = array();
		if($this->sqlquery){
			$num =mysqli_num_rows($this->sqlquery);
			if(!empty($num)){
				while($row=mysqli_fetch_assoc($this->sqlquery)){
					$json[] = $row;
				}
				//echo json_encode(array("response" => true,"ratdetail" =>$json));
				return array("response" => true,"ratdetail" =>$json);
			}else{
				//echo json_encode(array("response" => true,"nodata"=>true));
				return array("response" => true,"nodata"=>true);
			}
		}else{
			//echo json_encode(array("response" => false,"session" => true, "error" =>"SQL 2 Error"));
			return array("response" => false,"session" => true, "error" =>"SQL 2 Error");
		}
	}
}

