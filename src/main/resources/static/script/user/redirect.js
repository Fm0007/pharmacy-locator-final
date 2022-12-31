

function show(page) {
	if (page == 'produit') {
		$('a').removeClass('active');
		$('a:contains(Produit)').addClass('active');
		$("#main-content").load("page/user/produit.html");

		event.preventDefault();
	}
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/user/statistiques.html");
		event.preventDefault();
	}
	if (page == "map") {
		$('a').removeClass('active');
		$('a:contains(Emplacements)').addClass('active');
		$("#main-content").load("page/user/map.html");
		event.preventDefault();
	}
	
	if (page == "pharmacy") {
		$('a').removeClass('active');
		$('a:contains(Pharmacies)').addClass('active');
		$("#main-content").load("page/user/pharmacy.html");
		event.preventDefault();
	}
	
	if (page == "pharmacieDeGarde") {
		$('a').removeClass('active');
		$('a:contains(Pharmacie de garde)').addClass('active');
		$("#main-content").load("page/user/pharmacieDeGarde.html");
		event.preventDefault();
	}
	if (page == "image") {
		$('a').removeClass('active');
		$('a:contains(Image)').addClass('active');
		$("#main-content").load("page/user/image.html");
		event.preventDefault();
	}
	
}
$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/user/statistiques.html");
