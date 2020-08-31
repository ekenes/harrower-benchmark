define(["require", "exports", "esri/core/lang", "./layerUtils"], function (require, exports, lang, layerUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var initialTimeExtent = {
        start: new Date(2020, 0, 22),
        end: new Date(new Date().setDate(new Date().getDate() - 1))
    };
    function createNewCasesAverageExpression(currentDateFieldName, excludeGetFieldFromDate) {
        var getFieldFromDate = getFieldFromDateFunction();
        var base = "\n    var unit = 7;\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n    var currentDayValueParts = Split(currentDayValue, \"|\");\n    var currentDayValueCases = Number(currentDayValueParts[0]);\n    var currentDayValueDeaths = Number(currentDayValueParts[1]);\n\n    var parts = Split(Replace(currentDayFieldName,\"" + layerUtils_1.prefix + "\",\"\"), \"" + layerUtils_1.separator + "\");\n    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));\n    var previousDay = DateAdd(currentDayFieldDate, (-1 * unit), 'days');\n    if (Month(previousDay) == 0 && Day(previousDay) <= 21 && Year(previousDay) == 2020){\n      return 0;\n    }\n\n    var previousDayFieldName = getFieldFromDate(previousDay);\n    var previousDayValue = $feature[previousDayFieldName];\n    var previousDayValueParts = Split(previousDayValue, \"|\");\n    var previousDayValueCases = Number(previousDayValueParts[0]);\n    var previousDayValueDeaths = Number(previousDayValueParts[1]);\n\n    return Round((currentDayValueCases - previousDayValueCases) / unit);\n  ";
        return excludeGetFieldFromDate ? base : getFieldFromDate + base;
    }
    exports.createNewCasesAverageExpression = createNewCasesAverageExpression;
    function createNewCasesExpression(currentDateFieldName, excludeGetFieldFromDate) {
        var getFieldFromDate = getFieldFromDateFunction();
        var base = "\n    var unit = 7;\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n    var currentDayValueParts = Split(currentDayValue, \"|\");\n    var currentDayValueCases = Number(currentDayValueParts[0]);\n    var currentDayValueDeaths = Number(currentDayValueParts[1]);\n\n    var parts = Split(Replace(currentDayFieldName,\"" + layerUtils_1.prefix + "\",\"\"), \"" + layerUtils_1.separator + "\");\n    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));\n    var previousDay = DateAdd(currentDayFieldDate, (-1 * unit), 'days');\n    if (Month(previousDay) == 0 && Day(previousDay) <= 21 && Year(previousDay) == 2020){\n      return 0;\n    }\n\n    var previousDayFieldName = getFieldFromDate(previousDay);\n    var previousDayValue = $feature[previousDayFieldName];\n    var previousDayValueParts = Split(previousDayValue, \"|\");\n    var previousDayValueCases = Number(previousDayValueParts[0]);\n    var previousDayValueDeaths = Number(previousDayValueParts[1]);\n\n    return (currentDayValueCases - previousDayValueCases);\n  ";
        return excludeGetFieldFromDate ? base : getFieldFromDate + base;
    }
    exports.createNewCasesExpression = createNewCasesExpression;
    function createActiveCasesExpression(currentDateFieldName, excludeGetFieldFromDate) {
        var getFieldFromDate = getFieldFromDateFunction();
        var base = "\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n    var currentDayValueParts = Split(currentDayValue, \"|\");\n    var currentDayCases = Number(currentDayValueParts[0]);\n    var currentDayDeaths = Number(currentDayValueParts[1]);\n\n    var parts = Split(Replace(currentDayFieldName,\"" + layerUtils_1.prefix + "\",\"\"), \"" + layerUtils_1.separator + "\");\n    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));\n\n    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count\n\n    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');\n    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');\n    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');\n    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');\n    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');\n\n    var startDate = Date(2020, 0, 22);\n\n    var deaths = currentDayDeaths;\n\n    if (daysAgo15 < startDate){\n      return currentDayCases - deaths;\n    }\n\n    var daysAgo14FieldName = getFieldFromDate(daysAgo14);\n    var daysAgo14Value = $feature[daysAgo14FieldName];\n    var daysAgo14ValueParts = Split(daysAgo14Value, \"|\");\n    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);\n    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);\n\n    var daysAgo15FieldName = getFieldFromDate(daysAgo15);\n    var daysAgo15Value = $feature[daysAgo15FieldName];\n    var daysAgo15ValueParts = Split(daysAgo15Value, \"|\");\n    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);\n    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);\n\n    if (daysAgo26 < startDate){\n      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );\n    }\n\n    var daysAgo25FieldName = getFieldFromDate(daysAgo25);\n    var daysAgo25Value = $feature[daysAgo25FieldName];\n    var daysAgo25ValueParts = Split(daysAgo25Value, \"|\");\n    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);\n    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);\n\n    var daysAgo26FieldName = getFieldFromDate(daysAgo26);\n    var daysAgo26Value = $feature[daysAgo26FieldName];\n    var daysAgo26ValueParts = Split(daysAgo26Value, \"|\");\n    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);\n    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);\n\n    if (daysAgo49 < startDate){\n      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );\n    }\n\n    var daysAgo49FieldName = getFieldFromDate(daysAgo49);\n    var daysAgo49Value = $feature[daysAgo49FieldName];\n    var daysAgo49ValueParts = Split(daysAgo49Value, \"|\");\n    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);\n    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);\n\n    deaths = currentDayDeaths - daysAgo49Deaths;\n    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;\n\n    return Round(activeEstimate);\n  ";
        return excludeGetFieldFromDate ? base : getFieldFromDate + base;
    }
    exports.createActiveCasesExpression = createActiveCasesExpression;
    function createRecoveredCasesExpression(currentDateFieldName, excludeGetFieldFromDate) {
        var getFieldFromDate = getFieldFromDateFunction();
        var base = "\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n    var currentDayValueParts = Split(currentDayValue, \"|\");\n    var currentDayCases = Number(currentDayValueParts[0]);\n    var currentDayDeaths = Number(currentDayValueParts[1]);\n\n    var parts = Split(Replace(currentDayFieldName,\"" + layerUtils_1.prefix + "\",\"\"), \"" + layerUtils_1.separator + "\");\n    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));\n\n    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count\n\n    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');\n    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');\n    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');\n    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');\n    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');\n\n    var startDate = Date(2020, 0, 22);\n\n    var deaths = currentDayDeaths;\n\n    if (daysAgo15 < startDate){\n      return currentDayCases - deaths;\n    }\n\n    var daysAgo14FieldName = getFieldFromDate(daysAgo14);\n    var daysAgo14Value = $feature[daysAgo14FieldName];\n    var daysAgo14ValueParts = Split(daysAgo14Value, \"|\");\n    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);\n    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);\n\n    var daysAgo15FieldName = getFieldFromDate(daysAgo15);\n    var daysAgo15Value = $feature[daysAgo15FieldName];\n    var daysAgo15ValueParts = Split(daysAgo15Value, \"|\");\n    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);\n    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);\n\n    if (daysAgo26 < startDate){\n      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );\n    }\n\n    var daysAgo25FieldName = getFieldFromDate(daysAgo25);\n    var daysAgo25Value = $feature[daysAgo25FieldName];\n    var daysAgo25ValueParts = Split(daysAgo25Value, \"|\");\n    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);\n    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);\n\n    var daysAgo26FieldName = getFieldFromDate(daysAgo26);\n    var daysAgo26Value = $feature[daysAgo26FieldName];\n    var daysAgo26ValueParts = Split(daysAgo26Value, \"|\");\n    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);\n    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);\n\n    if (daysAgo49 < startDate){\n      return Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );\n    }\n\n    var daysAgo49FieldName = getFieldFromDate(daysAgo49);\n    var daysAgo49Value = $feature[daysAgo49FieldName];\n    var daysAgo49ValueParts = Split(daysAgo49Value, \"|\");\n    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);\n    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);\n\n    deaths = currentDayDeaths - daysAgo49Deaths;\n    var activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;\n\n    return Round(currentDayCases - activeEstimate - currentDayDeaths);\n  ";
        return excludeGetFieldFromDate ? base : getFieldFromDate + base;
    }
    exports.createRecoveredCasesExpression = createRecoveredCasesExpression;
    function createDoublingTimeExpression(currentDateFieldName, excludeGetFieldFromDate) {
        var getFieldFromDate = getFieldFromDateFunction();
        var base = "\n    var unit = 14;\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n    var currentDayValueParts = Split(currentDayValue, \"|\");\n    var totalCasesValue = Number(currentDayValueParts[0]);\n\n    var parts = Split(Replace(currentDayFieldName,\"" + layerUtils_1.prefix + "\",\"\"), \"" + layerUtils_1.separator + "\");\n    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));\n    var previousDay = DateAdd(currentDayFieldDate, (unit * -1), 'days');\n\n    if (Month(previousDay) == 0 && Day(previousDay) <= 21 && Year(previousDay) == 2020){\n      return 0;\n    }\n\n    var previousDayFieldName = getFieldFromDate(previousDay);\n    var previousDayValue = $feature[previousDayFieldName];\n    var previousDayValueParts = Split(previousDayValue, \"|\");\n    var previousDayCasesValue = Number(previousDayValueParts[0]);\n\n    var newCases = totalCasesValue - previousDayCasesValue;\n    var oldCases = totalCasesValue - newCases;\n\n    if(newCases == 0 || oldCases == 0){\n      return 0;\n    }\n\n    var doublingTimeDays = Floor(unit / (newCases / oldCases))\n    return IIF(doublingTimeDays >= 0, doublingTimeDays, 0);\n  ";
        return excludeGetFieldFromDate ? base : getFieldFromDate + base;
    }
    exports.createDoublingTimeExpression = createDoublingTimeExpression;
    function createCaseRateExpression(currentDateFieldName) {
        return "\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n    var currentDaySplit = Split(currentDayValue, \"|\");\n    var cases = Number(currentDaySplit[0]);\n    var deaths = Number(currentDaySplit[1]);\n    var population = $feature.POPULATION;\n    return (cases / population ) * 100000;\n  ";
    }
    exports.createCaseRateExpression = createCaseRateExpression;
    function createDeathRate100kExpression(currentDateFieldName) {
        return "\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n    var currentDaySplit = Split(currentDayValue, \"|\");\n    var cases = Number(currentDaySplit[0]);\n    var deaths = Number(currentDaySplit[1]);\n    var population = $feature.POPULATION;\n    return (deaths / population ) * 100000;\n  ";
    }
    exports.createDeathRate100kExpression = createDeathRate100kExpression;
    function createActiveCasesPer100kExpression(currentDateFieldName, excludeGetFieldFromDate) {
        var getFieldFromDate = getFieldFromDateFunction();
        var base = "\n    var population = $feature.POPULATION;\n\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n    var currentDayValueParts = Split(currentDayValue, \"|\");\n    var currentDayCases = Number(currentDayValueParts[0]);\n    var currentDayDeaths = Number(currentDayValueParts[1]);\n\n    var parts = Split(Replace(currentDayFieldName,\"" + layerUtils_1.prefix + "\",\"\"), \"" + layerUtils_1.separator + "\");\n    var currentDayFieldDate = Date(Number(parts[2]), Number(parts[0])-1, Number(parts[1]));\n\n    // Active Cases = (100% of new cases from last 14 days + 19% of days 15-25 + 5% of days 26-49) - Death Count\n\n    var daysAgo14 = DateAdd(currentDayFieldDate, -14, 'days');\n    var daysAgo15 = DateAdd(currentDayFieldDate, -15, 'days');\n    var daysAgo25 = DateAdd(currentDayFieldDate, -25, 'days');\n    var daysAgo26 = DateAdd(currentDayFieldDate, -26, 'days');\n    var daysAgo49 = DateAdd(currentDayFieldDate, -49, 'days');\n\n    var startDate = Date(2020, 0, 22);\n\n    var activeEstimate = 0;\n    var deaths = currentDayDeaths;\n\n    if (daysAgo15 < startDate){\n      activeEstimate = currentDayCases - deaths;\n      return (activeEstimate / population ) * 100000;\n    }\n\n    var daysAgo14FieldName = getFieldFromDate(daysAgo14);\n    var daysAgo14Value = $feature[daysAgo14FieldName];\n    var daysAgo14ValueParts = Split(daysAgo14Value, \"|\");\n    var daysAgo14Cases = Number(daysAgo14ValueParts[0]);\n    var daysAgo14Deaths = Number(daysAgo14ValueParts[1]);\n\n    var daysAgo15FieldName = getFieldFromDate(daysAgo15);\n    var daysAgo15Value = $feature[daysAgo15FieldName];\n    var daysAgo15ValueParts = Split(daysAgo15Value, \"|\");\n    var daysAgo15Cases = Number(daysAgo15ValueParts[0]);\n    var daysAgo15Deaths = Number(daysAgo15ValueParts[1]);\n\n    if (daysAgo26 < startDate){\n      activeEstimate = Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * daysAgo15Cases ) - deaths );\n      return (activeEstimate / population ) * 100000;\n    }\n\n    var daysAgo25FieldName = getFieldFromDate(daysAgo25);\n    var daysAgo25Value = $feature[daysAgo25FieldName];\n    var daysAgo25ValueParts = Split(daysAgo25Value, \"|\");\n    var daysAgo25Cases = Number(daysAgo25ValueParts[0]);\n    var daysAgo25Deaths = Number(daysAgo25ValueParts[1]);\n\n    var daysAgo26FieldName = getFieldFromDate(daysAgo26);\n    var daysAgo26Value = $feature[daysAgo26FieldName];\n    var daysAgo26ValueParts = Split(daysAgo26Value, \"|\");\n    var daysAgo26Cases = Number(daysAgo26ValueParts[0]);\n    var daysAgo26Deaths = Number(daysAgo26ValueParts[1]);\n\n    if (daysAgo49 < startDate){\n      activeEstimate = Round( (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * daysAgo26Cases ) - deaths );\n      return (activeEstimate / population ) * 100000;\n    }\n\n    var daysAgo49FieldName = getFieldFromDate(daysAgo49);\n    var daysAgo49Value = $feature[daysAgo49FieldName];\n    var daysAgo49ValueParts = Split(daysAgo49Value, \"|\");\n    var daysAgo49Cases = Number(daysAgo49ValueParts[0]);\n    var daysAgo49Deaths = Number(daysAgo49ValueParts[1]);\n\n    deaths = currentDayDeaths - daysAgo49Deaths;\n    activeEstimate = (currentDayCases - daysAgo14Cases) + ( 0.19 * ( daysAgo15Cases - daysAgo25Cases ) ) + ( 0.05 * ( daysAgo26Cases - daysAgo49Cases) ) - deaths;\n\n    return (activeEstimate / population ) * 100000;\n  ";
        return excludeGetFieldFromDate ? base : getFieldFromDate + base;
    }
    exports.createActiveCasesPer100kExpression = createActiveCasesPer100kExpression;
    function createDeathRateExpression(currentDateFieldName) {
        return "\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n\n    var parts = Split(currentDayValue, \"|\");\n\n    var cases = Number(parts[0]);\n    var deaths = Number(parts[1]);\n\n    return IIF(cases <= 0, 0, (deaths / cases) * 100);\n  ";
    }
    exports.createDeathRateExpression = createDeathRateExpression;
    function createTotalDeathsExpression(currentDateFieldName) {
        return "\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n\n    var parts = Split(currentDayValue, \"|\");\n\n    var cases = Number(parts[0]);\n    var deaths = Number(parts[1]);\n\n    return deaths;\n  ";
    }
    exports.createTotalDeathsExpression = createTotalDeathsExpression;
    function createTotalCasesExpression(currentDateFieldName) {
        return "\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n\n    var parts = Split(currentDayValue, \"|\");\n\n    var cases = Number(parts[0]);\n    var deaths = Number(parts[1]);\n\n    return cases;\n  ";
    }
    exports.createTotalCasesExpression = createTotalCasesExpression;
    function createSusceptiblePopulationExpression(currentDateFieldName) {
        return "\n    var currentDayFieldName = \"" + currentDateFieldName + "\";\n    var currentDayValue = $feature[currentDayFieldName];\n\n    var parts = Split(currentDayValue, \"|\");\n\n    var cases = Number(parts[0]);\n    var deaths = Number(parts[1]);\n\n    var population = $feature.POPULATION;\n\n    return population - cases;\n  ";
    }
    exports.createSusceptiblePopulationExpression = createSusceptiblePopulationExpression;
    function getFieldFromDateFunction() {
        return "\n    function getFieldFromDate(d) {\n      var fieldName = \"" + layerUtils_1.prefix + "\" + Text(d, \"MM" + layerUtils_1.separator + "DD" + layerUtils_1.separator + "Y\");\n      return fieldName;\n    }\n\n  ";
    }
    function expressionDifference(startExpression, endExpression, includeGetFieldFromDate) {
        var getFieldFromDate = getFieldFromDateFunction();
        var base = "\n    function startExpression(){\n      " + startExpression + "\n    }\n\n    function endExpression(){\n      " + endExpression + "\n    }\n\n    return endExpression() - startExpression();\n  ";
        return includeGetFieldFromDate ? getFieldFromDate + base : base;
    }
    exports.expressionDifference = expressionDifference;
    function expressionPercentChange(startExpression, endExpression, includeGetFieldFromDate) {
        var getFieldFromDate = getFieldFromDateFunction();
        var base = "\n    function startExpression(){\n      " + startExpression + "\n    }\n\n    function endExpression(){\n      " + endExpression + "\n    }\n    var startValue = startExpression();\n    var endValue = endExpression();\n\n    return ( ( endValue - startValue ) / startValue ) * 100;\n  ";
        return includeGetFieldFromDate ? getFieldFromDate + base : base;
    }
    exports.expressionPercentChange = expressionPercentChange;
    function getFieldFromDate(d) {
        var fieldName = "" + layerUtils_1.prefix + ("0" + (d.getMonth() + 1)).slice(-2) + layerUtils_1.separator + ("0" + d.getDate()).slice(-2) + layerUtils_1.separator + (d.getFullYear()).toString();
        return fieldName;
    }
    function getNextDay(d) {
        return new Date(lang.clone(d).setDate(d.getDate() + 1));
    }
    function createAverageActiveCasesExpression() {
        var getFieldFromDateArcadeFunction = getFieldFromDateFunction();
        var functionBase = "";
        var averageArray = "var averageArray = [ ";
        var currentDate = initialTimeExtent.start;
        var endDate = initialTimeExtent.end;
        while (currentDate <= endDate) {
            var currentFieldName = getFieldFromDate(currentDate);
            functionBase += "\n      function " + currentFieldName + "Average(){\n        " + createActiveCasesExpression(currentFieldName, true) + "\n      }\n\n    ";
            averageArray += currentFieldName + "Average()";
            currentDate = getNextDay(currentDate);
            averageArray += currentDate < endDate ? ", " : "]";
        }
        // averageArray += "]";
        var returnValue = "\n\n  return Max(averageArray)";
        var expression = getFieldFromDateArcadeFunction + functionBase + averageArray + returnValue;
        return expression;
    }
    exports.createAverageActiveCasesExpression = createAverageActiveCasesExpression;
});
//# sourceMappingURL=expressionUtils.js.map