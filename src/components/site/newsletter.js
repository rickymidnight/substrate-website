import cn from 'classnames';
import React, { useState } from 'react';

import { useSiteMetadata } from '../../hooks/use-site-metadata';
import Icon from '../default/Icon';
import { Link } from '../default/Link';

export default function Newsletter({ widget = false }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { siteMetadata } = useSiteMetadata();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('https://paritytechnologies.activehosted.com/proc.php', {
      method: 'POST',
      body: data,
      mode: 'no-cors',
    })
      .then(response => {
        console.log(response);
        setFormSubmitted(!formSubmitted);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      })
      .catch(error => console.log('Request failed', error));
  };

  return (
    <>
      {!formSubmitted && (
        <div
          className={cn('w-full border-b-2 border-gray-600', {
            ' pt-0 pb-0 border-b-0': widget,
            'pt-12 pb-8': !widget,
          })}
        >
          <div className="flex items-center">
            {!widget && <Icon name="paperplane" className="mb-4 mr-4 fill-current text-white" />}
            <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
          </div>
          <div className={cn('', { 'lg:grid lg:grid-cols-3 gap-6': !widget })}>
            <p className="font-bold text-lg max-w-lg lg:max-w-7xl">
              Subscribe for the latest news, technical updates and helpful developer resources.
            </p>
            <form className="col-span-2" onSubmit={event => handleSubmit(event)}>
              <input type="hidden" name="u" value="11" />
              <input type="hidden" name="f" value="11" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <div className={cn('', { 'lg:flex gap-6': !widget })}>
                <input
                  className={cn(
                    'w-full max-w-lg flex-1 lg:max-w-lg h-16 mb-6 border-3 rounded-lg border-black text-bodyBg text-xl p-4 focus:outline-none hover:ring-2 focus:ring-2 text-center',
                    {
                      'bg-substrateBlackish border-white text-white': !widget,
                      'dark:bg-substrateDarkest dark:border-substrateGray-dark text-black dark:text-white': widget,
                    }
                  )}
                  type="email"
                  name="email"
                  placeholder={!widget ? 'Type your Email Address' : 'Email Address'}
                  required
                />
                <div className="max-w-lg lg:w-lg flex-1">
                  <button
                    className="w-full bg-substrateGreen hover:bg-white text-white hover:text-substrateGreen align-items mb-6 px-9 py-4 text-xl font-bold transition duration-200 focus:outline-none focus:ring-2 rounded-lg border-3 border-substrateGreen"
                    type="submit"
                    value="Submit"
                    onSubmit={event => handleSubmit(event)}
                  >
                    Subscribe
                  </button>
                  <p className={cn('text-sm', { ' lg:text-right': !widget })}>
                    To see how we use your information please see our{' '}
                    <span className="underline-animate underline-animate-thin">
                      <Link to="https://www.parity.io/privacy/">privacy policy</Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {formSubmitted && (
        <div className={cn('w-full', { 'pt-8 pb-8 border-b-2 border-gray-600': !widget })}>
          <div className="flex items-center">
            {!widget && <Icon name="paperplane" className="mb-4 mr-4 fill-current text-white" />}
            <h2 className="text-4xl font-bold mb-4">Newsletter</h2>
          </div>
          <p className="font-bold text-lg">
            To complete the subscription process, please click the link in the email we just sent you.
          </p>
          <p className="text-sm">
            For more news, follow{' '}
            <span className="underline-animate underline-animate-thin">
              <Link to={siteMetadata.twitter}>@substrate_io</Link>
            </span>{' '}
            on Twitter.
          </p>
        </div>
      )}
    </>
  );
}
