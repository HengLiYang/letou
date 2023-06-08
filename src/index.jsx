import React from 'react';
import { ComputeTable } from './compute';
import { generateRedNumbers } from './tuijian';
import { generateBlueNumbers } from './blue';

export function Home() {
  // 奇偶比： 3：2  || 2: 3
  // 大小比： 2: 3 || 3:2
  // 小连号
  // 1-10: 1 || 2 11-20: 1 || 2 21-30: 1 || 2
  // blue奇偶 1:1
  // blue不连号
  // blue1-10: 2
  //你好
  const lucky = [...generateRedNumbers(), ...generateBlueNumbers()];

  return (
    <div className="home">
      <h2>
        💖推荐号码：
        <span
          style={{
            color: 'red'
          }}
        >
          {Array.isArray(lucky) ? (
            <span>
              <span>{lucky?.slice(0, 5).join(' ')}</span>
              <span
                style={{
                  color: 'blue',
                  marginLeft: 10
                }}
              >
                {lucky?.slice(5).join(' ')}
              </span>
            </span>
          ) : (
            lucky
          )}
        </span>
      </h2>
      <ComputeTable />
    </div>
  );
}
