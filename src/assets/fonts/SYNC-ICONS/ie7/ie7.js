/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'SYNC-ICONS\'">' + entity + '</span>' + html;
	}
	var icons = {
		'dashboard-solid': '&#xe98b;',
		'dashboard': '&#xe98c;',
		'foundation-solid': '&#xe98d;',
		'foundation': '&#xe98e;',
		'style-solid': '&#xe98f;',
		'style': '&#xe990;',
		'creditcard-solid': '&#xe97e;',
		'gamepad-solid': '&#xe985;',
		'newspaper-solid': '&#xe986;',
		'soup-solid': '&#xe987;',
		'theatre-solid': '&#xe988;',
		'thinking-solid': '&#xe989;',
		'tools-solid': '&#xe98a;',
		'comment-solid': '&#xe975;',
		'emptycat': '&#xe976;',
		'entertain-solid': '&#xe977;',
		'finance-solid': '&#xe978;',
		'food-solid': '&#xe979;',
		'game-solid': '&#xe97a;',
		'health-solid': '&#xe97b;',
		'news-solid': '&#xe97c;',
		'productivity-solid': '&#xe97d;',
		'sport-solid': '&#xe97f;',
		'travel-solid': '&#xe980;',
		'userempty': '&#xe981;',
		'utilities-solid': '&#xe982;',
		'yen-solid': '&#xe983;',
		'yen': '&#xe984;',
		'download': '&#xe974;',
		'image-solid-add': '&#xe972;',
		'image-solid': '&#xe973;',
		'upload': '&#xe971;',
		'dial': '&#xe96e;',
		'stack': '&#xe96f;',
		'search-results': '&#xe970;',
		'barcode-scanner': '&#xe96c;',
		'passcode': '&#xe96d;',
		'calendar-solid': '&#xe927;',
		'calendar': '&#xe928;',
		'action-queue': '&#xe904;',
		'action-solid': '&#xe90a;',
		'action': '&#xe90c;',
		'briefcase-solid': '&#xe90e;',
		'briefcase': '&#xe90f;',
		'calendar-day': '&#xe910;',
		'call': '&#xe911;',
		'chat-bot-solid': '&#xe912;',
		'chat-bot': '&#xe913;',
		'comments': '&#xe914;',
		'copy': '&#xe915;',
		'delete-solid': '&#xe916;',
		'delete': '&#xe917;',
		'edit-solid': '&#xe918;',
		'edit': '&#xe919;',
		'ellipsis-solid': '&#xe91a;',
		'ellipsis': '&#xe91b;',
		'email-draft-solid': '&#xe91c;',
		'email-draft': '&#xe91d;',
		'email-solid': '&#xe91e;',
		'email': '&#xe91f;',
		'folder-open': '&#xe920;',
		'folder-solid': '&#xe921;',
		'folder': '&#xe922;',
		'globe-solid': '&#xe923;',
		'globe': '&#xe924;',
		'help-solid': '&#xe925;',
		'help': '&#xe926;',
		'info-solid': '&#xe929;',
		'info': '&#xe92a;',
		'link': '&#xe92b;',
		'list-view': '&#xe92c;',
		'lock-solid': '&#xe92d;',
		'lock': '&#xe92e;',
		'manage-columns': '&#xe92f;',
		'messages-solid': '&#xe930;',
		'Messages': '&#xe931;',
		'nav-activity-solid': '&#xe932;',
		'nav-activity': '&#xe933;',
		'notifications-solid': '&#xe934;',
		'notifications': '&#xe935;',
		'pending-solid': '&#xe936;',
		'pending': '&#xe937;',
		'pin-solid': '&#xe938;',
		'pin': '&#xe939;',
		'profile-solid': '&#xe93a;',
		'profile': '&#xe93b;',
		'Refresh': '&#xe93c;',
		'search': '&#xe93d;',
		'settings-solid': '&#xe93e;',
		'settings': '&#xe93f;',
		'sort': '&#xe940;',
		'star-solid': '&#xe941;',
		'star': '&#xe942;',
		'tile-view-solid': '&#xe943;',
		'tile-view': '&#xe944;',
		'unlocked': '&#xe945;',
		'users-solid': '&#xe946;',
		'users': '&#xe947;',
		'warning': '&#xe948;',
		'workspace-solid': '&#xe949;',
		'workspace': '&#xe94a;',
		'wrench-solid': '&#xe94b;',
		'wrench': '&#xe94c;',
		'attachment': '&#xe94d;',
		'barchart-solid': '&#xe94e;',
		'barchart': '&#xe94f;',
		'calendar-day-solid': '&#xe950;',
		'caret-left': '&#xe951;',
		'caret-right': '&#xe952;',
		'caret-up': '&#xe953;',
		'chevron-left': '&#xe954;',
		'chevron-right': '&#xe955;',
		'chevron-up': '&#xe956;',
		'content-connector': '&#xe957;',
		'emails-solid': '&#xe958;',
		'emails': '&#xe959;',
		'exchange-solid': '&#xe95a;',
		'exchange': '&#xe95b;',
		'flag-solid': '&#xe95c;',
		'flag': '&#xe95d;',
		'Minus': '&#xe95e;',
		'portal-connectors': '&#xe95f;',
		'portal-libraries': '&#xe960;',
		'reply-all-solid': '&#xe961;',
		'reply-all': '&#xe962;',
		'reply-solid': '&#xe963;',
		'reply': '&#xe964;',
		'right-arrow': '&#xe965;',
		'send-solid': '&#xe966;',
		'send': '&#xe967;',
		'share-solid': '&#xe968;',
		'share': '&#xe969;',
		'sync': '&#xe96a;',
		'unread': '&#xe96b;',
		'like': '&#xe90d;',
		'logout': '&#xe90b;',
		'hide': '&#xe908;',
		'show': '&#xe909;',
		'back': '&#xe900;',
		'caret': '&#xe901;',
		'checkmark': '&#xe902;',
		'chevron-down': '&#xe903;',
		'phone': '&#xe905;',
		'plus': '&#xe906;',
		'x': '&#xe907;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
