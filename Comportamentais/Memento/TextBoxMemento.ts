import { type ForegroundColor, type BackgroundColor } from "chalk";

import { MementoInterface } from "./MementoInterface";
import { TextBox } from "./TextBox";

export class TextBoxMemento implements MementoInterface {
  private textBox: TextBox;
  private text: string;
  private color: typeof ForegroundColor;
  private bgColor: typeof BackgroundColor | "none";
  private hasUnderline: boolean;
  private hasStrike: boolean;
  private isItalic: boolean;
  private isBold: boolean;
  private isDim: boolean;

  constructor(
    textBox: TextBox,
    text: string,
    color: typeof ForegroundColor,
    bgColor: typeof BackgroundColor | "none",
    hasUnderline: boolean,
    hasStrike: boolean,
    isItalic: boolean,
    isBold: boolean,
    isDim: boolean
  ) {
    this.textBox = textBox;
    this.text = text;
    this.color = color;
    this.bgColor = bgColor;
    this.hasUnderline = hasUnderline;
    this.hasStrike = hasStrike;
    this.isItalic = isItalic;
    this.isBold = isBold;
    this.isDim = isDim;
  }

  restaurar(): void {
    this.textBox.setText(this.text);
    this.textBox.setColor(this.color);
    this.textBox.setBgColor(this.bgColor);
    this.textBox.setHasUnderline(this.hasUnderline);
    this.textBox.setHasStrike(this.hasStrike);
    this.textBox.setIsItalic(this.isItalic);
    this.textBox.setIsBold(this.isBold);
    this.textBox.setIsDim(this.isDim);
  }
}
