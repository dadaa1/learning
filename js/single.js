//单例模式

//ES5版本
let Single = function(name) {
  this.name = name;
};

Single.prototype.getName = function() {
  console.log(this.name);
};

Single.init = (function() {
  //利用闭包保存isExist变量
  let isExist = null;
  return function(name) {
    console.log(isExist);
    if (isExist === null) {
      isExist = new Single(name);
      return isExist;
    } else {
      return isExist;
    }
  };
})();

Single.init('hhhhhhh').getName();
Single.init('xxxxxxx').getName();
/*————————————————————————————————————————————————————————————————————————*/
//尝试ES6[未成功，尴尬]
// const isExist=Symbol('')
/*
class Single {
	constructor(name){
		//this.name=name;
		return (()=>{
			let isExist=null;
			class single{
				constructor(name){
					this.name=name;
				}
				getName(){
					console.log(this.name);
				}
			}
			this.init=(name)=>{
				if(isExist===null){
					isExist=new single(name);
					return isExist;
				}else{
					return isExist;
				}
			}
		})()
	}
// Single.init('hhhhhhh').getName();
// Single.init('xxxxxxx').getName();

	getName(){
		console.log(this.name);
	}
	init(name){
			console.log(isExist);
			if(isExist===null){
				isExist=new Single(name);
				return isExist;
			}else{
				return isExist;
			}
		};
	}
}
console.log((new Single()).init('hhhhhh'))
console.log((new Single()).init('jjjjj'))*/
// Single.init('hhhhhhh').getName();
// Single.init('xxxxxxx').getName();

/*————————————————————————————————————————————————————————————*/

let Single = (function() {
  let isExist;
  let single = function(name) {
    if (isExist) {
      return isExist;
    } else {
      this.name = name;
      this.init();
      isExist = this;
    }
  };
  single.prototype.init = function() {
    console.log(this.name);
  };
  return single;
})();

console.log(new Single('hhhh') === new Single('jjjjjj')); //true
