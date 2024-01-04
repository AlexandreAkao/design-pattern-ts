import chalk, { type ForegroundColor, type BackgroundColor } from "chalk";

import { MementoInterface } from "./MementoInterface";
import { OriginadorInterface } from "./OriginadorInterface";
import { TextBoxMemento } from "./TextBoxMemento";

export class TextBox implements OriginadorInterface {
  private text: string;
  private color: typeof ForegroundColor;
  private bgColor: typeof BackgroundColor | "none";
  private hasUnderline: boolean;
  private hasStrike: boolean;
  private isItalic: boolean;
  private isBold: boolean;
  private isDim: boolean;

  public constructor() {
    this.text = "";
    this.color = "black";
    this.bgColor = "none";
    this.hasUnderline = false;
    this.hasStrike = false;
    this.isItalic = false;
    this.isBold = false;
    this.isDim = false;
  }

  public imprimir(): void {
    let log = chalk[this.color];

    if (this.bgColor !== "none") {
      log = log[this.bgColor];
    }
    if (this.hasUnderline) {
      log = log.underline;
    }
    if (this.hasStrike) {
      log = log.strikethrough;
    }
    if (this.isItalic) {
      log = log.italic;
    }
    if (this.isBold) {
      log = log.bold;
    }
    if (this.isDim) {
      log = log.dim;
    }

    console.log(log(this.text));
  }

  public setText(text: string): void {
    this.text = text;
  }

  public setColor(color: typeof ForegroundColor): void {
    this.color = color;
  }

  public setBgColor(bgColor: typeof BackgroundColor | "none"): void {
    this.bgColor = bgColor;
  }

  public setHasUnderline(hasUnderline: boolean): void {
    this.hasUnderline = hasUnderline;
  }

  public setHasStrike(hasStrike: boolean): void {
    this.hasStrike = hasStrike;
  }

  public setIsItalic(isItalic: boolean): void {
    this.isItalic = isItalic;
  }

  public setIsBold(isBold: boolean): void {
    this.isBold = isBold;
  }

  public setIsDim(isDim: boolean): void {
    this.isDim = isDim;
  }

  public salvar(): MementoInterface {
    return new TextBoxMemento(
      this,
      this.text,
      this.color,
      this.bgColor,
      this.hasUnderline,
      this.hasStrike,
      this.isItalic,
      this.isBold,
      this.isDim
    );
  }
}
