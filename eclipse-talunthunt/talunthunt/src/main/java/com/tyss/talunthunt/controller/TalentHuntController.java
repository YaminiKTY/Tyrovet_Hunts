package com.tyss.talunthunt.controller;

//import java.io.File;
//import java.io.FileNotFoundException;
//import java.io.FileOutputStream;
//import java.io.IOException;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.List;

//import javax.print.attribute.standard.MediaPrintableArea;
//
//import org.hibernate.proxy.map.MapProxyFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestHeader;

import com.tyss.talunthunt.dto.RequirementBean;
import com.tyss.talunthunt.dto.CandidateInfoBean;
import com.tyss.talunthunt.dto.RequirementIdGeneratorBean;
import com.tyss.talunthunt.dto.TalentHuntResponse;
import com.tyss.talunthunt.dto.ScheduleInterviewBean;
import com.tyss.talunthunt.service.TalentHuntServiceDAO;

@RestController
@RequestMapping("/talenthunt")
@CrossOrigin(origins = "*", allowedHeaders = "*", allowCredentials = "true")
public class TalentHuntController {
	@Autowired
	private TalentHuntServiceDAO service;
	@Autowired
	private RequirementIdGeneratorBean generator;

	@InitBinder
	public void initBinder(WebDataBinder binder) {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		CustomDateEditor editor = new CustomDateEditor(format, true);
		binder.registerCustomEditor(Date.class, editor);
	}

	@PostMapping(path = "/addrequirement", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public TalentHuntResponse registerAddrequirement(@RequestBody RequirementBean reqinfo) {
		TalentHuntResponse talentHuntResponse = new TalentHuntResponse();

		if (generator.generate(reqinfo)) {
			RequirementBean info = service.addrequirement(reqinfo);
			talentHuntResponse.setStatusCode(200);
			talentHuntResponse.setMessage("Requirement has been registered successfully");

		} else {
			talentHuntResponse.setStatusCode(400);
			talentHuntResponse.setMessage(" adding requirement  failed");
		}

		return talentHuntResponse;
	}

	@PutMapping(path = "/updateinfo", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public TalentHuntResponse updatereqinfo(@RequestBody RequirementBean reqinfo) {
		TalentHuntResponse talentHuntResponse = new TalentHuntResponse();
		if (service.updateRequirement(reqinfo)) {
			talentHuntResponse.setStatusCode(200);
			talentHuntResponse.setMessage("updated successfully");

		} else {
			talentHuntResponse.setStatusCode(400);
			talentHuntResponse.setMessage("failed to update");
		}
		return talentHuntResponse;

	}

	@GetMapping(path = "/getAllInfo", produces = MediaType.APPLICATION_JSON_VALUE)
	public TalentHuntResponse getAllReqInfo() {
		TalentHuntResponse talentHuntResponse = new TalentHuntResponse();
		List<RequirementBean> addreqlist = service.getAllReqInfo();
		if (addreqlist == null) {
			talentHuntResponse.setStatusCode(400);

		} else {
			talentHuntResponse.setStatusCode(200);
			talentHuntResponse.setClientId("addreqlist");
			talentHuntResponse.setAdd(addreqlist);
		}
		return talentHuntResponse;

	}

	//@PostMapping(path = "/addcandidate", produces = MediaType.APPLICATION_JSON_VALUE) // , consumes = {
																						// "multipart/form-data" }
//	public TalentHuntResponse registerCandidate(@RequestHeader String candidateName, @RequestHeader String email,
//			@RequestHeader double candidateNo, @RequestHeader String govtId, @RequestHeader String relocate,
//			@RequestHeader String candidateType,  @RequestParam("file") MultipartFile file)
//			throws IOException {
//		TalentHuntResponse res = new TalentHuntResponse();
//		System.out.println(file);
//		File convFile = new File(file.getOriginalFilename());
//		FileOutputStream fos = new FileOutputStream(convFile);
//		fos.write(file.getBytes());
//		fos.close();
//		CandidateInfoBean candiinfo = new CandidateInfoBean();
//		candiinfo.setCandidateName(candidateName);
//		candiinfo.setEmail(email);
//		candiinfo.setCandidateNo(candidateNo);
//		candiinfo.setGovtId(govtId);
//		candiinfo.setRelocate(relocate);
//		candiinfo.setCandidateType(candidateType);
//		candiinfo.setUploadResume(convFile);
//		CandidateInfoBean info1 = service.addCandidate(candiinfo);
//		if (info1 != null) {
//			res.setStatusCode(200);
//			res.setMessage("candidate registered successfully");
//		} else {
//			res.setStatusCode(400);
//			res.setMessage("failed to add");
//		}
//
//		return res;
//
//	}
	@PostMapping(path = "/addcandidate", produces = MediaType.APPLICATION_JSON_VALUE)
	public TalentHuntResponse registerCandidate(@RequestBody CandidateInfoBean candidate) {
		TalentHuntResponse talentHuntResponse = new TalentHuntResponse();
		CandidateInfoBean info1 = service.addCandidate(candidate);
		if(info1 !=null) {
			talentHuntResponse.setStatusCode(200);
			talentHuntResponse.setMessage("candidate registered successfully");
		}else {
			talentHuntResponse.setStatusCode(400);
			talentHuntResponse.setMessage("failed to add");
		}
		return talentHuntResponse;

	}
	

	@GetMapping(path = "/getAllcandiInfo", produces = MediaType.APPLICATION_JSON_VALUE)
	public TalentHuntResponse getAllCandidates() {
		TalentHuntResponse talentHuntResponse = new TalentHuntResponse();
		List<CandidateInfoBean> info = service.getAllCandiInfo();
		if (info != null) {
			talentHuntResponse.setStatusCode(200);
			talentHuntResponse.setCandi(info);

		} else {
			talentHuntResponse.setStatusCode(400);
		}
		return talentHuntResponse;

	}

	@PostMapping(path = "/scheduleinterview", produces = MediaType.APPLICATION_JSON_VALUE)
	public TalentHuntResponse scheduleInterviewBean(@RequestBody ScheduleInterviewBean schedule) {
		System.out.println(schedule.getRequirement1());
		TalentHuntResponse talentHuntResponse = new TalentHuntResponse();
		ScheduleInterviewBean interview = service.scheduleInterviewBean(schedule);
		if (interview != null) {
			talentHuntResponse.setStatusCode(200);
			talentHuntResponse.setMessage("scheduled successfully");
			return talentHuntResponse;
		} else {
			talentHuntResponse.setStatusCode(400);
			talentHuntResponse.setMessage("schedulimg interview is failed");
			return talentHuntResponse;
		}
	}
	@GetMapping(path="/getallschedule",produces= MediaType.APPLICATION_JSON_VALUE)
	public TalentHuntResponse getAllSchedule() {
		TalentHuntResponse talentHuntResponse = new TalentHuntResponse();
		List<ScheduleInterviewBean> infoo = service.getAllscheduleinfo();
		if(infoo !=null) {
			talentHuntResponse.setStatusCode(200);
		    talentHuntResponse.setSchedule(infoo); 
			
		}else {
			talentHuntResponse.setStatusCode(400);
		}
		return talentHuntResponse;
		
	}
	@GetMapping(path="/getallmonthly",produces= MediaType.APPLICATION_JSON_VALUE)
	public TalentHuntResponse getAllMothlyRequir() {
		TalentHuntResponse talentHuntResponse = new TalentHuntResponse();
		List<RequirementBean> bean = service.getAllMonthlyRequi();
		if(bean != null) {
			talentHuntResponse.setStatusCode(200);
		    talentHuntResponse.setMessage("successs"); 
		    talentHuntResponse.setAdd(bean);
		    return talentHuntResponse;
		}else {
			 talentHuntResponse.setStatusCode(400);
			 talentHuntResponse.setMessage("failure"); 
			 return talentHuntResponse;
		}
		
	}
	

}
