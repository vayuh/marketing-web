import React from "react";

const CalendlyEmbed = ({ className }) => {
  return (
    <div id="book-a-call" className={`content my-4 ${className}`}>
      <div className="calendly-embed">
        <iframe
          title={'hubspot'}
          style={{
            width: '100%',
            height: '700px'
          }}
          src={'https://meetings.hubspot.com/mayur-mudigonda/exploration-call?embed=true'}
        />
        <style jsx>{`
        .calendly-iframe {
          min-width: 320px;
          height: 700px;
        }
        .calendly-embed {
          // min-height: 630px; /* Adjust this value according to your preference */
          // margin: 0 auto;
          height: 700px;
          margin-bottom: 20px;
        }
      `}</style>
      </div>
    </div>

  );
};

export default CalendlyEmbed;
