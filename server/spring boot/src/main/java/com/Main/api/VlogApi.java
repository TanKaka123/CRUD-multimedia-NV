package com.Main.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.Main.dto.VlogDTO;
import com.Main.service.IVlogService;

public class VlogApi {
	@Autowired
	private IVlogService vlogService;

	@PostMapping(value = "/vlog")
	public VlogDTO createVlog(@RequestBody VlogDTO model) {
		return vlogService.save(model);
	}

	@PutMapping(value = "/vlog/{id}")
	public VlogDTO updateVlog(@RequestBody VlogDTO model, @PathVariable("id") Long id) {
		model.setId(id);
		return vlogService.save(model);
	}

	@DeleteMapping(value = "/vlog")
	public void deleteVlog(@RequestBody Long[] ids) {
		vlogService.delete(ids);
	}
}
