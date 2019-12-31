package com.tyss.talunthunt.dto;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;


@Entity
@Table(name="add_requirements")
@Data
public class RequirementBean {
	
	@Id	
	@GenericGenerator(name = "string_based_custom_sequence", strategy = "com.tyss.talunthunt.dto.RequirementIdGeneratorBean")
	@GeneratedValue(generator="string_based_custom_sequence")
	@Column(name="client_Id")
	private String clientId;
	
	@Column(name="client_name")
	private String client;
	
	@Column(name="technology")
	private String technology;
	
	@Column(name="year_of_Experience")
	private double yoe;
	
	@Column(name="client_location")
	private String location;
	
	@Column(name="no_Of_positions")
	private int nopositions;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	
	@Column(name="opening_date")
	private Date openingdate;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name="closing_date")
	private Date closingdate;
	
	@Column(name="role")
	private String role;
	
	@Column(name="rate")
	private double rate;
	
	@Column(name="client_contactperson")
	private String contact;
	
	@Column(name="job_description")
	private String jobdescription;
	
	

	
//	@OneToMany(cascade=CascadeType.ALL,mappedBy = "requirement1")
//	private List<CandidateInfoBean> candidate;
	@JsonIgnore
	@OneToMany( cascade=CascadeType.ALL,mappedBy="requirement1" )
	private List<ScheduleInterviewBean> schedule;
	
	

}
