package com.Main.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Main.entity.UserEntity;
import com.Main.entity.VlogEntity;

@Repository
public interface VlogRepository extends JpaRepository<VlogEntity, Long> {
    // Add custom query methods if needed
}