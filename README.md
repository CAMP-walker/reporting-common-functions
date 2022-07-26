# Common functions to be used across reporting spreadsheets
Todo:
- [ ] Expose functions for use in existing spreadsheets
- [ ] Process post requests
- [ ] Serialize and store processed requests
- [ ] Pass on any necessary data
- [ ] Perform user defined get requests
- [ ] Save spreadsheet resources by doing calculations in code
- [ ] Replace all existing sheet logic with this new library
- [ ] Restructure sheets around objects

# Tabs
The number of tabs needed for use can be greatly reduced by moving logic and infrastructure into code.
Here are the tabs I can think of for use: 

## Example Email
|Email Name                   | Subject Line     | Campaign         | Send Date | Delivered    | Opens         |  Lists           | Sender Name      | Gross Raised   | Net Raised | Donors | Clicks | Notes|

## Example Rev/Share
|Email Name                   | Partner          | Campaign         | Send Date | List         | Gross Raised  | Net Raised       | Donors           | New Leads      | Notes      |

## Example Text 
|Text Name                    | Campaign         | Send Date        | List      | Gross Raised | Net Raised    | Donors           | New Leads        | Notes          |

## Example Ad
|Ad Name                      | Campaign         | Placement Period | Agency    | Gross Raised | Net Raised    | Donors           | New Leads        | Notes          |

## Donor List
|Email Address                | First Name       | Last Name        | State     | Origin       | Total to date | Largest Donation | Date Last Active | Donation Topics|

## Topic List 
|Emails                       | Ads              | Texts            | Raised    | Donors       | Avg Open Rate |

## List Evaluations 
Here we can evaluate the performance of lists and generate new ones based on donor behavior and campaign metrics

## Front Page 
Metrics for rolling 30 or 7 (TBD) day window.
|Client Name                  | Dates for window |
|----                         |----              |
| Total Housefile Count       | Number           | 
| Active Sub Count            | Number           | 
| Rate of Change              | Rate             |
| Prospecting Expenses        | Number           |
| HF Sends this Period        | Number           | 
| Rev/Share Sends this Period | Number           | 
| Texts this Period           | Number           | 
| Raised This Period          | Number           |
| Rate of Change              | Rate             | 
| Leads This Period           | Number           |  