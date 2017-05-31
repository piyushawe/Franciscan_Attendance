package globalMastersPageObject;

import java.io.IOException;
import java.util.Collection;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class DefineShift {
  WebDriver dr;
  String pg="DefineShift";
  Utility u= new Utility();
	  
  public DefineShift(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openDefineShift()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Global-Masters.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Define Shift")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/Payroll/DefineShiftMaster.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.className("csslabel")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
	  verifyWeekOff();
  }	  
  public void verifyWeekOff() 
  {
	  List<WebElement>weekoff= dr.findElements(By.name("ctl00$ContentPlaceHolder1$rdbWeekOff"));
	  boolean flag=false;
	  int i=0;
	  for(WebElement woff:weekoff)
	  {
		  if(weekoff.get(i).isSelected())
			  flag=true;
		  i++;
	  }
	  if(flag)
		  System.out.println("Week Off is selected");
	  else
		  System.out.println("Week Off is Not selected");
  }
}
