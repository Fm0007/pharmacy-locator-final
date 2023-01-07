package ma.locator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import ma.locator.model.Pharmacie;
import ma.locator.model.User;
import ma.locator.repository.PharmacieRepository;
import ma.locator.repository.UserRepository;

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
	
		return tmp.getPharmacie();
		
	}
}
