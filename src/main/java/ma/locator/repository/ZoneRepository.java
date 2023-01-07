package ma.locator.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.locator.model.Zone;




public interface ZoneRepository extends JpaRepository<Zone, Integer> {
	
	Zone findById(int id);

}
