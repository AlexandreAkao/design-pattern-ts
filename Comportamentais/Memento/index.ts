import { Historico } from "./Historico";
import { TextBox } from "./TextBox";

const textBox = new TextBox();
const historico = new Historico();

textBox.setText("Teste de texto vermelho em negrito.");
textBox.setIsBold(true);
textBox.setColor("red");

historico.criarCheckPoint(textBox);

textBox.setText("Teste de texto verde com underline");
textBox.setIsBold(false);
textBox.setColor("green");
textBox.setHasUnderline(true);

historico.criarCheckPoint(textBox);

textBox.setText("Teste de texto italico preto com fundo branco.");
textBox.setIsBold(false);
textBox.setColor("black");
textBox.setBgColor("bgWhiteBright");
textBox.setHasUnderline(false);
textBox.setIsItalic(true);

textBox.imprimir();

historico.desfazer();

textBox.imprimir();

historico.desfazer();

textBox.imprimir();
