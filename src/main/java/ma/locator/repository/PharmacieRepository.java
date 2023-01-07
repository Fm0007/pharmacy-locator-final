package com.cb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cb.model.Pharmacie;



public interface PharmacieRepository extends JpaRepository<Pharmacie, Integer> {
	
	Pharmacie findById(int id);

}
