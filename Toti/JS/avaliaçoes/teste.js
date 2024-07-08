let awake = false;
let walking = true;


if (awake && walking) {
    console.log('Apenas uma pessoa caminhando...');
} else if (!awake && walking) {
    console.log('CUIDADO! Alerta de sonâmbulo!');
} else if (!awake && !walking) {
    console.log('Apenas uma pessoa dormindo...');
} else {
    console.log('Apenas uma pessoa descansando...');
}
