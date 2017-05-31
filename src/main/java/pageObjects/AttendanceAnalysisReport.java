package pageObjects;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AttendanceAnalysisReport {
  WebDriver dr;
  Utility u= new Utility();
  String r= "AttendanceAnalysisReport";
  
  @FindBy(id="ContentPlaceHolder1_ddlschool")WebElement schoolname;
  @FindBy(id="ContentPlaceHolder1_txtstartdate_TextBox")WebElement fromdate;
  @FindBy(id="ContentPlaceHolder1_txtenddate_TextBox")WebElement todate;
  @FindBy(id="ContentPlaceHolder1_ddlStaffType")WebElement employeetype;
  @FindBy(id="ContentPlaceHolder1_chkList")WebElement excludegraph;
  @FindBy(id="ContentPlaceHolder1_Button1")WebElement analyze;
  
  public AttendanceAnalysisReport(WebDriver d)
  {
	  this.dr=d;    
	  PageFactory.initElements(d, this);
  }
  public void openAttendanceAnalysisReport()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Attendance Analysis Report")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Payroll/AttAnalysisReport.aspx']")));
  }
  public void selectSchoolName(String sch)
  {
	  new Select(schoolname).selectByVisibleText(sch);
  }
  public void selectFromDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, fromdate, mm, yy, dd);
  }
  public void selectToDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, todate, mm, yy, dd);
  }
  public void selectEmployeeType(String etype)
  {
	  new Select(employeetype).selectByVisibleText(etype);
  }
  public void selectExcludeGraph()
  {
	  excludegraph.click();
  }
  public void clickAnalyze(String sch, Collection<String>sc) throws IOException, InterruptedException {
	  analyze.click();
	  Thread.sleep(4000);
	  u.captureScreenshot(dr, sch, r,sc);
  }
}
