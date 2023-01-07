/**
 * 
 */$(document)
 .ready(
	function() {
		$.ajax({
			url:'/villes/all',
			type:'GET',
			success : function(data) {	
			var option = '';
			data.forEach(e=>{
					option += '<option value ='+e.id+'>'+e.nom+'</option>';
							});
									
			$('#ville').append(option);
										},
			error : function(jqXHR, textStatus,
							errorThrown) {
							console.log(textStatus);
								}
								
		});	
		
		$("#ville").change(function () {
			var ville = $("#ville");
			if ($('#ville').val() != 0 ) {
				$.ajax({
					url:'villes/zones/'+ville.val(),
					type:'GET',
					success : function(data) {	
					var option = '<option value="0">Choisir une zone</option>';
					data.forEach(e=>{
							option += '<option value ='+e.id+'>'+e.nom+'</option>';
									});
											
					$('#zone').html(option);
												},
					error : function(jqXHR, textStatus,
									errorThrown) {
									console.log(textStatus);
										}
										
				});
			}
			else{
				var option = '<option value="0">Choisir une zone</option>';
				$('#zone').html(option);

			}
		});

		
		table = $('#tpharmacy')
				.DataTable({
							ajax : {
								url : "pharmacies/nv",
								dataSrc : ''
							},
							columns : [
									{
										data : "id"
									},
									{
										data : "nom"
									},
									{
										data : "adresse"
									},
									{
										data : "lat"
									},
									{
										data : "log"
									},
									{
										data : "zone.nom"
									},
									
									{
										"render" : function() {
											return '<button type="button" class="btn btn-outline-secondary supprimer>Valider</button>';
										}
									} ]

						});
		


						$('#table-content')
						.on(
								'click',
								'.supprimer',
								function() {

									var id = $(this).closest('tr').find(
											'td').eq(0).text();
									var oldLing = $(this).closest('tr')
											.clone();
									var newLigne = '<tr style="position: relative;" class="bg-light" ><th scope="row">'
											+ id
											+ '</th><td colspan="4" style="height: 100%;">';
									newLigne += '<h4 class="d-inline-flex">Voulez vous vraiment valider cette pharmacie ? </h4>';
									newLigne += '<button type="button" class="btn btn-outline-primary btn-sm confirmer" style="margin-left: 25px;">Oui</button>';
									newLigne += '<button type="button" class="btn btn-outline-danger btn-sm annuler" style="margin-left: 25px;">Non</button></td></tr>';

									$(this).closest('tr').replaceWith(
											newLigne);
									$('.annuler').click(
											function() {
												$(this).closest('tr')
														.replaceWith(
																oldLing);
											});
									$('.confirmer')
											.click(
													function(e) {
														e.preventDefault();
														$
																.ajax({
																	url : 'pharmacies/validate/'
																			+ id,
																	data : {},
																	type : 'PUT',
																	async : false,
																	success : function(
																			data,
																			textStatus,
																			jqXHR) {
																		if (data
																				.includes("error") == true) {
																			$(
																					"#error")
																					.modal();
																		} else {
																			table.ajax
																					.reload();
																		}
																	},
																	error : function(
																			jqXHR,
																			textStatus,
																			errorThrown) {
																		$(
																				"#error")
																				.modal();
																	}
																});

													});

								});


				
						



		// function remplir(data) {
		// var contenu = $('#table-content');
		// var ligne = "";
		// for (i = 0; i < data.length; i++) {
		// ligne += '<tr><th scope="row">' + data[i].id + '</th>';
		// ligne += '<td>' + data[i].code + '</td>';
		// ligne += '<td>' + data[i].nom + '</td>';
		// ligne += '<td>' + data[i].prix + '</td>';
		// ligne += '<td>' + data[i].dateAchat + '</td>';
		// ligne += '<td><button type="button" class="btn
		// btn-outline-danger
		// supprimer">Supprimer</button></td>';
		// ligne += '<td><button type="button" class="btn
		// btn-outline-secondary
		// modifier">Modifier</button></td></tr>';
		// }
		// contenu.html(ligne);
		// }

		// $.ajax({
		// url: 'produits/all',
		// data: {op: ''},
		// type: 'GET',
		// async: false,
		// success: function (data, textStatus, jqXHR) {
		// console.log(data);
		// remplir(data);
		// },
		// error: function (jqXHR, textStatus, errorThrown) {
		// console.log(textStatus);
		// }
		// });
	});
