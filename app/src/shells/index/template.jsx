import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from 'lib-react-components';
import Noscript from './noscript';
import * as CONFIG from '../../../bundler/config';
import APP_CONFIG from '../../../app_config';
import s from './styles/basic.sass';


const RootShell = props => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="Cache-Control" content="no-cache" />
      <meta
        name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
      />
      <meta
        httpEquiv="X-UA-Compatible"
        content="ie=edge"
      />
      <title>
        {props.title}
      </title>
      <meta
        name="description"
        content="GammaCV is a WebGL accelerated Computer Vision library for modern web applications."
      />
      <meta
        name="Keywords"
        content="computer vision, WebGL, javascript"
      />
      <link rel="stylesheet" href="https://unpkg.com/lib-react-components@latest/themes/default.css" />
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic');" }} />
      <style dangerouslySetInnerHTML={{ __html: props.inlineStyles }} />
      {props.initRollbar && (
        <Fragment>
          <script
            type="text/javascript"
            charSet="utf-8"
            dangerouslySetInnerHTML={{
              __html: `var _rollbarConfig = {
                accessToken: "${CONFIG.ROLLBAR_API_KEY}",
                captureUncaught: true,
                captureUnhandledRejections: true,
                payload: {
                    environment: "production"
                }
              };`,
            }}
          />
          <script
            type="text/javascript"
            charSet="utf-8"
            async
            src={`${CONFIG.GIT_URL}/assets/libs/rollbar.js`}
          />
        </Fragment>
      )}
      <noscript>
        <Noscript />
      </noscript>
      {
        props.initAnalytics ? (
          <Fragment>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.GOOGLE_ANALYTICS}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag('js', new Date());
                  gtag('config', '${CONFIG.GOOGLE_ANALYTICS}');`,
              }}
            />
          </Fragment>
        ) : null
      }
    </head>
    <body>
      <div className={s.root} id="root">
        <CircularProgress
          size={100}
          colorProgress="primary"
          thickness={2}
          className={s.loader}
        />
      </div>
      {props.disableReactDevTools && (
        <script
          dangerouslySetInnerHTML={{
            __html: "if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === 'object') {window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function() {}}",
          }}
        />
      )}
      <script
        type="text/javascript"
        charSet="utf-8"
        async=""
        src={`${CONFIG.GIT_URL}/bootstrap_${CONFIG.HASH}.js`}
      />
      {props.initServiceWorker && (
        <script
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in window.navigator) {
              window.addEventListener('load', function() {
                window.navigator.serviceWorker.register('${CONFIG.GIT_URL}/sw.js?${CONFIG.HASH}');
              });
            }`,
          }}
        />
      )}
      {
        APP_CONFIG.forceHTTPS && props.initServiceWorker ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `if (window.location.protocol !== 'https:') {
                window.location.protocol = 'https:';
              }`,
            }}
          />
        ) : null
      }
    </body>
  </html>
);

RootShell.propTypes = {
  title: PropTypes.string,
  inlineScripts: PropTypes.arrayOf(PropTypes.string), // eslint-disable-line
  inlineStyles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  initServiceWorker: PropTypes.bool,
  initRollbar: PropTypes.bool,
  initAnalytics: PropTypes.bool,
  disableReactDevTools: PropTypes.bool,
};

RootShell.defaultProps = {
  title: 'App',
  inlineScripts: [],
  inlineStyles: [],
  initServiceWorker: false,
  initRollbar: false,
  initAnalytics: false,
  disableReactDevTools: false,
};

export default RootShell;
