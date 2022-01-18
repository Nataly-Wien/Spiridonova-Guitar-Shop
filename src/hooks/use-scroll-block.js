import {useRef} from 'react';

const safeDocument = typeof document !== `undefined` ? document : {};

export const useScrollBlock = () => {
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const {body} = safeDocument;

  const blockScroll = () => {
    if (!body || !body.style || scrollBlocked.current) {
      return;
    }

    const scrollBarWidth = window.innerWidth - html.clientWidth;
    const bodyPaddingRight = parseInt(window.getComputedStyle(body).getPropertyValue("padding-right")) || 0;
    body.style.overflow = `hidden`;
    body.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;
    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !body.style || !scrollBlocked.current) {
      return;
    }

    body.style.overflow = ``;
    body.style.paddingRight = ``;
    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};
