import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);

        // Constante para o número de habitantes na pesquisa
        final int NUM_HABITANTES = 3;

        // Variáveis para armazenar os totais e o maior salário
        float totalSalarios = 0;
        int totalFilhos = 0;
        float maiorSalario = 0;

        // Loop para coletar dados de cada habitante
        for (int i = 1; i <= NUM_HABITANTES; i++) {
            System.out.println("Digite o salário do habitante " + i + ":");
            float salario = Float.parseFloat(leia.nextLine());
            System.out.println("Digite o número de filhos do habitante " + i + ":");
            int numFilhos = Integer.parseInt(leia.nextLine());

            // Adiciona os valores ao total
            totalSalarios += salario;
            totalFilhos += numFilhos;

            // Verifica se este é o maior salário até agora
            if (salario > maiorSalario) {
                maiorSalario = salario;
            }
        }

        // Calcula as médias
        float mediaSalarios = totalSalarios / NUM_HABITANTES;
        float mediaFilhos = (float) totalFilhos / NUM_HABITANTES;

        // Imprime os resultados
        System.out.printf("Média salarial: %.2f R$\n", mediaSalarios);
        System.out.printf("Média do número de filhos por habitante: %.2f\n", mediaFilhos);
        System.out.printf("Maior salário: %.2f R$\n", maiorSalario);

        // Fecha o Scanner
        leia.close();
    }
}
