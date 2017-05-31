package pageObjects;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class LateInEarlyOutReport {
  WebDriver dr;
  Utility u= new Utility();
  String r= "LateInEarlyOutReport";
  
  @FindBy(id="ContentPlaceHolder1_ddlschool")WebElement schoolname;
  @FindBy(id="ContentPlaceHolder1_txtattendancedate_TextBox")WebElement fromdate;
  @FindBy(id="ContentPlaceHolder1_txtenddate_TextBox")WebElement todate;
  @FindBy(id="ContentPlaceHolder1_Button1")WebElement show;
  
  public LateInEarlyOutReport(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openLateInEarlyOutReport()  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Late In Early Out Report")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Payroll/RptLateinEarlyOutReport.aspx']")));
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
  public void selectLateInEarlyOut(String le)
  {
	  List<WebElement>lieo= dr.findElements(By.name("ctl00$ContentPlaceHolder1$rdbforcondition"));
	  String val;
	  for(WebElement option:lieo)
	  {
		  if(le.equalsIgnoreCase("all"))
		  {
			  val="0";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
		  if(le.equalsIgnoreCase("only late in early out"))
		  {
			  val="1";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
		  if(le.equalsIgnoreCase("only late in"))
		  {
			  val="2";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
		  if(le.equalsIgnoreCase("only early out"))
		  {
			  val="3";
			  if(option.getAttribute("value").equals(val))
				  option.click();
		  }
	  }
  }
  public void clickShow(String sch, Collection<String>sc) throws IOException, InterruptedException {
	  show.click();
	  Thread.sleep(4000);
	  u.captureScreenshot(dr, sch, r,sc);
  }
}
