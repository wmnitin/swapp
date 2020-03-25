const checkWinner = (arr) => {

  let winner = false;

  const winnerArray = ['00,01,02', '00,10,20', '00,11,22', '01,11,21', '10,11,12', '02,12,22', '20,21,22', '02,11,20']

  winnerArray.forEach(winners => {

    const indexes = winners.split(',');

    const id00 = indexes[0][0];
    const id01 = indexes[0][1];
    const id10 = indexes[1][0];
    const id11 = indexes[1][1];
    const id20 = indexes[2][0];
    const id21 = indexes[2][1];

    if (arr[id00][id01] === arr[id10][id11] &&
      arr[id10][id11] === arr[id20][id21] &&
      arr[id00][id01] === arr[id20][id21] && arr[id00][id01] === 'X') {
      winner = 'X'
      return;
    }
    if (arr[id00][id01] === arr[id10][id11] &&
      arr[id10][id11] === arr[id20][id21] &&
      arr[id00][id01] === arr[id20][id21] && arr[id00][id01] === '0') {
      winner = '0'
      return;
    }
  })

  return winner;

}

export { checkWinner }