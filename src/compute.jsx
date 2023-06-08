import React, { useEffect, useState } from 'react';

export function ComputeTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = `https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=300&isVerify=1&pageNo=1`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const dealData = data?.value?.list
          ? data?.value?.list?.map((item) => {
              return item.lotteryDrawResult.split(' ')?.map((item) => +item);
            })
          : [];
        setData(dealData);
      });
  }, []);
  const headArr = [
    '奇偶比',
    '大小比',
    '有无连号',
    '是否大连号',
    '1—10',
    '11—20',
    '21—30',
    '31—35',
    '篮球奇偶比',
    '篮球1—10',
    '篮球11—12',
    '篮球是否连号',
    '号码'
  ];

  const result = data.map((item) => {
    const redArr = item.slice(0, 5);
    const blueArr = item.slice(5);
    const ou = redArr.filter((redVal) => redVal % 2 === 0).length;
    const ji = 5 - ou;
    const redBig = redArr.filter((redVal) => redVal >= 18).length;
    const redSmall = 5 - redBig;
    const lianhao = redArr.filter((redVal, redIdx) => {
      return redVal + 1 === redArr[redIdx + 1];
    })?.length;
    const bigLianhao = redArr.filter((redVal, redIdx) => {
      return redVal + 1 === redArr[redIdx + 1] && redVal >= 18;
    })?.length;
    const Tener = redArr.filter((redVal) => redVal <= 10)?.length;
    const Twentyner = redArr.filter(
      (redVal) => redVal > 10 && redVal <= 20
    )?.length;
    const Thirtyner = redArr.filter(
      (redVal) => redVal > 20 && redVal <= 30
    )?.length;
    const Thirtyout = redArr.filter((redVal) => redVal > 30)?.length;

    const blueOu = blueArr.filter((blueVal) => blueVal % 2 === 0).length;
    const blueJi = 2 - blueOu;
    const blueTener = blueArr.filter((blueVal) => blueVal <= 10)?.length;
    const blueLianhao = !!blueArr.filter((blueVal, blueIdx) => {
      return blueVal + 1 === blueArr[blueIdx + 1];
    })?.length;
    return {
      1: `${ji}: ${ou}`,
      2: `${redBig}: ${redSmall}`,
      3: `${!!lianhao}`,
      4: `${!!bigLianhao}`,
      5: Tener,
      6: Twentyner,
      7: Thirtyner,
      8: Thirtyout,
      9: `${blueJi}: ${blueOu}`,
      10: blueTener,
      11: 2 - blueTener,
      12: `${!!blueLianhao}`,
      13: `${redArr} - ${blueArr}`
    };
  });
  const obj = {};
  result?.forEach((item) => {
    Object.keys(item).forEach((key, index) => {
      if (+key !== 13) {
        let val = item[key];
        let label = headArr[index];
        let finalKey = `${label}#${val}`;
        obj[finalKey] = obj[finalKey] ? obj[finalKey] + 1 : 1;
      }
    });
  });
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {headArr.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {result.map((item, index) => {
            return (
              <tr key={index}>
                {Object.keys(item).map((key) => {
                  return <td key={key}>{item[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
