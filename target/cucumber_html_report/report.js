$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/VerifyPage.feature");
formatter.feature({
  "line": 1,
  "name": "Franciscan Attendance",
  "description": "    As a user I would like to verify that \r\n    The page is loaded successfully",
  "id": "franciscan-attendance",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5071455529,
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
  "duration": 1745811495,
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
  "duration": 158361600,
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
  "duration": 72725,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.click_signin()"
});
formatter.result({
  "duration": 2452598995,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.attendance_home_page_is_opened()"
});
formatter.result({
  "duration": 257482830,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 54,
      "value": "#session transfer"
    }
  ],
  "line": 56,
  "name": "To verify session transfer page",
  "description": "",
  "id": "franciscan-attendance;to-verify-session-transfer-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 55,
      "name": "@scenario8"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "user open session transfer page",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "verify session transfer page",
  "keyword": "Then "
});
formatter.step({
  "line": 59,
  "name": "verify account manager",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "verify fee manager",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "verify payroll manager",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "verify admission manager",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefs.user_open_session_transfer_page()"
});
formatter.result({
  "duration": 1096093465,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_session_transfer_page()"
});
formatter.result({
  "duration": 1330489923,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_account_manager()"
});
formatter.result({
  "duration": 1336643396,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_fee_manager()"
});
formatter.result({
  "duration": 1098751740,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_payroll_manager()"
});
formatter.result({
  "duration": 1059996064,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.verify_admission_manager()"
});
formatter.result({
  "duration": 1156947568,
  "status": "passed"
});
formatter.after({
  "duration": 3203645516,
  "status": "passed"
});
});