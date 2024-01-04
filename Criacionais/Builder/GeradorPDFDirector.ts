import { BuilderInterfaceGeradorPDF } from "./BuilderInterfaceGeradorPDF";

export class GeradorPDFDirector {
  private builderGeradorPDF: BuilderInterfaceGeradorPDF;

  constructor(builderGeradorPDF: BuilderInterfaceGeradorPDF) {
    this.builderGeradorPDF = builderGeradorPDF;
  }

  setBuilderGeradorPDF(builderGeradorPDF: BuilderInterfaceGeradorPDF) {
    this.builderGeradorPDF = builderGeradorPDF;
  }

  criarGeradorPDF(): void {
    this.builderGeradorPDF.setPageConfiguration();
    this.builderGeradorPDF.setPageMargin();
    this.builderGeradorPDF.setPageHeader();
    this.builderGeradorPDF.setPageFooter();
  }

  criarGeradorPDFNoHeader(): void {
    this.builderGeradorPDF.setPageConfiguration();
    this.builderGeradorPDF.setPageMargin();
    this.builderGeradorPDF.setPageFooter();
  }

  criarGeradorPDFNoHeaderNoFooter(): void {
    this.builderGeradorPDF.setPageConfiguration();
    this.builderGeradorPDF.setPageMargin();
  }
}
