package com.Main.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;


@MappedSuperclass
// child class can be inheretance @Id, @GeneratedValue, @Column
public class BaseEntityLog {
	
	//Generate ID
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id ;
	
	
	//Column must have

    @ManyToOne
    @JoinColumn(name = "id_author")
    private UserEntity author;
    
//	@Column
//	private String id_author;
//	@Column
//	private String name_author;
//	@Column
//	private String avatar_author;
    
	public UserEntity getAuthor() {
		return author;
	}
	public void setAuthor(UserEntity author) {
		this.author = author;
	}
	@Column
	private String title;
	@Column
	private Long thumbnail;
	@Column
	private Long content;
	
	
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
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
//	public String getName_author() {
//		return name_author;
//	}
//	public void setName_author(String name_author) {
//		this.name_author = name_author;
//	}
//	public String getId_author() {
//		return id_author;
//	}
//	public void setId_author(String id_author) {
//		this.id_author = id_author;
//	}
//	public String getAvatar_author() {
//		return avatar_author;
//	}
//	public void setAvatar_author(String avatar_author) {
//		this.avatar_author = avatar_author;
//	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
}
