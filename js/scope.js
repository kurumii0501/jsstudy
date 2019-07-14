var x = 0;

function func(){
  //console.log( "関数内で参照(宣言前):" + x );
  let x = 1;
  console.log( "関数内で参照(宣言前)" + x );
}

func();
console.log( "関数外で参照:" + x );

let obj = {
  name : "エーミール・シンクレール",
  age :  10,
};

console.log( obj.name );

let array = [1, 2, 3];
console.log( array[1] );

a=1,b=1,c=1

for( var i = 0, j = 5; i  <= 5; i++, j-- ){
  console.log(" i: " + " j: " + j );
}
 var msg = "キャンセルをキャンセルしても良いですか？";

 if(confirm(msg)){
   alert("[OK]ですね、ではキャンセルしま・・・せん、で合ってますか？");
 }else{
   alert("[キャンセル]ですね、キャンセルのキャンセルをキャンセルだから・・・");
 }
