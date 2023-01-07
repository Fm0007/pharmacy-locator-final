package ma.locator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.locator.model.Pharmacie;



public interface PharmacieRepository extends JpaRepository<Pharmacie, Integer> {
	
	Pharmacie findById(int id);

}
