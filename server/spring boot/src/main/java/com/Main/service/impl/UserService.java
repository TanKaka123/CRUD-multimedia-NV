package com.Main.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.converter.UserConverter;
import com.Main.dto.UserDTO;
import com.Main.entity.UserEntity;
import com.Main.repository.UserRepository;
import com.Main.service.IUserService;

@Service
public class UserService  implements IUserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserConverter userConverter;

	@Override
	public UserDTO save(UserDTO userDTO) {
		UserEntity userEntity = new UserEntity();
		if (userDTO.getId() != null) {
			UserEntity existingUserEntity = userRepository.findOne(userDTO.getId());
			userEntity = userConverter.toEntity(userDTO, existingUserEntity);
		} else {
			userEntity = userConverter.toEntity(userDTO);
		}
		userEntity = userRepository.save(userEntity);
		return userConverter.toDTO(userEntity);
	}

	@Override
	public void delete(Long[] ids) {
		for (Long id : ids) {
			userRepository.delete(id);
		}
	}
}
