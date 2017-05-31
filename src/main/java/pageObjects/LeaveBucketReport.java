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

public class LeaveBucketReport {
  WebDriver dr;
  Utility u= new Utility();
  String r= "LeaveBucketReport";
  
  @FindBy(id="ContentPlaceHolder1_ddlschool")WebElement schoolname;
  @FindBy(id="ContentPlaceHolder1_ddlYearMonth")WebElement frommonthyear;
  @FindBy(name="ctl00$ContentPlaceHolder1$SingleButton1$ctl00")WebElement show;
  
  public LeaveBucketReport(WebDriver d)
  {
	  this.dr=d;    
	  PageFactory.initElements(d, this);
  }
  public void openLeaveBucketReport()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Leave Bucket Report")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Payroll/Rptleavebucketereport.aspx']")));
  }
  public void selectSchoolName(String sch)
  {
	  new Select(schoolname).selectByVisibleText(sch);
  }
  public void selectFromMonthYear(String myr)
  {
	  new Select(frommonthyear).selectByVisibleText(myr);
  }
  public void clickEmployeeStatus(String estatus)
  {
	  List<WebElement>status= dr.findElements(By.name("ctl00$ContentPlaceHolder1$rdoempstatus"));
	  String val;
	  System.out.println(estatus);
	  for(WebElement stat:status)
	  {
		  if(estatus.equalsIgnoreCase("active"))
		  {
			  val="1";
			  if(stat.getAttribute("value").equals(val))
				  stat.click();
		  }
		  if(estatus.equalsIgnoreCase("inactive"))
		  {
			  val="0";
			  if(stat.getAttribute("value").equals(val))
				  stat.click();
		  }
		  if(estatus.equalsIgnoreCase("all"))
		  {
			  val="2";
			  if(stat.getAttribute("value").equals(val))
				  stat.click();
		  }
	  }
  }
  public void clickShow(String sch, Collection<String>sc) throws IOException, InterruptedException {
	  show.click();
	  Thread.sleep(4000);
	  u.captureScreenshot(dr, sch, r,sc);
  }
}
