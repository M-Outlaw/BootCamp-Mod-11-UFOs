// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};


// 3. Use this function to update the filters. 
function updateFilters(id) {

    // 4a. Save the element that was changed as a variable.
    let inputText = d3.select(id);
    // 4b. Save the value that was changed as a variable.
    let filterValue = inputText.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    var filterId = inputText.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if(filterValue) {
      filters[filterId] = filterValue;
    }
    else {
      delete filters[filterId];
    }
    console.log(filters)
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
    let key = Object.keys(filters);
    let value = Object.keys(filters);
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filters).forEach(([key, value]) => {
      filteredData = filteredData.filter(row => row[key] === value);
    });
  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  document.querySelector('#datetime').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      updateFilters('#datetime')
    }
  });
  document.querySelector('#city').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      updateFilters('#city')
    }
  });
  document.querySelector('#state').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      updateFilters('#state')
    }
  });
  document.querySelector('#country').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      updateFilters('#country')
    }
  });
  document.querySelector('#shape').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      updateFilters('#shape')
    }
  });
  
  // Build the table when the page loads
  buildTable(tableData);