package attendancePageObject;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class AutoProcessAttendance {
   WebDriver dr;
   String pg="AutoProcessAttendance";
   Utility u= new Utility();
					  
   public AutoProcessAttendance(WebDriver d)
   {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
   }
   public void openAutoProcessAttendance()
   {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Attendance.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Auto Process Attendance")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Payroll/AutoProcessAttendance.aspx']")));
   }
   public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
   {
	  dr.findElement(By.id("ContentPlaceHolder1_btnCancel")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
   }	  
}
