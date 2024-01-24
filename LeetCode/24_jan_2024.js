/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */

//  2224. Minimum Number of Operations to Convert Time

// You are given two strings current and correct representing two 24-hour times.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59. The earliest 24-hour time is 00:00, and the latest is 23:59.

// In one operation you can increase the time current by 1, 5, 15, or 60 minutes. You can perform this operation any number of times.

// Return the minimum number of operations needed to convert current to correct.

// Example 1:

// Input: current = "02:30", correct = "04:35"
// Output: 3
// Explanation:
// We can convert current to correct in 3 operations as follows:
// - Add 60 minutes to current. current becomes "03:30".
// - Add 60 minutes to current. current becomes "04:30".
// - Add 5 minutes to current. current becomes "04:35".
// It can be proven that it is not possible to convert current to correct in fewer than 3 operations.
// Example 2:

// Input: current = "11:00", correct = "11:01"
// Output: 1
// Explanation: We only have to add one minute to current, so the minimum number of operations needed is 1.

var convertTime = function (current, correct) {
  const timeInMinutesCurr = current.split(":");

  const timeInMinutesCurrent =
    Number(timeInMinutesCurr[0] * 60) + Number(timeInMinutesCurr[1]);

  const timeInMinutesCorr = correct.split(":");
  const timeInMinutesCorrect =
    Number(timeInMinutesCorr[0] * 60) + Number(timeInMinutesCorr[1]);
  let totalSubMinutes = Math.abs(timeInMinutesCorrect - timeInMinutesCurrent);

  let result = 0;

  const increments = [60, 15, 5, 1];
  for (const increment of increments) {
    result += Math.floor(totalSubMinutes / increment);
    totalSubMinutes %= increment;
  }

  return result;
};
