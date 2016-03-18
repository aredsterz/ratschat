<?php
ini_set('display_errors',0);
ini_set('display_startup_errors',0);
error_reporting(0);
//--------------------------
define("PREFIX","rats_");
define("DB_NAME","ratschat");
define("DB_HOST","127.0.0.1");
define("DB_UNAME","root");
define("DB_PWD","ared4039");
define("SERVER_PATH","http://".$_SERVER['HTTP_HOST']."/ratschat/server/");
$v_getUrl 	=isset($_GET['url']) ? $_GET['url'] : "login";
define("GETURL",strtolower($v_getUrl));
$v_action =isset($_POST['f_h_action']) ? $_POST['f_h_action'] : "init";
define("ACTION",$v_action);


define("GOOGLEURL","https://www.google.com/maps/embed/v1/directions");
define("APIKEY","");


