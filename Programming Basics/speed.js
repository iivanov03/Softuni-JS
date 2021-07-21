function solve(speed){
    speed = Number(speed);

    if(speed <= 10){
        console.log("slow");
    } else if(speed <= 50){
        console.log("average");
    } else if(speed <= 150){
        console.log("fast");
    } else if(speed <= 1000){
        console.log("ultra fast");
    } else{
        console.log("extremely fast");
    }
}
solve("8");

// Да се напише функция, която получава скорост (реално число)и отпечатва информация за скоростта. При
// скорост до 10 (включително) отпечатайте &quot;slow&quot;. При скорост над 10 и до 50 отпечатайте &quot;average&quot;. При
// скорост над 50 и до 150 отпечатайте &quot;fast&quot;. При скорост над 150 и до 1000 отпечатайте &quot;ultra fast&quot;. При по-
// висока скорост отпечатайте &quot;extremely fast&quot;.