package com.cb.model;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Pharmacie { 

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String nom;
	private String adresse;
	private Double lat;
	private Double log;
	@ManyToOne
	private Zone zone;
	@JsonIgnore
	@OneToMany(mappedBy = "pharmacie",fetch = FetchType.EAGER)
	private Set<PharmacieDeGarde> gardes ;

	public Pharmacie(String nom, String adresse, Double lat, Double log, Zone zone) {
		super();
		this.nom = nom;
		this.adresse = adresse;
		this.lat = lat;
		this.log = log;
		this.zone = zone;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Zone getZone() {
		return zone;
	}

	public void setZone(Zone zone) {
		this.zone = zone;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public Double getLat() {
		return lat;
	}

	public void setLat(Double lat) {
		this.lat = lat;
	}

	public Double getLog() {
		return log;
	}

	public void setLog(Double log) {
		this.log = log;
	}
	
	
	public Set<PharmacieDeGarde> getGardes() {
		return gardes;
	}

	public void setGardes(Set<PharmacieDeGarde> gardes) {
		this.gardes = gardes;
	}

	public Pharmacie() {
		super();
	}

}
