import React, { useState, useEffect, useCallback } from 'react';

const TypewriterEffect = ({ text, scrollToBottom }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        const nextIndex = prevText.length + 10;
        const nextText = text.slice(0, nextIndex);
        if (nextIndex >= text.length) {
          clearInterval(interval);
          scrollToBottom();
        }
        return nextText;
      });
    }, 0);

    return () => clearInterval(interval);
  }, [text, scrollToBottom]);

  return <span dangerouslySetInnerHTML={{ __html: displayText }} />;
};

const TerminalHistory = ({ history, userName, scrollToBottom }) => {
  const renderHistoryItem = useCallback(
    (item, index) => (
      <div key={index} className="flex flex-col space-y-2">
        <div className="flex items-center">
          <p className="text-primary-color">{`${userName || 'anonymous'}@portfolio:~$`}</p>
          <p className="ml-2 text-primary-text">{item.command}</p>
        </div>
        <div className="ml-6">
          {item.output.map((output, outputIndex) => (
            <p key={outputIndex}>
              <TypewriterEffect text={output} scrollToBottom={scrollToBottom} />
            </p>
          ))}
        </div>
      </div>
    ),
    [userName, scrollToBottom]
  );

  return <div className="flex flex-col mt-4 space-y-2">{history.map(renderHistoryItem)}</div>;
};

export default TerminalHistory;