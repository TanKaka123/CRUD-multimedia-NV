
package com.Main.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="vlog")
public class VlogEntity  extends BaseEntityLog{
	@Column
	private Long thumbnail; 
	@Column
	private Long video_url;
	
	
	public Long getVideo_url() {
		return video_url;
	}
	public void setVideo_url(Long video_url) {
		this.video_url = video_url;
	}
	public Long getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(Long thumbnail) {
		this.thumbnail = thumbnail;
	}  
}
