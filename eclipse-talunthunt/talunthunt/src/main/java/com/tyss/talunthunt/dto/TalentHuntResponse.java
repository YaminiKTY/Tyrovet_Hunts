package com.tyss.talunthunt.dto;

import java.util.List;

import lombok.Data;
@Data
public class TalentHuntResponse {

		
		private int statusCode;
		private String message;
		private String clientId;
		private int candidateId;
		private List<RequirementBean> add;
		private List<CandidateInfoBean> candi;
		private  List<ScheduleInterviewBean> schedule;
	  
		
		
		
	}



