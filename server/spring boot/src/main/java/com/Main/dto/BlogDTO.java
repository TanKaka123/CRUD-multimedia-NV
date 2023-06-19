package com.Main.dto;

public class BlogDTO extends AbstractLogDTO {
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
	private Integer number_view ;
	private Integer number_love ;
}
