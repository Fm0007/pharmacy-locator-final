package com.cb.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cb.model.Pharmacie;
import com.cb.repository.PharmacieRepository;


@RestController
@RequestMapping("pharmacies")
public class PharmacieController {

	@Autowired
	private PharmacieRepository repository;

	@PostMapping("/save")
	public void save(@RequestBody Pharmacie Pharmacie) {
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

	@GetMapping(value = "/count")
	public long countPharmacie() {
		return repository.count();
	}
	
	 @PutMapping("/update/{id}")
	  public void updateZone(@RequestBody Pharmacie newPharmacie, @PathVariable String id) {
		Pharmacie tmp =  repository.findById(Integer.parseInt(id));
	    tmp.setNom(newPharmacie.getNom());
	    tmp.setAdresse(newPharmacie.getAdresse());
	    tmp.setLat(newPharmacie.getLat());
	    tmp.setLog(newPharmacie.getLog());
	    tmp.setZone(newPharmacie.getZone());
	    repository.save(tmp);
	    }

}
