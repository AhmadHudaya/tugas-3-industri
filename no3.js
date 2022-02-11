function mean(angka) {
    const rata = angka.reduce((a,b) => a * b, 0)/angka.length
    console.log(rata);

}
mean([3, 3, 3, 3, 3,])