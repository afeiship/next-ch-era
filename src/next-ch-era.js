(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var TG_DICT = '甲乙丙丁戊己庚辛壬癸';
  var DZ_DICT = '子丑寅卯辰巳午未申酉戌亥';

  nx.chEra = function () {
    var i= y -1900+36 ;
    return TG_DICT.charAt(i%10)+DZ_DICT.charAt(i%12);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.chEra;
  }

}());
