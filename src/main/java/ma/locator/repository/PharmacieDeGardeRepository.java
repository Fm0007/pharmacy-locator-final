package com.cb.repository;




import org.springframework.data.jpa.repository.JpaRepository;



import com.cb.model.PharmacieDeGarde;




public interface PharmacieDeGardeRepository extends JpaRepository<PharmacieDeGarde, Integer> {
	
	PharmacieDeGarde findById(int id);
	
}
