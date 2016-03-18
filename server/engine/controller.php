<?php
/*
	@
	@
	@
*/

class controller extends PublicVar{
	public $getModel;
	public $getCont;
	public $getView;
	public $getObj;
	function __construct($getURL,$contLink,$modelLink){
		if(file_exists($modelLink)){
			include($modelLink);
		}
		if(file_exists($contLink)){
			require($contLink);
			$view =new view($getURL);
		}
	}
}