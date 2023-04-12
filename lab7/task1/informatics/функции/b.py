def power(a,n):
    cnt = float(1)
    for i in range(n):
        cnt=cnt*a
    return cnt
arr = list(map(float, input().split()))
a = arr[0]
arr2 = arr[len(arr)-2:]
n = int(arr[1])
print(int(power(a,n)))