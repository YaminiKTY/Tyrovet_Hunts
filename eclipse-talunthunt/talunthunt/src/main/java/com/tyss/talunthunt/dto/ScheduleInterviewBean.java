package com.tyss.talunthunt.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
@Entity
@Table(name = "Schedule_Interview")
public class ScheduleInterviewBean implements Serializable{
	
	

	@Id
	@Column(name="interview_Id")
	@GeneratedValue(strategy = GenerationType.TABLE)
    private int interviewId;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "created_Date")
	private Date createdDate;

	@Column(name = "interview_location")
	private String interviewlocation;

	@Column(name = "interview_type")
	private String interviewtype;
	
	@Column(name ="skills")
	private String skills;

	@Column(name = "status")
	private String status;

	@Column(name = "remarks")
	private String remarks;

	@Column(name = "interviewer")
	private String interviewer;
	

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "client_Id")
	private RequirementBean requirement1;
	
	@OneToMany(cascade = CascadeType.MERGE,mappedBy="interview")
	private List<CandidateInfoBean> candidate;

}
