package com.Main.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.Main.dto.BlogDTO;
import com.Main.entity.BlogEntity;

@Component
public class BlogConverter {
	
	@Autowired
	private UserConverter userConverter;

	public BlogEntity toEntity(BlogDTO dto) {
		BlogEntity entity = new BlogEntity();
		entity.setId(dto.getId());
		entity.setAuthor(userConverter.toEntity(dto.getAuthor()));
		entity.setTitle(dto.getTitle());
		entity.setThumbnail(dto.getThumbnail());
		entity.setContent(dto.getContent());
		entity.setNumber_view(dto.getNumber_view());
		entity.setNumber_love(dto.getNumber_love());
		return entity;
	}

	public BlogDTO toDTO(BlogEntity entity) {
		BlogDTO dto = new BlogDTO();
		dto.setId(entity.getId());
		dto.setAuthor(userConverter.toDTO(entity.getAuthor()));
		dto.setTitle(entity.getTitle());
		dto.setThumbnail(entity.getThumbnail());
		dto.setContent(entity.getContent());
		dto.setNumber_view(entity.getNumber_view());
		dto.setNumber_love(entity.getNumber_love());
		return dto;
	}
	public BlogEntity toEntity(BlogDTO dto, BlogEntity existingEntity) {
	    BlogEntity entity = existingEntity != null ? existingEntity : new BlogEntity();
	    entity.setId(dto.getId());
	    entity.setAuthor(userConverter.toEntity(dto.getAuthor()));
	    entity.setTitle(dto.getTitle());
	    entity.setThumbnail(dto.getThumbnail());
	    entity.setContent(dto.getContent());
	    entity.setNumber_view(dto.getNumber_view());
	    entity.setNumber_love(dto.getNumber_love());
	    return entity;
	}

}