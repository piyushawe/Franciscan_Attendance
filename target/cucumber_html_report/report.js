$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/Reports.feature");
formatter.feature({
  "line": 1,
  "name": "Attendance reports",
  "description": "   As a user I would like to open all attendance reports\n   So that I can verify that there is no problem in report loading",
  "id": "attendance-reports",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4300252833,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1450405056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 167350313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 62461,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3942505101,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 409775710,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "#late in late out"
    }
  ],
  "line": 14,
  "name": "To open late in early out report with all",
  "description": "",
  "id": "attendance-reports;to-open-late-in-early-out-report-with-all",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@scenario1"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user open late in early out report",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "select \"all\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click show to open late in early out report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_late_in_early_out_report()"
});
formatter.result({
  "duration": 3102146066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_late_in_early_out_report(String,String,String)"
});
formatter.result({
  "duration": 3889204451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_late_in_early_out_report(String,String,String)"
});
formatter.result({
  "duration": 9376672729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_late_in_early_out_report(String)"
});
formatter.result({
  "duration": 137346025,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003cinput id\u003d\"ContentPlaceHolder1_rdbforcondition_0\" type\u003d\"radio\" name\u003d\"ctl00$ContentPlaceHolder1$rdbforcondition\" value\u003d\"0\" checked\u003d\"checked\"\u003e is not clickable at point (134, 218). Other element would receive the click: \u003ca href\u003d\"javascript:void(0)\" onclick\u003d\"jQuery.datepick._clearDate(\u0027#ContentPlaceHolder1_txtenddate_TextBox\u0027);\"\u003e...\u003c/a\u003e\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 51 milliseconds\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir4224_20430}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4ee017e0cf63300b37780c346c19289f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat pageObjects.LateInEarlyOutReport.selectLateInEarlyOut(LateInEarlyOutReport.java:59)\r\n\tat stepDefs.MyStepDefs.select_on_late_in_early_out_report(MyStepDefs.java:127)\r\n\tat ✽.And select \"all\" on late in early out report(Feature/Reports.feature:18)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_late_in_early_out_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2738432313,
  "status": "passed"
});
formatter.before({
  "duration": 3414950269,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2926865888,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 173571747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 61581,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 8385238931,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1886770537,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "To open late in early out report with only late in early out",
  "description": "",
  "id": "attendance-reports;to-open-late-in-early-out-report-with-only-late-in-early-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@scenario2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "user open late in early out report",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "select \"only late in early out\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click show to open late in early out report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_late_in_early_out_report()"
});
formatter.result({
  "duration": 2542894938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_late_in_early_out_report(String,String,String)"
});
formatter.result({
  "duration": 3827193616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_late_in_early_out_report(String,String,String)"
});
formatter.result({
  "duration": 4285566072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "only late in early out",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_late_in_early_out_report(String)"
});
formatter.result({
  "duration": 172525751,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_late_in_early_out_report()"
});
formatter.result({
  "duration": 5771796574,
  "status": "passed"
});
formatter.after({
  "duration": 2768938339,
  "status": "passed"
});
formatter.before({
  "duration": 3390509380,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1999536090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 178825188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 54250,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3885122514,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 651125201,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "To open late in early out report with only late in",
  "description": "",
  "id": "attendance-reports;to-open-late-in-early-out-report-with-only-late-in",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@scenario3"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "user open late in early out report",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "select \"only late in\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "click show to open late in early out report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_late_in_early_out_report()"
});
formatter.result({
  "duration": 1716754650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_late_in_early_out_report(String,String,String)"
});
formatter.result({
  "duration": 3808769771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_late_in_early_out_report(String,String,String)"
});
formatter.result({
  "duration": 4266895025,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "only late in",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_late_in_early_out_report(String)"
});
formatter.result({
  "duration": 137127560,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_late_in_early_out_report()"
});
formatter.result({
  "duration": 5020537244,
  "status": "passed"
});
formatter.after({
  "duration": 2687068237,
  "status": "passed"
});
formatter.before({
  "duration": 3377242206,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2173837425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 171396181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 58355,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 28673175577,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1692201449,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "To open late in early out report with only early out",
  "description": "",
  "id": "attendance-reports;to-open-late-in-early-out-report-with-only-early-out",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@scenario4"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user open late in early out report",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "select \"only early out\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "click show to open late in early out report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_late_in_early_out_report()"
});
formatter.result({
  "duration": 29016386982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_late_in_early_out_report(String,String,String)"
});
formatter.result({
  "duration": 3868544631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_late_in_early_out_report(String,String,String)"
});
formatter.result({
  "duration": 4249089042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "only early out",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_late_in_early_out_report(String)"
});
formatter.result({
  "duration": 159263856,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_late_in_early_out_report()"
});
formatter.result({
  "duration": 4918479737,
  "status": "passed"
});
formatter.after({
  "duration": 2850241310,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 45,
      "value": "#attendance report monthly wise"
    }
  ],
  "line": 47,
  "name": "To open attendance report monthly wise",
  "description": "",
  "id": "attendance-reports;to-open-attendance-report-monthly-wise",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@scenario5"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "user open attendance report monthly wise page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "select month year \"\u003cmonth-year\u003e\" on late in early out report",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "click show to open attendance report monthly wise",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-attendance-report-monthly-wise;",
  "rows": [
    {
      "cells": [
        "month-year"
      ],
      "line": 53,
      "id": "attendance-reports;to-open-attendance-report-monthly-wise;;1"
    },
    {
      "cells": [
        "April - 2017"
      ],
      "line": 54,
      "id": "attendance-reports;to-open-attendance-report-monthly-wise;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3480390283,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2739107358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 177644300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 59821,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 5021968561,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1119463507,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "To open attendance report monthly wise",
  "description": "",
  "id": "attendance-reports;to-open-attendance-report-monthly-wise;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@scenario5"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "user open attendance report monthly wise page",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "select month year \"April - 2017\" on late in early out report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "click show to open attendance report monthly wise",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_attendance_report_monthly_wise_page()"
});
formatter.result({
  "duration": 2512516473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April - 2017",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_month_year_on_late_in_early_out_report(String)"
});
formatter.result({
  "duration": 98114568,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_attendance_report_monthly_wise()"
});
formatter.result({
  "duration": 5050042432,
  "status": "passed"
});
formatter.after({
  "duration": 2765099793,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 56,
      "value": "#lwp yearwise report"
    }
  ],
  "line": 58,
  "name": "To open lwp yearwise report",
  "description": "",
  "id": "attendance-reports;to-open-lwp-yearwise-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@scenario6"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "user open lwp yearwise report page",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "select academic year \"\u003cacademic year\u003e\" on lwp yearwise report",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "click show to open lwp yearwise report",
  "keyword": "Then "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-lwp-yearwise-report;",
  "rows": [
    {
      "cells": [
        "academic year"
      ],
      "line": 64,
      "id": "attendance-reports;to-open-lwp-yearwise-report;;1"
    },
    {
      "cells": [
        "2017-2018"
      ],
      "line": 65,
      "id": "attendance-reports;to-open-lwp-yearwise-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3399001978,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1219119944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 169578077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 46626,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4454098446,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 587314736,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "To open lwp yearwise report",
  "description": "",
  "id": "attendance-reports;to-open-lwp-yearwise-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 57,
      "name": "@scenario6"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "user open lwp yearwise report page",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "select academic year \"2017-2018\" on lwp yearwise report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "click show to open lwp yearwise report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_lwp_yearwise_report_page()"
});
formatter.result({
  "duration": 1967044226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.select_academic_year_on_lwp_yearwise_report(String)"
});
formatter.result({
  "duration": 94781279,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_lwp_yearwise_report()"
});
formatter.result({
  "duration": 6357234559,
  "status": "passed"
});
formatter.after({
  "duration": 2680442128,
  "status": "passed"
});
formatter.before({
  "duration": 3372588153,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1531736471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 173924518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 68326,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3710437031,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1211336699,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 67,
      "value": "#attendance consolidated report"
    }
  ],
  "line": 69,
  "name": "To open attendance consolidated report with consolidated list",
  "description": "",
  "id": "attendance-reports;to-open-attendance-consolidated-report-with-consolidated-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@scenario7"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "user open attendance consolidated report",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "select \"consolidated list\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "click show to open attendance consolidated report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_attendance_consolidated_report()"
});
formatter.result({
  "duration": 1618742717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_attendance_consolidated_report(String,String,String)"
});
formatter.result({
  "duration": 3871880265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_attendance_consolidated_report(String,String,String)"
});
formatter.result({
  "duration": 4238944315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "consolidated list",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_attendance_consolidated_report(String)"
});
formatter.result({
  "duration": 165967674,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_attendance_consolidated_report()"
});
formatter.result({
  "duration": 5041690297,
  "status": "passed"
});
formatter.after({
  "duration": 2663740497,
  "status": "passed"
});
formatter.before({
  "duration": 3355751923,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1378643612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 176686863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 71258,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4643985917,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1031649964,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "To open attendance consolidated report with all late entry list",
  "description": "",
  "id": "attendance-reports;to-open-attendance-consolidated-report-with-all-late-entry-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 76,
      "name": "@scenario8"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "user open attendance consolidated report",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "select \"all late entry list\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "click show to open attendance consolidated report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_attendance_consolidated_report()"
});
formatter.result({
  "duration": 2816406688,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_attendance_consolidated_report(String,String,String)"
});
formatter.result({
  "duration": 3759877143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_attendance_consolidated_report(String,String,String)"
});
formatter.result({
  "duration": 4196124741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all late entry list",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_attendance_consolidated_report(String)"
});
formatter.result({
  "duration": 173794026,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_attendance_consolidated_report()"
});
formatter.result({
  "duration": 5020522288,
  "status": "passed"
});
formatter.after({
  "duration": 2679613131,
  "status": "passed"
});
formatter.before({
  "duration": 3377561254,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 3483505105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 160521573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 54543,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3423225574,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1440643597,
  "status": "passed"
});
formatter.scenario({
  "line": 85,
  "name": "To open attendance consolidated report with proper late entry list",
  "description": "",
  "id": "attendance-reports;to-open-attendance-consolidated-report-with-proper-late-entry-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@scenario9"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "user open attendance consolidated report",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "select \"proper late entry list\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "click show to open attendance consolidated report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_attendance_consolidated_report()"
});
formatter.result({
  "duration": 1987264474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_attendance_consolidated_report(String,String,String)"
});
formatter.result({
  "duration": 3861867497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_attendance_consolidated_report(String,String,String)"
});
formatter.result({
  "duration": 4264318889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "proper late entry list",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_attendance_consolidated_report(String)"
});
formatter.result({
  "duration": 161262597,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_attendance_consolidated_report()"
});
formatter.result({
  "duration": 5141449369,
  "status": "passed"
});
formatter.after({
  "duration": 2674863481,
  "status": "passed"
});
formatter.before({
  "duration": 3327282468,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1130879440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 156671004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 56595,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 5270987811,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 2455051191,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "To open attendance consolidated report with early exit list",
  "description": "",
  "id": "attendance-reports;to-open-attendance-consolidated-report-with-early-exit-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 92,
      "name": "@scenario10"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "user open attendance consolidated report",
  "keyword": "When "
});
formatter.step({
  "line": 95,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "select \"early exit list\" on attendance consolidated report",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "click show to open attendance consolidated report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_attendance_consolidated_report()"
});
formatter.result({
  "duration": 6143372747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_attendance_consolidated_report(String,String,String)"
});
formatter.result({
  "duration": 3904913749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_attendance_consolidated_report(String,String,String)"
});
formatter.result({
  "duration": 4264537940,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "early exit list",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_attendance_consolidated_report(String)"
});
formatter.result({
  "duration": 150660118,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_attendance_consolidated_report()"
});
formatter.result({
  "duration": 5357046296,
  "status": "passed"
});
formatter.after({
  "duration": 2692344550,
  "status": "passed"
});
formatter.before({
  "duration": 3484923519,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2090702862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 175590136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 44573,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3733224032,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 678457168,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 100,
      "value": "#staff wise daily attendance report"
    }
  ],
  "line": 102,
  "name": "To open staff wise daily attendance report",
  "description": "",
  "id": "attendance-reports;to-open-staff-wise-daily-attendance-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 101,
      "name": "@scenario11"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "user open staff wise daily attendance report",
  "keyword": "When "
});
formatter.step({
  "line": 104,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on staff wise daily attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on staff wise daily attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "click show to open staff wise daily attendance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_staff_wise_daily_attendance_report()"
});
formatter.result({
  "duration": 2124363884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_staff_wise_daily_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 3886191383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_staff_wise_daily_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 4234214899,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_staff_wise_daily_attendance_report()"
});
formatter.result({
  "duration": 12355225260,
  "status": "passed"
});
formatter.after({
  "duration": 2676874245,
  "status": "passed"
});
formatter.before({
  "duration": 3368155205,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 3334120005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 166612221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 57769,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3813835830,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1435265529,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 108,
      "value": "#absent missing attendance report"
    }
  ],
  "line": 110,
  "name": "To open absent missing attendance report with all",
  "description": "",
  "id": "attendance-reports;to-open-absent-missing-attendance-report-with-all",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@scenario12"
    }
  ]
});
formatter.step({
  "line": 111,
  "name": "user open absent missing attendance report",
  "keyword": "When "
});
formatter.step({
  "line": 112,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "select \"all\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "click show to open absent missing attendance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_absent_missing_attendance_report()"
});
formatter.result({
  "duration": 2713967672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_absent_missing_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 3850471504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_absent_missing_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 4232489166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_absent_missing_attendance_report(String)"
});
formatter.result({
  "duration": 148159346,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_absent_missing_attendance_report()"
});
formatter.result({
  "duration": 5144900541,
  "status": "passed"
});
formatter.after({
  "duration": 2648528245,
  "status": "passed"
});
formatter.before({
  "duration": 3475726846,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2490947895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 162678079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 44573,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4513318785,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1095067191,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "To open absent missing attendance report with only absent",
  "description": "",
  "id": "attendance-reports;to-open-absent-missing-attendance-report-with-only-absent",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@scenario13"
    }
  ]
});
formatter.step({
  "line": 119,
  "name": "user open absent missing attendance report",
  "keyword": "When "
});
formatter.step({
  "line": 120,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "select \"only absent\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "click show to open absent missing attendance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_absent_missing_attendance_report()"
});
formatter.result({
  "duration": 2958346651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_absent_missing_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 3828585345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_absent_missing_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 4276664401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "only absent",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_absent_missing_attendance_report(String)"
});
formatter.result({
  "duration": 146967902,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_absent_missing_attendance_report()"
});
formatter.result({
  "duration": 6666576152,
  "status": "passed"
});
formatter.after({
  "duration": 2681693981,
  "status": "passed"
});
formatter.before({
  "duration": 3337852984,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2572131222,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 163041700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 45453,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 8443845806,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 2088697083,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "To open absent missing attendance report with only missing",
  "description": "",
  "id": "attendance-reports;to-open-absent-missing-attendance-report-with-only-missing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 125,
      "name": "@scenario14"
    }
  ]
});
formatter.step({
  "line": 127,
  "name": "user open absent missing attendance report",
  "keyword": "When "
});
formatter.step({
  "line": 128,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "select \"only missing\" on absent missing attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "click show to open absent missing attendance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_absent_missing_attendance_report()"
});
formatter.result({
  "duration": 4879836816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_absent_missing_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 3829121686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_absent_missing_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 4208649424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "only missing",
      "offset": 8
    }
  ],
  "location": "MyStepDefs.select_on_absent_missing_attendance_report(String)"
});
formatter.result({
  "duration": 137686773,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_absent_missing_attendance_report()"
});
formatter.result({
  "duration": 5066148780,
  "status": "passed"
});
formatter.after({
  "duration": 2791328876,
  "status": "passed"
});
formatter.before({
  "duration": 3364025176,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2459268606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 165130174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 48385,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4596293531,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 881875439,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 133,
      "value": "#biometrics attendance detail department wise"
    }
  ],
  "line": 135,
  "name": "To open biometrics attendance detail department wise",
  "description": "",
  "id": "attendance-reports;to-open-biometrics-attendance-detail-department-wise",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 134,
      "name": "@scenario15"
    }
  ]
});
formatter.step({
  "line": 136,
  "name": "user open biometrics attendance detail department wise",
  "keyword": "When "
});
formatter.step({
  "line": 137,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on biometrics attendance detail department wise",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on biometrics attendance detail department wise",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "click show to open biometrics attendance detail department wise",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_biometrics_attendance_detail_department_wise()"
});
formatter.result({
  "duration": 1879120131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_biometrics_attendance_detail_department_wise(String,String,String)"
});
formatter.result({
  "duration": 3867460807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_biometrics_attendance_detail_department_wise(String,String,String)"
});
formatter.result({
  "duration": 4363755101,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_biometrics_attendance_detail_department_wise()"
});
formatter.result({
  "duration": 6014778253,
  "status": "passed"
});
formatter.after({
  "duration": 3116110571,
  "status": "passed"
});
formatter.before({
  "duration": 3383664218,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 3440572926,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 161625925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 362741,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3249913640,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 475484627,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 141,
      "value": "#staff shift relation report"
    }
  ],
  "line": 143,
  "name": "To open staff shift relation report",
  "description": "",
  "id": "attendance-reports;to-open-staff-shift-relation-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 142,
      "name": "@scenario16"
    }
  ]
});
formatter.step({
  "line": 144,
  "name": "user open staff shift relation report",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "click show to open staff shift relation report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_staff_shift_relation_report()"
});
formatter.result({
  "duration": 1916025003,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_staff_shift_relation_report()"
});
formatter.result({
  "duration": 5933590234,
  "status": "passed"
});
formatter.after({
  "duration": 2687673783,
  "status": "passed"
});
formatter.before({
  "duration": 3382508549,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2803659140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 163016188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 68912,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3437885944,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 343692909,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 147,
      "value": "#weekly attendance report"
    }
  ],
  "line": 149,
  "name": "To open weekly attendance report",
  "description": "",
  "id": "attendance-reports;to-open-weekly-attendance-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 148,
      "name": "@scenario17"
    }
  ]
});
formatter.step({
  "line": 150,
  "name": "user open weekly attendance report",
  "keyword": "When "
});
formatter.step({
  "line": 151,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on weekly attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on weekly attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "click show to open weekly attendance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_weekly_attendance_report()"
});
formatter.result({
  "duration": 2656044345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_weekly_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 3853373141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_weekly_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 4247693500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_weekly_attendance_report()"
});
formatter.result({
  "duration": 5469153813,
  "status": "passed"
});
formatter.after({
  "duration": 2694545922,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 155,
      "value": "#monthly attendance report"
    }
  ],
  "line": 157,
  "name": "To open monthly attendance report",
  "description": "",
  "id": "attendance-reports;to-open-monthly-attendance-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 156,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 158,
  "name": "user open monthly attendance report",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "select month year \"\u003cmonth-year\u003e\" on monthly attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "click show to open monthly attendance report",
  "keyword": "Then "
});
formatter.examples({
  "line": 162,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-monthly-attendance-report;",
  "rows": [
    {
      "cells": [
        "month-year"
      ],
      "line": 163,
      "id": "attendance-reports;to-open-monthly-attendance-report;;1"
    },
    {
      "cells": [
        "April - 2017"
      ],
      "line": 164,
      "id": "attendance-reports;to-open-monthly-attendance-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3384848919,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1208715697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 173930970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 47505,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4978547253,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 367554937,
  "status": "passed"
});
formatter.scenario({
  "line": 164,
  "name": "To open monthly attendance report",
  "description": "",
  "id": "attendance-reports;to-open-monthly-attendance-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 156,
      "name": "@scenario18"
    }
  ]
});
formatter.step({
  "line": 158,
  "name": "user open monthly attendance report",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "select month year \"April - 2017\" on monthly attendance report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "click show to open monthly attendance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_monthly_attendance_report()"
});
formatter.result({
  "duration": 5524407166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April - 2017",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_month_year_on_monthly_attendance_report(String)"
});
formatter.result({
  "duration": 95153404,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_monthly_attendance_report()"
});
formatter.result({
  "duration": 6853006293,
  "status": "passed"
});
formatter.after({
  "duration": 2677011483,
  "status": "passed"
});
formatter.before({
  "duration": 3401556415,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1682472833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 187404880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 47799,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 6488229536,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1566020926,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 166,
      "value": "#daily performance report"
    }
  ],
  "line": 168,
  "name": "To open daily performance report",
  "description": "",
  "id": "attendance-reports;to-open-daily-performance-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 167,
      "name": "@scenario19"
    }
  ]
});
formatter.step({
  "line": 169,
  "name": "user open daily performance report",
  "keyword": "When "
});
formatter.step({
  "line": 170,
  "name": "click show to open daily performance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_daily_performance_report()"
});
formatter.result({
  "duration": 9492317337,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_daily_performance_report()"
});
formatter.result({
  "duration": 4980714609,
  "status": "passed"
});
formatter.after({
  "duration": 2676107416,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 172,
      "value": "#leave format report"
    }
  ],
  "line": 174,
  "name": "To open leave format report",
  "description": "",
  "id": "attendance-reports;to-open-leave-format-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 175,
  "name": "user open leave format report",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "select month year \"\u003cmonth-year\u003e\" on leave format report",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "click show to open leave format report",
  "keyword": "Then "
});
formatter.examples({
  "line": 179,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-leave-format-report;",
  "rows": [
    {
      "cells": [
        "month-year"
      ],
      "line": 180,
      "id": "attendance-reports;to-open-leave-format-report;;1"
    },
    {
      "cells": [
        "April - 2017"
      ],
      "line": 181,
      "id": "attendance-reports;to-open-leave-format-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3430742555,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1544170836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 197001829,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 48092,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3160019835,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 469319202,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "To open leave format report",
  "description": "",
  "id": "attendance-reports;to-open-leave-format-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 173,
      "name": "@scenario20"
    }
  ]
});
formatter.step({
  "line": 175,
  "name": "user open leave format report",
  "keyword": "When "
});
formatter.step({
  "line": 176,
  "name": "select month year \"April - 2017\" on leave format report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "click show to open leave format report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_leave_format_report()"
});
formatter.result({
  "duration": 96100284,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Leave Format Report\"}\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 37 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir7152_584}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 87c2e923fab7118ed58bdfdbd1a47b1c\n*** Element info: {Using\u003dlink text, value\u003dLeave Format Report}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat pageObjects.LeaveFormatReport.openLeaveFormatReport(LeaveFormatReport.java:33)\r\n\tat stepDefs.MyStepDefs.user_open_leave_format_report(MyStepDefs.java:360)\r\n\tat ✽.When user open leave format report(Feature/Reports.feature:175)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "April - 2017",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_month_year_on_leave_format_report(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_leave_format_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2701022478,
  "status": "passed"
});
formatter.before({
  "duration": 3297647374,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1103854498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 162995954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 43107,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3660756461,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 974758852,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 183,
      "value": "#attendance report"
    }
  ],
  "line": 185,
  "name": "To open attendance report",
  "description": "",
  "id": "attendance-reports;to-open-attendance-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 184,
      "name": "@scenario21"
    }
  ]
});
formatter.step({
  "line": 186,
  "name": "user open attendance report",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on attendance report",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "click show to open attendance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_attendance_report()"
});
formatter.result({
  "duration": 3228743579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 3825179040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_attendance_report(String,String,String)"
});
formatter.result({
  "duration": 4276560593,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_attendance_report()"
});
formatter.result({
  "duration": 5066387480,
  "status": "passed"
});
formatter.after({
  "duration": 2735994001,
  "status": "passed"
});
formatter.before({
  "duration": 3308362457,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 936355218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 160344161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 42227,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4280866567,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 972895002,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 191,
      "value": "#attendance analysis report"
    }
  ],
  "line": 193,
  "name": "To open attendance analysis report",
  "description": "",
  "id": "attendance-reports;to-open-attendance-analysis-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 192,
      "name": "@scenario22"
    }
  ]
});
formatter.step({
  "line": 194,
  "name": "user open attendance analysis report",
  "keyword": "When "
});
formatter.step({
  "line": 195,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on attendance analysis report",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on attendance analysis report",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "click show to open attendance analysis report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_attendance_analysis_report()"
});
formatter.result({
  "duration": 10231740224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_attendance_analysis_report(String,String,String)"
});
formatter.result({
  "duration": 3846320069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_attendance_analysis_report(String,String,String)"
});
formatter.result({
  "duration": 4312792180,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_attendance_analysis_report()"
});
formatter.result({
  "duration": 6456339112,
  "status": "passed"
});
formatter.after({
  "duration": 2657506453,
  "status": "passed"
});
formatter.before({
  "duration": 3395637606,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1622809112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 210123262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 36656,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 8357197317,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1439474146,
  "status": "passed"
});
formatter.scenario({
  "line": 200,
  "name": "To open attendance analysis report with exclude graph",
  "description": "",
  "id": "attendance-reports;to-open-attendance-analysis-report-with-exclude-graph",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 199,
      "name": "@scenario23"
    }
  ]
});
formatter.step({
  "line": 201,
  "name": "user open attendance analysis report",
  "keyword": "When "
});
formatter.step({
  "line": 202,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on attendance analysis report",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on attendance analysis report",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "select exclude graph on attendance analysis report",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "click show to open attendance analysis report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_attendance_analysis_report()"
});
formatter.result({
  "duration": 2560869828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_attendance_analysis_report(String,String,String)"
});
formatter.result({
  "duration": 3824031874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_attendance_analysis_report(String,String,String)"
});
formatter.result({
  "duration": 4178770645,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.select_exclude_graph_on_attendance_analysis_report()"
});
formatter.result({
  "duration": 141533530,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_attendance_analysis_report()"
});
formatter.result({
  "duration": 6387040614,
  "status": "passed"
});
formatter.after({
  "duration": 2691138151,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 207,
      "value": "#leave balance report"
    }
  ],
  "line": 209,
  "name": "To open leave balance report",
  "description": "",
  "id": "attendance-reports;to-open-leave-balance-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 208,
      "name": "@scenario24"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "user open leave balance report",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "select from month year \"\u003cfrom month-year\u003e\" on leave balance report",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "select to month year \"\u003cto month-year\u003e\" on leave balance report",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "click show to open leave balance report",
  "keyword": "Then "
});
formatter.examples({
  "line": 215,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-leave-balance-report;",
  "rows": [
    {
      "cells": [
        "from month-year",
        "to month-year"
      ],
      "line": 216,
      "id": "attendance-reports;to-open-leave-balance-report;;1"
    },
    {
      "cells": [
        "April - 2017",
        "May - 2017"
      ],
      "line": 217,
      "id": "attendance-reports;to-open-leave-balance-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3380213633,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1773697372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 165163603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 43106,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3144751281,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 408998618,
  "status": "passed"
});
formatter.scenario({
  "line": 217,
  "name": "To open leave balance report",
  "description": "",
  "id": "attendance-reports;to-open-leave-balance-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 208,
      "name": "@scenario24"
    }
  ]
});
formatter.step({
  "line": 210,
  "name": "user open leave balance report",
  "keyword": "When "
});
formatter.step({
  "line": 211,
  "name": "select from month year \"April - 2017\" on leave balance report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "select to month year \"May - 2017\" on leave balance report",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "click show to open leave balance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_leave_balance_report()"
});
formatter.result({
  "duration": 2553473077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April - 2017",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.select_from_month_year_on_leave_balance_report(String)"
});
formatter.result({
  "duration": 94134973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May - 2017",
      "offset": 22
    }
  ],
  "location": "MyStepDefs.select_to_month_year_on_leave_balance_report(String)"
});
formatter.result({
  "duration": 100513292,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_leave_balance_report()"
});
formatter.result({
  "duration": 5043414857,
  "status": "passed"
});
formatter.after({
  "duration": 2695846746,
  "status": "passed"
});
formatter.before({
  "duration": 3336707578,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 3549714587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 154398375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 36069,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2056286446,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1975581397,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 219,
      "value": "#sanctioned leave report"
    }
  ],
  "line": 221,
  "name": "To open sanctioned leave report",
  "description": "",
  "id": "attendance-reports;to-open-sanctioned-leave-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 220,
      "name": "@scenario25"
    }
  ]
});
formatter.step({
  "line": 222,
  "name": "user open sanctioned leave report",
  "keyword": "When "
});
formatter.step({
  "line": 223,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on sanctioned leave report",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on sanctioned leave report",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "click show to open sanctioned leave report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_sanctioned_leave_report()"
});
formatter.result({
  "duration": 3071419522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_sanctioned_leave_report(String,String,String)"
});
formatter.result({
  "duration": 3821163082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_sanctioned_leave_report(String,String,String)"
});
formatter.result({
  "duration": 4292726764,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_sanctioned_leave_report()"
});
formatter.result({
  "duration": 5159657973,
  "status": "passed"
});
formatter.after({
  "duration": 2802152166,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 227,
      "value": "#leave card report"
    }
  ],
  "line": 229,
  "name": "To open leave card report",
  "description": "",
  "id": "attendance-reports;to-open-leave-card-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 228,
      "name": "@scenario26"
    }
  ]
});
formatter.step({
  "line": 230,
  "name": "user open leave card report",
  "keyword": "When "
});
formatter.step({
  "line": 231,
  "name": "select year \"\u003cyear\u003e\" on leave card report",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "click show to open leave card report",
  "keyword": "Then "
});
formatter.examples({
  "line": 234,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-leave-card-report;",
  "rows": [
    {
      "cells": [
        "year"
      ],
      "line": 235,
      "id": "attendance-reports;to-open-leave-card-report;;1"
    },
    {
      "cells": [
        "2017-2018"
      ],
      "line": 236,
      "id": "attendance-reports;to-open-leave-card-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3331160895,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2103396452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 155900070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 41348,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4671284455,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 594920276,
  "status": "passed"
});
formatter.scenario({
  "line": 236,
  "name": "To open leave card report",
  "description": "",
  "id": "attendance-reports;to-open-leave-card-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 228,
      "name": "@scenario26"
    }
  ]
});
formatter.step({
  "line": 230,
  "name": "user open leave card report",
  "keyword": "When "
});
formatter.step({
  "line": 231,
  "name": "select year \"2017-2018\" on leave card report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "click show to open leave card report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_leave_card_report()"
});
formatter.result({
  "duration": 2121788041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.select_year_on_leave_card_report(String)"
});
formatter.result({
  "duration": 101897691,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_leave_card_report()"
});
formatter.result({
  "duration": 6368048171,
  "status": "passed"
});
formatter.after({
  "duration": 2666774677,
  "status": "passed"
});
formatter.before({
  "duration": 3270920658,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1877341322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 235010466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 172719,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3996032428,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 823268271,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 238,
      "value": "#monthly performance report"
    }
  ],
  "line": 240,
  "name": "To open monthly performance report",
  "description": "",
  "id": "attendance-reports;to-open-monthly-performance-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 239,
      "name": "@scenario27"
    }
  ]
});
formatter.step({
  "line": 241,
  "name": "user open monthly performance report",
  "keyword": "When "
});
formatter.step({
  "line": 242,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on monthly performance report",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on monthly performance report",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "click show to open monthly performance report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_monthly_performance_report()"
});
formatter.result({
  "duration": 1266745764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_monthly_performance_report(String,String,String)"
});
formatter.result({
  "duration": 3844365608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_monthly_performance_report(String,String,String)"
});
formatter.result({
  "duration": 4739423180,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_monthly_performance_report()"
});
formatter.result({
  "duration": 4603015824,
  "status": "passed"
});
formatter.after({
  "duration": 2678770645,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 246,
      "value": "#leave ledger report"
    }
  ],
  "line": 248,
  "name": "To open leave ledger report",
  "description": "",
  "id": "attendance-reports;to-open-leave-ledger-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 247,
      "name": "@scenario28"
    }
  ]
});
formatter.step({
  "line": 249,
  "name": "user open leave ledger report",
  "keyword": "When "
});
formatter.step({
  "line": 250,
  "name": "select year \"\u003cyear\u003e\" on leave ledger report",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "click show to open leave ledger report",
  "keyword": "Then "
});
formatter.examples({
  "line": 253,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-leave-ledger-report;",
  "rows": [
    {
      "cells": [
        "year"
      ],
      "line": 254,
      "id": "attendance-reports;to-open-leave-ledger-report;;1"
    },
    {
      "cells": [
        "2017-2018"
      ],
      "line": 255,
      "id": "attendance-reports;to-open-leave-ledger-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3367230611,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 3495715726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 164883263,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 41347,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4479519059,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1133429478,
  "status": "passed"
});
formatter.scenario({
  "line": 255,
  "name": "To open leave ledger report",
  "description": "",
  "id": "attendance-reports;to-open-leave-ledger-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 247,
      "name": "@scenario28"
    }
  ]
});
formatter.step({
  "line": 249,
  "name": "user open leave ledger report",
  "keyword": "When "
});
formatter.step({
  "line": 250,
  "name": "select year \"2017-2018\" on leave ledger report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "click show to open leave ledger report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_leave_ledger_report()"
});
formatter.result({
  "duration": 1427597529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.select_year_on_leave_ledger_report(String)"
});
formatter.result({
  "duration": 89856564,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_leave_ledger_report()"
});
formatter.result({
  "duration": 6658728395,
  "status": "passed"
});
formatter.after({
  "duration": 2670595629,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 257,
      "value": "#leave register report"
    }
  ],
  "line": 259,
  "name": "To open leave register report",
  "description": "",
  "id": "attendance-reports;to-open-leave-register-report",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 258,
      "name": "@scenario29"
    }
  ]
});
formatter.step({
  "line": 260,
  "name": "user open leave register report",
  "keyword": "When "
});
formatter.step({
  "line": 261,
  "name": "select year \"\u003cyear\u003e\" on leave register report",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "click show to open leave register report",
  "keyword": "Then "
});
formatter.examples({
  "line": 264,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-leave-register-report;",
  "rows": [
    {
      "cells": [
        "year"
      ],
      "line": 265,
      "id": "attendance-reports;to-open-leave-register-report;;1"
    },
    {
      "cells": [
        "2017-2018"
      ],
      "line": 266,
      "id": "attendance-reports;to-open-leave-register-report;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3372209284,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1375433486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 168020079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 42520,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3905768258,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1148354645,
  "status": "passed"
});
formatter.scenario({
  "line": 266,
  "name": "To open leave register report",
  "description": "",
  "id": "attendance-reports;to-open-leave-register-report;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 258,
      "name": "@scenario29"
    }
  ]
});
formatter.step({
  "line": 260,
  "name": "user open leave register report",
  "keyword": "When "
});
formatter.step({
  "line": 261,
  "name": "select year \"2017-2018\" on leave register report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "click show to open leave register report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_leave_register_report()"
});
formatter.result({
  "duration": 1411777677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-2018",
      "offset": 13
    }
  ],
  "location": "MyStepDefs.select_year_on_leave_register_report(String)"
});
formatter.result({
  "duration": 96325788,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_leave_register_report()"
});
formatter.result({
  "duration": 4885803423,
  "status": "passed"
});
formatter.after({
  "duration": 2697823495,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 268,
      "value": "#leave bucket report"
    }
  ],
  "line": 270,
  "name": "To open leave bucket report with active status",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-active-status",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 269,
      "name": "@scenario30"
    }
  ]
});
formatter.step({
  "line": 271,
  "name": "user open leave bucket report",
  "keyword": "When "
});
formatter.step({
  "line": 272,
  "name": "select month year \"\u003cmonth-year\u003e\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "select employee status \"active\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "click show to open leave bucket report",
  "keyword": "Then "
});
formatter.examples({
  "line": 276,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-active-status;",
  "rows": [
    {
      "cells": [
        "month-year"
      ],
      "line": 277,
      "id": "attendance-reports;to-open-leave-bucket-report-with-active-status;;1"
    },
    {
      "cells": [
        "April - 2017"
      ],
      "line": 278,
      "id": "attendance-reports;to-open-leave-bucket-report-with-active-status;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3341078065,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1974174419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 207858256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 35776,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3451609110,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 921631215,
  "status": "passed"
});
formatter.scenario({
  "line": 278,
  "name": "To open leave bucket report with active status",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-active-status;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 269,
      "name": "@scenario30"
    }
  ]
});
formatter.step({
  "line": 271,
  "name": "user open leave bucket report",
  "keyword": "When "
});
formatter.step({
  "line": 272,
  "name": "select month year \"April - 2017\" on leave bucket report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "select employee status \"active\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "click show to open leave bucket report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_leave_bucket_report()"
});
formatter.result({
  "duration": 4019318235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April - 2017",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_month_year_on_leave_bucket_report(String)"
});
formatter.result({
  "duration": 96450123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "active",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.select_employee_status_on_leave_bucket_report(String)"
});
formatter.result({
  "duration": 116441055,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_leave_bucket_report()"
});
formatter.result({
  "duration": 6272078380,
  "status": "passed"
});
formatter.after({
  "duration": 2685527834,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 281,
  "name": "To open leave bucket report with inactive status",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-inactive-status",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 280,
      "name": "@scenario31"
    }
  ]
});
formatter.step({
  "line": 282,
  "name": "user open leave bucket report",
  "keyword": "When "
});
formatter.step({
  "line": 283,
  "name": "select month year \"\u003cmonth-year\u003e\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "select employee status \"inactive\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "click show to open leave bucket report",
  "keyword": "Then "
});
formatter.examples({
  "line": 287,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-inactive-status;",
  "rows": [
    {
      "cells": [
        "month-year"
      ],
      "line": 288,
      "id": "attendance-reports;to-open-leave-bucket-report-with-inactive-status;;1"
    },
    {
      "cells": [
        "April - 2017"
      ],
      "line": 289,
      "id": "attendance-reports;to-open-leave-bucket-report-with-inactive-status;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3353791304,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 1683700053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 171686491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 34603,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3272264296,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 1341314419,
  "status": "passed"
});
formatter.scenario({
  "line": 289,
  "name": "To open leave bucket report with inactive status",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-inactive-status;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 280,
      "name": "@scenario31"
    }
  ]
});
formatter.step({
  "line": 282,
  "name": "user open leave bucket report",
  "keyword": "When "
});
formatter.step({
  "line": 283,
  "name": "select month year \"April - 2017\" on leave bucket report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 284,
  "name": "select employee status \"inactive\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 285,
  "name": "click show to open leave bucket report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_leave_bucket_report()"
});
formatter.result({
  "duration": 3055557739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April - 2017",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_month_year_on_leave_bucket_report(String)"
});
formatter.result({
  "duration": 90167401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inactive",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.select_employee_status_on_leave_bucket_report(String)"
});
formatter.result({
  "duration": 128419429,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_leave_bucket_report()"
});
formatter.result({
  "duration": 4792926754,
  "status": "passed"
});
formatter.after({
  "duration": 2683866028,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 292,
  "name": "To open leave bucket report with all status",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-all-status",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 291,
      "name": "@scenario32"
    }
  ]
});
formatter.step({
  "line": 293,
  "name": "user open leave bucket report",
  "keyword": "When "
});
formatter.step({
  "line": 294,
  "name": "select month year \"\u003cmonth-year\u003e\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "select employee status \"all\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "click show to open leave bucket report",
  "keyword": "Then "
});
formatter.examples({
  "line": 298,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-all-status;",
  "rows": [
    {
      "cells": [
        "month-year"
      ],
      "line": 299,
      "id": "attendance-reports;to-open-leave-bucket-report-with-all-status;;1"
    },
    {
      "cells": [
        "April - 2017"
      ],
      "line": 300,
      "id": "attendance-reports;to-open-leave-bucket-report-with-all-status;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3374742019,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 905772656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 178307322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 39295,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4258065197,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 689594815,
  "status": "passed"
});
formatter.scenario({
  "line": 300,
  "name": "To open leave bucket report with all status",
  "description": "",
  "id": "attendance-reports;to-open-leave-bucket-report-with-all-status;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 291,
      "name": "@scenario32"
    }
  ]
});
formatter.step({
  "line": 293,
  "name": "user open leave bucket report",
  "keyword": "When "
});
formatter.step({
  "line": 294,
  "name": "select month year \"April - 2017\" on leave bucket report",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 295,
  "name": "select employee status \"all\" on leave bucket report",
  "keyword": "And "
});
formatter.step({
  "line": 296,
  "name": "click show to open leave bucket report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_leave_bucket_report()"
});
formatter.result({
  "duration": 1566891857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April - 2017",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_month_year_on_leave_bucket_report(String)"
});
formatter.result({
  "duration": 99398970,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "all",
      "offset": 24
    }
  ],
  "location": "MyStepDefs.select_employee_status_on_leave_bucket_report(String)"
});
formatter.result({
  "duration": 117455088,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_leave_bucket_report()"
});
formatter.result({
  "duration": 6123637815,
  "status": "passed"
});
formatter.after({
  "duration": 2813390394,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 302,
      "value": "#school staff attendance register"
    }
  ],
  "line": 304,
  "name": "To open school staff attendance register",
  "description": "",
  "id": "attendance-reports;to-open-school-staff-attendance-register",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 303,
      "name": "@scenario33"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "user open school staff attendance register",
  "keyword": "When "
});
formatter.step({
  "line": 306,
  "name": "select month year \"\u003cmonth-year\u003e\" on school staff attendance register",
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "click show to open school staff attendance register",
  "keyword": "Then "
});
formatter.examples({
  "line": 309,
  "name": "",
  "description": "",
  "id": "attendance-reports;to-open-school-staff-attendance-register;",
  "rows": [
    {
      "cells": [
        "month-year"
      ],
      "line": 310,
      "id": "attendance-reports;to-open-school-staff-attendance-register;;1"
    },
    {
      "cells": [
        "April - 2017"
      ],
      "line": 311,
      "id": "attendance-reports;to-open-school-staff-attendance-register;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3338681980,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 826400394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 158059802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 33137,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 3997948475,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 978076305,
  "status": "passed"
});
formatter.scenario({
  "line": 311,
  "name": "To open school staff attendance register",
  "description": "",
  "id": "attendance-reports;to-open-school-staff-attendance-register;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 303,
      "name": "@scenario33"
    }
  ]
});
formatter.step({
  "line": 305,
  "name": "user open school staff attendance register",
  "keyword": "When "
});
formatter.step({
  "line": 306,
  "name": "select month year \"April - 2017\" on school staff attendance register",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 307,
  "name": "click show to open school staff attendance register",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_school_staff_attendance_register()"
});
formatter.result({
  "duration": 2642739636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April - 2017",
      "offset": 19
    }
  ],
  "location": "MyStepDefs.select_month_year_on_school_staff_attendance_register(String)"
});
formatter.result({
  "duration": 90335428,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_school_staff_attendance_register()"
});
formatter.result({
  "duration": 7662874258,
  "status": "passed"
});
formatter.after({
  "duration": 2624885855,
  "status": "passed"
});
formatter.before({
  "duration": 3377616970,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "user enter \"http://qaerp.franciscanecare.net\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter username \"admin\" and password \"Admin#franciscan\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "passes school name \"qaerp\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click signin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "attendance home page is opened",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://qaerp.franciscanecare.net",
      "offset": 12
    }
  ],
  "location": "MyStepDefs.user_enter(String)"
});
formatter.result({
  "duration": 2275635120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "Admin#franciscan",
      "offset": 42
    }
  ],
  "location": "MyStepDefs.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 170341974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "qaerp",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.passes_school_name(String)"
});
formatter.result({
  "duration": 32843,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 4195605995,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 906448287,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 313,
      "value": "#monthly late in count report"
    }
  ],
  "line": 315,
  "name": "To open monthly monthly late in count report",
  "description": "",
  "id": "attendance-reports;to-open-monthly-monthly-late-in-count-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 314,
      "name": "@scenario34"
    }
  ]
});
formatter.step({
  "line": 316,
  "name": "user open monthly monthly late in count report",
  "keyword": "When "
});
formatter.step({
  "line": 317,
  "name": "select from date as month \"April\" year \"2017\" and day \"1\" on monthly late in count report",
  "keyword": "And "
});
formatter.step({
  "line": 318,
  "name": "select to date as month \"May\" year \"2017\" and day \"31\" on monthly late in count report",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "click show to open monthly late in count report",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_open_monthly_monthly_late_in_count_report()"
});
formatter.result({
  "duration": 102136976,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Monthly Late In Count Report\"}\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 40 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.3.1\u0027, revision: \u00275234b325d5\u0027, time: \u00272017-03-10 09:10:29 +0000\u0027\nSystem info: host: \u0027DELL-PC\u0027, ip: \u0027192.168.10.49\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.29.461591 (62ebf098771772160f391d75e589dc567915b233), userDataDir\u003dC:\\Users\\dell\\AppData\\Local\\Temp\\scoped_dir3584_6281}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: b6a5e6e2d14082b0a895c761bc3458c6\n*** Element info: {Using\u003dlink text, value\u003dMonthly Late In Count Report}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:638)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat pageObjects.MonthlyLateInCountReport.openMonthlyLateInCountReport(MonthlyLateInCountReport.java:34)\r\n\tat stepDefs.MyStepDefs.user_open_monthly_monthly_late_in_count_report(MyStepDefs.java:613)\r\n\tat ✽.When user open monthly monthly late in count report(Feature/Reports.feature:316)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 27
    },
    {
      "val": "2017",
      "offset": 40
    },
    {
      "val": "1",
      "offset": 55
    }
  ],
  "location": "MyStepDefs.select_from_date_as_month_year_and_day_on_monthly_late_in_count_report(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 25
    },
    {
      "val": "2017",
      "offset": 36
    },
    {
      "val": "31",
      "offset": 51
    }
  ],
  "location": "MyStepDefs.select_to_date_as_month_year_and_day_on_monthly_late_in_count_report(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepDefs.click_show_to_open_monthly_late_in_count_report()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 2666365898,
  "status": "passed"
});
});