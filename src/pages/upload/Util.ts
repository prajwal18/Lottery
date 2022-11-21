export const data = [{
    "phone": "3293742123"
  }, {
    "phone": "8107349709"
  }, {
    "phone": "8057162594"
  }, {
    "phone": "7101889748"
  }, {
    "phone": "6235349794"
  }, {
    "phone": "8512893870"
  }, {
    "phone": "1829676667"
  }, {
    "phone": "9162052574"
  }, {
    "phone": "3144068059"
  }, {
    "phone": "9737283231"
  }, {
    "phone": "4148309302"
  }, {
    "phone": "8935654665"
  }, {
    "phone": "5087664193"
  }, {
    "phone": "1253521335"
  }, {
    "phone": "6422189977"
  }, {
    "phone": "2842260041"
  }, {
    "phone": "8738051749"
  }, {
    "phone": "3365280416"
  }, {
    "phone": "4952855958"
  }, {
    "phone": "7777782201"
  }];

  export const getMobileArrayData = (mobileData: Array<{phone: string}>) => {
    let newArray: Array<Array<number>> = [];
    for(let i=0; i<mobileData.length; i++){
        let temp = [];
        for(let j=0; j<mobileData[i].phone.length; j++){
            temp.push(Number(mobileData[i].phone[j]));
        }
        newArray.push(temp);
    }
    return newArray;
  }

export const getWinningNumber = (mobileData: Array<Array<number>>) => {
    console.log(mobileData);
    console.log(mobileData[(Math.floor(Math.random() * mobileData.length))])
    return mobileData[(Math.floor(Math.random() * mobileData.length))];
}