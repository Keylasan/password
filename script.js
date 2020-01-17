    
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












    