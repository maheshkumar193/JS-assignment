
// question 1

const objPerson = {
    firstName : "Mahesh Kumar",
    lastName : "Biknalikar",
    age : 20,
    getName : function(){
        const name = `${this.firstName} ${this.lastName}`;
        return name;
    },
    getAge : function(){
        return this.age;
    }
};

console.log(objPerson.getName());

console.log(objPerson.getAge());


// question 2

// Create an Object MetadataParser using constructor functions
// The Object should have private properties _version, _channel, _keyField 
// Object should have get and set function for each property
// Add a method in the class getKeyFields, which takes an array of JSON objects 
// (eg [{channel: ‘A’}, {channel: ‘B’}, {channel ‘C’}]) as input and returns an array of values of _keyField, input array.


const MetaDataParser = function(){
}

MetaDataParser.prototype.setVersion = function(version){
    this._version = version;
}
MetaDataParser.prototype.getVersion = function(){
    return this._version;
}
MetaDataParser.prototype.setChannel = function(channel){
    this._channel = channel;
}
MetaDataParser.prototype.getChannel = function(){
    return this._channel;
}
MetaDataParser.prototype.setKeyField = function(keyField){
    this._keyField = keyField;
}
MetaDataParser.prototype.getKeyField = function(){
    return this._keyField;
}

MetaDataParser.prototype.getKeyFields = function(arr){
    let ans = [];
    for(let i of arr){
        for(j in i){
            ans.push(i[j]);
        }
    }
    return ans;
}


const obj1 = new MetaDataParser();

obj1.setVersion("v1");

console.log(obj1.getVersion());

obj1.setChannel("c1");

console.log(obj1.getChannel());

obj1.setKeyField("k1");

console.log(obj1.getKeyField());

console.log(obj1.getKeyFields([{channel: "A"}, {channel: "B"}, {channel : "C"}]));


const obj2 = new MetaDataParser();

obj2.setVersion("v2");

console.log(obj2.getVersion());

obj2.setChannel("c2");

console.log(obj2.getChannel());

obj2.setKeyField("k2");

console.log(obj2.getKeyField());

console.log(obj1.getKeyField());

console.log(obj1._channel)


// question 3

const input = [ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ]
  
const output = input.reduce(function(acc,curr){
    if(acc[curr.channel]){
        acc[curr.channel].push(curr);
    }
    else{
        acc[curr.channel]=[curr];
    }
    return acc;
},{}); 

console.log(output);



//question 4

// Implement inheritance. Define a constructor function SortArray which 
// Has a property originalArray
// Has get function to getSortedArray 
// Has a private function to sort the array.
// Takes as an input to construct an array of numbers
// Define another constructor function (SortObjectArray) which extends SortArray, and is used to sort array of JSON object

const SortArray = function(data){

    this.originalArray = data;

    this.mySort = function(){
        let a = [...this.originalArray];
        a.sort((ele1,ele2)=>{
            return ele1-ele2;
        });
        return a;
    }

    this.getSortedArray = function(){
        return this.mySort();
    }

}


const arr = new SortArray([1,3,5,4,2]);

console.log(arr.getSortedArray());

console.log(arr.originalArray);



const SortObjectArray = function(arr){
    this.originalObjectArray = arr;
    this.mySort = function(){
        let a = [...this.originalObjectArray];
        a.sort(function(x,y){
            for(let i in a[0]){
                if(x[i]!=y[i]){
                    return x[i]>y[i];
                }
            }
        })
        return a;
    }
}
function obj(name,age,weight){
    let output = {};
    output.name=name;
    output.age=age;
    output.weight=age;
    return output;
}

const objArr = new SortObjectArray([obj("mahesh",20,60),obj("ketan",22,88),obj("jiraya",20,60)]);

console.log(objArr.originalObjectArray);

console.log(objArr.mySort());

console.log(objArr.originalObjectArray);