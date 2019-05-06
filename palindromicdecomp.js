function generate_palindromic_decompositions(s){
    var result = [];
    helper(s,result,0,"");
    return result;
}

function helper(s,result,start,curr_decom){
    var len = s.length;
    //Base case
    if(start===len){
        // console.log(curr_decom.substr(0));
        result.push(curr_decom.substring(0));
        return;
    }
    //Recursion
    for(var i=start;i<len;i++){
        if(isPalindrom(s,start,i)){
                helper(s,result,i+1,curr_decom+"|"+s.substring(start,i+1));
        }
    }

}
function isPalindrom(s,start,end){
    while (start<end){
        if(s[start]===s[end]){
            start++;
            end--;
        } else {
            return false
        }
    }
    return true
}

console.log(generate_palindromic_decompositions('adda'))
