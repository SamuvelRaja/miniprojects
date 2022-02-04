function flames(){
    //getting inputs from html
    let name1=document.getElementById("in-1").value;
    console.log(name1);
    let name2=document.getElementById("in-2").value;
    var count=0;
    var flameNum=0
    //converting received inputs into string,
     //storing each characters as element in an array using split function
    let arr1=name1.toString().split('');
    let arr2=name2.toString().split('');
     
    //iterating the array contains the letter of the name and splice out similar letters
    arr1.forEach(element => {
        for(let i=arr2.length-1;i>=0;i--){
            if(element==arr2[i]){
                
                arr2.splice(i,1)
                arr1.splice(arr1.indexOf(element),1)
            }
        }
    });
      
    
    flameNum=arr1.concat(arr2).length
    console.log(arr2,name2,flameNum)

    let flameres=findFlames(flameNum);
    document.getElementById("result").innerText=flameres;
   console.log(flameres)
    return flameres;

}
function findFlames(num){
    var numCount=0;
    let result='';
    let key=['F','L','A','M','E','S'];
     while(key.length>=2){
        for(let j=0;j<key.length;j++){
            if(key.includes(key[j])){
                numCount+=1}
            
            if(numCount==num){
                key.splice(j,1)
               // console.log(numCount)
               // console.log(key);
                numCount=0
                j=j-1
                
            }
        }
       
    
        }
    switch(key[0]){
        case 'F':
            result='Friend'
            break;
        case 'L':
            result='Love'
            document.getElementById("center").innerHTML="<input type=\"image\" onclick=\"flames()\" src=\"./heart.png\" id=\"img\">" 
            break;
        case 'A':
            result='Affection'
            break;
        case 'M' :
            result='Marriage'
            break;     
        case 'E' :
            result='Enemy'
            document.getElementById("center").innerHTML="<input type=\"image\" onclick=\"flames()\" src=\"./images__14_-removebg-preview.png\" id=\"img\">" 
            break;
        case 'S':
            result='Sister'
            break;            
    }
        return result;

 }


