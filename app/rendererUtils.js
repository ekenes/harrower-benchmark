define(["require", "exports", "esri/renderers/SimpleRenderer", "esri/renderers/visualVariables/SizeVariable", "esri/Color", "./timeUtils", "./expressionUtils", "esri/symbols"], function (require, exports, SimpleRenderer, SizeVariable, Color, timeUtils_1, expressionUtils_1, symbols_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var legendNote = document.getElementById("legend-note");
    function updateRenderer(params) {
        var layer = params.layer, currentDate = params.currentDate;
        var renderer = createActiveCasesRenderer({
            currentDate: currentDate
        });
        legendNote.style.display = "block";
        layer.renderer = renderer;
    }
    exports.updateRenderer = updateRenderer;
    var colorRamps = {
        light: [
            ["#edf8fb", "#b3cde3", "#8c96c6", "#8856a7", "#810f7c"],
            ["#f6eff7", "#bdc9e1", "#67a9cf", "#1c9099", "#016c59"],
            ["#f1eef6", "#d7b5d8", "#df65b0", "#dd1c77", "#980043"],
            ["#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494"],
            ["#54bebe", "#98d1d1", "#dedad2", "#df979e", "#c80064"],
            ["#8100e6", "#b360d1", "#f2cf9e", "#6eb830", "#2b9900"],
            ["#00998c", "#69d4cb", "#f2f2aa", "#d98346", "#b34a00"],
            ["#a6611a", "#dfc27d", "#f5f5f5", "#80cdc1", "#018571"],
            ["#454545", "#686868", "#8c8c8c", "#c2c2c2", "#f7f7f7"].reverse(),
            ["#f7f7f7", "#cccccc", "#969696", "#636363", "#252525"],
            ["#484c59", "#63687a", "#948889", "#e0b9b5", "#ffe9e6"].reverse()
        ],
        dark: [
            ["#0010d9", "#0040ff", "#0080ff", "#00bfff", "#00ffff"],
            ["#481295", "#6535a6", "#7d6aa1", "#9e97b8", "#c4bedc"],
            ["#00590f", "#008c1a", "#00bf25", "#76df13", "#d0ff00"],
            ["#3b3734", "#54504c", "#ab3da9", "#eb44e8", "#ff80ff"],
            ["#ff4d6a", "#a63245", "#453437", "#2b819b", "#23ccff"],
            ["#23ccff", "#2c8eac", "#42422f", "#9b9b15", "#ffff00"],
            ["#ff00ff", "#b21bb2", "#414537", "#76961d", "#beff00"],
            ["#ff00cc", "#b21c97", "#453442", "#96961d", "#ffff00"],
            ["#ff0099", "#aa1970", "#45343e", "#92781c", "#ffc800"],
            ["#e8ff00", "#97a41c", "#413f54", "#655dbb", "#8c80ff"]
        ]
    };
    function createActiveCasesRenderer(params) {
        var colors = colorRamps.light[0];
        var currentDate = params.currentDate;
        var startDateFieldName = timeUtils_1.getFieldFromDate(currentDate);
        var sizeVariable = new SizeVariable({
            valueExpressionTitle: "Estimated active* COVID-19 cases on " + timeUtils_1.formatDate(currentDate),
            valueExpression: expressionUtils_1.createActiveCasesExpression(startDateFieldName),
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: "2px" },
                { value: 100, size: "4px" },
                { value: 1000, size: "10px" },
                { value: 10000, size: "50px" },
                { value: 100000, size: "200px" }
            ]
        });
        var visualVariables = [sizeVariable];
        return new SimpleRenderer({
            symbol: createDefaultSymbol(new Color("rgba(230, 0, 73, 0.4)"), new symbols_1.SimpleLineSymbol({
                color: new Color("rgba(0, 0, 200, 1)"),
                width: 0
            })),
            label: "County",
            visualVariables: visualVariables
        });
    }
    exports.createActiveCasesRenderer = createActiveCasesRenderer;
    function createActiveAverageCasesRenderer() {
        var sizeVariable = new SizeVariable({
            valueExpressionTitle: "Average active* COVID-19 cases",
            valueExpression: expressionUtils_1.createAverageActiveCasesExpression(),
            stops: [
                { value: 0, size: 0 },
                { value: 1, size: "2px" },
                { value: 100, size: "4px" },
                { value: 1000, size: "10px" },
                { value: 10000, size: "50px" },
                { value: 100000, size: "200px" }
            ]
        });
        var visualVariables = [sizeVariable];
        return new SimpleRenderer({
            symbol: createDefaultSymbol(null, new symbols_1.SimpleLineSymbol({
                color: new Color("rgba(0, 0, 0, 0.8)"),
                width: 0.5
            })),
            label: "County",
            visualVariables: visualVariables
        });
    }
    exports.createActiveAverageCasesRenderer = createActiveAverageCasesRenderer;
    function createDefaultSymbol(color, outline) {
        return new symbols_1.SimpleMarkerSymbol({
            color: color || null,
            size: 4,
            outline: outline || {
                color: "rgba(200,200,200,0.4)",
                width: 0.5
            }
        });
    }
});
//# sourceMappingURL=rendererUtils.js.map