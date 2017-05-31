package attendancePageObject;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class UploadAttendance {
  WebDriver dr;
  String pg="UploadAttendance";
  Utility u= new Utility();
				  
  public UploadAttendance(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openUploadAttendance()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Attendance.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Upload Attendance")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Payroll/UploadAttendance.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.name("ctl00$ContentPlaceHolder1$btnCancel$ctl00")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
	  verifyLogFile();
  }	  
  public void verifyLogFile()
  {
	  List<WebElement>logfile= dr.findElements(By.name("ctl00$ContentPlaceHolder1$g"));
	  boolean flag=false;
	  int i=0;
	  for(WebElement lfile:logfile)
	  {
		  if(logfile.get(i).isSelected())
			  flag=true;
		  i++;
	  }
	  if(flag)
		  System.out.println("Log File is Selected");
	  else
		  System.out.println("Log File is Not selected");
  }
}
