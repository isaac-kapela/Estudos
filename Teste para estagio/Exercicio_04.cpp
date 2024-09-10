#include <iostream>
using namespace std;

int main() {
    double SP = 67836.43;
    double RJ = 36678.66;
    double MG = 29229.88;
    double ES = 27165.48;
    double Outros = 19849.53;

    double total = SP + RJ + MG + ES + Outros;

    cout << "Percentual de SP: " << (SP / total) * 100 << "%" << endl;
    cout << "Percentual de RJ: " << (RJ / total) * 100 << "%" << endl;
    cout << "Percentual de MG: " << (MG / total) * 100 << "%" << endl;
    cout << "Percentual de ES: " << (ES / total) * 100 << "%" << endl;
    cout << "Percentual de Outros: " << (Outros / total) * 100 << "%" << endl;

    return 0;
}
