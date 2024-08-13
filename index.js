function restore(){
    document.getElementById("CEight").classList.remove("nothidden");
    document.getElementById("CNine").classList.remove("nothidden");
    document.getElementById("CTen").classList.remove("nothidden");
    document.getElementById("CEleven").classList.remove("nothidden");
    document.getElementById("CTwelve").classList.remove("nothidden");

    document.getElementById("CTwo").classList.remove("nothidden");
    document.getElementById("CThree").classList.remove("nothidden");
    document.getElementById("CFour").classList.remove("nothidden");
    document.getElementById("CFive").classList.remove("nothidden");
    document.getElementById("CSix").classList.remove("nothidden");
   
    document.getElementById("CEight").classList.remove("invisible");
    document.getElementById("CNine").classList.remove("invisible");
    document.getElementById("CTen").classList.remove("invisible");
    document.getElementById("CEleven").classList.remove("invisible");
    document.getElementById("CTwelve").classList.remove("invisible");

    document.getElementById("CTwo").classList.remove("invisible");
    document.getElementById("CThree").classList.remove("invisible");
    document.getElementById("CFour").classList.remove("invisible");
    document.getElementById("CFive").classList.remove("invisible");
    document.getElementById("CSix").classList.remove("invisible");
   
}

function play(){
    var P1= Math.floor(Math.random()*6+1);;

    var P2= Math.floor(Math.random()*6+1);
    
    console.log(P1+" "+P2)

    if(P1>P2){
        document.getElementById("result").innerHTML="Player 1 Won! 🚩"
    }
    else if (P1<P2){
        document.getElementById("result").innerHTML="Player 2 Won! 🚩"
    }
    else if (P1==P2){
        document.getElementById("result").innerHTML="Draw! ➖"
    }

    switch(true) {
        case P1 == 1:
            document.getElementById("CTwo").classList.add("invisible");
            document.getElementById("CThree").classList.add("invisible");
            document.getElementById("CFour").classList.add("invisible");
            document.getElementById("CFive").classList.add("invisible");
            document.getElementById("CSix").classList.add("invisible");
            break;
        case P1 ==2:
            document.getElementById("CTwo").classList.add("nothidden");

            document.getElementById("CThree").classList.add("invisible");
            document.getElementById("CFour").classList.add("invisible");
            document.getElementById("CFive").classList.add("invisible");
            document.getElementById("CSix").classList.add("invisible");
            break;
        case P1 == 3:
            document.getElementById("CTwo").classList.add("nothidden");
            document.getElementById("CThree").classList.add("nothidden");

            document.getElementById("CFour").classList.add("invisible");
            document.getElementById("CFive").classList.add("invisible");
            document.getElementById("CSix").classList.add("invisible");
            break;
        case P1 == 4:
            document.getElementById("CTwo").classList.add("nothidden");
            document.getElementById("CThree").classList.add("nothidden");
            document.getElementById("CFour").classList.add("nothidden");

            document.getElementById("CFive").classList.add("invisible");
            document.getElementById("CSix").classList.add("invisible");
            break;
        case P1 == 5:
            document.getElementById("CTwo").classList.add("nothidden");
            document.getElementById("CThree").classList.add("nothidden");
            document.getElementById("CFour").classList.add("nothidden");
            document.getElementById("CFive").classList.add("nothidden");

            document.getElementById("CSix").classList.add("invisible");
            break;
        case P1 == 6:  
            document.getElementById("CTwo").classList.add("nothidden");
            document.getElementById("CThree").classList.add("nothidden");
            document.getElementById("CFour").classList.add("nothidden");
            document.getElementById("CFive").classList.add("nothidden");
            document.getElementById("CSix").classList.add("nothidden");
            break;
    }

    switch(true) {
        case P2 == 1:
            document.getElementById("CEight").classList.add("invisible");
            document.getElementById("CNine").classList.add("invisible");
            document.getElementById("CTen").classList.add("invisible");
            document.getElementById("CEleven").classList.add("invisible");
            document.getElementById("CTwelve").classList.add("invisible");
            break;
        case P2 ==2:
            document.getElementById("CEight").classList.add("nothidden");

            document.getElementById("CNine").classList.add("invisible");
            document.getElementById("CTen").classList.add("invisible");
            document.getElementById("CEleven").classList.add("invisible");
            document.getElementById("CTwelve").classList.add("invisible");
            break;
        case P2 == 3:
            document.getElementById("CEight").classList.add("nothidden");
            document.getElementById("CNine").classList.add("nothidden");

            document.getElementById("CTen").classList.add("invisible");
            document.getElementById("CEleven").classList.add("invisible");
            document.getElementById("CTwelve").classList.add("invisible");
            break;
        case P2 == 4:
            document.getElementById("CEight").classList.add("nothidden");
            document.getElementById("CNine").classList.add("nothidden");
            document.getElementById("CTen").classList.add("nothidden");

            document.getElementById("CEleven","CTwelve").classList.add("invisible");
            document.getElementById("CTwelve").classList.add("invisible");
            break;
        case P2 == 5:
            document.getElementById("CEight").classList.add("nothidden");
            document.getElementById("CNine").classList.add("nothidden");
            document.getElementById("CTen").classList.add("nothidden");
            document.getElementById("CEleven").classList.add("nothidden");

            document.getElementById("CTwelve").classList.add("invisible");
            break;

        case P2 == 6:
            document.getElementById("CEight").classList.add("nothidden");
            document.getElementById("CNine").classList.add("nothidden");
            document.getElementById("CTen").classList.add("nothidden");
            document.getElementById("CEleven").classList.add("nothidden");
            document.getElementById("CTwelve").classList.add("nothidden");            
        break;
    }
    
}

