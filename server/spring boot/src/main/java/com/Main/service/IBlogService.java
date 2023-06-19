package com.Main.service;

import com.Main.dto.BlogDTO;

public interface IBlogService {
	BlogDTO save(BlogDTO newDTO);
	void delete(Long[] ids);
}
