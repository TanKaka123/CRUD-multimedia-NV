package com.Main.converter;

import org.springframework.stereotype.Component;

import com.Main.dto.UserDTO;
import com.Main.entity.UserEntity;

@Component
public class UserConverter {
	
	public UserEntity toEntity(UserDTO dto) {
		UserEntity entity = new UserEntity();
		entity.setId(dto.getId());
		entity.setUsername(dto.getUsername());
		entity.setPassword(dto.getPassword());
		entity.setEmail(dto.getEmail());
		entity.setFullname(dto.getFullname());
		entity.setAvatar(dto.getAvatar());
		entity.setDescription(dto.getDescription());
		entity.setAdmin(dto.isAdmin());
		return entity;
	}
	
	public UserDTO toDTO(UserEntity entity) {
		UserDTO dto = new UserDTO();
		dto.setId(entity.getId());
		dto.setUsername(entity.getUsername());
		dto.setPassword(entity.getPassword());
		dto.setEmail(entity.getEmail());
		dto.setFullname(entity.getFullname());
		dto.setAvatar(entity.getAvatar());
		dto.setDescription(entity.getDescription());
		dto.setAdmin(entity.isAdmin());
		return dto;
	}
	
	public UserEntity toEntity(UserDTO dto, UserEntity entity) {
		entity.setId(dto.getId());
		entity.setUsername(dto.getUsername());
		entity.setPassword(dto.getPassword());
		entity.setEmail(dto.getEmail());
		entity.setFullname(dto.getFullname());
		entity.setAvatar(dto.getAvatar());
		entity.setDescription(dto.getDescription());
		entity.setAdmin(dto.isAdmin());
		return entity;
	}
}