import { GeradorPDF } from "./GeradorPDF";

export interface BuilderInterfaceGeradorPDF {
  getGeradorPDF(): GeradorPDF;
  setPageConfiguration(): void;
  setPageMargin(): void;
  setPageHeader(): void;
  setPageFooter(): void;
}
