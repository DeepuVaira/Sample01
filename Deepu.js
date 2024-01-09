class Solution {
    frequencyCount(arr, N, P) {
        //code here
        let temp = {};

     
            for (let i = 1; i <= N; i++) {
                temp[i]=0
                for (let j = 0; j <= N; j++) {
                    if (arr[j] == i) {
                        //temp[key]=val
                        temp[i] += 1;
                    }
                }

            }

            console.log(temp)

            let temp1=[];

            for (let item in temp){
                temp1.push(temp[item])
            }

            return temp1;


    }
}

let obj = new Solution();
console.log(obj.frequencyCount([8,9],2,3))