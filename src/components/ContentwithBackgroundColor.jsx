import React from 'react';

const withBackgroundColor = (Component) => {
  return function WithBackgroundColor(props) {
    return <div style={{ backgroundColor: 'red' }}><Component {...props} /></div>;
  };
};


const Content = ({ text }) => {
  return <div>{text}</div>;
};

const ContentwithBackgroundColor = withBackgroundColor(Content);

export default ContentwithBackgroundColor;
