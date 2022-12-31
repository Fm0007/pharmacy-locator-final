
$(document)
		.ready(

			
			

				function() {
					var mail = $("#user-name").text();
					var idd = $("#ident").text();
					
					$.ajax({
						url:'/gardes/all',
						type:'GET',
						success : function(data) {	
						var option = '';
						data.forEach(e=>{
								option += '<option value ='+e.idGarde+'>'+e.type+'</option>';
										});
												
						$('#garde').append(option);
													},
						error : function(jqXHR, textStatus,
										errorThrown) {
										console.log(textStatus);
											}
											
					});	

					

					table = $('#tpharmacieDeGarde')
							.DataTable({
										ajax : {
											url : "pharmacieDeGardes/all",
											dataSrc : ''
										},
										columns : [
										
												{
													data : "pharmacieDeGardePK.dateDebut"
												},
												{
													data : "dateFin"
												},
												
												
												{
													data : "garde.type"
												} ]

									});
					
							
									


					$('#btn').click(
							function() {
								var dateDebut = $("#dateDebut");
								var dateFin = $("#dateFin");
								var pharmacy = $("#pharmacy");
								var garde = $("#garde");
								if ($('#btn').text() == 'Ajouter') {
									var p = {
										dateDebut : dateDebut.val(),
										dateFin : dateFin.val(),
										pharmacie : {
											id: idd
										},
										garde : {
											idGarde : garde.val()
										},
										pharmacieDeGardePK : {
											pharmaciePK: idd,
											gardePK: garde.val(),
											dateDebut : dateDebut.val()
										  }
										
										
									};

									$.ajax({
										url : 'pharmacieDeGardes/save',
										contentType : "application/json",
										dataType : "json",
										data : JSON.stringify(p),
										type : 'POST',
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
										newLigne += '<h4 class="d-inline-flex">Voulez vous vraiment supprimer cette pharmacie de garde ? </h4>';
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
																		url : 'pharmacieDeGardes/delete/'
																				+ idd,
																		data : {},
																		type : 'DELETE',
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

					$('#table-content').on(
							'click',
							'.modifier',
							function() {
								var btn = $('#btn');
								var nom = $(this).closest('tr').find('td').eq(0)
										.text();
								;
								var dateDebut = $(this).closest('tr').find('td').eq(
										1).text();
								var dateFin = $(this).closest('tr').find('td')
										.eq(2).text();
								var garde = $(this).closest('tr').find('td').eq(
										3).text();
								btn.text('Modifier');
								$("#dateDebut").val(dateDebut);
								$("#dateFin").val(dateFin);
								$("#pharmacy option").filter(function(index) { return $(this).text() === nom; }).attr('selected', 'selected');

								$("#garde option").filter(function(index) { return $(this).text() === garde; }).attr('selected', 'selected');

							
								btn.click(function(e) {
									e.preventDefault();
									var p = {
										dateDebut : dateDebut.val(),
										dateFin : dateFin.val(),
										pharmacie : {
											id: idd
										},
										garde : {
											idGarde : garde.val()
										},
										pharmacieDeGardePK : {
											pharmaciePK: idd,
											gardePK: garde.val(),
											dateDebut : dateDebut.val()
										  }
										
									};
									if ($('#btn').text() == 'Modifier') {
										$.ajax({
											url : 'pharmacieDeGardes/update/',
											contentType : "application/json",
											dataType : "json",
											data : JSON.stringify(p),
											type : 'PUT',
											async : false,
											success : function(data,
													textStatus, jqXHR) {
												table.ajax.reload();
												$("#dateDebut").val('');
												$("#dateFin").val('');
												btn.text('Ajouter');
											},
											error : function(jqXHR, textStatus,
													errorThrown) {
												console.log(textStatus);
											}
										});
										$("#main-content").load(
												"./page/pharmacieDeGarde.html");
									}
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