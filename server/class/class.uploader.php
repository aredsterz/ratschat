<?php
/*
*	
*
*
*/

class Uploader{
	public $newfilename;
	function __construct(){
		
	}
	public function getFile($file,$type_filter){
		$file_name=$_FILES[$file]["name"];
		if($file_name !=""){
			if($type_filter!=""){
				$file_type=$_FILES[$file]["type"];
			
			}
			$file_created=time();
			$path = $_FILES[$file]['name'];
			$ext = pathinfo($path, PATHINFO_EXTENSION);
			$this->newfilename=$file_created.".".$ext;
			return "true";
		}else{
			return "false";
		}
		
	}
	public function MoveFile($file,$dir,$newfilename){
		$move_up=move_uploaded_file($_FILES[$file]["tmp_name"],$dir . $newfilename);
		if($move_up){
			return "true";
		}else{
			return "false";
		}
	}
	
}