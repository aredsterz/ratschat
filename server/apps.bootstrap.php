<?php
/*
	@aredsterz framework ver.2 2016
*/
session_start();
include("config.php");
$DirClass  = "class/";
$class  = opendir($DirClass);
while (false !== ($fileclass = readdir($class))) {
	if (!in_array($fileclass,array(".",".."))){
		include $DirClass.$fileclass;
	}
}
$DirEngine  = "engine/";
$engine  = opendir($DirEngine);
while (false !== ($filename = readdir($engine))) {
	if (!in_array($filename,array(".",".."))){
		include $DirEngine.$filename;
	}
}
class PublicVar{
	public $connDB;
}
final class Aredsterz extends PublicVar{
	function __construct(){
		if(!empty(GETURL)){
			
			$modelLink ="model/model.".GETURL.".php";
			$contLink ="controller/cont.".GETURL.".php";
			$viewLink ="view/view.".GETURL.".php";
			
			$cont =new controller(GETURL,$contLink,$modelLink);
		}else{
			
		}	
	}
}
