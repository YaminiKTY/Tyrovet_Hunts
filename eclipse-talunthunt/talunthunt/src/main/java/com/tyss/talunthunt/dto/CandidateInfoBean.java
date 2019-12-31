package com.tyss.talunthunt.dto;

import java.io.File;
import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "Candidate_info")
public class CandidateInfoBean {

	@Id
	@GeneratedValue(strategy = GenerationType.TABLE)
	@Column(name = "candidate_Id")
	private int candidateID;

	@Column(name = "candidate_Name")
	private String candidateName;

	@Column(name = "email")
	private String email;

	@Column(name = "candidate_no")
	private double candidateNo;

	@Column(name = "govt_id")
	private String govtId;

	@Column(name = "relocate")
	private String relocate;

	@Column(name = "candidate_Type")
	private String candidateType;

	@Column(name = "year_Of_Passing")
	private int yearOfPassing;

	@Column(name = "percentage")
	private double percentage
	;
	@Column(name = "current_Designation")
	private String currentDesignation;
	
	@Column(name = "year_Of_Experience")
	private int yearOfExperience;
	
	@Column(name = "notice_period")
	private int noticePeriod;
	
	@Column(name = "current_ctc")
	private double currentCtc;
	
	@Column(name = "expected_ctc")
	private double expectedCtc;

//@ManyToOne(cascade=CascadeType.ALL)	
//@JoinColumn(name="client_Id")
//private RequirementBean requirement1;
    @JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "interview_Id")
	private ScheduleInterviewBean interview;
}
