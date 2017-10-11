Feature: Attendance reports
     As a user I would like to open all attendance reports
     So that I can verify that there is no problem in report loading

  Background: 
    Given user enter "http://qaerp.franciscanecare.net"
    When user enter username "admin" and password "Admin#franciscan"
    And passes school name "qaerp1"
    And click signin
    Then attendance home page is opened

  #late in late out
  @scenario1
  Scenario: To open late in early out report with all
    When user open late in early out report
    And select from date as month "April" year "2017" and day "1" on late in early out report
    And select to date as month "May" year "2017" and day "31" on late in early out report
    And select "all" on late in early out report
    Then click show to open late in early out report

  @scenario2
  Scenario: To open late in early out report with only late in early out
    When user open late in early out report
    And select from date as month "April" year "2017" and day "1" on late in early out report
    And select to date as month "May" year "2017" and day "31" on late in early out report
    And select "only late in early out" on late in early out report
    Then click show to open late in early out report

  @scenario3
  Scenario: To open late in early out report with only late in
    When user open late in early out report
    And select from date as month "April" year "2017" and day "1" on late in early out report
    And select to date as month "May" year "2017" and day "31" on late in early out report
    And select "only late in" on late in early out report
    Then click show to open late in early out report

  @scenario4
  Scenario: To open late in early out report with only early out
    When user open late in early out report
    And select from date as month "April" year "2017" and day "1" on late in early out report
    And select to date as month "May" year "2017" and day "31" on late in early out report
    And select "only early out" on late in early out report
    Then click show to open late in early out report

  #attendance report monthly wise
  @scenario5
  Scenario Outline: To open attendance report monthly wise
    When user open attendance report monthly wise page
    And select month year "<month-year>" on late in early out report
    Then click show to open attendance report monthly wise

    Examples: 
      | month-year   |
      | April - 2017 |

  #lwp yearwise report
  @scenario6
  Scenario Outline: To open lwp yearwise report
    When user open lwp yearwise report page
    And select academic year "<academic year>" on lwp yearwise report
    Then click show to open lwp yearwise report

    Examples: 
      | academic year |
      | 2017-2018     |

  #attendance consolidated report
  @scenario7
  Scenario: To open attendance consolidated report with consolidated list
    When user open attendance consolidated report
    And select from date as month "April" year "2017" and day "1" on attendance consolidated report
    And select to date as month "May" year "2017" and day "31" on attendance consolidated report
    And select "consolidated list" on attendance consolidated report
    Then click show to open attendance consolidated report

  @scenario8
  Scenario: To open attendance consolidated report with all late entry list
    When user open attendance consolidated report
    And select from date as month "April" year "2017" and day "1" on attendance consolidated report
    And select to date as month "May" year "2017" and day "31" on attendance consolidated report
    And select "all late entry list" on attendance consolidated report
    Then click show to open attendance consolidated report

  @scenario9
  Scenario: To open attendance consolidated report with proper late entry list
    When user open attendance consolidated report
    And select from date as month "April" year "2017" and day "1" on attendance consolidated report
    And select to date as month "May" year "2017" and day "31" on attendance consolidated report
    And select "proper late entry list" on attendance consolidated report
    Then click show to open attendance consolidated report

  @scenario10
  Scenario: To open attendance consolidated report with early exit list
    When user open attendance consolidated report
    And select from date as month "April" year "2017" and day "1" on attendance consolidated report
    And select to date as month "May" year "2017" and day "31" on attendance consolidated report
    And select "early exit list" on attendance consolidated report
    Then click show to open attendance consolidated report

  #staff wise daily attendance report
  @scenario11
  Scenario: To open staff wise daily attendance report
    When user open staff wise daily attendance report
    And select from date as month "April" year "2017" and day "1" on staff wise daily attendance report
    And select to date as month "May" year "2017" and day "31" on staff wise daily attendance report
    Then click show to open staff wise daily attendance report

  #absent missing attendance report
  @scenario12
  Scenario: To open absent missing attendance report with all
    When user open absent missing attendance report
    And select from date as month "April" year "2017" and day "1" on absent missing attendance report
    And select to date as month "May" year "2017" and day "31" on absent missing attendance report
    And select "all" on absent missing attendance report
    Then click show to open absent missing attendance report

  @scenario13
  Scenario: To open absent missing attendance report with only absent
    When user open absent missing attendance report
    And select from date as month "April" year "2017" and day "1" on absent missing attendance report
    And select to date as month "May" year "2017" and day "31" on absent missing attendance report
    And select "only absent" on absent missing attendance report
    Then click show to open absent missing attendance report

  @scenario14
  Scenario: To open absent missing attendance report with only missing
    When user open absent missing attendance report
    And select from date as month "April" year "2017" and day "1" on absent missing attendance report
    And select to date as month "May" year "2017" and day "31" on absent missing attendance report
    And select "only missing" on absent missing attendance report
    Then click show to open absent missing attendance report

  #biometrics attendance detail department wise
  @scenario15
  Scenario: To open biometrics attendance detail department wise
    When user open biometrics attendance detail department wise
    And select from date as month "April" year "2017" and day "1" on biometrics attendance detail department wise
    And select to date as month "May" year "2017" and day "31" on biometrics attendance detail department wise
    Then click show to open biometrics attendance detail department wise

  #staff shift relation report
  @scenario16
  Scenario: To open staff shift relation report
    When user open staff shift relation report
    Then click show to open staff shift relation report

  #weekly attendance report
  @scenario17
  Scenario: To open weekly attendance report
    When user open weekly attendance report
    And select from date as month "April" year "2017" and day "1" on weekly attendance report
    And select to date as month "May" year "2017" and day "31" on weekly attendance report
    Then click show to open weekly attendance report

  #monthly attendance report
  @scenario18
  Scenario Outline: To open monthly attendance report
    When user open monthly attendance report
    And select month year "<month-year>" on monthly attendance report
    Then click show to open monthly attendance report

    Examples: 
      | month-year   |
      | April - 2017 |

  #daily performance report
  @scenario19
  Scenario: To open daily performance report
    When user open daily performance report
    Then click show to open daily performance report

  #leave format report
  @scenario20
  Scenario Outline: To open leave format report
    When user open leave format report
    And select month year "<month-year>" on leave format report
    Then click show to open leave format report

    Examples: 
      | month-year   |
      | April - 2017 |

  #attendance report
  @scenario21
  Scenario: To open attendance report
    When user open attendance report
    And select from date as month "April" year "2017" and day "1" on attendance report
    And select to date as month "May" year "2017" and day "31" on attendance report
    Then click show to open attendance report

  #attendance analysis report
  @scenario22
  Scenario: To open attendance analysis report
    When user open attendance analysis report
    And select from date as month "April" year "2017" and day "1" on attendance analysis report
    And select to date as month "May" year "2017" and day "31" on attendance analysis report
    Then click show to open attendance analysis report

  @scenario23
  Scenario: To open attendance analysis report with exclude graph
    When user open attendance analysis report
    And select from date as month "April" year "2017" and day "1" on attendance analysis report
    And select to date as month "May" year "2017" and day "31" on attendance analysis report
    And select exclude graph on attendance analysis report
    Then click show to open attendance analysis report

  #leave balance report
  @scenario24
  Scenario Outline: To open leave balance report
    When user open leave balance report
    And select from month year "<from month-year>" on leave balance report
    And select to month year "<to month-year>" on leave balance report
    Then click show to open leave balance report

    Examples: 
      | from month-year | to month-year |
      | April - 2017    | May - 2017    |

  #sanctioned leave report
  @scenario25
  Scenario: To open sanctioned leave report
    When user open sanctioned leave report
    And select from date as month "April" year "2017" and day "1" on sanctioned leave report
    And select to date as month "May" year "2017" and day "31" on sanctioned leave report
    Then click show to open sanctioned leave report

  #leave card report
  @scenario26
  Scenario Outline: To open leave card report
    When user open leave card report
    And select year "<year>" on leave card report
    Then click show to open leave card report

    Examples: 
      | year      |
      | 2017-2018 |

  #monthly performance report
  @scenario27
  Scenario: To open monthly performance report
    When user open monthly performance report
    And select from date as month "April" year "2017" and day "1" on monthly performance report
    And select to date as month "May" year "2017" and day "31" on monthly performance report
    Then click show to open monthly performance report

  #leave ledger report
  @scenario28
  Scenario Outline: To open leave ledger report
    When user open leave ledger report
    And select year "<year>" on leave ledger report
    Then click show to open leave ledger report

    Examples: 
      | year      |
      | 2017-2018 |

  #leave register report
  @scenario29
  Scenario Outline: To open leave register report
    When user open leave register report
    And select year "<year>" on leave register report
    Then click show to open leave register report

    Examples: 
      | year      |
      | 2017-2018 |

  #leave bucket report
  @scenario30
  Scenario Outline: To open leave bucket report with active status
    When user open leave bucket report
    And select month year "<month-year>" on leave bucket report
    And select employee status "active" on leave bucket report
    Then click show to open leave bucket report

    Examples: 
      | month-year   |
      | April - 2017 |

  @scenario31
  Scenario Outline: To open leave bucket report with inactive status
    When user open leave bucket report
    And select month year "<month-year>" on leave bucket report
    And select employee status "inactive" on leave bucket report
    Then click show to open leave bucket report

    Examples: 
      | month-year   |
      | April - 2017 |

  @scenario32
  Scenario Outline: To open leave bucket report with all status
    When user open leave bucket report
    And select month year "<month-year>" on leave bucket report
    And select employee status "all" on leave bucket report
    Then click show to open leave bucket report

    Examples: 
      | month-year   |
      | April - 2017 |

  #school staff attendance register
  @scenario33
  Scenario Outline: To open school staff attendance register
    When user open school staff attendance register
    And select month year "<month-year>" on school staff attendance register
    Then click show to open school staff attendance register

    Examples: 
      | month-year   |
      | April - 2017 |

  #monthly late in count report
  @scenario34
  Scenario: To open monthly monthly late in count report
    When user open monthly monthly late in count report
    And select from date as month "April" year "2017" and day "1" on monthly late in count report
    And select to date as month "May" year "2017" and day "31" on monthly late in count report
    Then click show to open monthly late in count report
