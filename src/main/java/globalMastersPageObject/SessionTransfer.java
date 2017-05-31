package globalMastersPageObject;

import java.io.IOException;
import java.util.Collection;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Utility;

public class SessionTransfer {
  WebDriver dr;
  String pg="SessionTransfer";
  Utility u= new Utility();
	  
  public SessionTransfer(WebDriver d)
  {
	  this.dr=d;
	  PageFactory.initElements(d, this); 
  }
  public void openSessionTransfer()
  {
	  WebElement menu= dr.findElement(By.xpath("//img[@src='/Images/layout/Global-Masters.png']"));
	  Actions builder= new Actions(dr);
	  builder.moveToElement(menu).build().perform();
	  dr.findElement(By.linkText("Session Transfer")).click();
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/SchoolCommonDetails/TransferSessionMainPage.aspx']")));
  }
  public void verifyPage(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//div[@class='content']")).click();
	  Thread.sleep(1000);
	  u.captureScreenshot(dr,schl,pg,sc);
  }	  
  public void verifyAccountManager(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.findElement(By.xpath("//img[@src='/Images/layout/Account-Manager.png']")).click();
	  Thread.sleep(500);
	  u.captureScreenshot(dr,schl,pg,sc);
	  //dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/AccountManager/AccAcademicyearTransfer.aspx']")));
	  dr.switchTo().defaultContent();
	  dr.findElement(By.xpath("//*[@id=\"tt\"]/div[1]/div[3]/ul/li[2]/a[2]")).click();
  }
  public void verifyFeeManager(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/SchoolCommonDetails/TransferSessionMainPage.aspx']")));
	  dr.findElement(By.xpath("//img[@src='/Images/layout/Fee-Manager.png']")).click();
	  Thread.sleep(500);
	  u.captureScreenshot(dr,schl,pg,sc);
	  dr.switchTo().defaultContent();
	  dr.findElement(By.xpath("//*[@id=\"tt\"]/div[1]/div[3]/ul/li[2]/a[2]")).click();
  }
  public void verifyPayrollManager(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/SchoolCommonDetails/TransferSessionMainPage.aspx']")));
	  dr.findElement(By.xpath("//img[@src='/Images/layout/Payroll-Manager.png']")).click();
	  Thread.sleep(500);
	  u.captureScreenshot(dr,schl,pg,sc);
	  dr.switchTo().defaultContent();
	  dr.findElement(By.xpath("//*[@id=\"tt\"]/div[1]/div[3]/ul/li[2]/a[2]")).click();
  }
  public void verifyAdmissionManager(String schl,Collection<String>sc) throws IOException, InterruptedException
  {
	  dr.switchTo().frame(dr.findElement(By.xpath("//iframe[@src='/SchoolCommonDetails/TransferSessionMainPage.aspx']")));
	  dr.findElement(By.xpath("//img[@src='/Images/layout/Admission-Manager.png']")).click();
	  Thread.sleep(500);
	  u.captureScreenshot(dr,schl,pg,sc);
	  dr.switchTo().defaultContent();
	  dr.findElement(By.xpath("//*[@id=\"tt\"]/div[1]/div[3]/ul/li[2]/a[2]")).click();
  }
}
