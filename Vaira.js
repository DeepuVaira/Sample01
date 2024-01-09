class Solution{
    frequencyCount(arr, N, P){
        let freq = {}
        let res = []
        for(let i=1; i<=N; i++){
            freq[i] = 0;
        }
    
        for(var a of arr)
        {
            if(a<=N)
                freq[a] +=1;
        }
        console.log(freq)
        for(var val in freq)
        {
            res.push(freq[val]);
        }
        return res;
    }
}

let obj = new Solution()
let arr= [8,9]
let result = obj.frequencyCount(arr, arr.length, Math.max(...arr))
console.log(result);