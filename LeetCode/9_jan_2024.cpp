// Leetcode 2351:Frist Letter to Appear Twice:
// Input: s = "abccbaacz"
// Output: "c"
// Explanation:
// The letter 'a' appears on the indexes 0, 5 and 6.
// The letter 'b' appears on the indexes 1 and 4.
// The letter 'c' appears on the indexes 2, 3 and 7.
// The letter 'z' appears on the index 8.
// The letter 'c' is the first letter to appear twice, because out of all the letters the index of its         second  occurrence is the smallest.
#include <iostream>
#include <vector>
#include <string>
using namespace std;
class Solution
{
public:
    char repeatedCharacter(string s)
    {
        vector<int> hash(26, -1);

        for (int i = 0; i < s.length(); i++)
        {
            if (hash[s[i] - 97] != -1)
            {
                return s[hash[s[i] - 97]];
            }
            hash[s[i] - 97] = i;
        }

        return '-1';
    }
};