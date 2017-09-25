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

public class LWPYearWiseReport {
  WebDriver dr;
  Utility u= new Utility(); 
  String r= "LWPYearWiseReport";
  
  @FindBy(id="ContentPlaceHolder1_ddlAcademicYear")WebElement academicyear;
  @FindBy(id="ContentPlaceHolder1_ddlStaff")WebElement staffname;
  @FindBy(id="ContentPlaceHolder1_ddlforformat")WebElement format;
  @FindBy(name="ctl00$ContentPlaceHolder1$btnShow$ctl00")WebElement show;
  
  public LWPYearWiseReport(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this);
  }
  public void openLWPYearWiseReport()
  {	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("LWP Year Wise Report")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Payroll/LWPReport.aspx']")));
  }
  public void selectAcademicYear(String ayr)
  {
	  new Select(academicyear).selectByVisibleText(ayr);
  }
  public void selectStaffName(String sname)
  {
	  new Select(staffname).selectByVisibleText(sname);
  }
  public void selectFormat(String fmt)
  {
	  new Select(format).selectByVisibleText(fmt);
  }
  public void clickShow(String sch, Collection<String>sc) throws IOException, InterruptedException {
	  show.click();
      u.verifyShow(dr, sch, r, sc);
	  Thread.sleep(4000);
	  u.captureScreenshot(dr, sch, r,sc);
 }
}
