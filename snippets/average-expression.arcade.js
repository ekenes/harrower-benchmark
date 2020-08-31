
    function getFieldFromDate(d) {
      var fieldName = "DAYSTRING_" + Text(d, "MM_DD_Y");
      return fieldName;
    }


      function DAYSTRING_01_22_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_22_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_23_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_23_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_24_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_24_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_25_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_25_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_26_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_26_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_27_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_27_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_28_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_28_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_29_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_29_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_30_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_30_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_01_31_2020Average(){

    var currentDayFieldName = "DAYSTRING_01_31_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_01_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_01_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_02_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_02_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_03_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_03_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_04_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_04_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_05_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_05_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_06_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_06_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_07_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_07_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_08_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_08_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_09_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_09_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_10_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_10_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_11_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_11_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_12_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_12_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_13_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_13_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_14_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_14_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_15_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_15_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_16_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_16_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_17_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_17_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_18_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_18_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_19_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_19_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_20_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_20_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_21_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_21_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_22_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_22_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_23_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_23_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_24_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_24_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_25_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_25_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_26_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_26_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_27_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_27_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_28_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_28_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_02_29_2020Average(){

    var currentDayFieldName = "DAYSTRING_02_29_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_01_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_01_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_02_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_02_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_03_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_03_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_04_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_04_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_05_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_05_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_06_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_06_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_07_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_07_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_08_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_08_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_09_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_09_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_10_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_10_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_11_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_11_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_12_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_12_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_13_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_13_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_14_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_14_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_15_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_15_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_16_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_16_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_17_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_17_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_18_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_18_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_19_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_19_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_20_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_20_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_21_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_21_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_22_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_22_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_23_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_23_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_24_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_24_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_25_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_25_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_26_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_26_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_27_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_27_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_28_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_28_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_29_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_29_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_30_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_30_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_03_31_2020Average(){

    var currentDayFieldName = "DAYSTRING_03_31_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_01_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_01_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_02_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_02_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_03_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_03_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_04_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_04_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_05_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_05_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_06_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_06_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_07_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_07_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_08_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_08_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_09_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_09_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_10_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_10_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_11_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_11_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_12_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_12_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_13_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_13_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_14_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_14_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_15_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_15_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_16_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_16_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_17_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_17_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_18_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_18_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_19_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_19_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_20_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_20_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_21_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_21_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_22_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_22_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_23_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_23_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_24_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_24_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_25_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_25_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_26_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_26_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_27_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_27_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_28_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_28_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_29_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_29_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_04_30_2020Average(){

    var currentDayFieldName = "DAYSTRING_04_30_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_01_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_01_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_02_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_02_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_03_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_03_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_04_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_04_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_05_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_05_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_06_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_06_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_07_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_07_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_08_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_08_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_09_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_09_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_10_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_10_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_11_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_11_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_12_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_12_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_13_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_13_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_14_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_14_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_15_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_15_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_16_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_16_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_17_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_17_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_18_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_18_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_19_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_19_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_20_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_20_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_21_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_21_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_22_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_22_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_23_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_23_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_24_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_24_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_25_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_25_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_26_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_26_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_27_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_27_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_28_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_28_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_29_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_29_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_30_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_30_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_05_31_2020Average(){

    var currentDayFieldName = "DAYSTRING_05_31_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_01_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_01_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_02_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_02_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_03_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_03_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_04_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_04_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_05_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_05_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_06_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_06_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_07_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_07_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_08_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_08_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_09_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_09_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_10_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_10_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_11_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_11_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_12_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_12_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_13_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_13_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_14_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_14_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_15_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_15_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_16_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_16_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_17_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_17_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_18_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_18_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_19_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_19_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_20_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_20_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_21_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_21_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_22_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_22_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_23_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_23_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_24_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_24_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_25_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_25_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_26_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_26_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_27_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_27_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_28_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_28_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_29_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_29_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_06_30_2020Average(){

    var currentDayFieldName = "DAYSTRING_06_30_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_01_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_01_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_02_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_02_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_03_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_03_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_04_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_04_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_05_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_05_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_06_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_06_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_07_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_07_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_08_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_08_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_09_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_09_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_10_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_10_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_11_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_11_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_12_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_12_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_13_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_13_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_14_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_14_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_15_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_15_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_16_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_16_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_17_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_17_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_18_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_18_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_19_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_19_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_20_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_20_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_21_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_21_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_22_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_22_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_23_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_23_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_24_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_24_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_25_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_25_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_26_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_26_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_27_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_27_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_28_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_28_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_29_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_29_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_30_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_30_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_07_31_2020Average(){

    var currentDayFieldName = "DAYSTRING_07_31_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_01_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_01_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_02_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_02_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_03_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_03_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_04_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_04_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_05_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_05_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_06_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_06_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_07_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_07_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_08_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_08_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_09_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_09_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_10_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_10_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_11_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_11_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_12_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_12_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_13_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_13_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_14_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_14_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_15_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_15_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_16_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_16_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_17_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_17_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_18_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_18_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_19_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_19_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_20_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_20_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_21_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_21_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_22_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_22_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_23_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_23_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_24_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_24_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_25_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_25_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_26_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_26_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_27_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_27_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_28_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_28_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_29_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_29_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }


      function DAYSTRING_08_30_2020Average(){

    var currentDayFieldName = "DAYSTRING_08_30_2020";
    var currentDayValue = $feature[currentDayFieldName];
    var currentDayValueParts = Split(currentDayValue, "|");
    var currentDayCases = Number(currentDayValueParts[0]);
    var currentDayDeaths = Number(currentDayValueParts[1]);

    var parts = Split(Replace(currentDayFieldName,"DAYSTRING_",""), "_");
    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));

    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count

    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');
    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');
    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');
    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');
    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');

    var startDate = Date(2020, 0, 22);

    var deaths = currentDayDeaths;

    if (daysAgo15 < startDate){
      return currentDayCases - deaths;
    }

    var daysAgo14FieldName = getFieldFromDate(daysAgo14);
    var daysAgo14Value = $feature[daysAgo14FieldName];
    var daysAgo14ValueParts = Split(daysAgo14Value, "|");
    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);
    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);

    var daysAgo15FieldName = getFieldFromDate(daysAgo15);
    var daysAgo15Value = $feature[daysAgo15FieldName];
    var daysAgo15ValueParts = Split(daysAgo15Value, "|");
    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);
    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);

    if (daysAgo26 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );
    }

    var daysAgo25FieldName = getFieldFromDate(daysAgo25);
    var daysAgo25Value = $feature[daysAgo25FieldName];
    var daysAgo25ValueParts = Split(daysAgo25Value, "|");
    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);
    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);

    var daysAgo26FieldName = getFieldFromDate(daysAgo26);
    var daysAgo26Value = $feature[daysAgo26FieldName];
    var daysAgo26ValueParts = Split(daysAgo26Value, "|");
    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);
    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);

    if (daysAgo49 < startDate){
      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );
    }

    var daysAgo49FieldName = getFieldFromDate(daysAgo49);
    var daysAgo49Value = $feature[daysAgo49FieldName];
    var daysAgo49ValueParts = Split(daysAgo49Value, "|");
    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);
    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);

    deaths = currentDayDeaths - daysAgo49Deaths;
    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;

    return Round(activeEstimate);

      }

    var averageArray = [ DAYSTRING_01_22_2020Average(), DAYSTRING_01_23_2020Average(), DAYSTRING_01_24_2020Average(), DAYSTRING_01_25_2020Average(), DAYSTRING_01_26_2020Average(), DAYSTRING_01_27_2020Average(), DAYSTRING_01_28_2020Average(), DAYSTRING_01_29_2020Average(), DAYSTRING_01_30_2020Average(), DAYSTRING_01_31_2020Average(), DAYSTRING_02_01_2020Average(), DAYSTRING_02_02_2020Average(), DAYSTRING_02_03_2020Average(), DAYSTRING_02_04_2020Average(), DAYSTRING_02_05_2020Average(), DAYSTRING_02_06_2020Average(), DAYSTRING_02_07_2020Average(), DAYSTRING_02_08_2020Average(), DAYSTRING_02_09_2020Average(), DAYSTRING_02_10_2020Average(), DAYSTRING_02_11_2020Average(), DAYSTRING_02_12_2020Average(), DAYSTRING_02_13_2020Average(), DAYSTRING_02_14_2020Average(), DAYSTRING_02_15_2020Average(), DAYSTRING_02_16_2020Average(), DAYSTRING_02_17_2020Average(), DAYSTRING_02_18_2020Average(), DAYSTRING_02_19_2020Average(), DAYSTRING_02_20_2020Average(), DAYSTRING_02_21_2020Average(), DAYSTRING_02_22_2020Average(), DAYSTRING_02_23_2020Average(), DAYSTRING_02_24_2020Average(), DAYSTRING_02_25_2020Average(), DAYSTRING_02_26_2020Average(), DAYSTRING_02_27_2020Average(), DAYSTRING_02_28_2020Average(), DAYSTRING_02_29_2020Average(), DAYSTRING_03_01_2020Average(), DAYSTRING_03_02_2020Average(), DAYSTRING_03_03_2020Average(), DAYSTRING_03_04_2020Average(), DAYSTRING_03_05_2020Average(), DAYSTRING_03_06_2020Average(), DAYSTRING_03_07_2020Average(), DAYSTRING_03_08_2020Average(), DAYSTRING_03_09_2020Average(), DAYSTRING_03_10_2020Average(), DAYSTRING_03_11_2020Average(), DAYSTRING_03_12_2020Average(), DAYSTRING_03_13_2020Average(), DAYSTRING_03_14_2020Average(), DAYSTRING_03_15_2020Average(), DAYSTRING_03_16_2020Average(), DAYSTRING_03_17_2020Average(), DAYSTRING_03_18_2020Average(), DAYSTRING_03_19_2020Average(), DAYSTRING_03_20_2020Average(), DAYSTRING_03_21_2020Average(), DAYSTRING_03_22_2020Average(), DAYSTRING_03_23_2020Average(), DAYSTRING_03_24_2020Average(), DAYSTRING_03_25_2020Average(), DAYSTRING_03_26_2020Average(), DAYSTRING_03_27_2020Average(), DAYSTRING_03_28_2020Average(), DAYSTRING_03_29_2020Average(), DAYSTRING_03_30_2020Average(), DAYSTRING_03_31_2020Average(), DAYSTRING_04_01_2020Average(), DAYSTRING_04_02_2020Average(), DAYSTRING_04_03_2020Average(), DAYSTRING_04_04_2020Average(), DAYSTRING_04_05_2020Average(), DAYSTRING_04_06_2020Average(), DAYSTRING_04_07_2020Average(), DAYSTRING_04_08_2020Average(), DAYSTRING_04_09_2020Average(), DAYSTRING_04_10_2020Average(), DAYSTRING_04_11_2020Average(), DAYSTRING_04_12_2020Average(), DAYSTRING_04_13_2020Average(), DAYSTRING_04_14_2020Average(), DAYSTRING_04_15_2020Average(), DAYSTRING_04_16_2020Average(), DAYSTRING_04_17_2020Average(), DAYSTRING_04_18_2020Average(), DAYSTRING_04_19_2020Average(), DAYSTRING_04_20_2020Average(), DAYSTRING_04_21_2020Average(), DAYSTRING_04_22_2020Average(), DAYSTRING_04_23_2020Average(), DAYSTRING_04_24_2020Average(), DAYSTRING_04_25_2020Average(), DAYSTRING_04_26_2020Average(), DAYSTRING_04_27_2020Average(), DAYSTRING_04_28_2020Average(), DAYSTRING_04_29_2020Average(), DAYSTRING_04_30_2020Average(), DAYSTRING_05_01_2020Average(), DAYSTRING_05_02_2020Average(), DAYSTRING_05_03_2020Average(), DAYSTRING_05_04_2020Average(), DAYSTRING_05_05_2020Average(), DAYSTRING_05_06_2020Average(), DAYSTRING_05_07_2020Average(), DAYSTRING_05_08_2020Average(), DAYSTRING_05_09_2020Average(), DAYSTRING_05_10_2020Average(), DAYSTRING_05_11_2020Average(), DAYSTRING_05_12_2020Average(), DAYSTRING_05_13_2020Average(), DAYSTRING_05_14_2020Average(), DAYSTRING_05_15_2020Average(), DAYSTRING_05_16_2020Average(), DAYSTRING_05_17_2020Average(), DAYSTRING_05_18_2020Average(), DAYSTRING_05_19_2020Average(), DAYSTRING_05_20_2020Average(), DAYSTRING_05_21_2020Average(), DAYSTRING_05_22_2020Average(), DAYSTRING_05_23_2020Average(), DAYSTRING_05_24_2020Average(), DAYSTRING_05_25_2020Average(), DAYSTRING_05_26_2020Average(), DAYSTRING_05_27_2020Average(), DAYSTRING_05_28_2020Average(), DAYSTRING_05_29_2020Average(), DAYSTRING_05_30_2020Average(), DAYSTRING_05_31_2020Average(), DAYSTRING_06_01_2020Average(), DAYSTRING_06_02_2020Average(), DAYSTRING_06_03_2020Average(), DAYSTRING_06_04_2020Average(), DAYSTRING_06_05_2020Average(), DAYSTRING_06_06_2020Average(), DAYSTRING_06_07_2020Average(), DAYSTRING_06_08_2020Average(), DAYSTRING_06_09_2020Average(), DAYSTRING_06_10_2020Average(), DAYSTRING_06_11_2020Average(), DAYSTRING_06_12_2020Average(), DAYSTRING_06_13_2020Average(), DAYSTRING_06_14_2020Average(), DAYSTRING_06_15_2020Average(), DAYSTRING_06_16_2020Average(), DAYSTRING_06_17_2020Average(), DAYSTRING_06_18_2020Average(), DAYSTRING_06_19_2020Average(), DAYSTRING_06_20_2020Average(), DAYSTRING_06_21_2020Average(), DAYSTRING_06_22_2020Average(), DAYSTRING_06_23_2020Average(), DAYSTRING_06_24_2020Average(), DAYSTRING_06_25_2020Average(), DAYSTRING_06_26_2020Average(), DAYSTRING_06_27_2020Average(), DAYSTRING_06_28_2020Average(), DAYSTRING_06_29_2020Average(), DAYSTRING_06_30_2020Average(), DAYSTRING_07_01_2020Average(), DAYSTRING_07_02_2020Average(), DAYSTRING_07_03_2020Average(), DAYSTRING_07_04_2020Average(), DAYSTRING_07_05_2020Average(), DAYSTRING_07_06_2020Average(), DAYSTRING_07_07_2020Average(), DAYSTRING_07_08_2020Average(), DAYSTRING_07_09_2020Average(), DAYSTRING_07_10_2020Average(), DAYSTRING_07_11_2020Average(), DAYSTRING_07_12_2020Average(), DAYSTRING_07_13_2020Average(), DAYSTRING_07_14_2020Average(), DAYSTRING_07_15_2020Average(), DAYSTRING_07_16_2020Average(), DAYSTRING_07_17_2020Average(), DAYSTRING_07_18_2020Average(), DAYSTRING_07_19_2020Average(), DAYSTRING_07_20_2020Average(), DAYSTRING_07_21_2020Average(), DAYSTRING_07_22_2020Average(), DAYSTRING_07_23_2020Average(), DAYSTRING_07_24_2020Average(), DAYSTRING_07_25_2020Average(), DAYSTRING_07_26_2020Average(), DAYSTRING_07_27_2020Average(), DAYSTRING_07_28_2020Average(), DAYSTRING_07_29_2020Average(), DAYSTRING_07_30_2020Average(), DAYSTRING_07_31_2020Average(), DAYSTRING_08_01_2020Average(), DAYSTRING_08_02_2020Average(), DAYSTRING_08_03_2020Average(), DAYSTRING_08_04_2020Average(), DAYSTRING_08_05_2020Average(), DAYSTRING_08_06_2020Average(), DAYSTRING_08_07_2020Average(), DAYSTRING_08_08_2020Average(), DAYSTRING_08_09_2020Average(), DAYSTRING_08_10_2020Average(), DAYSTRING_08_11_2020Average(), DAYSTRING_08_12_2020Average(), DAYSTRING_08_13_2020Average(), DAYSTRING_08_14_2020Average(), DAYSTRING_08_15_2020Average(), DAYSTRING_08_16_2020Average(), DAYSTRING_08_17_2020Average(), DAYSTRING_08_18_2020Average(), DAYSTRING_08_19_2020Average(), DAYSTRING_08_20_2020Average(), DAYSTRING_08_21_2020Average(), DAYSTRING_08_22_2020Average(), DAYSTRING_08_23_2020Average(), DAYSTRING_08_24_2020Average(), DAYSTRING_08_25_2020Average(), DAYSTRING_08_26_2020Average(), DAYSTRING_08_27_2020Average(), DAYSTRING_08_28_2020Average(), DAYSTRING_08_29_2020Average(), DAYSTRING_08_30_2020Average()]

  return Max(averageArray)