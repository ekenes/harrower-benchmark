import SimpleRenderer = require("esri/renderers/SimpleRenderer");
import ColorVariable = require("esri/renderers/visualVariables/ColorVariable");
import SizeVariable = require("esri/renderers/visualVariables/SizeVariable");
import OpacityVariable = require("esri/renderers/visualVariables/OpacityVariable");
import Color = require("esri/Color");

import CSVLayer = require("esri/layers/CSVLayer");
import FeatureLayer = require("esri/layers/FeatureLayer");
import lang = require("esri/core/lang");

import { getFieldFromDate, formatDate } from "./timeUtils";
import { createActiveCasesExpression } from "./expressionUtils";
import { SimpleLineSymbol, SimpleMarkerSymbol, SimpleFillSymbol } from "esri/symbols";
import { DotDensityRenderer } from "esri/renderers";

export type COVIDRenderer = SimpleRenderer | DotDensityRenderer;

export interface UpdateRendererParams {
  layer: CSVLayer | FeatureLayer,
  currentDate: Date
}

const legendNote = document.getElementById("legend-note");

export function updateRenderer(params: UpdateRendererParams){
  const { layer, currentDate } = params;
  let renderer = createActiveCasesRenderer({
    currentDate
  });
  legendNote.style.display = "block";

  layer.renderer = renderer;
}

const colorRamps = {
  light: [
    [ "#edf8fb", "#b3cde3", "#8c96c6", "#8856a7", "#810f7c" ],
    [ "#f6eff7", "#bdc9e1", "#67a9cf", "#1c9099", "#016c59" ],
    [ "#f1eef6", "#d7b5d8", "#df65b0", "#dd1c77", "#980043" ],
    [ "#ffffcc", "#a1dab4", "#41b6c4", "#2c7fb8", "#253494" ],
    [ "#54bebe", "#98d1d1", "#dedad2", "#df979e", "#c80064" ],
    [ "#8100e6", "#b360d1", "#f2cf9e", "#6eb830", "#2b9900" ],
    [ "#00998c", "#69d4cb", "#f2f2aa", "#d98346", "#b34a00" ],
    [ "#a6611a", "#dfc27d", "#f5f5f5", "#80cdc1", "#018571" ],
    [ "#454545", "#686868", "#8c8c8c", "#c2c2c2", "#f7f7f7" ].reverse(),
    [ "#f7f7f7", "#cccccc", "#969696", "#636363", "#252525" ],
    [ "#484c59", "#63687a", "#948889", "#e0b9b5", "#ffe9e6" ].reverse()
  ],
  dark: [
    [ "#0010d9", "#0040ff", "#0080ff", "#00bfff", "#00ffff" ],
    [ "#481295", "#6535a6", "#7d6aa1", "#9e97b8", "#c4bedc" ],
    [ "#00590f", "#008c1a", "#00bf25", "#76df13", "#d0ff00" ],
    [ "#3b3734", "#54504c", "#ab3da9", "#eb44e8", "#ff80ff" ],
    [ "#ff4d6a", "#a63245", "#453437", "#2b819b", "#23ccff" ],
    [ "#23ccff", "#2c8eac", "#42422f", "#9b9b15", "#ffff00" ],
    [ "#ff00ff", "#b21bb2", "#414537", "#76961d", "#beff00" ],
    [ "#ff00cc", "#b21c97", "#453442", "#96961d", "#ffff00" ],
    [ "#ff0099", "#aa1970", "#45343e", "#92781c", "#ffc800" ],
    [ "#e8ff00", "#97a41c", "#413f54", "#655dbb", "#8c80ff" ]
  ]
}


interface CreateRendererParams {
  currentDate: Date,
  useAverage?: boolean
}

export function createActiveCasesRenderer(params: CreateRendererParams) : COVIDRenderer {
  const colors = colorRamps.light[0];

  const { currentDate, useAverage } = params;
  const startDateFieldName = getFieldFromDate(currentDate);

  let sizeVariable = new SizeVariable({
    stops: [
      { value: 0, size: 0 },
      { value: 1, size: "2px" },
      { value: 100, size: "4px" },
      { value: 1000, size: "10px" },
      { value: 10000, size: "50px" },
      { value: 100000, size: "200px" }
    ]
  });

  if(useAverage){
    sizeVariable.valueExpressionTitle = `Active* COVID-19 cases average`;
    sizeVariable.valueExpression = createActiveCasesExpression(startDateFieldName);
  } else {
    sizeVariable.valueExpressionTitle = `Estimated active* COVID-19 cases on ${formatDate(currentDate)}`;
    sizeVariable.valueExpression = createActiveCasesExpression(startDateFieldName);
  }


  const visualVariables = [ sizeVariable ];

  return new SimpleRenderer({
    symbol: createDefaultSymbol(null, new SimpleLineSymbol({
      color: new Color("rgba(230, 0, 73, 0.8)"),
      width: 0.5
    })),
    label: "County",
    visualVariables
  });
}

function createDefaultSymbol(color?: Color, outline?: SimpleLineSymbol) : SimpleMarkerSymbol{
  return new SimpleMarkerSymbol({
    color: color || null,
    size: 4,
    outline: outline || {
      color: "rgba(200,200,200,0.4)",
      width: 0.5
    }
  });
}