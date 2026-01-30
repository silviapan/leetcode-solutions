/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  const sortedSeats = seats.sort((a, b) => a - b);
  const sortedStudents = students.sort((a, b) => a - b);
  let minMoves = 0;

  for (let i = 0; i < sortedSeats.length; i++) {
    const diff = Math.abs(sortedSeats[i] - sortedStudents[i]);
    minMoves += diff;
  }
  return minMoves;
};
