package com.Main.service;

import com.Main.dto.UserDTO;

public interface IUserService {
	UserDTO save(UserDTO newDTO);
	void delete(Long[] ids);
}
