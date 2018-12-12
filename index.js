export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'piwik-tracker',
    uiExports: {

      hacks: [
        'plugins/piwik-tracker/hack'
      ],

      uiSettingDefaults: {
        'piwik-tracker:enabled': {
          value: false,
          description: 'Enable the Kibana page tracking for all users of the instance'
        },
        'piwik-tracker:siteId': {
          value: "undefined",
          description: 'Set the website id'
        },
        'piwik-tracker:trackerUrl': {
          value: "undefined",
          description: 'Set the tracker url'
        }
      }
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },
  });
}
