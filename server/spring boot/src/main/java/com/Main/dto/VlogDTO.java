package com.Main.dto;

import javax.persistence.Column;

public class VlogDTO extends AbstractLogDTO{
	private Long thumbnail;  
	public Long getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(Long thumbnail) {
		this.thumbnail = thumbnail;
	}
	public Long getVideo_url() {
		return video_url;
	}
	public void setVideo_url(Long video_url) {
		this.video_url = video_url;
	}
	private Long video_url;
}
