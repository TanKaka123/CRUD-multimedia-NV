package com.Main.dto;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.Main.entity.UserEntity;

public class AbstractLogDTO {
	private Long id ;
    private UserDTO author;
	private String title;
	private Long thumbnail;
	private Long content;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public UserDTO getAuthor() {
		return author;
	}
	public void setAuthor(UserDTO author) {
		this.author = author;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Long getThumbnail() {
		return thumbnail;
	}
	public void setThumbnail(Long thumbnail) {
		this.thumbnail = thumbnail;
	}
	public Long getContent() {
		return content;
	}
	public void setContent(Long content) {
		this.content = content;
	}
}
