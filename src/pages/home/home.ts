import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

declare var admob

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {

  public lista = [
    {
      frase: 'A persistência é o caminho do êxito.',
      autor: 'Charles Chaplin'
    },
    {
      frase: 'O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.',
      autor: 'José de Alencar',
    },
    {
      frase: 'Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho.',
      autor: 'Dalai Lama',
    },
    {
      frase: 'Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?.',
      autor: 'Fernando Pessoa',
    },
    {
      frase: 'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre.',
      autor: 'Tumblr',
    },
    {
      frase: 'Só existe um êxito: a capacidade de levar a vida que se quer.',
      autor: 'Cristopher Morley',
    },
    {
      frase: 'A vitalidade é demonstrada não apenas pela persistência, mas pela capacidade de começar de novo.',
      autor: 'F. Scott Fitzgerald',
    },
    {
      frase: 'A coragem não é ausência do medo; é a persistência apesar do medo.',
      autor: 'Desconhecido',
    },
    {
      frase: 'O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.',
      autor: 'Max Weber',
    },
    {
      frase: 'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
      autor: 'Friedrich Nietzsche',
    },
    {
      frase: 'Todo mundo é capaz de sentir os sofrimentos de um amigo. Ver com agrado os seus êxitos exige uma natureza muito delicada.',
      autor: 'Oscar Wilde',
    },
    {
      frase: 'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.',
      autor: 'Augusto Branco',
    },
    {
      frase: 'Força de ânimo e coragem na adversidade servem para conquistar o êxito, mais do que um exército.',
      autor: 'John Dryden',
    },
    {
      frase: 'Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!',
      autor: 'Desconhecido',
    },
    {
      frase: 'Dois homens não podem passar meia hora juntos sem que um conquiste uma evidente superioridade em relação ao outro.',
      autor: 'Samuel Johnson',
    },
    {
      frase: 'Talento é dom, é graça. E sucesso nada tem haver com sorte, mas com determinação e trabalho.',
      autor: 'Augusto Branco',
    },
    {
      frase: 'Para ter um negócio de sucesso, alguém, algum dia, teve que tomar uma atitude de coragem.',
      autor: 'Peter Drucker',
    },
    {
      frase: 'As únicas grandes companhias que conseguirão ter êxito são aquelas que consideram os seus produtos obsoletos antes que os outros o façam.',
      autor: 'Bill Gates',
    },
    {
      frase: 'Nenhum mentiroso tem uma memória suficientemente boa para ser um mentiroso de êxito.',
      autor: 'Abraham Lincoln',
    },
    {
      frase: 'Estar decidido, acima de qualquer coisa, é o segredo do êxito.',
      autor: 'Henry Ford',
    },
    {
      frase: 'Para obter êxito no mundo temos de parecer loucos mas sermos espertos.',
      autor: 'Barão de Montesquieu',
    },
    {
      frase: 'A disciplina é a mãe do êxito.',
      autor: 'Ésquilo',
    },
    {
      frase: 'O segredo do êxito na vida de um homem está em preparar-se para aproveitar a ocasião, quando ela se apresenta.',
      autor: 'Benjamin Disraeli',
    },
    {
      frase: 'O êxito começa no exato momento em que o homem decide o que quer e começa a trabalhar para consegui-lo.',
      autor: 'Roberto Flávio C. Silva',
    },
    {
      frase: 'A disciplina é a alma de um exército; torna grandes os pequenos contingentes, proporciona êxito aos fracos, e estima todos.',
      autor: 'George Washington',
    },
    {
      frase: 'A raiz do mal reside no fato de se insistir demasiadamente que no êxito da competição está a principal fonte de felicidade.',
      autor: 'Bertrand Russell',
    },
    {
      frase: 'O êxito parece doce a quem não o alcança.',
      autor: 'Emily Dickinson',
    },
    {
      frase: 'A persistência realiza o impossível.',
      autor: 'Provérbio Chinês',
    },
    {
      frase: 'Persistência é a irmã gêmea da excelência. Uma é a mãe da qualidade, a outra é a mãe do tempo.',
      autor: 'Marabel Morgan',
    },
    {
      frase: 'Eu escolho um homem que não duvide de minha coragem, que não me acredite inocente, que tenha a coragem de me tratar como uma mulher.',
      autor: 'Anaïs Nin',
    },
    {
      frase: 'Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo.',
      autor: 'Martin Luther King',
    },
    {
      frase: 'Ai daqueles que pararem com sua capacidade de sonhar, de invejar sua coragem de anunciar e denunciar. Ai daqueles que, em lugar de visitar de vez em quando o amanha pelo profundo engajamento com o hoje, com o aqui e o agora, se atrelarem a um passado de exploração e de rotina.',
      autor: 'Paulo Freire',
    },
    {
      frase: 'As pessoas não carecem de força, carecem de determinação.',
      autor: 'Victor Hugo',
    },
    {
      frase: 'A verdadeira esperança é uma qualidade, uma determinação heróica da alma. E a mais elevada forma de esperança é o desespero superado.',
      autor: 'Georges Bernanos',
    },
    {
      frase: 'Da amizade entre mulheres Dizem-se amigas... Beijam-se... Mas qual! Haverá quem nisso creia? Salvo se uma das duas, por sinal For muito velha, ou muito feia...',
      autor: 'Mario Quintana',
    },
    {
      frase: 'Conserve os olhos fixos num ideal sublime, e lute sempre pelo que deseja, pois só os fracos desistem e só quem luta é digno de vida.',
      autor: 'Desconhecido',
    },
    {
      frase: 'Tudo deveria se tornar o mais simples possível, mas não simplificado.',
      autor: 'Albert Einstein',
    },
    {
      frase: 'Comece fazendo o que é necessário, depois o que é possível, e de repente você estará fazendo o impossível.',
      autor: 'São Francisco de Assis',
    },
    {
      frase: 'O erro acontece de vários modos, enquanto ser correto é possível apenas de um modo.',
      autor: 'Aristóteles',
    },
    {
      frase: 'Não é possível ser bom pela metade.',
      autor: 'Leon Tolstói',
    },
    {
      frase: 'O milagre não prova o impossível; serve, apenas, como confirmação do que é possível.',
      autor: 'Textos Judaicos',
    },
    {
      frase: 'O êxito da vida não se mede pelo caminho que você conquistou, mas sim pelas dificuldades que superou no caminho.',
      autor: 'Abraham Lincoln',
    },
    {
      frase: 'A impaciência é um grande obstáculo para o bom êxito.',
      autor: 'Napoleão Bonaparte',
    },
    {
      frase: 'Não procure ser um homem com êxito, e sim um homem com valores.',
      autor: 'Albert Einstein',
    },
    {
      frase: 'O êxito é fácil de obter. O difícil é merecê-lo.',
      autor: 'Albert Camus',
    },
    {
      frase: 'O êxito na vida não significa apenas ser bem sucedido, mas também sobrepor-se aos fracassos.',
      autor: 'Maxwell Maltz',
    },
    {
      frase: 'As pessoas que resolviam as coisas em geral tinham muita persistência e um pouco de sorte. Se a gente persistisse o bastante, a sorte em geral chegava. Mas a maioria das pessoas não podia esperar a sorte, por isso desistia.',
      autor: 'Charles Bukowski',
    },
    {
      frase: 'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      autor: 'Roberto Shinyashiki',
    },
    {
      frase: 'Bom mesmo é ir à luta com determinação abraçar a vida com paixão perder com classe e vencer com ousadia porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.',
      autor: 'Augusto Branco',
    },
    {
      frase: 'A força não provém da capacidade física. Provém de uma vontade indomável.',
      autor: 'Mahatma Gandhi',
    },
    {
      frase: 'A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda.',
      autor: 'Oliver Goldsmith',
    },
    {
      frase: 'Transportai um punhado de terra todos os dias e fareis uma montanha.',
      autor: 'Confúcio',
    },
    {
      frase: 'Seja como os pássaros que, ao pousarem um instante sobre ramos muito leves, sentem-nos ceder, mas cantam! Eles sabem que possuem asas.',
      autor: 'Victor Hugo',
    },
    {
      frase: 'O número dos que nos invejam confirma as nossas capacidades.',
      autor: 'Oscar Wilde',
    },
    {
      frase: 'Nas pessoas de capacidade limitada, a modéstia não passa de mera honestidade, mas em quem possui grande talento, é hipocrisia.',
      autor: 'Arthur Schopenhauer',
    },
    {
      frase: 'É capaz quem pensa que é capaz.',
      autor: 'Buda',
    },
    {
      frase: 'Quem sabe concentrar-se numa coisa e insistir nela como único objetivo, obtém a capacidade de fazer qualquer coisa.',
      autor: 'Mahatma Gandhi',
    },
    {
      frase: 'O ser capaz mora perto da necessidade.',
      autor: 'Pitágoras',
    },
    {
      frase: 'LEGÍTIMA APROPRIAÇÃO Copio e assino essa frase encontrada no velho Schopenhauer: "A soma de barulho que uma pessoa pode suportar está na razão inversa de sua capacidade mental".',
      autor: 'Mario Quintana',
    }
  ]
  public view

  constructor(public navCtrl: NavController) {

  }

  quantidade() {
    let aleatorio = Math.floor(Math.random() * this.lista.length)
    this.lista[aleatorio]
    this.view = this.lista[aleatorio]
  }

    //funcao para exibir interstitial
    launchInterstitial() {
      let interstitialConfig = {
        id: 'ca-app-pub-6593929850579275/8495319261',
        isTesting: true,
        autoShow: true,
      };

      admob.interstitial.config(interstitialConfig);

      admob.interstitial.prepare().then(() => {

      });

    }

}

