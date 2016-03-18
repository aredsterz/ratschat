<?php
/*


*/
class PublicView{
	public $dispName;
	public $data;
}
class view{
	//public $getUrl;
	function __construct($getURL){
		$data =new $getURL();
		//--json
		if(isset($_GET['json'])){
			if (isset($_SERVER['HTTP_ORIGIN'])) {
				header('Access-Control-Allow-Headers: *');
				header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
				header('Access-Control-Allow-Credentials: true');
				header('Access-Control-Max-Age: 86400');    // cache for 1 day
			}
			if(!empty($data->jsondata)){
				echo json_encode($data->jsondata);
			}else{
				echo "<h1>Cannot access directly from json.</h1>";
			}
		}else{
		//--web
			if(file_exists('view/view.header.php'))require "view/view.header.php";
			if(file_exists('view/view.".$getURL.".php'))require "view/view.".$getURL.".php";
			if(file_exists('view/view.footer.php'))require "view/view.footer.php";
		}
	}
}
