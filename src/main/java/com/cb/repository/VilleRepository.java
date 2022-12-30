package com.cb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cb.model.Ville;




public interface VilleRepository extends JpaRepository<Ville, Integer> {
	
	Ville findById(int id);

}
