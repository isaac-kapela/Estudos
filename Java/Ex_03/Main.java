
public class Main {
    public static  void  main(String[] args){
        Inimigo inimigo1 = new Inimigo();
        inimigo1.nome = "Shaolin matador";
        inimigo1.ataque = 100;
        inimigo1.defesa = 80;
        inimigo1.pontos = 55;

        Inimigo inimigo2 = new Inimigo();
        inimigo2.nome = "CLT";
        inimigo2.ataque = 60;
        inimigo2.defesa = 40;
        inimigo2.pontos = 100;

        Inimigo inimigo3 = new Inimigo();
        inimigo3.nome = "Allmusar";
        inimigo3.ataque = 100;
        inimigo3.defesa = 70;
        inimigo3.pontos = 85;

        Heroi heroi1 = new Heroi();
        heroi1.nome = " final de semana";
        heroi1.ataque = 96;
        heroi1.defesa = 24;
        heroi1.pontos = 77;


        Heroi heroi2 = new Heroi();
        heroi2.nome = "feriado prolongado";
        heroi2.ataque = 35;
        heroi2.defesa = 58;
        heroi2.pontos = 79;

        Heroi heroi3 = new Heroi();
        heroi3.nome = "Direitos trabalhistas";
        heroi3.ataque = 65;
        heroi3.defesa = 85;
        heroi3.pontos = 99;

        Mapa mapa = new Mapa();
        mapa.nome =" Mundo das coisas ruins e boas";
        mapa.altura = 8;
        mapa.largura = 18;
        mapa.inimigos.add(inimigo1);
        mapa.inimigos.add(inimigo2);
        mapa.inimigos.add(inimigo3);
        mapa.herois.add(heroi1);
        mapa.herois.add(heroi2);
        mapa.herois.add(heroi3);

        Inimigo inimigoMaiorAtaque = mapa.getInimigoMaiorAtaque();
        Heroi heroiMaiorAtaque = mapa.getHeroiMaiorAtaque();


        System.out.println("Inimigo " + inimigoMaiorAtaque.nome + " deu maior ataque de: " +
                "\n" + inimigoMaiorAtaque.ataque);
        System.out.println("Heroi " + heroiMaiorAtaque.nome + " deu maior ataque de: " +
                "\n" + heroiMaiorAtaque.ataque);





    }
}
