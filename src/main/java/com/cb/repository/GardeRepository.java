package com.cb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cb.model.*;


public interface GardeRepository extends JpaRepository<Garde, Integer> {
	
	Garde findById(int id);

}
