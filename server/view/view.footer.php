
	</div><!-- /wrapper -->
	</div><!-- /wrapper -->

	
	<!-- jQuery -->
    <script src="public/bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="public/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="public/bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- DataTables JavaScript -->
    <script src="public/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
    <script src="public/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>
	<!-- Page-Level Demo Scripts - Tables - Use for reference -->
    <script>
    $(document).ready(function() {
        $('#dataTables-example').DataTable({
                responsive: true
        });
    });
    </script>
    <!-- Custom Theme JavaScript -->
    <script src="public/dist/js/sb-admin-2.js"></script>
	 
    <script src="public/js/chain.js"></script>
	<script type="text/javascript" src="public/js/w2ui-1.4.3.js"></script>
     <!--IE10 viewport hack for Surface/desktop Windows 8 bug   -->
    <script src="public/assets/js/ie10-viewport-bug-workaround.js"></script>
	<?php if(GETURL=='chart'){?>
	<!-- Flot Charts JavaScript -->
	<script type="text/javascript"  src="public/js/jquery-1.10.2.min.js"></script> 
	<script src="public/bower_components/flot/excanvas.min.js"></script>
	<script src="public/bower_components/flot/jquery.flot.js"></script>
	<script src="public/bower_components/flot/jquery.flot.pie.js"></script>
	<script src="public/bower_components/flot/jquery.flot.resize.js"></script>
	<script src="public/bower_components/flot/jquery.flot.time.js"></script>
	<script src="public/bower_components/flot.tooltip/js/jquery.flot.tooltip.min.js"></script>
	<script src="public/js/flot-data.js"></script>
	<?php }?>
  </body>
</html>
