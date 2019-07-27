let x = 0;

function func(){
  //console.log( "関数内で参照(宣言前):" + x );
  let x = 1;
  console.log( "関数内で参照(宣言前)" + x );
}

func();
console.log( "関数外で参照:" + x );
//
// let obj = {
//   name : "エーミール・シンクレール",
//   age :  10,
// };
//
// console.log( obj.name );

// let array = [1, 2, 3];
// console.log( array[1] );
//
// a=1,b=1,c=1

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

// let i = 0;
// do{
//   i++;
//   console.log( i );
// }while( i<5 );

// let i = 0;
// do {
//   i++;
//   console.log( i );
// }while( i < 5 );
//
// let obj = {a:"A",b:"B",c:"C"};
//
// for( let o in obj ){
//   console.log( "obj." + o + " : " + obj[o] );
// }

let obj = ["A","B","C"];

for( let i in obj ){
  console.log( "obj." + i + " : " + obj[i] );
}

for ( let i = 0; i < 10; i++ ){
  if( i==3 ){
    break;
  }
  console.log(i);
}

for ( let i =0; i <5; i++ ){
  if( i == 3 ){
    continue;
  }
  console.log( i );
}

let a = 5, b = 10;
with( Math ){
  console.log("最小:" + min(a,b));
  console.log("最小:" + max(a,b));
}

// let list = ["A", "B", "C"];
// console.log( list[2] );

// let list = ["A","B","C"];
// console.log( list.length );

// let list = ["A","B","C"];
// for( let i=0 ; i <= list.length; i++ ){
//   console.log(list[i]);
// }

// let list = ["A",,"C"];
// list.forEach(function( val ){
//   console.log( " [ " + val + " ] " );
// });

// let list = ["A","B","C"];
// let len = list.unshift( "S" );
//
// console.log( list );

// let list1 = ["A","B","C"];
// let list2 = ["D","E","F"];
// let list = list1.concat( list2 );
//
// console.log(list);

// let list = ["A","B","C"];
// console.log( list.join("-") );

// let list = [ "B","C","A" ];
// console.log( list.sort() );

let list = ["A","B","C"];
list2 = list.slice();
console.log( list2 );
