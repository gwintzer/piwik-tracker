/**
 * Return a pretty print title using the path from a given url.
 * Allow to display a correct documentTitle
 */
export function getTitleFromUrl(url) {

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

export function jsUcfirst(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
