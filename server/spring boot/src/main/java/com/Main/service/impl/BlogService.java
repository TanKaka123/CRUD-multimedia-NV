package com.Main.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Main.converter.BlogConverter;
import com.Main.dto.BlogDTO;
import com.Main.entity.BlogEntity;
import com.Main.repository.BlogRepository;
import com.Main.service.IBlogService;

@Service
public class BlogService implements IBlogService {

	@Autowired
	private BlogRepository blogRepository;

	@Autowired
	private BlogConverter blogConverter;

	@Override
	public BlogDTO save(BlogDTO blogDTO) {
		BlogEntity blogEntity = new BlogEntity();
		if (blogDTO.getId() != null) {
			BlogEntity existingBlogEntity = blogRepository.findOne(blogDTO.getId());
			blogEntity = blogConverter.toEntity(blogDTO, existingBlogEntity);
		} else {
			blogEntity = blogConverter.toEntity(blogDTO);
		}
		blogEntity = blogRepository.save(blogEntity);
		return blogConverter.toDTO(blogEntity);
	}

	@Override
	public void delete(Long[] ids) {
		for (Long id : ids) {
			blogRepository.delete(id);
		}
	}
}
