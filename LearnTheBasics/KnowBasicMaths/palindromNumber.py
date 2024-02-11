# Leetcode Problem: https://leetcode.com/problems/palindrome-number/

class Solution:
    @staticmethod
    def isPalindrome(x: int) -> bool:
        if temp < 0: return False
        
        reversedNumber = 0
        temp = x

        while temp != 0:
            lastDigit = temp % 10
            reversedNumber = reversedNumber * 10 + lastDigit
            temp = int(temp / 10)

        return reversedNumber == x

print(Solution.isPalindrome(-121))