package com.Main.api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Main.dto.UserDTO;
import com.Main.service.IUserService;
@CrossOrigin
@RestController
public class UserApi {
	@Autowired
	private IUserService userService;
	
	@PostMapping(value = "/user")
	public UserDTO createUser(@RequestBody UserDTO model) {
		return userService.save(model);
	}
//	@GetMapping(value = "/new")
//	public UserDTO getUser(@RequestBody String[] ids) {
//		return userService.get(ids);
//	}
	@PutMapping(value = "/user/{id}")
	public UserDTO updateUser(@RequestBody UserDTO model, @PathVariable("id") Long id) {
		model.setId(id);
		return userService.save(model);
	}
	
	@DeleteMapping(value = "/user")
	public void deleteNew(@RequestBody Long[] ids) {
		userService.delete(ids);
	}
}



