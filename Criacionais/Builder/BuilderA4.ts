import { BuilderInterfaceGeradorPDF } from "./BuilderInterfaceGeradorPDF";
import { GeradorPDF } from "./GeradorPDF";

export class BuilderA4 implements BuilderInterfaceGeradorPDF {
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
    this.geradorPDF.setPageSizeX(210);
    this.geradorPDF.setPageSizeY(297);
    this.geradorPDF.setPageColor("#ffffff");
    this.geradorPDF.setEncode("UTF-8");
  }
  setPageMargin(): void {
    this.geradorPDF.setMarginTop(30);
    this.geradorPDF.setMarginRight(20);
    this.geradorPDF.setMarginBottom(30);
    this.geradorPDF.setMarginLeft(20);
  }
  setPageHeader(): void {
    this.geradorPDF.setHasHeader(true);
    this.geradorPDF.setHeaderHeigh(15);
  }
  setPageFooter(): void {
    this.geradorPDF.setHasFooter(true);
    this.geradorPDF.setFooterHeigh(15);
  }
}
