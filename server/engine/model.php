<?php
/*


*/

class PublicModel{
	private $con;
	private $conmain;
	protected $sqlquery;
	protected $sqlquerymain;
	public $jsondata;
	//public $jsondata;
}
class model extends PublicModel{
	function __construct(){
		
	}
	public function connectDB(){
		$this->con=mysqli_connect(DB_HOST,DB_UNAME,DB_PWD,DB_NAME);
		if($this->con->connect_errno > 0){
			//die('Unable to connect to database' . $this->con->connect_error);
		}else{
			return $this->con;
		}
	}
	function query($sql){
		$this->sqlquery = mysqli_query($this->connectDB(),$sql);//or die(mysqli_error());
	}
	/*
	public function connectDBMAIN(){
		$this->conmain=mysqli_connect(DB_HOST_MAIN,DB_UNAME_MAIN,DB_PWD_MAIN,DB_NAME_MAIN);
		if($this->conmain->connect_errno > 0){
		}else{
			return $this->conmain;
		}
	}
	function query_main($sql){
		$this->sqlquerymain = mysqli_query($this->connectDBMAIN(),$sql);//or die(mysqli_error());
	}
	*/
	function mysqlError(){
		return mysqli_error($this->connectDB());
	}
	public function jsondata(){
		$this->jsondata =json_decode(file_get_contents('php://input'), true);
		return $jsondata;
	}
	
}