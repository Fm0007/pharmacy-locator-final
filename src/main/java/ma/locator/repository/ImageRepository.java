package com.cb.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cb.model.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {
	Optional<Image> findByName(String name);
}
