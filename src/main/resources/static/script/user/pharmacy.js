/**
 * 
 */$(document)
		.ready(
				function() {
					var mail = $("#user-name").text();
					var idd ;
					$.ajax({
						url:'/pharmacies/'+mail,
						type:'GET',
						success : function(data) {	
							idd = (data.id) ,
							$("#nom").val(data.nom),
							$("#adresse").val(data.adresse),							
							$("#ville").val(data.zone.ville.id),
							$("#zone").val(data.zone.id)
							
													},
						error : function(jqXHR, textStatus,
										errorThrown) {
										console.log(textStatus);
											}
											
					});	
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
					
					
					$('#btn').click(
							function() {
								
								var nom = $("#nom");
								var adresse = $("#adresse");
								
								var zone = $("#zone");
								
								if ($('#btn').text() == 'Modifier') {
									console.log(zone.val)
									var p = {
										
										nom : nom.val(),
										adresse : adresse.val(),
										zone : {
											id : zone.val()
										}
										
									};

									$.ajax({
										url : 'pharmacies/update/'+idd,
											contentType : "application/json",
											dataType : "json",
											data : JSON.stringify(p),
											type : 'PUT',
											async : false,
										success : function(data, textStatus,
												jqXHR) {
											table.ajax.reload();
										},
										error : function(jqXHR, textStatus,
												errorThrown) {
											console.log(textStatus);
										}
									});
									$("#main-content").load(
											"./page/user/statistiques.html");
								}
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
