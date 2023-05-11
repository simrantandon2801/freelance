import React, { useEffect } from 'react';

const CollectChatBot = () => {
  useEffect(() => {
    window.CollectId = "645b6afeaf69d9e2a081972a";
    const h = document.getElementsByTagName('head')[0];
    const s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.async = true;
    s.setAttribute('src', 'https://collectcdn.com/launcher.js');
    h.appendChild(s);
  }, []);

  return (
    <div id="collect-chatbot-container"></div>
  );
};

export default CollectChatBot;
