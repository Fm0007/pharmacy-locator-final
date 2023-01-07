package ma.locator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.locator.model.Ville;




public interface VilleRepository extends JpaRepository<Ville, Integer> {
	
	Ville findById(int id);

}
