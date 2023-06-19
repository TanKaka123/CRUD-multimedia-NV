package com.Main.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="review")
public class ReviewEntity extends BaseEntityLog{
	@Column
	private Long url_product ;

	public Long getUrl_product() {
		return url_product;
	}

	public void setUrl_product(Long url_product) {
		this.url_product = url_product;
	}
}
