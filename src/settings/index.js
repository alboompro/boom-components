/* eslint-disable no-underscore-dangle */
const scope = window || global;
const settings = scope.__boomComponentsSettings || {};
scope.__boomComponentsSettings = window.__boomComponentsSettings || settings;

export const update = (name, config = {}) => {
  settings[name] = {
    ...config,
    ...(settings[name] || {})
  };

  return settings[name];
};

export const get = name => settings[name];
