# BootCamp-Mod-11-UFOs

Performing analysis using javascript and html to create filters to be used by users on a website to filter large amounts of data.

## Overview of Project

### Purpose
The purpose of this analysis is to use javascript and html to help Dana, a data journalist who is writing about UFO sightings, create a dynamic website that allows users to input date, location, and/or sighting information to filter a javascript data file to view in a html table.

## Analysis and Results
### Creating the Search Fields
- Ultimately there needed to be 5 search fields to sort the data, the first thing to do was to focus on just one.
- The initial change was to remove the button from the table and change the event listener to activate when the Enter button is pressed instead of when a button on the page was clicked.
- Next, the code stores the information entered in the search fields. 
- Then, the code filters the data based on the search criteria. 
- Finally, the last step is to loop through all of the search fields that have been activated.

### Searching the Data
- Upon loading the website, the initial set-up is shown below. The search fields hold a sample search value.
<p align="center"><img src="https://github.com/M-Outlaw/BootCamp-Mod-11-UFOs/blob/main/static/Images/Initial_Table.png"width="910" height="477"/></p>
 
- Next, select which field to search first. 
  * Be sure to notice the format of the samples, because using a different format for the date or using uppercase values for the text fields will cause an empty table to return.
<p align="center"><img src="https://github.com/M-Outlaw/BootCamp-Mod-11-UFOs/blob/main/static/Images/First_Search.png"width="910" height="477"/></p>
 
  * This is an example of what happens when you use the wrong format for the date. An empty table appears on the page.
<p align="center"><img src="https://github.com/M-Outlaw/BootCamp-Mod-11-UFOs/blob/main/static/Images/Bad_Search.png"width="910" height="477"/></p>
 
- At any point you can remove all of the text in the search fields and all of the data repopulates the table.
<p align="center"><img src="https://github.com/M-Outlaw/BootCamp-Mod-11-UFOs/blob/main/static/Images/Clear_Table.png"width="910" height="477"/></p>
 
- Then, to further filter the data, select another field and enter a search value.
<p align="center"><img src="https://github.com/M-Outlaw/BootCamp-Mod-11-UFOs/blob/main/static/Images/Second_Search.png"width="910" height="477"/></p>
 
- The user can continue adding filters until they get down to just one entry in the table.
<p align="center"><img src="https://github.com/M-Outlaw/BootCamp-Mod-11-UFOs/blob/main/static/Images/Third_Search.png"width="910" height="477"/></p>
 
## Summary
### 
- Multiple filters can be used in a website to filter data from a javascript file.

### Drawback
- One drawback of using the search fields is that the user must be specific in what they enter into the field for the data to show up correctly:
  * The date must be entered in the correct format.
  * The city must be spelled correctly.
  * All searches must be in all lowercase.
- If these specifics are not followed, everything will be filtered out because it will not match any of the data and thus, we end up with a blank search.

### Further Development
To enhance this website, I would:
- change the country field to a drop-down because there are only two options and that is an easy way to reduce user error.
- change the date field to pull up a calendar of the month of January 2010 when the user clicks in the field. This would allow the user to click the date instead of having to type in the date because all of the dates are in January 2010, so the user would only have to click the day.
- change the state field to a drop-down because users, especially within the United States are used to having a drop-down to select the state.
- for the city, set the event listener to start filtering as each letter is being typed in the field, so that the user can quickly see if they have misspelled something or see how the city is spelled because it has already reduced the number of rows of data.
