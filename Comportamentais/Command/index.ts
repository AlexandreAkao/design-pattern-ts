import { Aplicativo } from "./Aplicativo";
import { DesligarArCondicionado } from "./DesligarArCondicionado";
import { DesligarLampada } from "./DesligarLampada";
import { ArCondicionado } from "./Fabricante/ArCondicionado";
import { Lampada } from "./Fabricante/Lampada";
import { LigarArCondicionado } from "./LigarArCondicionado";
import { LigarLampada } from "./LigarLampada";
import { MudarTemperaturaArCondicionado } from "./MudarTemperaturaArCondicionado";

const lampadaSala = new Lampada("Lampada da Sala", false);

const lampadaQuarto = new Lampada("Lampada do Quarto", false);

const arCondicionado = new ArCondicionado("Ar-condicionado", false, 26);

const aplicativo = new Aplicativo();

const ligarLampadaSala = new LigarLampada(lampadaSala);
const desligarLampadaSala = new DesligarLampada(lampadaSala);

const ligarLampadaQuarto = new LigarLampada(lampadaQuarto);
const desligarLampadaQuarto = new DesligarLampada(lampadaQuarto);

const ligarAr = new LigarArCondicionado(arCondicionado);
const desligarAr = new DesligarArCondicionado(arCondicionado);
const mudarTemperaturaAr = new MudarTemperaturaArCondicionado(arCondicionado);

const idLigarLampadaSala = aplicativo.setComando(ligarLampadaSala);
const idDesligarLampadaSala = aplicativo.setComando(desligarLampadaSala);

const idLigarLampadaQuarto = aplicativo.setComando(ligarLampadaQuarto);
const idDesligarLampadaQuarto = aplicativo.setComando(desligarLampadaQuarto);

const idLigarAr = aplicativo.setComando(ligarAr);
const idDesligarAr = aplicativo.setComando(desligarAr);
const idMudarTemperaturaAr = aplicativo.setComando(mudarTemperaturaAr);

aplicativo.aoPrecionarBotao(idLigarLampadaSala);
aplicativo.aoPrecionarBotao(idDesligarLampadaSala);

aplicativo.aoPrecionarBotao(idLigarLampadaQuarto);
aplicativo.aoPrecionarBotao(idDesligarLampadaQuarto);

aplicativo.aoPrecionarBotao(idLigarAr);
(
  aplicativo.getComando(idMudarTemperaturaAr) as MudarTemperaturaArCondicionado
).setTemperatura(25);
aplicativo.aoPrecionarBotao(idMudarTemperaturaAr);
aplicativo.aoPrecionarBotao(idDesligarAr);

console.log("\n### Desfazer Comandos ###\n");

aplicativo.duploCliqueBotao(idDesligarAr);
aplicativo.duploCliqueBotao(idMudarTemperaturaAr);

aplicativo.duploCliqueBotao(idLigarAr);
aplicativo.duploCliqueBotao(idLigarLampadaSala);
