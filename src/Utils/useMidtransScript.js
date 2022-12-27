import { useEffect } from 'react';

const useMidtransScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    const midtransClientKey = 'SB-Mid-client-s1EB6d85LvXf3pKj';
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.setAttribute('data-client-key', midtransClientKey);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useMidtransScript;
