const helpers = {
  acceptButtonText: function(){
    return CookieConsent.getConfig('acceptButtonText');
  },
  cookieMessageImply: function(){
    return CookieConsent.getConfig('cookieMessageImply');
  },
  cookieTitle: function(){
    return CookieConsent.getConfig('cookieTitle');
  },
  className: function(){
    return CookieConsent.getConfig('className');
  },
  cookieMessage: function(){
    return CookieConsent.getConfig('cookieMessage');
  },
  cookiePolicyLinkText: function(){
    return CookieConsent.getConfig('linkText');
  },
  hasPolicyLink : function(){
    return CookieConsent.getConfig('showLink') || false;
  },
  policyLink: function(){
    return CookieConsent.getConfig('linkRouteName');
  },
  position: function(){
    return CookieConsent.getConfig('position') || 'top';
  },
  expirationInDays: function(){
    return CookieConsent.getConfig('expirationInDays') || 7;
  },
  showMessage: function(){
    var cookie = Cookie.get('cookie-consent');
    if (cookie){
      return false;
    }else{
      return true;
    }
  },
};

Template.cookieConsent.helpers(helpers);

Template.cookieConsentImply.helpers(helpers);

Template.cookieConsent.events({
  'click #acceptCookies': function(e){
    e.preventDefault();
    let expireInDays = CookieConsent.getConfig('expirationInDays') || 7;
    let dt = new Date();
    dt.setTime(dt.getTime() + (expireInDays*24*60*60*1000));
    Cookie.set('cookie-consent', "Accepted", {expires: dt});
  }
});