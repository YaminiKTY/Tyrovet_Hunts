package com.tyss.talunthunt.service;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tyss.talunthunt.dao.TalentHuntDAO;
import com.tyss.talunthunt.dto.RequirementBean;
import com.tyss.talunthunt.dto.CandidateInfoBean;
import com.tyss.talunthunt.dto.ScheduleInterviewBean;
@Service
public class TalentHuntServiceDAOImpl implements TalentHuntServiceDAO{
	@Autowired
	 private TalentHuntDAO dao;
	@Override
	public RequirementBean addrequirement(RequirementBean reqinfo) {
		if(reqinfo.getSchedule()!=null) {
		for(ScheduleInterviewBean bn :reqinfo.getSchedule()) {
			bn.setRequirement1(reqinfo);
		}}
		return dao.addrequirement(reqinfo);
	}
	@Override
	public boolean updateRequirement(RequirementBean reqinfo) {
		return dao.updateRequirement(reqinfo);
	}
	@Override
	public List<RequirementBean> getAllReqInfo() {
		return dao.getAllReqInfo();
	}
	@Override
	public CandidateInfoBean addCandidate(CandidateInfoBean candiinfo) {
	
		return dao.addCandidate(candiinfo);
	}
	@Override
	public List<CandidateInfoBean> getAllCandiInfo() {
		return dao.getAllCandiInfo();
	}
	@Override
	public ScheduleInterviewBean scheduleInterviewBean(ScheduleInterviewBean schedule) {
		schedule.getRequirement1().setSchedule(Arrays.asList(schedule));
		return dao.scheduleInterviewBean(schedule);
	}
	@Override
	public List<ScheduleInterviewBean> getAllscheduleinfo() {
		return dao.getAllscheduleinfo();
	}
	@Override
	public List<RequirementBean> getAllMonthlyRequi() {
		return dao.getAllMonthlyRequi();
	}
	
	}
	
	
