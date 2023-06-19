package com.Main.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Main.dto.VlogDTO;
import com.Main.entity.VlogEntity;

@Component
public class VlogConverter {
	
	@Autowired
	private UserConverter userConverter;

	public VlogEntity toEntity(VlogDTO dto) {
		VlogEntity entity = new VlogEntity();
		entity.setId(dto.getId());
		entity.setAuthor(userConverter.toEntity(dto.getAuthor()));
		entity.setTitle(dto.getTitle());
		entity.setThumbnail(dto.getThumbnail());
		entity.setContent(dto.getContent());
		entity.setVideo_url(dto.getVideo_url());
		return entity;
	}

	public VlogDTO toDTO(VlogEntity entity) {
		VlogDTO dto = new VlogDTO();
		dto.setId(entity.getId());
		dto.setAuthor(userConverter.toDTO(entity.getAuthor()));
		dto.setTitle(entity.getTitle());
		dto.setThumbnail(entity.getThumbnail());
		dto.setContent(entity.getContent());
		dto.setVideo_url(entity.getVideo_url());
		return dto;
	}

	public VlogEntity toEntity(VlogDTO dto, VlogEntity existingEntity) {
		VlogEntity entity = existingEntity != null ? existingEntity : new VlogEntity();
		entity.setId(dto.getId());
		entity.setAuthor(userConverter.toEntity(dto.getAuthor()));
		entity.setTitle(dto.getTitle());
		entity.setThumbnail(dto.getThumbnail());
		entity.setContent(dto.getContent());
		entity.setVideo_url(dto.getVideo_url());
		return entity;
	}
}
