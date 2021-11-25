Feature: Demo Feature



Scenario Outline: run demo first test
  Given Google page is opened
  When Search with <SearchItem>
  Then Click on the first result 
  Then URL should be match <ExpectedURL>


  Examples:
      | TestID      | SearchItem | ExpectedURL |
      | DEMO_TC001  | wdio     | https://webdriver.io/  |



