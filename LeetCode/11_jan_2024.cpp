// 1380. Lucky Numbers in a Matrix:-

// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

// Example 1:

// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
// Example 2:

// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

#include <iostream>
#include <vector>
#include <map>
#include <limits.h>
using namespace std;
class Solution
{
public:
    vector<int> luckyNumbers(vector<vector<int>> &matrix)
    {

        int n = matrix.size();
        int m = matrix[0].size();
        map<int, int> mp;

        for (int i = 0; i < n; i++)
        {
            int t = INT_MAX;
            for (int j = 0; j < m; j++)
            {
                if (matrix[i][j] < t)
                    t = matrix[i][j];
            }
            mp[t]++;
        }

        for (int j = 0; j < m; j++)
        {
            int t = INT_MIN;
            for (int i = 0; i < n; i++)
            {
                if (matrix[i][j] > t)
                    t = matrix[i][j];
            }
            mp[t]++;
        }

        vector<int> ans;
        for (auto x : mp)
        {
            if (x.second > 1)
                ans.push_back(x.first);
        }
        return ans;
    }
};