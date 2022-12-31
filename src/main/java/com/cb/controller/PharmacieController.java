package com.cb.controller;

import java.io.Console;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cb.model.Pharmacie;
import com.cb.model.User;
import com.cb.repository.PharmacieRepository;
import com.cb.repository.UserRepository;


@RestController
@RequestMapping("pharmacies")
public class PharmacieController {

	@Autowired
	private PharmacieRepository repository;
	@Autowired
	private UserRepository usrepository;

	@PostMapping("/save")
	public void save(@RequestBody Pharmacie Pharmacie , @RequestParam("image")MultipartFile image ) {
		repository.save(Pharmacie);
	}


	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable(required = true) String id) {
		Pharmacie s = repository.findById(Integer.parseInt(id));
		repository.delete(s);
	}

	@GetMapping("/all")
	public List<Pharmacie> findAll() {
		return repository.findAll();
	}

	@GetMapping("/{email}")
	public Pharmacie findofUser(@PathVariable(required = true) String email) {
		User tmp = usrepository.findByEmail(email);
		/*if(tmp.getPharmacie()==null){
			Pharmacie ph = new Pharmacie("Nom", "adresse" , null, null, null);
			ph.setEtat("non valide");
			ph.setUser(tmp);
			repository.save(ph);
		}*/
		Pharmacie pr = tmp.getPharmacie();
		
	return pr;
		
	}

	@GetMapping(value = "/count")
	public long countPharmacie() {
		return repository.count();
	}
	
	 @PutMapping("/update/{id}")
	  public void updateZone(@RequestBody Pharmacie newPharmacie, @PathVariable String id) {
		Pharmacie tmp =  repository.findById(Integer.parseInt(id));
	    if(newPharmacie.getNom()!=null) tmp.setNom(newPharmacie.getNom());
	    if(newPharmacie.getAdresse()!=null) tmp.setAdresse(newPharmacie.getAdresse());
	    if(newPharmacie.getLat()!=null) tmp.setLat(newPharmacie.getLat());
	    if(newPharmacie.getLog()!=null) tmp.setLog(newPharmacie.getLog());
	    if(newPharmacie.getZone()!=null) tmp.setZone(newPharmacie.getZone());
	    repository.save(tmp);
	    }

}
