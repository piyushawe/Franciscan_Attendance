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

public class SchoolStaffAttendanceRegister {
  WebDriver dr;
  Utility u= new Utility();
  String r= "SchoolStaffAttendanceRegister";
  
  @FindBy(id="ContentPlaceHolder1_ddlschool")WebElement schoolname;
  @FindBy(id="ContentPlaceHolder1_ddlstafftype")WebElement stafftype;
  @FindBy(id="ContentPlaceHolder1_ddlYearMonth")WebElement monthyear;
  @FindBy(id="ContentPlaceHolder1_btnshow")WebElement show;
  
  public SchoolStaffAttendanceRegister(WebDriver d)
  {
	  this.dr=d;    
	  PageFactory.initElements(d, this);
  }
  public void openSchoolStaffAttendanceRegister()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("School Staff Attendance Register")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Payroll/RptSchoolStfAttReg.aspx']")));
  }
  public void selectSchoolName(String sch)
  {
	  new Select(schoolname).selectByVisibleText(sch);
  }
  public void selectStaffType(String stype)
  {
	  new Select(stafftype).selectByVisibleText(stype);
  }
  public void selectMonthYear(String myr)
  {
	  new Select(monthyear).selectByVisibleText(myr);
  }
  public void clickShow(String sch, Collection<String>sc) throws IOException, InterruptedException {
	  show.click();
      u.verifyShow(dr, sch, r, sc);
	  Thread.sleep(4000);
	  u.captureScreenshot(dr, sch, r,sc);
  }
}
