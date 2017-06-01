Feature: Franciscan Attendance
      As a user I would like to verify that 
      The page is loaded successfully

  Background: 
    Given user enter " http://192.168.10.101:8069/Modules.aspx"
    When user enter username "admin" and password "admin@123"
    And passes school name "rosary"
    And click signin
    Then attendance home page is opened

  #change academic
  @scenario1
  Scenario: To verify change academic page
    When user open change academic page
    Then verify change academic page

  #define academic year
  @scenario2
  Scenario: To verify define academic year page
    When user open define academic year page
    Then verify define academic year page

  #define financial year
  @scenario3
  Scenario: To verify define financial year page
    When user open define financial year page
    Then verify define financial year page

  #define holiday
  @scenario4
  Scenario: To verify define holiday page
    When user open define holiday page
    Then verify define holiday page

  #define shift
  @scenario5
  Scenario: To verify define shift page
    When user open define shift page
    Then verify define shift page

  #define leave
  @scenario6
  Scenario: To verify define leave page
    When user open define leave page
    Then verify define leave page

  #define sms template
  @scenario7
  Scenario: To verify define sms template page
    When user open define sms template page
    Then verify define sms template page

  #session transfer
  @scenario8
  Scenario: To verify session transfer page
    When user open session transfer page
    Then verify session transfer page
    And verify account manager
    And verify fee manager
    And verify payroll manager
    And verify admission manager

  #assign shift to staff
  @scenario9
  Scenario: To verify assign shift to staff page
    When user open assign shift to staff page
    Then verify assign shift to staff page

  #assign leave to staff
  @scenario10
  Scenario: To verify assign leave to staff page
    When user open assign leave to staff page
    Then verify assign leave to staff page

  #assign department to staff
  @scenario11
  Scenario: To verify assign department to staff page
    When user open assign department to staff page
    Then verify assign department to staff page

  #upload attendance
  @scenario12
  Scenario: To verify upload attendance page
    When user open upload attendance page
    Then verify upload attendance page

  #mark manual attendance
  @scenario13
  Scenario: To verify mark manual attendance page
    When user open mark manual attendance page
    Then verify mark manual attendance page

  #autoprocess attendance
  @scenario14
  Scenario: To verify autoprocess attendance page
    When user open autoprocess attendance page
    Then verify autoprocess attendance page

  #daily leave acceptance
  @scenario15
  Scenario: To verify daily leave acceptance page
    When user open daily leave acceptance page
    Then verify daily leave acceptance page

  #process leave application
  @scenario16
  Scenario: To verify process leave application page
    When user open process leave application page
    Then verify process leave application page

  #reprocess attendance
  @scenario17
  Scenario: To verify reprocess attendance page
    When user open reprocess attendance page
    Then verify reprocess attendance page

  #leave acceptance employee wise
  @scenario18
  Scenario: To verify leave acceptance employee wise page
    When user open leave acceptance employee wise page
    Then verify leave acceptance employee wise page
