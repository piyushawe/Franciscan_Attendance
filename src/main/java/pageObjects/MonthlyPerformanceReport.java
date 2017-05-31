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

public class MonthlyPerformanceReport {
  WebDriver dr;
  Utility u= new Utility();
  String r= "MonthlyPerformanceReport";
  
  @FindBy(id="ContentPlaceHolder1_ddlschool")WebElement schoolname;
  @FindBy(id="ContentPlaceHolder1_ddlshiftname")WebElement shiftname;
  @FindBy(id="ContentPlaceHolder1_ddlformat")WebElement format;
  @FindBy(id="ContentPlaceHolder1_txtstartdate_TextBox")WebElement fromdate;
  @FindBy(id="ContentPlaceHolder1_txtEndDate_TextBox")WebElement todate;
  @FindBy(id="ContentPlaceHolder1_SingleButton1")WebElement show;
  
  public MonthlyPerformanceReport(WebDriver d)
  {
	  this.dr=d;    
	  PageFactory.initElements(d, this);
  }
  public void openMonthlyPerformanceReport()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Monthly Performance Report")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Payroll/RptMonthlyAttPerformance.aspx']")));
  }
  public void selectSchoolName(String sch)
  {
	  new Select(schoolname).selectByVisibleText(sch);
  }
  public void selectShiftName(String shf)
  {
	  new Select(shiftname).selectByVisibleText(shf);
  }
  public void selectFormat(String sch)
  {
	  new Select(format).selectByVisibleText(sch);
  }
  public void selectFromDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, fromdate, mm, yy, dd);
  }
  public void selectToDate(String mm, String yy, String dd) throws InterruptedException
  {
	  u.selectDate(dr, todate, mm, yy, dd);
  }
  public void clickShow(String sch, Collection<String>sc) throws IOException, InterruptedException {
	  show.click();
	  Thread.sleep(4000);
	  u.captureScreenshot(dr, sch, r,sc);
  }
}
