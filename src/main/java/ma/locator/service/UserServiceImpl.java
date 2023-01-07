package ma.locator.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import ma.locator.dto.UserDto;
import ma.locator.model.Pharmacie;
import ma.locator.model.Role;
import ma.locator.model.User;
import ma.locator.repository.PharmacieRepository;
import ma.locator.repository.RoleRepository;
import ma.locator.repository.UserRepository;
import ma.locator.util.TbConstants;

import java.util.Arrays;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Autowired
    private PharmacieRepository repository;

    @Override
    public void saveUser(UserDto userDto) {
        Role role = roleRepository.findByName(TbConstants.Roles.USER);

        if (role == null)
            role = roleRepository.save(new Role(TbConstants.Roles.USER));

        User user = new User(userDto.getName(), userDto.getEmail(), passwordEncoder.encode(userDto.getPassword()),
                Arrays.asList(role));
        Pharmacie ph = new Pharmacie("nom a définir", "adresse a définir", 33.00, -8.00, null, "non valide");
        
        repository.save(ph);
        user.setPharmacie(ph);
        
        userRepository.save(user);
    }

    @Override
    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
