let x = 0;

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

// for( var i = 0, j = 5; i  <= 5; i++, j-- ){
//   console.log(" i: " + " j: " + j );
// }
//  var msg = "キャンセルをキャンセルしても良いですか？";
//
//  if(confirm(msg)){
//    alert("[OK]ですね、ではキャンセルしま・・・せん、で合ってますか？");
//  }else{
//    alert("[キャンセル]ですね、キャンセルのキャンセルをキャンセルだから・・・");
//  }

for ( let i=0; i<5; i++ ){
  console.log( i );
}

for( let i = 1; i <= 10; i++ ){
  if(( i % 2 ) == 0 ){
    console.log( "偶数:" + i );
  }else{
    console.log( "奇数:" + i );
  }
}

let tbox = document.getElementsByClassName( "tbox" );
let btn = document.getElementById( "btn-submit" );

btn.addEventListener( 'click',function(){
  for( let i = 0; i < tbox.length; i++ ){
    if(!tbox[i].value){
      alert( ( i + 1 ) + "個目のテキストボックスに入力してください" );
    }
  }
});

// let num = 200;
// let i = 1;
// let ret = "";
// while( i <= num ){
//   if( num % i == 0 ) ret += "" + i;
//   i ++;
//   }
// console.log( num + "の約数" + ret );

let i = 0;
do{
  i++;
  console.log( i );
}while( i<5 );
