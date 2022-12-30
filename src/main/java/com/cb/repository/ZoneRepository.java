package com.cb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cb.model.Zone;




public interface ZoneRepository extends JpaRepository<Zone, Integer> {
	
	Zone findById(int id);

}
