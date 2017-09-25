package stepDefs;

import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import attendancePageObject.AssignDepartmentToStaff;
import attendancePageObject.AssignLeaveToStaff;
import attendancePageObject.AssignShiftToStaff;
import attendancePageObject.AutoProcessAttendance;
import attendancePageObject.DailyLeaveAcceptance;
import attendancePageObject.LeaveAcceptanceEmployeeWise;
import attendancePageObject.MarkManualAttendance;
import attendancePageObject.ProcessLeaveApplication;
import attendancePageObject.ReprocessAttendance;
import attendancePageObject.UploadAttendance;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import globalMastersPageObject.DefineAcademicYear;
import globalMastersPageObject.DefineFinancialYear;
import globalMastersPageObject.DefineHoliday;
import globalMastersPageObject.DefineLeave;
import globalMastersPageObject.DefineShift;
import globalMastersPageObject.DefineSmsTemplate;
import globalMastersPageObject.SessionTransfer;
import masterSettingsPageObject.ChangeAcademic;
import pageObjects.AbsentMissingAttendanceReport;
import pageObjects.AttendanceAnalysisReport;
import pageObjects.AttendanceConsolidatedReport;
import pageObjects.AttendanceReport;
import pageObjects.AttendanceReportMonthlyWise;
import pageObjects.BiometricsAttendanceDetailDepartmentWise;
import pageObjects.DailyPerformanceReport;
import pageObjects.LWPYearWiseReport;
import pageObjects.LateInEarlyOutReport;
import pageObjects.LeaveBalanceReport;
import pageObjects.LeaveBucketReport;
import pageObjects.LeaveCardReport;
import pageObjects.LeaveFormatReport;
import pageObjects.LeaveLedgerReport;
import pageObjects.LeaveRegisterReport;
import pageObjects.MonthlyAttendanceReport;
import pageObjects.MonthlyLateInCountReport;
import pageObjects.MonthlyPerformanceReport;
import pageObjects.SanctionedLeaveReport;
import pageObjects.SchoolStaffAttendanceRegister;
import pageObjects.StaffShiftRelationReport;
import pageObjects.StaffWiseDailyAttendanceReport;
import pageObjects.WeeklyAttendanceReport;

public class MyStepDefs {
  WebDriver dr;
  String schoolname;
  Collection<String> scenario;
	
  @Before
  public void launchBrowser(Scenario sc)
  {
	  //System.setProperty("webdriver.chrome.driver", "D:\\selenium\\chrome\\chromedriver.exe");
	  System.setProperty("webdriver.chrome.driver", "E:\\chromedriver\\chromedriver_win32\\chromedriver.exe");
	  dr= new ChromeDriver();
	  dr.manage().window().maximize();
	  scenario= sc.getSourceTagNames();
  }
  
  @After 
  public void closeBrowser() throws InterruptedException
  {
	  Thread.sleep(2000);
	  dr.quit();
  }
	@Given("^user enter \"([^\"]*)\"$")
	public void user_enter(String arg1) throws Throwable {
	    dr.get(arg1);
	}

	@When("^user enter username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void user_enter_username_and_password(String arg1, String arg2) throws Throwable {
		dr.findElement(By.id("txtUserName")).sendKeys(arg1);
		dr.findElement(By.id("txtPassword")).sendKeys(arg2);
	}

	@When("^passes school name \"([^\"]*)\"$")
	public void passes_school_name(String arg1) throws Throwable {
		schoolname= arg1;
	}

	@When("^click signin$")
	public void click_signin() throws Throwable {
		dr.findElement(By.id("btnLogin")).click();
		Thread.sleep(2000);
	}

	@Then("^attendance home page is opened$")
	public void attendance_home_page_is_opened() throws Throwable {
	    dr.findElement(By.xpath("//img[@src='images/big/Attendance-Manager.png']")).click();
	    //Thread.sleep(1000);
	}

//late in early out
	@When("^user open late in early out report$")
	public void user_open_late_in_early_out_report() throws Throwable {
		LateInEarlyOutReport lr= new LateInEarlyOutReport(dr);
		lr.openLateInEarlyOutReport();
	}
	
	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on late in early out report$")
	public void select_from_date_as_month_year_and_day_on_late_in_early_out_report(String arg1, String arg2, String arg3) throws Throwable {
		LateInEarlyOutReport lr= new LateInEarlyOutReport(dr);
		lr.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on late in early out report$")
	public void select_to_date_as_month_year_and_day_on_late_in_early_out_report(String arg1, String arg2, String arg3) throws Throwable {
		LateInEarlyOutReport lr= new LateInEarlyOutReport(dr);
		lr.selectToDate(arg1, arg2, arg3);
	}

	@When("^select \"([^\"]*)\" on late in early out report$")
	public void select_on_late_in_early_out_report(String arg1) throws Throwable {
		LateInEarlyOutReport lr= new LateInEarlyOutReport(dr);
		lr.selectLateInEarlyOut(arg1);
	}

	@Then("^click show to open late in early out report$")
	public void click_show_to_open_late_in_early_out_report() throws Throwable {
		LateInEarlyOutReport lr= new LateInEarlyOutReport(dr);
		lr.clickShow(schoolname, scenario);
	}

//attendance report monthly wise
	@When("^user open attendance report monthly wise page$")
	public void user_open_attendance_report_monthly_wise_page() throws Throwable {
		AttendanceReportMonthlyWise ar= new AttendanceReportMonthlyWise(dr);
		ar.openAttendanceReportMonthlyWise();
	}

	@When("^select month year \"([^\"]*)\" on late in early out report$")
	public void select_month_year_on_late_in_early_out_report(String arg1) throws Throwable {
		AttendanceReportMonthlyWise ar= new AttendanceReportMonthlyWise(dr);
		ar.selectMonthYear(arg1);
	}

	@Then("^click show to open attendance report monthly wise$")
	public void click_show_to_open_attendance_report_monthly_wise() throws Throwable {
		AttendanceReportMonthlyWise ar= new AttendanceReportMonthlyWise(dr);
		ar.clickShow(schoolname, scenario);
	}
	
//lwp yearwise report
	@When("^user open lwp yearwise report page$")
	public void user_open_lwp_yearwise_report_page() throws Throwable {
		LWPYearWiseReport lwpr= new LWPYearWiseReport(dr);
		lwpr.openLWPYearWiseReport();
	}

	@When("^select academic year \"([^\"]*)\" on lwp yearwise report$")
	public void select_academic_year_on_lwp_yearwise_report(String arg1) throws Throwable {
		LWPYearWiseReport lwpr= new LWPYearWiseReport(dr);
		lwpr.selectAcademicYear(arg1);
	}

	@Then("^click show to open lwp yearwise report$")
	public void click_show_to_open_lwp_yearwise_report() throws Throwable {
		LWPYearWiseReport lwpr= new LWPYearWiseReport(dr);
		lwpr.clickShow(schoolname, scenario);
	}

//attendance consolidated report
	@When("^user open attendance consolidated report$")
	public void user_open_attendance_consolidated_report() throws Throwable {
		AttendanceConsolidatedReport acr= new AttendanceConsolidatedReport(dr);
		acr.openAttendanceConsolidatedReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on attendance consolidated report$")
	public void select_from_date_as_month_year_and_day_on_attendance_consolidated_report(String arg1, String arg2, String arg3) throws Throwable {
		AttendanceConsolidatedReport acr= new AttendanceConsolidatedReport(dr);
		acr.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on attendance consolidated report$")
	public void select_to_date_as_month_year_and_day_on_attendance_consolidated_report(String arg1, String arg2, String arg3) throws Throwable {
		AttendanceConsolidatedReport acr= new AttendanceConsolidatedReport(dr);
		acr.selectToDate(arg1, arg2, arg3);
	}

	@When("^select \"([^\"]*)\" on attendance consolidated report$")
	public void select_on_attendance_consolidated_report(String arg1) throws Throwable {
		AttendanceConsolidatedReport acr= new AttendanceConsolidatedReport(dr);
		acr.selectList(arg1);
	}

	@Then("^click show to open attendance consolidated report$")
	public void click_show_to_open_attendance_consolidated_report() throws Throwable {
		AttendanceConsolidatedReport acr= new AttendanceConsolidatedReport(dr);
		acr.clickShow(schoolname, scenario);
	}

//staff wise daily attendance report
	@When("^user open staff wise daily attendance report$")
	public void user_open_staff_wise_daily_attendance_report() throws Throwable {
		StaffWiseDailyAttendanceReport sr= new StaffWiseDailyAttendanceReport(dr);
		sr.openStaffWiseDailyAttendanceReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on staff wise daily attendance report$")
	public void select_from_date_as_month_year_and_day_on_staff_wise_daily_attendance_report(String arg1, String arg2, String arg3) throws Throwable {
		StaffWiseDailyAttendanceReport sr= new StaffWiseDailyAttendanceReport(dr);
		sr.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on staff wise daily attendance report$")
	public void select_to_date_as_month_year_and_day_on_staff_wise_daily_attendance_report(String arg1, String arg2, String arg3) throws Throwable {
		StaffWiseDailyAttendanceReport sr= new StaffWiseDailyAttendanceReport(dr);
		sr.selectToDate(arg1, arg2, arg3);
	}

	@Then("^click show to open staff wise daily attendance report$")
	public void click_show_to_open_staff_wise_daily_attendance_report() throws Throwable {
		StaffWiseDailyAttendanceReport sr= new StaffWiseDailyAttendanceReport(dr);
		sr.clickShow(schoolname, scenario);
	}

//absent missing attendance report
	@When("^user open absent missing attendance report$")
	public void user_open_absent_missing_attendance_report() throws Throwable {
		AbsentMissingAttendanceReport abm= new AbsentMissingAttendanceReport(dr);
		abm.openAbsentMissingAttendanceReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on absent missing attendance report$")
	public void select_from_date_as_month_year_and_day_on_absent_missing_attendance_report(String arg1, String arg2, String arg3) throws Throwable {
		AbsentMissingAttendanceReport abm= new AbsentMissingAttendanceReport(dr);
		abm.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on absent missing attendance report$")
	public void select_to_date_as_month_year_and_day_on_absent_missing_attendance_report(String arg1, String arg2, String arg3) throws Throwable {
		AbsentMissingAttendanceReport abm= new AbsentMissingAttendanceReport(dr);
		abm.selectToDate(arg1, arg2, arg3);
	}

	@When("^select \"([^\"]*)\" on absent missing attendance report$")
	public void select_on_absent_missing_attendance_report(String arg1) throws Throwable {
		AbsentMissingAttendanceReport abm= new AbsentMissingAttendanceReport(dr);
		abm.selectAbsentMissing(arg1);
	}

	@Then("^click show to open absent missing attendance report$")
	public void click_show_to_open_absent_missing_attendance_report() throws Throwable {
		AbsentMissingAttendanceReport abm= new AbsentMissingAttendanceReport(dr);
		abm.clickShow(schoolname, scenario);
	}

//biometrics attendance detail department wise
	@When("^user open biometrics attendance detail department wise$")
	public void user_open_biometrics_attendance_detail_department_wise() throws Throwable {
		BiometricsAttendanceDetailDepartmentWise biodt= new BiometricsAttendanceDetailDepartmentWise(dr);
		biodt.openBiometricsAttendanceDetailDepartmentWise();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on biometrics attendance detail department wise$")
	public void select_from_date_as_month_year_and_day_on_biometrics_attendance_detail_department_wise(String arg1, String arg2, String arg3) throws Throwable {
		BiometricsAttendanceDetailDepartmentWise biodt= new BiometricsAttendanceDetailDepartmentWise(dr);
		biodt.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on biometrics attendance detail department wise$")
	public void select_to_date_as_month_year_and_day_on_biometrics_attendance_detail_department_wise(String arg1, String arg2, String arg3) throws Throwable {
		BiometricsAttendanceDetailDepartmentWise biodt= new BiometricsAttendanceDetailDepartmentWise(dr);
		biodt.selectToDate(arg1, arg2, arg3);
	}

	@Then("^click show to open biometrics attendance detail department wise$")
	public void click_show_to_open_biometrics_attendance_detail_department_wise() throws Throwable {
		BiometricsAttendanceDetailDepartmentWise biodt= new BiometricsAttendanceDetailDepartmentWise(dr);
		biodt.clickShow(schoolname, scenario);
	}

//staff shift relation report
	@When("^user open staff shift relation report$")
	public void user_open_staff_shift_relation_report() throws Throwable {
		StaffShiftRelationReport sr= new StaffShiftRelationReport(dr);
		sr.openStaffShiftRelationReport();
	}

	@Then("^click show to open staff shift relation report$")
	public void click_show_to_open_staff_shift_relation_report() throws Throwable {
		StaffShiftRelationReport sr= new StaffShiftRelationReport(dr);
		sr.clickShow(schoolname, scenario);
	}
	
//weekly attendance report
	@When("^user open weekly attendance report$")
	public void user_open_weekly_attendance_report() throws Throwable {
		WeeklyAttendanceReport war= new WeeklyAttendanceReport(dr);
		war.openWeeklyAttendanceReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on weekly attendance report$")
	public void select_from_date_as_month_year_and_day_on_weekly_attendance_report(String arg1, String arg2, String arg3) throws Throwable {
		WeeklyAttendanceReport war= new WeeklyAttendanceReport(dr);
		war.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on weekly attendance report$")
	public void select_to_date_as_month_year_and_day_on_weekly_attendance_report(String arg1, String arg2, String arg3) throws Throwable {
		WeeklyAttendanceReport war= new WeeklyAttendanceReport(dr);
		war.selectToDate(arg1, arg2, arg3);
	}

	@Then("^click show to open weekly attendance report$")
	public void click_show_to_open_weekly_attendance_report() throws Throwable {
		WeeklyAttendanceReport war= new WeeklyAttendanceReport(dr);
		war.clickShow(schoolname, scenario);
	}

//monthly attendance report
	@When("^user open monthly attendance report$")
	public void user_open_monthly_attendance_report() throws Throwable {
		MonthlyAttendanceReport mr= new MonthlyAttendanceReport(dr);
		mr.openMonthlyAttendanceReport();
	}

	@When("^select month year \"([^\"]*)\" on monthly attendance report$")
	public void select_month_year_on_monthly_attendance_report(String arg1) throws Throwable {
		MonthlyAttendanceReport mr= new MonthlyAttendanceReport(dr);
		mr.selectMonthYear(arg1);
	}

	@Then("^click show to open monthly attendance report$")
	public void click_show_to_open_monthly_attendance_report() throws Throwable {
		MonthlyAttendanceReport mr= new MonthlyAttendanceReport(dr);
		mr.clickShow(schoolname, scenario);
	}

//daily performance report
	@When("^user open daily performance report$")
	public void user_open_daily_performance_report() throws Throwable {
		DailyPerformanceReport dpr= new DailyPerformanceReport(dr);
		dpr.openDailyPerformanceReport();
	}

	@Then("^click show to open daily performance report$")
	public void click_show_to_open_daily_performance_report() throws Throwable {
		DailyPerformanceReport dpr= new DailyPerformanceReport(dr);
		dpr.clickShow(schoolname, scenario);
	}
	
//leave format report
	@When("^user open leave format report$")
	public void user_open_leave_format_report() throws Throwable {
		LeaveFormatReport lr= new LeaveFormatReport(dr);
		lr.openLeaveFormatReport();
	}

	@When("^select month year \"([^\"]*)\" on leave format report$")
	public void select_month_year_on_leave_format_report(String arg1) throws Throwable {
		LeaveFormatReport lr= new LeaveFormatReport(dr);
		lr.selectMonthYear(arg1);
	}

	@Then("^click show to open leave format report$")
	public void click_show_to_open_leave_format_report() throws Throwable {
		LeaveFormatReport lr= new LeaveFormatReport(dr);
		lr.clickShow(schoolname, scenario);
	}

//attendance report
	@When("^user open attendance report$")
	public void user_open_attendance_report() throws Throwable {
		AttendanceReport ar= new AttendanceReport(dr);
		ar.openAttendanceReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on attendance report$")
	public void select_from_date_as_month_year_and_day_on_attendance_report(String arg1, String arg2, String arg3) throws Throwable {
		AttendanceReport ar= new AttendanceReport(dr);
		ar.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on attendance report$")
	public void select_to_date_as_month_year_and_day_on_attendance_report(String arg1, String arg2, String arg3) throws Throwable {
		AttendanceReport ar= new AttendanceReport(dr);
		ar.selectToDate(arg1, arg2, arg3);
	}

	@Then("^click show to open attendance report$")
	public void click_show_to_open_attendance_report() throws Throwable {
		AttendanceReport ar= new AttendanceReport(dr);
		ar.clickShow(schoolname, scenario);
	}

//attendance analysis report
	@When("^user open attendance analysis report$")
	public void user_open_attendance_analysis_report() throws Throwable {
		AttendanceAnalysisReport aar= new AttendanceAnalysisReport(dr);
		aar.openAttendanceAnalysisReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on attendance analysis report$")
	public void select_from_date_as_month_year_and_day_on_attendance_analysis_report(String arg1, String arg2, String arg3) throws Throwable {
		AttendanceAnalysisReport aar= new AttendanceAnalysisReport(dr);
		aar.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on attendance analysis report$")
	public void select_to_date_as_month_year_and_day_on_attendance_analysis_report(String arg1, String arg2, String arg3) throws Throwable {
		AttendanceAnalysisReport aar= new AttendanceAnalysisReport(dr);
		aar.selectToDate(arg1, arg2, arg3);
	}

	@When("^select exclude graph on attendance analysis report$")
	public void select_exclude_graph_on_attendance_analysis_report() throws Throwable {
		AttendanceAnalysisReport aar= new AttendanceAnalysisReport(dr);
		aar.selectExcludeGraph();
	}
	
	@Then("^click show to open attendance analysis report$")
	public void click_show_to_open_attendance_analysis_report() throws Throwable {
		AttendanceAnalysisReport aar= new AttendanceAnalysisReport(dr);
		aar.clickAnalyze(schoolname, scenario);
	}
	
//leave balance report
	@When("^user open leave balance report$")
	public void user_open_leave_balance_report() throws Throwable {
		LeaveBalanceReport lr= new LeaveBalanceReport(dr);
		lr.openLeaveBalanceReport();
	}

	@When("^select from month year \"([^\"]*)\" on leave balance report$")
	public void select_from_month_year_on_leave_balance_report(String arg1) throws Throwable {
		LeaveBalanceReport lr= new LeaveBalanceReport(dr);
		lr.selectFromMonthYear(arg1);
	}

	@When("^select to month year \"([^\"]*)\" on leave balance report$")
	public void select_to_month_year_on_leave_balance_report(String arg1) throws Throwable {
		LeaveBalanceReport lr= new LeaveBalanceReport(dr);
		lr.selectToMonthYear(arg1);
	}

	@Then("^click show to open leave balance report$")
	public void click_show_to_open_leave_balance_report() throws Throwable {
		LeaveBalanceReport lr= new LeaveBalanceReport(dr);
		lr.clickShow(schoolname, scenario);
	}

//sanctioned leave report
	@When("^user open sanctioned leave report$")
	public void user_open_sanctioned_leave_report() throws Throwable {
		SanctionedLeaveReport lr= new SanctionedLeaveReport(dr);
		lr.openSanctionedLeaveReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on sanctioned leave report$")
	public void select_from_date_as_month_year_and_day_on_sanctioned_leave_report(String arg1, String arg2, String arg3) throws Throwable {
		SanctionedLeaveReport lr= new SanctionedLeaveReport(dr);
		lr.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on sanctioned leave report$")
	public void select_to_date_as_month_year_and_day_on_sanctioned_leave_report(String arg1, String arg2, String arg3) throws Throwable {
		SanctionedLeaveReport lr= new SanctionedLeaveReport(dr);
		lr.selectToDate(arg1, arg2, arg3);
	}

	@Then("^click show to open sanctioned leave report$")
	public void click_show_to_open_sanctioned_leave_report() throws Throwable {
		SanctionedLeaveReport lr= new SanctionedLeaveReport(dr);
		lr.clickShow(schoolname, scenario);
	}

//leave card report
	@When("^user open leave card report$")
	public void user_open_leave_card_report() throws Throwable {
		LeaveCardReport lcr= new LeaveCardReport(dr);
		lcr.openLeaveCardReport();
	}

	@When("^select year \"([^\"]*)\" on leave card report$")
	public void select_year_on_leave_card_report(String arg1) throws Throwable {
		LeaveCardReport lcr= new LeaveCardReport(dr);
		lcr.selectYear(arg1);
	}

	@Then("^click show to open leave card report$")
	public void click_show_to_open_leave_card_report() throws Throwable {
		LeaveCardReport lcr= new LeaveCardReport(dr);
		lcr.clickShow(schoolname, scenario);
	}
	
//monthly performance report
	@When("^user open monthly performance report$")
	public void user_open_monthly_performance_report() throws Throwable {
		MonthlyPerformanceReport mpr= new MonthlyPerformanceReport(dr);
		mpr.openMonthlyPerformanceReport();
	}

	@When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on monthly performance report$")
	public void select_from_date_as_month_year_and_day_on_monthly_performance_report(String arg1, String arg2, String arg3) throws Throwable {
		MonthlyPerformanceReport mpr= new MonthlyPerformanceReport(dr);
		mpr.selectFromDate(arg1, arg2, arg3);
	}

	@When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on monthly performance report$")
	public void select_to_date_as_month_year_and_day_on_monthly_performance_report(String arg1, String arg2, String arg3) throws Throwable {
		MonthlyPerformanceReport mpr= new MonthlyPerformanceReport(dr);
		mpr.selectToDate(arg1, arg2, arg3);
	}

	@Then("^click show to open monthly performance report$")
	public void click_show_to_open_monthly_performance_report() throws Throwable {
		MonthlyPerformanceReport mpr= new MonthlyPerformanceReport(dr);
		mpr.clickShow(schoolname, scenario);
	}

//leave ledger report
	@When("^user open leave ledger report$")
	public void user_open_leave_ledger_report() throws Throwable {
		LeaveLedgerReport llr= new LeaveLedgerReport(dr);
		llr.openLeaveLedgerReport();
	}

	@When("^select year \"([^\"]*)\" on leave ledger report$")
	public void select_year_on_leave_ledger_report(String arg1) throws Throwable {
		LeaveLedgerReport llr= new LeaveLedgerReport(dr);
		llr.selectYear(arg1);
	}

	@Then("^click show to open leave ledger report$")
	public void click_show_to_open_leave_ledger_report() throws Throwable {
		LeaveLedgerReport llr= new LeaveLedgerReport(dr);
		llr.clickShow(schoolname, scenario);
	}
	
//leave register report
	@When("^user open leave register report$")
	public void user_open_leave_register_report() throws Throwable {
		LeaveRegisterReport lrr= new LeaveRegisterReport(dr);
		lrr.openLeaveRegisterReport();
		
	}

	@When("^select year \"([^\"]*)\" on leave register report$")
	public void select_year_on_leave_register_report(String arg1) throws Throwable {
		LeaveRegisterReport lrr= new LeaveRegisterReport(dr);
		lrr.selectYear(arg1);
	}

	@Then("^click show to open leave register report$")
	public void click_show_to_open_leave_register_report() throws Throwable {
		LeaveRegisterReport lrr= new LeaveRegisterReport(dr);
		lrr.clickShow(schoolname, scenario);
	}
	
//leave bucket report

   @When("^user open leave bucket report$")
   public void user_open_leave_bucket_report() throws Throwable {
	   LeaveBucketReport lbr= new LeaveBucketReport(dr);
	   lbr.openLeaveBucketReport();
    }

    @When("^select month year \"([^\"]*)\" on leave bucket report$")
    public void select_month_year_on_leave_bucket_report(String arg1) throws Throwable {
    	LeaveBucketReport lbr= new LeaveBucketReport(dr);
    	lbr.selectFromMonthYear(arg1);
    }

    @When("^select employee status \"([^\"]*)\" on leave bucket report$")
    public void select_employee_status_on_leave_bucket_report(String arg1) throws Throwable {
    	LeaveBucketReport lbr= new LeaveBucketReport(dr);
    	lbr.clickEmployeeStatus(arg1);
    }

    @Then("^click show to open leave bucket report$")
    public void click_show_to_open_leave_bucket_report() throws Throwable {
    	LeaveBucketReport lbr= new LeaveBucketReport(dr);
    	lbr.clickShow(schoolname, scenario);
    }

//school staff attendance register
    @When("^user open school staff attendance register$")
    public void user_open_school_staff_attendance_register() throws Throwable {
    	SchoolStaffAttendanceRegister ssar= new SchoolStaffAttendanceRegister(dr);
    	ssar.openSchoolStaffAttendanceRegister();
    }

    @When("^select month year \"([^\"]*)\" on school staff attendance register$")
    public void select_month_year_on_school_staff_attendance_register(String arg1) throws Throwable {
    	SchoolStaffAttendanceRegister ssar= new SchoolStaffAttendanceRegister(dr);
    	ssar.selectMonthYear(arg1);
    }

    @Then("^click show to open school staff attendance register$")
    public void click_show_to_open_school_staff_attendance_register() throws Throwable {
    	SchoolStaffAttendanceRegister ssar= new SchoolStaffAttendanceRegister(dr);
    	ssar.clickShow(schoolname, scenario);
    }

//monthly late in count report
    @When("^user open monthly monthly late in count report$")
    public void user_open_monthly_monthly_late_in_count_report() throws Throwable {
    	MonthlyLateInCountReport mlcr= new MonthlyLateInCountReport(dr);
    	mlcr.openMonthlyLateInCountReport();
    }

    @When("^select from date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on monthly late in count report$")
    public void select_from_date_as_month_year_and_day_on_monthly_late_in_count_report(String arg1, String arg2, String arg3) throws Throwable {
    	MonthlyLateInCountReport mlcr= new MonthlyLateInCountReport(dr);
    	mlcr.selectFromDate(arg1, arg2, arg3);
    }

    @When("^select to date as month \"([^\"]*)\" year \"([^\"]*)\" and day \"([^\"]*)\" on monthly late in count report$")
    public void select_to_date_as_month_year_and_day_on_monthly_late_in_count_report(String arg1, String arg2, String arg3) throws Throwable {
    	MonthlyLateInCountReport mlcr= new MonthlyLateInCountReport(dr);
    	mlcr.selectToDate(arg1, arg2, arg3);
    }

    @Then("^click show to open monthly late in count report$")
    public void click_show_to_open_monthly_late_in_count_report() throws Throwable {
    	MonthlyLateInCountReport mlcr= new MonthlyLateInCountReport(dr);
    	mlcr.clickShow(schoolname, scenario);
    }

//change academic
    @When("^user open change academic page$")
    public void user_open_change_academic_page() throws Throwable {
    	ChangeAcademic ca= new ChangeAcademic(dr);
    	ca.openChangeAcademic();
    }

    @Then("^verify change academic page$")
    public void verify_change_academic_page() throws Throwable {
    	ChangeAcademic ca= new ChangeAcademic(dr);
    	ca.verifyPage(schoolname, scenario);
    }
    
//define academic year
    @When("^user open define academic year page$")
    public void user_open_define_academic_year_page() throws Throwable {
    	DefineAcademicYear day= new DefineAcademicYear(dr);
    	day.openDefineAcademicYear();
    }

    @Then("^verify define academic year page$")
    public void verify_define_academic_year_page() throws Throwable {
    	DefineAcademicYear day= new DefineAcademicYear(dr);
    	day.verifyPage(schoolname, scenario);
    }

//define financial year
    @When("^user open define financial year page$")
    public void user_open_define_financial_year_page() throws Throwable {
    	DefineFinancialYear dfy= new DefineFinancialYear(dr);
    	dfy.openDefineFinancialYear();
    }

    @Then("^verify define financial year page$")
    public void verify_define_financial_year_page() throws Throwable {
    	DefineFinancialYear dfy= new DefineFinancialYear(dr);
    	dfy.verifyPage(schoolname, scenario);
    }
    
//define holiday
    @When("^user open define holiday page$")
    public void user_open_define_holiday_page() throws Throwable {
    	DefineHoliday dh= new DefineHoliday(dr);
    	dh.openDefineHoliday();
    }

    @Then("^verify define holiday page$")
    public void verify_define_holiday_page() throws Throwable {
    	DefineHoliday dh= new DefineHoliday(dr);
    	dh.verifyPage(schoolname, scenario);
    }
    
//define shift
    @When("^user open define shift page$")
    public void user_open_define_shift_page() throws Throwable {
    	DefineShift ds= new DefineShift(dr);
    	ds.openDefineShift();
    }

    @Then("^verify define shift page$")
    public void verify_define_shift_page() throws Throwable {
    	DefineShift ds= new DefineShift(dr);
    	ds.verifyPage(schoolname, scenario);
    }

//define leave
    @When("^user open define leave page$")
    public void user_open_define_leave_page() throws Throwable {
    	DefineLeave dl= new DefineLeave(dr);
    	dl.openDefineLeave();
    }

    @Then("^verify define leave page$")
    public void verify_define_leave_page() throws Throwable {
    	DefineLeave dl= new DefineLeave(dr);
    	dl.verifyPage(schoolname, scenario);
    }
    
//define sms template
    @When("^user open define sms template page$")
    public void user_open_define_sms_template_page() throws Throwable {
    	DefineSmsTemplate dst= new DefineSmsTemplate(dr);
    	dst.openDefineSmsTemplate();
    }

    @Then("^verify define sms template page$")
    public void verify_define_sms_template_page() throws Throwable {
    	DefineSmsTemplate dst= new DefineSmsTemplate(dr);
    	dst.verifyPage(schoolname, scenario);
    }

//session transfer
    @When("^user open session transfer page$")
    public void user_open_session_transfer_page() throws Throwable {
    	SessionTransfer st= new SessionTransfer(dr);
    	st.openSessionTransfer();
    }

    @Then("^verify session transfer page$")
    public void verify_session_transfer_page() throws Throwable {
    	SessionTransfer st= new SessionTransfer(dr);
    	st.verifyPage(schoolname, scenario);
    }

    @Then("^verify account manager$")
    public void verify_account_manager() throws Throwable {
    	SessionTransfer st= new SessionTransfer(dr);
    	st.verifyAccountManager(schoolname, scenario);
    }
    
    @Then("^verify fee manager$")
    public void verify_fee_manager() throws Throwable {
    	SessionTransfer st= new SessionTransfer(dr);
    	st.verifyFeeManager(schoolname, scenario);
    }

    @Then("^verify payroll manager$")
    public void verify_payroll_manager() throws Throwable {
    	SessionTransfer st= new SessionTransfer(dr);
    	st.verifyPayrollManager(schoolname, scenario);
    }

    @Then("^verify admission manager$")
    public void verify_admission_manager() throws Throwable {
    	SessionTransfer st= new SessionTransfer(dr);
    	st.verifyAdmissionManager(schoolname, scenario);
    }
    
//assign shift to staff
    @When("^user open assign shift to staff page$")
    public void user_open_assign_shift_to_staff_page() throws Throwable {
    	AssignShiftToStaff ass= new AssignShiftToStaff(dr);
    	ass.openAssignShiftToStaff();
    }

    @Then("^verify assign shift to staff page$")
    public void verify_assign_shift_to_staff_page() throws Throwable {
    	AssignShiftToStaff ass= new AssignShiftToStaff(dr);
    	ass.verifyPage(schoolname, scenario);
    }
    
//assign leave to staff
    @When("^user open assign leave to staff page$")
    public void user_open_assign_leave_to_staff_page() throws Throwable {
    	AssignLeaveToStaff als= new AssignLeaveToStaff(dr);
    	als.openAssignLeaveToStaff();
    }

    @Then("^verify assign leave to staff page$")
    public void verify_assign_leave_to_staff_page() throws Throwable {
    	AssignLeaveToStaff als= new AssignLeaveToStaff(dr);
    	als.verifyPage(schoolname, scenario);
    }
    
//assign department to staff
    @When("^user open assign department to staff page$")
    public void user_open_assign_department_to_staff_page() throws Throwable {
    	AssignDepartmentToStaff ads= new AssignDepartmentToStaff(dr);
    	ads.openAssignDepartmentToStaff();
    }

    @Then("^verify assign department to staff page$")
    public void verify_assign_department_to_staff_page() throws Throwable {
    	AssignDepartmentToStaff ads= new AssignDepartmentToStaff(dr);
    	ads.verifyPage(schoolname, scenario);
    }
    
//upload attendance
    @When("^user open upload attendance page$")
    public void user_open_upload_attendance_page() throws Throwable {
    	UploadAttendance ua= new UploadAttendance(dr);
    	ua.openUploadAttendance();
    }

    @Then("^verify upload attendance page$")
    public void verify_upload_attendance_page() throws Throwable {
    	UploadAttendance ua= new UploadAttendance(dr);
    	ua.verifyPage(schoolname, scenario);
    }
    
//mark manual attendance
    @When("^user open mark manual attendance page$")
    public void user_open_mark_manual_attendance_page() throws Throwable {
    	MarkManualAttendance mma= new MarkManualAttendance(dr);
    	mma.openMarkManualAttendance();
    }

    @Then("^verify mark manual attendance page$")
    public void verify_mark_manual_attendance_page() throws Throwable {
    	MarkManualAttendance mma= new MarkManualAttendance(dr);
    	mma.verifyPage(schoolname, scenario);
    }

//autoprocess attendance
    @When("^user open autoprocess attendance page$")
    public void user_open_autoprocess_attendance_page() throws Throwable {
    	AutoProcessAttendance apa= new AutoProcessAttendance(dr);
    	apa.openAutoProcessAttendance();
    }

    @Then("^verify autoprocess attendance page$")
    public void verify_autoprocess_attendance_page() throws Throwable {
    	AutoProcessAttendance apa= new AutoProcessAttendance(dr);
    	apa.verifyPage(schoolname, scenario);
    }
    
//daily leave acceptance
    @When("^user open daily leave acceptance page$")
    public void user_open_daily_leave_acceptance_page() throws Throwable {
    	DailyLeaveAcceptance dla= new DailyLeaveAcceptance(dr);
    	dla.openDailyLeaveAcceptance();
    }

    @Then("^verify daily leave acceptance page$")
    public void verify_daily_leave_acceptance_page() throws Throwable {
    	DailyLeaveAcceptance dla= new DailyLeaveAcceptance(dr);
    	dla.verifyPage(schoolname, scenario);
    }
    
//process leave application
    @When("^user open process leave application page$")
    public void user_open_process_leave_application_page() throws Throwable {
    	ProcessLeaveApplication pla= new ProcessLeaveApplication(dr);
    	pla.openProcessLeaveApplication();
    }

    @Then("^verify process leave application page$")
    public void verify_process_leave_application_page() throws Throwable {
    	ProcessLeaveApplication pla= new ProcessLeaveApplication(dr);
    	pla.verifyPage(schoolname, scenario);
    }
    
//reprocess attendance
    @When("^user open reprocess attendance page$")
    public void user_open_reprocess_attendance_page() throws Throwable {
    	ReprocessAttendance ra= new ReprocessAttendance(dr);
    	ra.openReprocessAttendance();
    }

    @Then("^verify reprocess attendance page$")
    public void verify_reprocess_attendance_page() throws Throwable {
    	ReprocessAttendance ra= new ReprocessAttendance(dr);
    	ra.verifyPage(schoolname, scenario);
    }
    
//leave acceptance employee wise
    @When("^user open leave acceptance employee wise page$")
    public void user_open_leave_acceptance_employee_wise_page() throws Throwable {
    	LeaveAcceptanceEmployeeWise laew= new LeaveAcceptanceEmployeeWise(dr);
    	laew.openLeaveAcceptanceEmployeeWise();
    }

    @Then("^verify leave acceptance employee wise page$")
    public void verify_leave_acceptance_employee_wise_page() throws Throwable {
    	LeaveAcceptanceEmployeeWise laew= new LeaveAcceptanceEmployeeWise(dr);
    	laew.verifyPage(schoolname, scenario);
    }

}
