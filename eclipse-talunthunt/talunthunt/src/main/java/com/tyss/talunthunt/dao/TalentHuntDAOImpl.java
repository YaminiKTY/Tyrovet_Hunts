package com.tyss.talunthunt.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.PersistenceUnit;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.tyss.talunthunt.dto.RequirementBean;
import com.tyss.talunthunt.dto.CandidateInfoBean;
import com.tyss.talunthunt.dto.ScheduleInterviewBean;
@Repository
public class TalentHuntDAOImpl implements TalentHuntDAO{
	@PersistenceUnit
	private EntityManagerFactory factory;
	@Override
	public RequirementBean addrequirement(RequirementBean reqinfo) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		try {
			transaction.begin();
			manager.persist(reqinfo);
			transaction.commit();
			return reqinfo;
		} catch (Exception e) {
			manager.close();
			e.printStackTrace();
			return null;
		}
		
	
	}
	@Override
	public boolean updateRequirement(RequirementBean reqinfo) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		RequirementBean req = manager.find(RequirementBean.class,reqinfo.getClientId());
		
		if(req != null) {
			
		transaction.begin();
        req.setClientId(reqinfo.getClientId());
        req.setClient(reqinfo.getClient());
        req.setTechnology(reqinfo.getTechnology());
        req.setYoe(reqinfo.getYoe());
        req.setLocation(reqinfo.getLocation());
        req.setNopositions(reqinfo.getNopositions());
        req.setOpeningdate(reqinfo.getOpeningdate());
        req.setClosingdate(reqinfo.getClosingdate());
        req.setRole(reqinfo.getRole()); 
        req.setRate(reqinfo.getRate());
        req.setContact(reqinfo.getContact());
        req.setJobdescription(reqinfo.getJobdescription());
        transaction.commit();
		return true;
		}
		return false;
	}
	@Override
	public List<RequirementBean> getAllReqInfo() {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		String jpql= "from RequirementBean";
		Query query = manager.createQuery(jpql);
		 List<RequirementBean> list=query.getResultList();
		 if(list==null) {
			 return null;
		 }
		return list;
		
	}
	@Override
	public CandidateInfoBean addCandidate(CandidateInfoBean candiinfo) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		
		try {
			transaction.begin();
			manager.persist(candiinfo);
			transaction.commit();
			return candiinfo;
		}catch(Exception e) {
			manager.close();
			e.printStackTrace();
			return null;
		}

	}
	@Override
	public List<CandidateInfoBean> getAllCandiInfo() {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		String hpql = " from CandidateInfoBean";
		Query query1=manager.createQuery(hpql);
		List<CandidateInfoBean> list = query1.getResultList();
		if(list==null) {
		return null;
	} 
	return list;

}
	@Override
	public ScheduleInterviewBean scheduleInterviewBean(ScheduleInterviewBean schedule) {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		
		try {
			transaction.begin();
			schedule.setRequirement1(manager.find(RequirementBean.class,schedule.getRequirement1().getClientId()));
			manager.persist(schedule);
			transaction.commit();
             return schedule;
		}catch(Exception e) {
			manager.close();
			e.printStackTrace();
			return null;
		}
	
	}
	@Override
	public List<ScheduleInterviewBean> getAllscheduleinfo() {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		String hpql ="from ScheduleInterviewBean";
		Query query1=manager.createQuery(hpql);
		List<ScheduleInterviewBean> list= query1.getResultList();
		if(list==null) {
		return null;
	}return list;
		}
	@Override
	public List<RequirementBean> getAllMonthlyRequi() {
		EntityManager manager = factory.createEntityManager();
		EntityTransaction transaction = manager.getTransaction();
		String jpql="select count(*) from RequirementBean group by month (openingdate)";
	    //String jpql="select count(*), month(openingdate) from RequirementBean group by month (openingdate)";
		Query query = manager.createQuery(jpql);
		List<RequirementBean> list = query.getResultList();
		if(list==null) {
		return null;
	}return list;
	}}
