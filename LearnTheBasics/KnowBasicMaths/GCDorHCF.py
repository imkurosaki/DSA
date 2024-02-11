#Coding ninjas: https://www.codingninjas.com/studio/problems/hcf-and-lcm_840448?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf

class GCDorHCF:
    @staticmethod
    def calcGCD(num1:int, num2:int) -> int:
        maxNum = num1 if num1 > num2 else num2
        minNum = num1 if num1 < num2 else num2
        gcd = 0;

        for i in range(1, minNum+1):
            if maxNum % i == 0 and minNum % i == 0:
                gcd = i;

        return gcd;

print(GCDorHCF.calcGCD(2,5))

