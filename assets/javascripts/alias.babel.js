/**
 * Created by Sean on 7/13/2015.
 */
let $w = {
  id: document.getElementById.bind(document),
  query: document.querySelectorAll.bind(document),
  cname: document.getElementsByClassName.bind(document),
  tag: document.getElementsByTagName.bind(document)
};

export default $w;
