# piwik-tracker

> Enable the piwik tracking code on Kibana interfaces

---

## installation

Manually [download a release](https://github.com/gwintzer/piwik-tracker/releases) for your kibana version

```shell
/opt/kibana/bin/kibana-plugin install <path-to-your-piwik_traker_release_package>.zip
```

## usage

![Plugin Configuration](piwik_config.png)
- Set up your config in `Management > Advanced settings` (search for Piwik): 
- Save it 
- Refresh the page

You can check in Network tab from your Developer tools browser, than the request to Piwik server


## development

See the [kibana contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md) for instructions setting up your development environment. Once you have completed that, use the following yarn scripts.

  - `yarn kbn bootstrap`

    Install dependencies and crosslink Kibana and all projects/plugins.

    > ***IMPORTANT:*** Use this script instead of `yarn` to install dependencies when switching branches, and re-run it whenever your dependencies change.

  - `yarn start`

    Start kibana and have it include this plugin. You can pass any arguments that you would normally send to `bin/kibana`

      ```
      yarn start --elasticsearch.url http://localhost:9220
      ```

  - `yarn build`

    Build a distributable archive of your plugin.

  - `yarn test:browser`

    Run the browser tests in a real web browser.

  - `yarn test:server`

    Run the server tests using mocha.

For more information about any of these commands run `yarn ${task} --help`. For a full list of tasks checkout the `package.json` file, or run `yarn run`.
