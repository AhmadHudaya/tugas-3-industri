function dropRight(array) {
  const nomor = array.filter (no => {
    return no < 3 ;
  })
  console.log(nomor);
}
dropRight([1,2,3]);
