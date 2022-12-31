package com.cb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cb.model.Pharmacie;
import com.cb.model.User;
import com.cb.repository.PharmacieRepository;
import com.cb.repository.UserRepository;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
	private UserRepository repository;
    @Autowired
    private PharmacieRepository phrep;

    @GetMapping("/")
    public String registrationForm() {
        return "user";
    }

    @GetMapping("/{email}")
	public Pharmacie findofUser(@PathVariable(required = true) String email) {
		User tmp = repository.findByEmail(email);
		if(tmp.getPharmacie()==null){
			Pharmacie ph = new Pharmacie("Nom", "adresse" , null, null, null);
			ph.setEtat("non valide");
			ph.setUser(tmp);
			phrep.save(ph);
		}
		return tmp.getPharmacie();
		
	}
}

