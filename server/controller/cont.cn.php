<?php
/*
	@Auth from client apps
	@
	@
*/
class cn extends ModelCn{
	function __construct(){
		$this->GetCountry();
		if(!empty($this->record)){
			$this->jsondata =array('success' => true,'msg' => 'Get All Message succesfully.', 'response' => $this->dataArray);
		}
		//echo json_encode(array('success' => true,'msg' => 'Get All Message succesfully.', 'response' => $this->dataArray));
	}
	
}