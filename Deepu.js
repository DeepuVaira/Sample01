class Solution {
    longestCommonPrefix(arr,n){ 

        
        //code here
       if(n > 1){
       let value = arr.map((item)=> item.length)
       console.log(value)

       let ismall = Math.min(...value);
       console.log(i)

       for(let i=ismall; i<=0; i--){
        if( arr[0].substr(0,i) && arr[1] ){}
       }
       
       }
       return ""
    }

    
}



let obj = new Solution();

console.log(obj.longestCommonPrefix(["geeksforgeeks", "geeks", "geek",
    "geezer"],4))