# Leetcode problem: https://leetcode.com/problems/reverse-integer/

class Solution:
    @staticmethod
    def reverse(x: int) -> int:
        MIN_INT = -2** 31;
        MAX_INT = 2**31 - 1;
        reverseNumber = 0;

        while x != 0:
            if reverseNumber < MIN_INT // 10 or reverseNumber > MAX_INT // 10:
                return 0;

            lastDigit = x % 10 if x > 0 else x % -10;
            reverseNumber = reverseNumber * 10 + lastDigit; 
            x = int(x / 10);
        
        return reverseNumber;

n = Solution.reverse(1_563_847_512)
print(n)

