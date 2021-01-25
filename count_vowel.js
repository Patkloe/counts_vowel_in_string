function vowels_count(s){
   var nbre = 0;
   var dict = {1 :'a',2:'e',3:'i',4:'u',5:'o',6:'A',7:'E',8:'I',9:'U',10:'O'}; 
   var val = Object.keys(dict);
   var objval = Object.values(dict)
   for(var i = 0; i < s.length; i++){
     if(val[objval.indexOf(s[i])]){
       nbre++;
     }
   }
  return nbre;
}
 var test = 'The quick brown fox';
 vowels_count(test);
