package com.Main.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="blog")
public class BlogEntity extends BaseEntityLog {
	@Column 
	private Integer number_view ; 
	public Integer getNumber_view() {
		return number_view;
	}
	public void setNumber_view(Integer number_view) {
		this.number_view = number_view;
	}
	public Integer getNumber_love() {
		return number_love;
	}
	public void setNumber_love(Integer number_love) {
		this.number_love = number_love;
	}
	@Column 
	private Integer number_love  ;
}
