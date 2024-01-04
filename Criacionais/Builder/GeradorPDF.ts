export class GeradorPDF {
  private pageOrientation: string = "portrait";
  private unit: string = "mm";
  private PageSizeX: number = 210;
  private PageSizeY: number = 297;
  private marginTop: number = 30;
  private marginRight: number = 20;
  private marginBottom: number = 30;
  private marginLeft: number = 20;
  private hasHeader: boolean = false;
  private headerHeigh: number = 0;
  private hasFooter: boolean = false;
  private footerHeigh: number = 0;
  private pageColor: string = "#ffffff";
  private encode: string = "UTF-8";

  public getPageOrientation(): string {
    return this.pageOrientation;
  }

  public setPageOrientation(pageOrientation: string): void {
    this.pageOrientation = pageOrientation;
  }

  public getUnit(): string {
    return this.unit;
  }

  public setUnit(unit: string): void {
    this.unit = unit;
  }

  public getPageSizeX(): number {
    return this.PageSizeX;
  }

  public setPageSizeX(PageSizeX: number): void {
    this.PageSizeX = PageSizeX;
  }

  public getPageSizeY(): number {
    return this.PageSizeY;
  }

  public setPageSizeY(PageSizeY: number): void {
    this.PageSizeY = PageSizeY;
  }

  public getMarginTop(): number {
    return this.marginTop;
  }

  public setMarginTop(marginTop: number): void {
    this.marginTop = marginTop;
  }

  public getMarginRight(): number {
    return this.marginRight;
  }

  public setMarginRight(marginRight: number): void {
    this.marginRight = marginRight;
  }

  public getMarginBottom(): number {
    return this.marginBottom;
  }

  public setMarginBottom(marginBottom: number): void {
    this.marginBottom = marginBottom;
  }

  public getMarginLeft(): number {
    return this.marginLeft;
  }

  public setMarginLeft(marginLeft: number): void {
    this.marginLeft = marginLeft;
  }

  public getHasHeader(): boolean {
    return this.hasHeader;
  }

  public setHasHeader(hasHeader: boolean): void {
    this.hasHeader = hasHeader;
  }

  public getHeaderHeigh(): number {
    return this.headerHeigh;
  }

  public setHeaderHeigh(headerHeigh: number): void {
    this.headerHeigh = headerHeigh;
  }

  public getHasFooter(): boolean {
    return this.hasFooter;
  }

  public setHasFooter(hasFooter: boolean): void {
    this.hasFooter = hasFooter;
  }

  public getFooterHeigh(): number {
    return this.footerHeigh;
  }

  public setFooterHeigh(footerHeigh: number): void {
    this.footerHeigh = footerHeigh;
  }

  public getPageColor(): string {
    return this.pageColor;
  }

  public setPageColor(pageColor: string): void {
    this.pageColor = pageColor;
  }

  public getEncode(): string {
    return this.encode;
  }

  public setEncode(encode: string): void {
    this.encode = encode;
  }

  public toString(): string {
    let saida = "";
    saida += `pageOrientation: ${this.getPageOrientation()}\n`;
    saida += `unit: ${this.getUnit()}\n`;
    saida += `PageSizeX: ${this.getPageSizeX()}mm\n`;
    saida += `PageSizeY: ${this.getPageSizeY()}mm\n`;
    saida += `maginTop: ${this.getMarginTop()}mm\n`;
    saida += `maginRight: ${this.getMarginRight()}mm\n`;
    saida += `maginBottom: ${this.getMarginBottom()}mm\n`;
    saida += `maginLeft: ${this.getMarginLeft()}mm\n`;
    saida += this.getHasHeader() ? `hasHeader: Sim\n` : `hasHeader: Não\n`;
    saida += `headerHeigh: ${this.getHeaderHeigh()}mm\n`;
    saida += this.getHasFooter() ? `hasFooter: Sim\n` : `hasFooter: Não\n`;
    saida += `footerHeigh: ${this.getFooterHeigh()}mm\n`;
    saida += `pageColor: ${this.getPageColor()}\n`;
    saida += `encode: ${this.getEncode()}\n`;

    return saida;
  }
}
