$(document).ready(function(){
	var mail = $("#user-name").text();
	$.ajax({
		url:'/pharmacies/'+mail,
		type:'GET',
		success : function(data) {	
			$("#ulat").text(data.lat);
			$("#ulog").text(data.log);
			$("#ident").text(data.id);
			var option = '<div class="col-md-7 border-right no-gutters">'
				+'<div class="py-4">'
					+'<img class="phimg" src="./get/imagep/'+data.id+'" width="450"  >'
					+'<h3></h3>'
					+'<h4 class="text-secondary">'+data.nom+'</h4>'
					+'<div class="stats">'
						+'<table class="table table-borderless">'
							+'<tbody>'
								
								+'<tr>'
									+'<td>'
										+'<div class="d-flex flex-column"> <span class="text-left head">Lat :</span> <span class="text-left bottom">'+data.lat+'</span> </div>'
									+'</td>'
									+'<td>'
										+'<div class="d-flex flex-column"> <span class="text-left head">lon :</span> <span class="text-left bottom">'+data.log+'</span> </div>'
									+'</td>'
								+'</tr>'
							+'</tbody>'
						+'</table>'
					+'</div>'
				+'</div>'
			+'</div>'
			+'<div class="col-md-5">'
				+'<div class="py-3">'
					+'<div> <span class="d-block head">Addresse : </span> <span class="bottom">'+data.adresse+'</span> </div>'
					+'<div class="mt-4"> <span class="d-block head">Zone :</span> <span class="bottom">'+data.zone.nom+'</span> </div>'
					+'<div class="mt-4"> <span class="d-block head">Ville :</span> <span class="bottom">'+data.zone.ville.nom+'</span> </div>'
					+'<div class="mt-4"> <span class="d-block head">Lat :</span> <span class="bottom">'+data.lat+'</span> </div>'
					+'<div class="mt-4"> <span class="d-block head">log :</span> <span class="bottom">'+data.log+'</span> </div>'
					
				+'</div>'
			+'</div>'
		+'</div>';
		$('#info').html(option);
									},
		error : function(jqXHR, textStatus,
						errorThrown) {
						console.log(textStatus);
							}
							
	});	
	

	

	

})
