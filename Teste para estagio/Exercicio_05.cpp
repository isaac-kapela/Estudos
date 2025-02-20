#include <iostream>
using namespace std;

void inverterString(char str[], int n) {
    for (int i = 0; i < n / 2; i++) {
        char temp = str[i];
        str[i] = str[n - i - 1];
        str[n - i - 1] = temp;
    }
}

int main() {
    char texto[100];
    cout << "Informe uma string: ";
    cin.getline(texto, 100);

    int n = 0;
    while (texto[n] != '\0') {
        n++;
    }

    inverterString(texto, n);

    cout << "String invertida: " << texto << endl;

    return 0;
}
