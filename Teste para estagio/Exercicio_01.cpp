#include <iostream>
using namespace std;

int main() {
    int INDICE = 13, SOMA = 0, K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    cout << "Valor final de SOMA: " << SOMA << endl;

    return 0;
}
