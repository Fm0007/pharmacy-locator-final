package ma.locator.repository;




import org.springframework.data.jpa.repository.JpaRepository;

import ma.locator.model.PharmacieDeGarde;




public interface PharmacieDeGardeRepository extends JpaRepository<PharmacieDeGarde, Integer> {
	
	PharmacieDeGarde findById(int id);
	
}
