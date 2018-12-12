
import chrome from 'ui/chrome'
import { uiModules } from  'ui/modules'

import 'angulartics'
import './angulartics-piwik'

var app = uiModules.get('hack/piwik-tracker', ['angulartics', 'angulartics.piwik']);

function PiwikTrackerController($scope, $element, config) {

  let enabled = config.get('piwik-tracker:enabled');
  let siteId = config.get('piwik-tracker:siteId');
  let trackerUrl = config.get('piwik-tracker:trackerUrl');

  if (!enabled) {
    return;
  }

  if (trackerUrl === "undefined" && siteId === "undefined") {
    alert("The piwik tracker has been enabled, but tracker url and website ID are undefined.\n" +
          "Please fill 'the piwik-tracker:trackerUrl' and 'the piwik-tracker:siteId' settings and refresh the page.")
    return;
  }

  if (trackerUrl === "undefined") {
    alert("The piwik tracker has been enabled, but tracker url is undefined.\n" +
          "Please fill 'the piwik-tracker:trackerUrl' setting and refresh the page.")
    return;
  }

  if (siteId === "undefined") {
    alert("The piwik tracker has been enabled, but website ID is undefined.\n" +
          "Please fill 'the piwik-tracker:siteId' setting and refresh the page.")
    return;
  }

  window['_paq'] = window['_paq'] || [];
  var _paq = window['_paq'];

  (function() {
    var u=trackerUrl;

    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', siteId]);

    var d=document,
        g=d.createElement('script'),
        s=d.getElementsByTagName('script')[0];

    g.type='text/javascript';
    g.async=true;
    g.defer=true;
    g.src=u+'piwik.js';
    s.parentNode.insertBefore(g,s);
  })();

}

/**
 * Return a pretty print title using the path from a given url.
 * Allow to display a correct documentTitle
 */
function getTitleFromUrl(url) {

  var parser = document.createElement('a');
  parser.href = url; // http://example.com:3000/your/pathname#/your/hash?otherParamsFromHash

  var p = parser.pathname,
      h = parser.hash;

  var firstPart = p.substring(p.lastIndexOf('/') + 1); // pathname
  var secondPart = h.slice(1); // remove first #

  if (secondPart.indexOf('?') > -1)
    secondPart = secondPart.substring(0, secondPart.indexOf('?')); // remove ?otherParamsFromHash

  if (secondPart.indexOf('/') === 0)
    secondPart = secondPart.slice(1); // remove optional first slash

  return jsUcfirst(firstPart) + (secondPart ? (' > ' + jsUcfirst(secondPart)) : '');
}

function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

chrome.setRootController("piwik-tracker", PiwikTrackerController);
