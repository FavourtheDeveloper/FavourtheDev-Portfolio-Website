import React, { useEffect, useRef } from 'react';
import code from '@code-wallet/elements';

const Codepayment = () => {
    const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { button } = code.elements.create('button', {
      currency: 'usd',
      destination: 'FyADBZXgbatVndStsK7L66FRSeVsPgMjVaTeGrW2iGMU',
      amount: 5,
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