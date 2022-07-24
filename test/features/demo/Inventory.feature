Feature: Inventory

@demo
Scenario Outline: Demo Inventory
  Given Login to Inventory web app
  Then inventory page should list <NumberOfProducts>
  Then validate all products have valid price


  Examples:
      | TestID     | NumberOfProducts |
      | INV_TC002  | 6                |



