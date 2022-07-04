import React from 'react';
//This is a stateless component

const Loading = ({message}) => <tr><td colSpan={2} className="loader">{message}</td></tr>;

export default Loading;