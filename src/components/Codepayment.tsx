import React, { useEffect, useRef } from 'react';
import code from '@code-wallet/elements';

const Codepayment = () => {
    const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { button } = code.elements.create('button', {
      currency: 'usd',
      destination: 'E8otxw1CVX9bfyddKu3ZB3BVLa4VVF9J7CTPdnUwT9jR',
      amount: 0.05,
    });

    button.mount(el.current!);
  }, []);

  return (
    <div id='codepayment'>
        <div className="container">
            <div className="col-lg text-center">
                <h4 className='p-3'>Wanna buy me a coffee? 😊</h4>
                <div className='mb-3' ref={el} />
            </div>
        </div>
    </div>
  )
}

export default Codepayment