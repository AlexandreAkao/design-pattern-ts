import { BuilderInterfaceGeradorPDF } from "./BuilderInterfaceGeradorPDF";
import { GeradorPDF } from "./GeradorPDF";

export class BuilderA3 implements BuilderInterfaceGeradorPDF {
  private geradorPDF: GeradorPDF;

  constructor() {
    this.geradorPDF = new GeradorPDF();
  }
  getGeradorPDF(): GeradorPDF {
    return this.geradorPDF;
  }
  setPageConfiguration(): void {
    this.geradorPDF.setPageOrientation("portrait");
    this.geradorPDF.setUnit("mm");
    this.geradorPDF.setPageSizeX(297);
    this.geradorPDF.setPageSizeY(420);
    this.geradorPDF.setPageColor("#ffffff");
    this.geradorPDF.setEncode("UTF-8");
  }
  setPageMargin(): void {
    this.geradorPDF.setMarginTop(60);
    this.geradorPDF.setMarginRight(40);
    this.geradorPDF.setMarginBottom(60);
    this.geradorPDF.setMarginLeft(40);
  }
  setPageHeader(): void {
    this.geradorPDF.setHasHeader(false);
    this.geradorPDF.setHeaderHeigh(0);
  }
  setPageFooter(): void {
    this.geradorPDF.setHasFooter(false);
    this.geradorPDF.setFooterHeigh(0);
  }
}
