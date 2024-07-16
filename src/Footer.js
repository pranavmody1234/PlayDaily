import React, { useState, useEffect } from 'react';

function Footer() {
  const [shareResult, setShareResult] = useState('');
  const [canShare, setCanShare] = useState(false);
  const [canCopyToClipboard, setCanCopyToClipboard] = useState(false);

  useEffect(() => {
    setCanShare(!!navigator.share);
    setCanCopyToClipboard(!!navigator.clipboard);
  }, []);

  const handleShare = async () => {
    if (canShare) {
      try {
        await navigator.share({
          title: 'Refer and Earn Rewards',
          text: 'Share with friends and win loads of coins!',
          url: window.location.href
        });
        setShareResult('Content shared successfully.');
      } catch (error) {
        setShareResult(`Failed to share: ${error.message}`);
      }
    } else if (canCopyToClipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareResult('Link copied to clipboard, please share it.');
      } catch (err) {
        setShareResult('Failed to copy link to clipboard.');
      }
    } else {
      setShareResult('Sharing and clipboard access are not supported in this browser.');
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-title">Refer and Earn Rewards</div>
        <div className="footer-subtitle">Share with friends and win loads of coins!</div>
        {(canShare || canCopyToClipboard) && (
          <button onClick={handleShare} className="share-button">
            Share
          </button>
        )}
        {shareResult && <p>{shareResult}</p>}
      </div>
      <img src={'./images/refer_gift_image2.png'} alt="Earn Rewards" className="rewards-image" />
    </footer>
  );
}

export default Footer;


// import React from 'react';
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   EmailShareButton,
// } from 'react-share';

// function Footer() {
//   const shareUrl = window.location.href;
//   const shareTitle = 'Refer and Earn Rewards';
//   const shareText = 'Share with friends and win loads of coins!';

//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-title">Refer and Earn Rewards</div>
//         <div className="footer-subtitle">Share with friends and win loads of coins!</div>
//         <div className="share-buttons">
//           <FacebookShareButton url={shareUrl} quote={shareText}>
//             Share on Facebook
//           </FacebookShareButton>
//           <TwitterShareButton url={shareUrl} title={shareText}>
//             Share on Twitter
//           </TwitterShareButton>
//           <WhatsappShareButton url={shareUrl} title={shareText}>
//             Share on WhatsApp
//           </WhatsappShareButton>
//           <EmailShareButton subject={shareTitle} body={`${shareText}\n${shareUrl}`}>
//             Share via Email
//           </EmailShareButton>
//         </div>
//       </div>
//       <img src={'./images/refer_gift_image2.png'} alt="Earn Rewards" className="rewards-image" />
//     </footer>
//   );
// }

// export default Footer;