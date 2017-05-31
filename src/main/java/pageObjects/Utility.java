package pageObjects;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Collection;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.Scenario;

public class Utility {

	public void selectDate(WebDriver dr, WebElement date, String mm, String yy, String dd) throws InterruptedException 
	{
		date.click();
		Thread.sleep(800);
	  	new Select(dr.findElement(By.className("datepick-new-month"))).selectByVisibleText(mm);
	    Thread.sleep(800);
	    new Select(dr.findElement(By.className("datepick-new-year"))).selectByVisibleText(yy);
	  	Thread.sleep(800);
	    WebElement myw=dr.findElement(By.className("datepick"));
	  	List<WebElement> cells=myw.findElements(By.tagName("td"));
	  	 for(WebElement cell: cells) {
	  	  if (cell.getText().equals(dd)){  
	  	   cell.click();
	  		break; 
	   } 
	   }Thread.sleep(800);
	}
	
	public void captureScreenshot(WebDriver dr, String str, String r, Collection<String> sc) throws IOException
	 {
		 String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss").format(Calendar.getInstance().getTime());
		 File f= ((TakesScreenshot)dr).getScreenshotAs(OutputType.FILE);
		 FileUtils.copyFile(f,new File("D:/attendance_screenshots/"+str+"/"+r+"/"+r+sc+timeStamp+".png"));
	 }
}
