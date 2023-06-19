package com.Main.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Main.dto.BlogDTO;
import com.Main.service.IBlogService;


@CrossOrigin
@RestController
public class BlogApi {
	@Autowired
	private IBlogService blogService;
	
	@PostMapping(value = "/blog")
	public BlogDTO createBlog(@RequestBody BlogDTO model) {
		return blogService.save(model);
	}

	@PutMapping(value = "/blog/{id}")
	public BlogDTO updateBlog(@RequestBody BlogDTO model, @PathVariable("id") Long id) {
		model.setId(id);
		return blogService.save(model);
	}
	
	@DeleteMapping(value = "/blog")
	public void deleteBlog(@RequestBody Long[] ids) {
		blogService.delete(ids);
	}
}
