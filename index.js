export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'piwik_tracker',
    uiExports: {

      hacks: [
        'plugins/piwik_tracker/hack'
      ],

      uiSettingDefaults: {
        'piwik_tracker:enabled': {
          value: false,
          description: 'Enable the Kibana page tracking for all users of the instance'
        },
        'piwik_tracker:siteId': {
          value: "undefined",
          description: 'Set the website id'
        },
        'piwik_tracker:trackerUrl': {
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
