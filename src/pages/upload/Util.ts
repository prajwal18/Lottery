import * as xlsx from "xlsx";

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
    return mobileData[(Math.floor(Math.random() * mobileData.length))];
}

const normalizeData = (json: Array<any>) => {
  let newData: Array<{phone: string}> = [];
  for(let i=0; i<json.length; i++){
    newData.push({phone: `${json[i].phone ||  json[i].Phone}`});
  }
  return newData;
}

export const readUploadFile = (e:any, setError: (value:any) => void, setMobileData: (value:any) => void) => {
  try{
    if (e.target.files) {
        const reader = new FileReader();
        reader.onload = (e:any) => {
            const dataa = e.target.result;
            const workbook = xlsx.read(dataa, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const json = xlsx.utils.sheet_to_json(worksheet);
            const newData = normalizeData(json);
            setMobileData(newData);
        };
        reader.readAsArrayBuffer(e.target.files[0]);

    } else {
      throw Error();
    }
  } catch(error){
    setError(true);
  }
}