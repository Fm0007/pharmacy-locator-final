package ma.locator.service;

import ma.locator.dto.UserDto;
import ma.locator.model.User;

public interface UserService {
    void saveUser(UserDto userDto);

    User findUserByEmail(String email);
}
