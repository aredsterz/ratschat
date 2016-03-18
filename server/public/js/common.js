/*
	PAGE ID			: common.js
	AUTHORITY		: 
	EXPLANATION		: Contains common use JS function
	CREATION DATE 	: 2014/09/15
	=====================================================================================================
	HISTORY
	=====================================================================================================
	Date			Author				Reason
	-----------------------------------------------------------------------------------------------------
*/
/*-------------------------------------------------------------------
//	Function name 	: fncReturnDate
//	parameter		: id	= date field id
//	Description		: Set standard date to date input field
//------------------------------------------------------------------*/
function fncReturnDate(id){
	if(document.getElementById(id).value != ''){
		//Get today's date
		tdate = new Date();
		var tday = tdate.getDate();
		var tmonth = tdate.getMonth() + 1;
		var tyear = tdate.getFullYear();
		
		var dateVal = document.getElementById(id).value;
		
		if(tday<10){
			tday='0'+tday;
		} 
		
		if(tmonth<10){
			tmonth='0'+tmonth;
		}

		//If number only
		if(isInteger(dateVal)){
			if(dateVal.length == 1){
				if(dateVal<10){
					tday='0'+dateVal;
				}else{
					tday = dateVal;
				}
			}else if(dateVal.length == 2){
				tday = dateVal;
			}else if(dateVal.length == 3){
				tmonth = '0' + dateVal.substring(0, 1);
				tday   = dateVal.substring(1, 3);
			}else if(dateVal.length == 4){
				tmonth = dateVal.substring(0, 2);
				tday   = dateVal.substring(2, 4);
			}else if(dateVal.length == 6){
				tyear  = '20' + dateVal.substring(0, 2);
				tmonth = dateVal.substring(2, 4);
				tday   = dateVal.substring(4, 6);				
			}else if(dateVal.length == 8){
				tyear  = dateVal.substring(0, 4);
				tmonth = dateVal.substring(4, 6);
				tday   = dateVal.substring(6, 8);
			}else{
				return false;
			}
		
		//With slash
		}else{
			
			//with 2 slash
			if((dateVal.match(/\//g) || []).length == 2){

				var datearr = dateVal.split("/");
				
				//year
				if(datearr[0].length == 2){
					datearr[0]='20'+datearr[0];
				}
				
				//month
				if(datearr[1].length == 1){
					datearr[1]='0'+datearr[1];
				}
				
				//day
				if(datearr[2].length == 1){
					datearr[2]='0'+datearr[2];
				}
				
				tyear  = datearr[0];
				tmonth = datearr[1];
				tday   = datearr[2];
			
			//only with 1 slash
			}else if((dateVal.match(/\//g) || []).length == 1){
			
				var datearr = dateVal.split("/");
				
				if(datearr[0].length == 1){
					datearr[0]='0'+datearr[0];
				}
				
				if(datearr[1].length == 1){
					datearr[1]='0'+datearr[1];
				}
				
				tmonth = datearr[0];
				tday   = datearr[1];
			
			}else{
				return false;
			}
		}
		
		//Check is a valid date or not
		if(fnc_datechk(tyear + '/' + tmonth + '/' + tday)){
			document.getElementById(id).value = tyear + '/' + tmonth + '/' + tday ;
		}else{
			return false;
		}
	}else{
		return false;
	}
}

//-------------------------------------------------------------------
//	Function name 	: fncReturnYearMonth
//	parameter		: id	= date field id
//	Description		: Set standard date to date input field
//-------------------------------------------------------------------
function fncReturnYearMonth(id){
	
	if(document.getElementById(id).value != ''){
		//Get current
		tdate = new Date();
		var err=1;
		var tyear = tdate.getFullYear();
		
		var dateVal = document.getElementById(id).value;
		
		//If number only
		if(isInteger(dateVal)){
			if(dateVal.length == 1){
				if(dateVal<10){
					tmonth='0'+dateVal;
				}else{
					tmonth = dateVal;
				}
			}else if(dateVal.length == 2){
				tmonth = dateVal;
			}else if(dateVal.length == 3){
				tmonth = '0' + dateVal.substring(3, 2);
				tyear  = '20' + dateVal.substring(0, 2);
			}else if(dateVal.length == 4){
				tmonth = dateVal.substring(4, 2);
				tyear  = '20' + dateVal.substring(0, 2);
			}else if(dateVal.length == 5){
				tmonth = '0' + dateVal.substring(5, 4);
				tyear  = dateVal.substring(0, 4);				
			}else if(dateVal.length == 6){
				tmonth = dateVal.substring(6, 4);
				tyear  = dateVal.substring(0, 4);
			}else{
				return false;
			}
		
		//With slash
		}else{
			//with 1 slash
			if((dateVal.match(/\//g) || []).length == 1){
			
				var datearr = dateVal.split("/");
				
				if(datearr[0].length == 2){
					datearr[0]='20'+datearr[0];
				}
				
				if(datearr[1].length == 1){
					datearr[1]='0'+datearr[1];
				}
				
				tyear   = datearr[0];
				tmonth = datearr[1];
			}else{
				return false;
			}
		}
		
		for(var month=1;month<=12;month++){
			var pad = '0';
			if(month<10){
				var month=pad + month;
			}
			if(tmonth==month){
				err=0;
			}
		}
		if(err==0){
			document.getElementById(id).value = tyear + '/' + tmonth ;
		}else{
			return false;
		}
		
		
	}else{
		return false;
	}
}
//-------------------------------------------------------------------
//	Function name 	: addThousandsSeparator
//	Parameter		: value = input field number
//	Description		: Format value into number format (999,999,999)
//-------------------------------------------------------------------
function addThousandsSeparator(value) {
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}
	 
//-------------------------------------------------------------------
//	Function name 	: fncNumberFormat
//	parameter		: id	= number field id
//					  descp = number of decimal places
//	Description		: return number with thousand separator and decimal
//-------------------------------------------------------------------
function fncNumberFormat(id,decp) {	
	//if(document.getElementById(id).value.trim() != ''){
	if(document.getElementById(id).value != ''){
	
		//var numVal = document.getElementById(id).value.trim().replace(/,/g , "");
		var numVal = document.getElementById(id).value.replace(/,/g , "");
		
		if((numVal.match(/\./g) || []).length == 0){
		
			if(isInteger(numVal)){
				numVal = parseFloat(numVal);
				document.getElementById(id).value = addThousandsSeparator(numVal.toFixed(decp));
			}else{
				document.getElementById(id).value = '';
				return false;
			}
		
		}else if((numVal.match(/\./g) || []).length == 1){
			
			var numarr = numVal.split(".");
			
			if(isInteger(numarr[0]) && isInteger(numarr[1])){
				numVal = parseFloat(numVal);
			
				document.getElementById(id).value = addThousandsSeparator(numVal.toFixed(decp)); 
			}else{
				document.getElementById(id).value = '';
				return false;
			}
		
		}else{
			document.getElementById(id).value = '';
			return false;
		}
		
	}else{
		document.getElementById(id).value = '';
		return false;
	}

}

//-------------------------------------------------------------------
//	Function name 	: isInteger
//	parameter		: x	= value
//	Description		: return true or false for parsed value is interger or not
//-------------------------------------------------------------------
function isInteger(x) {
	return x % 1 === 0;
}

//-------------------------------------------------------------------
//	Function name 	: fnc_datechk
//	parameter		: date = final date format
//	Description		: Check date format
//-------------------------------------------------------------------
 function fnc_datechk(v_check){
	var v_year, v_s1, v_month, v_s2, v_day;

	if (v_check.length == 0) {
		var err=0;
		return;
	}
	
	if (v_check.length < 8 || v_check.length > 10){
		err=1
	}
	
	if (v_check.length == 8) {// (yyyy/m/d)

		v_year = v_check.substring(0, 4)// year
		v_s1 = v_check.substring(4, 5)// '/'
		v_month = v_check.substring(5, 6)// month
		v_s2 = v_check.substring(6, 7)// '/'
		v_day = v_check.substring(7, 8)// day
	}else if (v_check.length == 9) {
		if (v_check.substring(6, 7) == '/'){ // (yyyy/m/dd)
			v_year = v_check.substring(0, 4)// year
			v_s1 = v_check.substring(4, 5)// '/'
			v_month = v_check.substring(5, 6)// month
			v_s2 = v_check.substring(6, 7)// '/'
			v_day = v_check.substring(7, 9)// day
		}else {// (yyyy/mm/d)
			v_year = v_check.substring(0, 4)// year
			v_s1 = v_check.substring(4, 5)// '/'
			v_month = v_check.substring(5, 7)// month
			v_s2 = v_check.substring(7, 8)// '/'
			v_day = v_check.substring(8, 9)// day
		}
	}else if (v_check.length == 10) {// (yyyy/mm/dd)
		v_year = v_check.substring(0, 4)// year
		
		v_s1 = v_check.substring(4, 5)// '/'
		v_month = v_check.substring(5, 7)// month
		v_s2 = v_check.substring(7, 8)// '/'
		v_day = v_check.substring(8, 10)// day
	}
	
	//basic error checking
	if (v_month < 1 || v_month > 12) err = 1
	if (v_s1 != '/') err = 1
	if (v_day < 1 || v_day > 31) err = 1
	if (v_s2 != '/') err = 1
	if (v_year < 1900 || v_year > 2999) err = 1
	if (isNaN(v_year)) err = 1
	if (isNaN(v_month)) err = 1
	if (isNaN(v_day)) err = 1
	
	//advanced error checking
	// months with 30 days
	if (v_month==4 || v_month==6 || v_month==9 || v_month==11) {
		if (v_day==31) err=1
	}

	// february, leap year
	if (v_month==2){
		// feb
		if (v_day>29) err=1
		if (v_day==29 && ((v_year/4)!=parseint(v_year/4))) err=1
	}

	if (err==1){
		return false;
	}
	
	return true;
}

//-------------------------------------------------------------------
//	Function name 	: fnc_action
//	parameter		: inVal = value ,formId =form id
//	Description		: submit form
//-------------------------------------------------------------------
function fnc_action(inVal) {	
	document.getElementById("f_h_action").value = inVal;
	document.form_action.submit();
}


//-------------------------------------------------------------------
//	Function name 	: remove comma 
//	parameter		: numVal
//	Description		: clear all comma on number
//-------------------------------------------------------------------
 function fnc_removeComa(numVal) {
		return(numVal.replace(/,/g,''));
	}
//-------------------------------------------------------------------
//	Function name 	: readonly
//	parameter		: disable readonly
//	Description		: clear all focus
//-------------------------------------------------------------------
$( document ).ready(function() {
	$( ".readonly" ).click(function() {
	  $( ".readonly" ).blur();
	});
	
});

//-------------------------------------------------------------------
//	Function name 	: clear code
//	parameter		: clear value for other field if selected field clear
//	Description		: clear value
//-------------------------------------------------------------------
//--- 
function fnc_clear(id0,id1){
	var id0 =document.getElementById(id0).value;
	if(id0 ==''){
		document.getElementById(id1).value='';
	}
}
function fnc_clear2(e,ID){
	var key=e.keyCode || e.which;
	if(key ==8 || key==46){
		document.getElementById(ID).value='';
	}
}

//-------------------------------------------------------------------
//	Function name 	: fncRemoveComma
//	parameter		: val	= input value
//	Description		: Remove comma.
//-------------------------------------------------------------------
function fncRemoveComma(val) {
	return val.replace(/,/g, "");
}

//NUMBER(3,1)
function fnc_decp(val,id,e){
	var key=e.keyCode || e.which;
	var v_num=val.substring(0, 3);
	if((key !=8 ||key !=46) &&val.indexOf('.') == -1){
		if (v_num.length > 2) {
			PRIVAL =v_num.substring(0, 2);
			DEC =v_num.substring(2, v_num.length);
			v_num =PRIVAL+'.'+DEC;
		}
		else if (v_num.length < 3) {
			PRIVAL =v_num.substring(0, 2);
			DEC =v_num.substring(2, v_num.length);
			v_num =PRIVAL+'.'+0;
		}
		return $('#'+id).val(v_num);
	}
	
}






