let userMessage=prompt("Write a sentence to get word count")
count=0
for(i=0;i<=userMessage.length;i++){
    if(userMessage[i]===" "){
        count++
    }
}
console.log("space count between words:", count);