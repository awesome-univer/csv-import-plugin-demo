import "./style.css";

import { LocaleType, Univer, UniverInstanceType } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { UniverSheetsNumfmtPlugin } from "@univerjs/sheets-numfmt";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
import { UniverUIPlugin } from "@univerjs/ui";
import ImportCSVButtonPlugin from "./plugins/ImportCSVButton";
import { zhCN, enUS } from 'univer:locales'


// univer
const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.EN_US,
  locales: {
    [LocaleType.ZH_CN]: zhCN,
    [LocaleType.EN_US]: enUS,
  },
});

// core plugins
univer.registerPlugin(UniverDocsPlugin, {
  hasScroll: false,
});
univer.registerPlugin(UniverDocsUIPlugin);
univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverUIPlugin, {
  container: "app",
});
univer.registerPlugin(UniverSheetsPlugin);
univer.registerPlugin(UniverSheetsUIPlugin);

// sheet feature plugins
univer.registerPlugin(UniverSheetsNumfmtPlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);
univer.registerPlugin(UniverSheetsFormulaPlugin);


// add plugin
univer.registerPlugin(ImportCSVButtonPlugin);

// create univer sheet instance
univer.createUnit(UniverInstanceType.UNIVER_SHEET, {});
