package ma.locator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.locator.model.*;


public interface GardeRepository extends JpaRepository<Garde, Integer> {
	
	Garde findById(int id);

}
