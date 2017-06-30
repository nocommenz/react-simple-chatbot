import React from 'react';
import ChatBot from '../../lib/index';

// const Example = () => (
//   <ChatBot
//     steps={[
//       {
//         id: '1',
//         message: 'Hello World',
//         end: true,
//       },
//     ]}
//   />
// );

const validateAnswer = (value) => {
  if (value === 'ok') {
    return '3'
  } else {
    return '0'
  }
}

const Example = () => (
  <ChatBot
    steps={[
      {
        id: '1',
        message: 'Hello World',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        validator: validateAnswer,
        trigger: '0'
      },
      {
        id: '3',
        message: 'test',
        trigger: '0'
      },
      {
        id: '0',
        message: 'Finished',
        end: true
      }
    ]}
  />
);

export default Example;
