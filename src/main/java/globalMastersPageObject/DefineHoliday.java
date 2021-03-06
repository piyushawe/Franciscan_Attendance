package globalMastersPageObject;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class DefineHoliday {
  WebDriver dr;
  String pg="DefineHoliday";
  Utility u= new Utility();
	  
  public DefineHoliday(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openDefineHoliday()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Global-Masters.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Define Holiday")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/SchoolCommonDetails/DefineHoliday.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.className("csslabel")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
  }	  
}
