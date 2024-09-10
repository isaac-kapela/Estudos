#include <iostream>
using namespace std;

bool pertenceFibonacci(int num) {
    int a = 0, b = 1, proximo;
    
    if (num == 0 || num == 1) return true;
    
    proximo = a + b;
    while (proximo <= num) {
        if (proximo == num) return true;
        a = b;
        b = proximo;
        proximo = a + b;
    }
    return false;
}

int main() {
    int num;
    cout << "Informe um número: ";
    cin >> num;
    
    if (pertenceFibonacci(num)) {
        cout << num << " pertence à sequência de Fibonacci." << endl;
    } else {
        cout << num << " não pertence à sequência de Fibonacci." << endl;
    }

    return 0;
}
