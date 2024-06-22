#include <iomanip>
#include <iostream>
using namespace std;

float media( float n1, float n2, float n3){
    float media =(n1 + n2 + n3) /3;

    return media;
}

int main(){
    float n1, n2, n3, resultado;
    cin >> n1 >> n2 >> n3;
    resultado = media(n1, n2, n3);
    cout << fixed << setprecision(2) << resultado << endl;
    return 0;
}