package com.Main.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.Main.converter.VlogConverter;
import com.Main.dto.VlogDTO;
import com.Main.entity.VlogEntity;
import com.Main.repository.VlogRepository;
import com.Main.service.IVlogService;

public class VlogService implements IVlogService  {

	@Autowired
	private VlogRepository vlogRepository;

	@Autowired
	private VlogConverter vlogConverter;

	@Override
	public VlogDTO save(VlogDTO vlogDTO)  {
		VlogEntity vlogEntity = new VlogEntity();
		if (vlogDTO.getId() != null) {
			VlogEntity existingvlogEntity = vlogRepository.findOne(vlogDTO.getId());
			vlogEntity = vlogConverter.toEntity(vlogDTO, existingvlogEntity);
		} else {
			vlogEntity = vlogConverter.toEntity(vlogDTO);
		}
		vlogEntity = vlogRepository.save(vlogEntity);
		return vlogConverter.toDTO(vlogEntity);
	}

	@Override
	public void delete(Long[] ids) {
		for (Long id : ids) {
			vlogRepository.delete(id);
		}
	}
}
