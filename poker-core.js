/**
 * ポーカー
 * @namespace
 */
var poker = {};

/**
 * ポーカー・ハンド
 * @enum {number}
 */
poker.handCategory = {
  HIGH_CARD       :   0,
  ONE_PAIR        : 100,
  TWO_PAIR        : 200,
  THREE_OF_A_KIND : 300,
  STRAIGHT        : 400,
  FLUSH           : 500,
  FULL_HOUSE      : 600,
  FOUR_OF_A_KIND  : 700,
  STRAIGHT_FLUSH  : 800,
  ROYAL_FLUSH     : 900
};


/**
 * コアライブラリ
 * @namespace
 */
poker.core = {};


/**
 * 役判定する。
 *
 * @param {{rank:number, suit:string}[]} cards 手札。
 * @returns poker.handCategory のどれか。
 */
poker.core.getHandCategory = function(cards) {
  // TODO: ここに処理を実装します。
  var numcount = {};
  for(var i = 1; i <= 13; i++) {
    numcount[i] = 0;
  }

  for(var i = 0; i < cards.length; i++){
    numcount[cards[i]["rank"]]++;
  }

  console.log(numcount);

  for(var i = 1; i <= 13; i++){
    if(numcount[i] == 2){
      return poker.handCategory.ONE_PAIR;
    }
  }

  // どの組み合わせにも当てはまらないならば、ハイカードを返す。
  return poker.handCategory.HIGH_CARD;
}
