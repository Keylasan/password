    
   /* 
    function getIt(max,min)
    {
    var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$^*?<>#@!%&()/";
    var length = Math.floor(Math.random()*(max-min+1))+min;
    var pwRandom = Array(length).fill(characters).map(function(execute)
    {
        return execute[Math.floor(Math.random()*execute.length)]
    }).join('');
    
    return pwRandom; 
    }
    document.getElementById("generate").addEventListener("click",function()
    {
        getRandomPw = getIt(128,8);
        document.getElementById("getRandomPw").value=generate;
    }); */



   document.getElementById("generate").addEventListener("click", function() {
        console.log("Hello World!");
        pwRandom = getIt(128, 8);
        console.log(pwRandom);
        document.getElementById("getRandomPw").value = pwRandom;
      });
      
      
      function getIt(max, min) {
        var characters =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$^*?<>#@!%&()/";
        var length = Math.floor(Math.random() * (max - min + 1)) + min;
        var pwRandom = Array(length)
          .fill(characters)
          .map(function(execute) {
            return execute[Math.floor(Math.random() * execute.length)];
          })
          .join("");
      
        return pwRandom;
      }

/*function getIt()
{
  var items = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","$","^","*","?","<",">","#","@","!","%","&","(",")","/"];
      var objResults = {};
      for(var i = 0; i < 10; i++){ 
        var randomElement = items[Math.floor(Math.random()*items.length)] 
        if (objResults[randomElement])
        {
           objResults[randomElement]++ 
          }
        else{ 
          objResults[randomElement] = 1 
        }
        
        var doit = objResults.toString();
        return doit;
      } 
      
       
}


      /*var items = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","$","^","*","?","<",">","#","@","!","%","&","(",")","/"];
      var objResults = {};
      for(var i = 0; i < 129; i++){ 
        var randomElement = items[Math.floor(Math.random()*items.length)] 
        if (objResults[randomElement]){ objResults[randomElement]++ }else{ objResults[randomElement] = 1 }
       } 
      
       return objResults;
      */










    