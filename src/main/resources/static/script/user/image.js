/**
 * 
 */$(document)
		.ready(
				function() {
					var mail = $("#user-name").text();
					var idd = $("#ident").text();
					var url ='./get/imagep/'+idd ;
					var option = '<img class="center" src="'+url+'" ></img>';
					$('#img').append(option);
					
					
					
					
					
					$('#btn').click(
							function() {
								
								
								var lat = $("#lat");
								var log = $("#log");
								
								
								if ($('#btn').text() == 'Modifier') {
									
									var p = {
										
										
										lat : lat.val(),
										log : log.val()
										
										
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
