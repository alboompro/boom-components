/* eslint-disable no-underscore-dangle */
const scope = typeof window === "undefined" ? global : window;
const settings = scope.__boomComponentsSettings || {};
scope.__boomComponentsSettings = scope.__boomComponentsSettings || settings;

export const update = (name, config = {}) => {
  settings[name] = {
    ...config,
    ...(settings[name] || {})
  };

  return settings[name];
};

export const get = name => settings[name];
