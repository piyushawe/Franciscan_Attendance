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

public class LeaveFormatReport {
  WebDriver dr;
  Utility u= new Utility();
  String r= "LeaveFormatReport";
  
  @FindBy(id="ContentPlaceHolder1_ddlschool")WebElement schoolname;
  @FindBy(id="ContentPlaceHolder1_ddlYearMonth")WebElement monthyear;
  @FindBy(name="ctl00$ContentPlaceHolder1$SingleButton1$ctl00")WebElement show;
  
  public LeaveFormatReport(WebDriver d)
  {
	  this.dr=d;    
	  PageFactory.initElements(d, this);
  }
  public void openLeaveFormatReport()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Reports.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Leave Format Report")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Report/Payroll/RptLeaveformatReport.aspx']")));
  }
  public void selectSchoolName(String sch)
  {
	  new Select(schoolname).selectByVisibleText(sch);
  }
  public void selectMonthYear(String my)
  {
	  new Select(monthyear).selectByVisibleText(my);
  }
  public void clickShow(String sch, Collection<String>sc) throws IOException, InterruptedException {
	  show.click();
	  Thread.sleep(4000);
	  u.captureScreenshot(dr, sch, r,sc);
  }
}
