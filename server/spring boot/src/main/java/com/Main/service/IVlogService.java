package com.Main.service;

import com.Main.dto.VlogDTO;

public interface IVlogService {
	VlogDTO save(VlogDTO newDTO);
	void delete(Long[] ids);
}
