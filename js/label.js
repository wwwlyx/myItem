

window.onload=function(){
	$('#labelBtn').click(function(){
		var val=$('#labelVal').val();
		var html1='';
		var html2="<div class='col-md-2 ForLabel'><div class='alert alert-info alert-dismissible' role='alert'><button type='button' class='close  removeBtn' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button><p>"+val+"</p></div></div>";
		var oldHtml=$('#addLabel').html();
		html1+=oldHtml+html2;
		$('#addLabel').html(html1)
	})
	$('.removeBtn').click(function(){
		$(this).parent().parent().remove();

	})
	
}



