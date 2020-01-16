    function getIt(max,min)
    
    var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz$^*?<>#@!%&()/";
    var length = Math.floor(Math.random()*(max-min + 1))+ min;
    var pwRandom = Array(length).fill(characters).map(function(execute)
    {
        return execute [Math.floor(Math.random()* execute.length)]
    }).join('');
    
    return pwRandom;
    
    document.getElementById("generate").addEventListener("click",function()
    {
        pwRandom = getIt(128,8);
        document.getElementById("randomPw").value=pwRandom;
    });













    