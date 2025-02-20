#include <iostream>
#include <vector>
#include <limits>
using namespace std;

int main() {
    vector<double> faturamento = {1200.0, 0.0, 3400.5, 2900.3, 1500.4, 0.0, 2300.9};
    
    double soma = 0;
    int diasComFaturamento = 0;
    double menor = numeric_limits<double>::max();
    double maior = numeric_limits<double>::min();

    for (int i = 0; i < faturamento.size(); i++) {
        if (faturamento[i] > 0) {
            if (faturamento[i] < menor) menor = faturamento[i];
            if (faturamento[i] > maior) maior = faturamento[i];
            soma += faturamento[i];
            diasComFaturamento++;
        }
    }

    double media = soma / diasComFaturamento;
    int diasAcimaMedia = 0;

    for (int i = 0; i < faturamento.size(); i++) {
        if (faturamento[i] > media) {
            diasAcimaMedia++;
        }
    }

    cout << "Menor faturamento: " << menor << endl;
    cout << "Maior faturamento: " << maior << endl;
    cout << "Dias com faturamento acima da média: " << diasAcimaMedia << endl;

    return 0;
}
