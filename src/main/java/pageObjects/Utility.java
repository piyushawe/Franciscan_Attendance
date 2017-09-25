package pageObjects;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

import org.apache.commons.io.FileUtils;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

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
		 //FileUtils.copyFile(f,new File("D:/attendance_screenshots/"+str+"/"+r+"/"+r+sc+timeStamp+".png"));
		 FileUtils.copyFile(f,new File("E:/attendance_screenshots/"+str+"/"+r+"/"+r+sc+timeStamp+".png"));
	 }

	public void verifyShow(WebDriver dr,String school, String page,Collection<String> sc)throws IOException
	{
		ArrayList<String> list= new ArrayList<String>();
		Date date= new Date();
		int size= sc.toString().length();
		String scenario= sc.toString().substring(2,size-1);
		String msg;

		dr.switchTo().defaultContent();
		try {
			dr.findElement(By.id("defaultSpeechbubbleHeader"));
			msg = dr.findElement(By.id("defaultSpeechbubbleHeader")).getText();
			list.add(date.toString());
			list.add(scenario);
			list.add(page);
			list.add("Show:"+msg);
			prepareErrorLog(list,school);
		}
		catch(Exception e)
		{
			System.out.println("");
		}
	}

	public void prepareErrorLog(ArrayList<String>lst, String school )throws IOException
	{
		ArrayList<String>list= new ArrayList<String>(Arrays.asList("Date","Scenario", "Page","Error Message"));
		//File file = new File("D:/TestReports/" + school + "/Attendance/ErrorLog.xls");
		File file = new File("E:/TestReports/" + school + "/Attendance/ErrorLog.xls");
		File pdir= file.getParentFile();
		FileInputStream fis;
		HSSFWorkbook wb;
		if(!file.exists()) {
			System.out.println("File Does Not Exist");
			if (pdir != null)
				pdir.mkdirs();
			file.createNewFile();
			fis= new FileInputStream(file);
			wb= new HSSFWorkbook();
			System.out.println("New File Created");
		}else {
			fis = new FileInputStream(file);
			wb = new HSSFWorkbook(fis);
		}
		Sheet sheet = wb.getSheet("error log");
		System.out.println(sheet);
		if(sheet==null)
			sheet = wb.createSheet("error log");
		Row row;
		System.out.println(sheet.getLastRowNum());
		System.out.println(sheet.getFirstRowNum());
		int rowcount= sheet.getPhysicalNumberOfRows()-sheet.getFirstRowNum();
		System.out.println("rowcount: "+rowcount);
		System.out.println(sheet.getPhysicalNumberOfRows());
		int i=0;
		if(rowcount==0){
			row= sheet.createRow(rowcount);
			for(String ls:list){
				Cell cell= row.createCell(i);
				cell.setCellValue(ls);
				i++;
			}
		}
		FileOutputStream fout= new FileOutputStream(file);
		wb.write(fout);
		System.out.println(sheet.getLastRowNum());
		System.out.println(sheet.getFirstRowNum());
		rowcount= sheet.getLastRowNum()-sheet.getFirstRowNum();
		row = sheet.createRow(rowcount+1);
		i=0;
		for (String ls:lst)
		{
			Cell cell= row.createCell(i);
			cell.setCellValue(ls);
			i++;
		}
		FileOutputStream fout1= new FileOutputStream(file);
		wb.write(fout1);
	}
}
