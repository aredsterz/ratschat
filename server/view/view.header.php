
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>GOBRO</title>

     <!-- Bootstrap Core CSS -->
    <link href="public/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

	<?php  if(GETURL=="login"){ ?>
	
	  <!-- Bootstrap core CSS -->
    <link href="public/css/bootstrap.min.css" rel="stylesheet">
	<?php }else{?>
    
    <!-- MetisMenu CSS -->
    <link href="public/bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Timeline CSS -->
    <link href="public/dist/css/timeline.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="public/dist/css/sb-admin-2.css" rel="stylesheet">

    <!-- Morris Charts CSS -->
    <link href="public/bower_components/morrisjs/morris.css" rel="stylesheet">
    
    <!--Requirement jQuery-->
	<script type="text/javascript" src="public/js/jquery.js"></script>
      
    <!-- Calendar CSS -->
    <link href="public/css/datepicker.css" rel="stylesheet">
	<script src="public/js/datepicker.js"></script>
    <!-- Custom Fonts -->
    <link href="public/bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<link rel="stylesheet" href="public/css/w2ui-1.4.3.css">
	<?php }?>
    <!-- Custom CSS -->
    <link href="public/css/custom.css" rel="stylesheet">
	
	<script src="public/js/common.js"></script>
	
  </head>

  <body>
<?php  if(GETURL=="login"){?>
    <div class="container">
    <div id="page-wrapper">
<?php }else{ ?>
	<div id="wrapper">
	<?php include("view/view.menu.php"); ?>
	<div id="page-wrapper">
<?php  }?>