<?php
/*
	@Auth from client apps
	@
	@
*/
class ModelCn extends model{
	public $dataArray;
	function __construct(){
	}
	protected function GetCountry(){
		$sql = "SELECT country_code,country_name FROM `apps_countries`";
		$q= $this->query($sql);
		$this->record= mysqli_num_rows($this->sqlquery);
		$json = array();
		while($row=mysqli_fetch_assoc($this->sqlquery)){
			$json[] = $row;
		}
		$this->dataArray=$json;
	}
}

