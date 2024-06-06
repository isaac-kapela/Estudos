import java.util.Scanner;

public class Main {

    public static void categoria(int idade) {
        if (idade >= 5 && idade <= 7) {
            System.out.println("A categoria é Infantil A");
        } else if (idade >= 8 && idade <= 10) {
            System.out.println("A categoria é Infantil B");
        } else if (idade >= 11 && idade <= 13) {
            System.out.println("A categoria é Juvenil A");
        } else if (idade >= 14 && idade <= 17) {
            System.out.println("A categoria é Juvenil B");
        } else if (idade >= 18) {
            System.out.println("A categoria é Adulta");
        } else if (idade < 5) {
            System.out.println("Infelizmente você não pode participar");
        }
    }

    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        System.out.println("Digite sua idade: ");
        int idade = Integer.parseInt(leia.nextLine());
        categoria(idade);
        leia.close();
    }
}
