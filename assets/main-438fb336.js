class W{constructor(e){this.properties=e??[]}get(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.value);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,n){const r=this.get(e);if(r!==void 0){if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,n){const r=this.get(e);if(r===void 0)throw new Error('Property "'+e+'" is missing');if(n!=="json"&&typeof r!==n)throw new Error('Expected property "'+e+'" to have type "'+n+'"');return r}getType(e){const n=this.properties.filter(r=>r.name===e).map(r=>r.type);if(n.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(n.length!==0)return n[0]}}const Z="https://unpkg.com/@workadventure/scripting-api-extra@1.7.4/dist";class ue{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new W(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return e?WA.player.tags.includes(e):!0}get isWritable(){const e=this.properties.getString("writableBy");return e?WA.player.tags.includes(e):!0}}function N(t){const e=t?"#"+t.join():"";WA.nav.openCoWebSite(Z+"/configuration.html"+e,!0)}async function ce(t,e){const n=await WA.room.getTiledMap(),r=new Map;return ee(n.layers,r,t,e),r}function ee(t,e,n,r){for(const o of t)if(o.type==="objectgroup"){for(const a of o.objects)if(a.type==="variable"||a.class==="variable"){if(n&&o.name!==n||r&&!r.includes(a.name))continue;e.set(a.name,new ue(a))}}else o.type==="group"&&ee(o.layers,e,n,r)}let G;async function E(){return G===void 0&&(G=le()),G}async function le(){return pe(await WA.room.getTiledMap())}function pe(t){const e=new Map;return te(t.layers,"",e),e}function te(t,e,n){for(const r of t)r.type==="group"?te(r.layers,e+r.name+"/",n):(r.name=e+r.name,n.set(r.name,r))}async function ne(){const t=await E(),e=[];for(const n of t.values())if(n.type==="objectgroup")for(const r of n.objects)(r.type==="area"||r.class==="area")&&e.push(r);return e}function fe(t){let e=1/0,n=1/0,r=0,o=0;const a=t.data;if(typeof a=="string")throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let s=0;s<t.height;s++)for(let i=0;i<t.width;i++)a[i+s*t.width]!==0&&(e=Math.min(e,i),o=Math.max(o,i),n=Math.min(n,s),r=Math.max(r,s));return{top:n,left:e,right:o+1,bottom:r+1}}function re(t){let e=1/0,n=1/0,r=0,o=0;for(const a of t){const s=fe(a);s.left<e&&(e=s.left),s.top<n&&(n=s.top),s.right>o&&(o=s.right),s.bottom>r&&(r=s.bottom)}return{top:n,left:e,right:o,bottom:r}}/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */var he=Object.prototype.toString,C=Array.isArray||function(e){return he.call(e)==="[object Array]"};function D(t){return typeof t=="function"}function ye(t){return C(t)?"array":typeof t}function V(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function O(t,e){return t!=null&&typeof t=="object"&&e in t}function ge(t,e){return t!=null&&typeof t!="object"&&t.hasOwnProperty&&t.hasOwnProperty(e)}var de=RegExp.prototype.test;function me(t,e){return de.call(t,e)}var be=/\S/;function we(t){return!me(be,t)}var ve={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function Ae(t){return String(t).replace(/[&<>"'`=\/]/g,function(n){return ve[n]})}var We=/\s*/,Se=/\s+/,_=/\s*=/,Ce=/\s*\}/,ke=/#|\^|\/|>|\{|&|=|!/;function Me(t,e){if(!t)return[];var n=!1,r=[],o=[],a=[],s=!1,i=!1,u="",l=0;function f(){if(s&&!i)for(;a.length;)delete o[a.pop()];else a=[];s=!1,i=!1}var g,m,T;function k(w){if(typeof w=="string"&&(w=w.split(Se,2)),!C(w)||w.length!==2)throw new Error("Invalid tags: "+w);g=new RegExp(V(w[0])+"\\s*"),m=new RegExp("\\s*"+V(w[1])),T=new RegExp("\\s*"+V("}"+w[1]))}k(e||y.tags);for(var p=new j(t),b,c,d,M,P,v;!p.eos();){if(b=p.pos,d=p.scanUntil(g),d)for(var x=0,ie=d.length;x<ie;++x)M=d.charAt(x),we(M)?(a.push(o.length),u+=M):(i=!0,n=!0,u+=" "),o.push(["text",M,b,b+1]),b+=1,M===`
`&&(f(),u="",l=0,n=!1);if(!p.scan(g))break;if(s=!0,c=p.scan(ke)||"name",p.scan(We),c==="="?(d=p.scanUntil(_),p.scan(_),p.scanUntil(m)):c==="{"?(d=p.scanUntil(T),p.scan(Ce),p.scanUntil(m),c="&"):d=p.scanUntil(m),!p.scan(m))throw new Error("Unclosed tag at "+p.pos);if(c==">"?P=[c,d,b,p.pos,u,l,n]:P=[c,d,b,p.pos],l++,o.push(P),c==="#"||c==="^")r.push(P);else if(c==="/"){if(v=r.pop(),!v)throw new Error('Unopened section "'+d+'" at '+b);if(v[1]!==d)throw new Error('Unclosed section "'+v[1]+'" at '+b)}else c==="name"||c==="{"||c==="&"?i=!0:c==="="&&k(d)}if(f(),v=r.pop(),v)throw new Error('Unclosed section "'+v[1]+'" at '+p.pos);return Ee(Le(o))}function Le(t){for(var e=[],n,r,o=0,a=t.length;o<a;++o)n=t[o],n&&(n[0]==="text"&&r&&r[0]==="text"?(r[1]+=n[1],r[3]=n[3]):(e.push(n),r=n));return e}function Ee(t){for(var e=[],n=e,r=[],o,a,s=0,i=t.length;s<i;++s)switch(o=t[s],o[0]){case"#":case"^":n.push(o),r.push(o),n=o[4]=[];break;case"/":a=r.pop(),a[5]=o[2],n=r.length>0?r[r.length-1][4]:e;break;default:n.push(o)}return e}function j(t){this.string=t,this.tail=t,this.pos=0}j.prototype.eos=function(){return this.tail===""};j.prototype.scan=function(e){var n=this.tail.match(e);if(!n||n.index!==0)return"";var r=n[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r};j.prototype.scanUntil=function(e){var n=this.tail.search(e),r;switch(n){case-1:r=this.tail,this.tail="";break;case 0:r="";break;default:r=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=r.length,r};function S(t,e){this.view=t,this.cache={".":this.view},this.parent=e}S.prototype.push=function(e){return new S(e,this)};S.prototype.lookup=function(e){var n=this.cache,r;if(n.hasOwnProperty(e))r=n[e];else{for(var o=this,a,s,i,u=!1;o;){if(e.indexOf(".")>0)for(a=o.view,s=e.split("."),i=0;a!=null&&i<s.length;)i===s.length-1&&(u=O(a,s[i])||ge(a,s[i])),a=a[s[i++]];else a=o.view[e],u=O(o.view,e);if(u){r=a;break}o=o.parent}n[e]=r}return D(r)&&(r=r.call(this.view)),r};function h(){this.templateCache={_cache:{},set:function(e,n){this._cache[e]=n},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}h.prototype.clearCache=function(){typeof this.templateCache<"u"&&this.templateCache.clear()};h.prototype.parse=function(e,n){var r=this.templateCache,o=e+":"+(n||y.tags).join(":"),a=typeof r<"u",s=a?r.get(o):void 0;return s==null&&(s=Me(e,n),a&&r.set(o,s)),s};h.prototype.render=function(e,n,r,o){var a=this.getConfigTags(o),s=this.parse(e,a),i=n instanceof S?n:new S(n,void 0);return this.renderTokens(s,i,r,e,o)};h.prototype.renderTokens=function(e,n,r,o,a){for(var s="",i,u,l,f=0,g=e.length;f<g;++f)l=void 0,i=e[f],u=i[0],u==="#"?l=this.renderSection(i,n,r,o,a):u==="^"?l=this.renderInverted(i,n,r,o,a):u===">"?l=this.renderPartial(i,n,r,a):u==="&"?l=this.unescapedValue(i,n):u==="name"?l=this.escapedValue(i,n,a):u==="text"&&(l=this.rawValue(i)),l!==void 0&&(s+=l);return s};h.prototype.renderSection=function(e,n,r,o,a){var s=this,i="",u=n.lookup(e[1]);function l(m){return s.render(m,n,r,a)}if(u){if(C(u))for(var f=0,g=u.length;f<g;++f)i+=this.renderTokens(e[4],n.push(u[f]),r,o,a);else if(typeof u=="object"||typeof u=="string"||typeof u=="number")i+=this.renderTokens(e[4],n.push(u),r,o,a);else if(D(u)){if(typeof o!="string")throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,o.slice(e[3],e[5]),l),u!=null&&(i+=u)}else i+=this.renderTokens(e[4],n,r,o,a);return i}};h.prototype.renderInverted=function(e,n,r,o,a){var s=n.lookup(e[1]);if(!s||C(s)&&s.length===0)return this.renderTokens(e[4],n,r,o,a)};h.prototype.indentPartial=function(e,n,r){for(var o=n.replace(/[^ \t]/g,""),a=e.split(`
`),s=0;s<a.length;s++)a[s].length&&(s>0||!r)&&(a[s]=o+a[s]);return a.join(`
`)};h.prototype.renderPartial=function(e,n,r,o){if(r){var a=this.getConfigTags(o),s=D(r)?r(e[1]):r[e[1]];if(s!=null){var i=e[6],u=e[5],l=e[4],f=s;u==0&&l&&(f=this.indentPartial(s,l,i));var g=this.parse(f,a);return this.renderTokens(g,n,r,f,o)}}};h.prototype.unescapedValue=function(e,n){var r=n.lookup(e[1]);if(r!=null)return r};h.prototype.escapedValue=function(e,n,r){var o=this.getConfigEscape(r)||y.escape,a=n.lookup(e[1]);if(a!=null)return typeof a=="number"&&o===y.escape?String(a):o(a)};h.prototype.rawValue=function(e){return e[1]};h.prototype.getConfigTags=function(e){return C(e)?e:e&&typeof e=="object"?e.tags:void 0};h.prototype.getConfigEscape=function(e){if(e&&typeof e=="object"&&!C(e))return e.escape};var y={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){L.templateCache=t},get templateCache(){return L.templateCache}},L=new h;y.clearCache=function(){return L.clearCache()};y.parse=function(e,n){return L.parse(e,n)};y.render=function(e,n,r,o){if(typeof e!="string")throw new TypeError('Invalid template! Template should be a "string" but "'+ye(e)+'" was given as the first argument for mustache#render(template, view, partials)');return L.render(e,n,r,o)};y.escape=Ae;y.Scanner=j;y.Context=S;y.Writer=h;class oe{constructor(e,n){this.template=e,this.state=n,this.ast=y.parse(e)}getValue(){return this.value===void 0&&(this.value=y.render(this.template,this.state)),this.value}onChange(e){const n=[];for(const r of this.getUsedVariables().values())n.push(this.state.onVariableChange(r).subscribe(()=>{const o=y.render(this.template,this.state);o!==this.value&&(this.value=o,e(this.value))}));return{unsubscribe:()=>{for(const r of n)r.unsubscribe()}}}isPureString(){return this.ast.length===0||this.ast.length===1&&this.ast[0][0]==="text"}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,n){for(const r of e){const o=r[0],a=r[1],s=r[4];["name","&","#","^"].includes(o)&&n.add(a),s!==void 0&&typeof s!="string"&&this.recursiveGetUsedVariables(s,n)}}}async function je(){var t;const e=await ne();for(const n of e){const r=(t=n.properties)!==null&&t!==void 0?t:[];for(const o of r){if(o.type==="int"||o.type==="bool"||o.type==="object"||typeof o.value!="string")continue;const a=new oe(o.value,WA.state);if(a.isPureString())continue;const s=a.getValue();await $(n.name,o.name,s),a.onChange(async i=>{await $(n.name,o.name,i)})}}}async function Te(){var t;const e=await E();for(const[n,r]of e.entries())if(r.type!=="objectgroup"){const o=(t=r.properties)!==null&&t!==void 0?t:[];for(const a of o){if(a.type==="int"||a.type==="bool"||a.type==="object"||typeof a.value!="string")continue;const s=new oe(a.value,WA.state);if(s.isPureString())continue;const i=s.getValue();q(n,a.name,i),s.onChange(u=>{q(n,a.name,u)})}}}async function $(t,e,n){console.log(t),(await WA.room.area.get(t)).setProperty(e,n)}function q(t,e,n){WA.room.setProperty(t,e,n),e==="visible"&&(n?WA.room.showLayer(t):WA.room.hideLayer(t))}const Pe="https://admin.workadventu.re/html";let I,K=0,U=0;function J(t){if(WA.state[t.name]){let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.showLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.hideLayer(n)}else{let e=t.properties.mustGetString("openLayer");for(const n of e.split(`
`))WA.room.hideLayer(n);e=t.properties.mustGetString("closeLayer");for(const n of e.split(`
`))WA.room.showLayer(n)}}function Re(t){const e=t.properties.getString("openSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=se(t.properties.mustGetString("openLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function Be(t){const e=t.properties.getString("closeSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=se(t.properties.mustGetString("closeLayer").split(`
`));if(o>n)return;r=1-o/n}e&&WA.sound.loadSound(e).play({volume:r})}function ae(t){return t.map(e=>I.get(e)).filter(e=>(e==null?void 0:e.type)==="tilelayer")}function se(t){const e=ae(t),n=re(e),r=((n.right-n.left)/2+n.left)*32,o=((n.bottom-n.top)/2+n.top)*32;return Math.sqrt(Math.pow(K-r,2)+Math.pow(U-o,2))}function xe(t){WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]?Re(t):Be(t),J(t)}),J(t)}function H(t,e,n,r){const o=t.name;let a,s,i=!1;const u=n.getString("tag");let l=!0;u&&!WA.player.tags.includes(u)&&(l=!1);const f=!!u;function g(){var c;a&&a.remove(),a=WA.ui.displayActionMessage({message:(c=n.getString("closeTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to close the door",callback:()=>{WA.state[e.name]=!1,m()}})}function m(){var c;a&&a.remove(),a=WA.ui.displayActionMessage({message:(c=n.getString("openTriggerMessage"))!==null&&c!==void 0?c:"Press SPACE to open the door",callback:()=>{WA.state[e.name]=!0,g()}})}function T(){let c;if(t.type==="tilelayer")c=re(ae(e.properties.mustGetString("closeLayer").split(`
`)));else{if(t.x===void 0||t.y===void 0||t.width===void 0||t.height===void 0)throw new Error(`Doorstep zone "${t.name}" is missing x, y, width or height`);c={top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}s=WA.room.website.create({name:"doorKeypad"+o,url:r+"/keypad.html#"+encodeURIComponent(o),position:{x:c.right*32,y:c.top*32,width:32*3,height:32*4},allowApi:!0})}function k(){s&&(WA.room.website.delete(s.name),s=void 0)}function p(){if(i=!0,n.getBoolean("autoOpen")&&l){WA.state[e.name]=!0;return}if(!WA.state[e.name]&&(f&&!l||!f)&&(n.getString("code")||n.getString("codeVariable"))){T();return}l&&(WA.state[e.name]?g():m())}function b(){i=!1,n.getBoolean("autoClose")&&(WA.state[e.name]=!1),a&&a.remove(),k()}t.type==="tilelayer"?(WA.room.onEnterLayer(o).subscribe(p),WA.room.onLeaveLayer(o).subscribe(b)):(WA.room.area.onEnter(o).subscribe(p),WA.room.area.onLeave(o).subscribe(b)),WA.state.onVariableChange(e.name).subscribe(()=>{i&&(!n.getBoolean("autoClose")&&WA.state[e.name]===!0&&g(),s&&WA.state[e.name]===!0&&k(),!n.getBoolean("autoOpen")&&WA.state[e.name]===!1&&m())})}function Ge(t){const e=t.properties.mustGetString("bellSound"),n=t.properties.getNumber("soundRadius");let r=1;if(n){const o=Math.sqrt(Math.pow(t.x-K,2)+Math.pow(t.y-U,2));if(o>n)return;r=1-o/n}WA.sound.loadSound(e).play({volume:r})}function Ve(t){WA.state[t.name]===void 0&&(WA.state[t.name]=0),WA.state.onVariableChange(t.name).subscribe(()=>{WA.state[t.name]&&Ge(t)})}function Q(t,e,n){let r;const o=e.getString("bellPopup");if(n.type==="tilelayer"){const a=n.name;WA.room.onEnterLayer(a).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.onLeaveLayer(a).subscribe(()=>{r&&(r.close(),r=void 0)})}else{const a=n.name;WA.room.area.onEnter(a).subscribe(()=>{var s;o?r=WA.ui.openPopup(o,"",[{label:(s=e.getString("bellButtonText"))!==null&&s!==void 0?s:"Ring",callback:()=>{WA.state[t]=WA.state[t]+1}}]):WA.state[t]=WA.state[t]+1}),WA.room.area.onLeave(a).subscribe(()=>{r&&(r.close(),r=void 0)})}}async function ze(t){t=t??Pe;const e=await ce();I=await E();for(const n of e.values())n.properties.get("door")&&xe(n),n.properties.get("bell")&&Ve(n);for(const n of I.values()){const r=new W(n.properties),o=r.getString("doorVariable");if(o&&n.type==="tilelayer"){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of layer "'+n.name+'"');H(n,s,r,t)}const a=r.getString("bellVariable");a&&n.type==="tilelayer"&&Q(a,r,n)}for(const n of await ne()){const r=new W(n.properties),o=r.getString("doorVariable");if(o){const s=e.get(o);if(s===void 0)throw new Error('Cannot find variable "'+o+'" referred in the "doorVariable" property of object "'+n.name+'"');H(n,s,r,t)}const a=r.getString("bellVariable");a&&Q(a,r,n)}WA.player.onPlayerMove(n=>{K=n.x,U=n.y})}function Ie(t,e){const n=t.getString("bindVariable");if(n){const r=t.get("enterValue"),o=t.get("leaveValue"),a=t.getString("triggerMessage"),s=t.getString("tag");De(n,e,r,o,a,s)}}function De(t,e,n,r,o,a){a&&!WA.player.tags.includes(a)||(n!==void 0&&WA.room.onEnterLayer(e).subscribe(()=>{o||(WA.state[t]=n)}),r!==void 0&&WA.room.onLeaveLayer(e).subscribe(()=>{WA.state[t]=r}))}async function Ke(){const t=await E();for(const e of t.values()){const n=new W(e.properties);Ie(n,e.name)}}let X;async function Ue(t){const e=await WA.room.getTiledMap();t=t??Z,X=await E();const n=e.layers.find(r=>r.name==="configuration");if(n){const o=new W(n.properties).getString("tag");(!o||WA.player.tags.includes(o))&&WA.ui.registerMenuCommand("Configure the room",()=>{WA.nav.openCoWebSite(t+"/configuration.html",!0)});for(const a of X.values()){const s=new W(a.properties),i=s.getString("openConfig");i&&a.type==="tilelayer"&&Ne(i.split(","),a.name,s)}}}function Ne(t,e,n){let r;const o=n.getString("openConfigAdminTag");let a=!0;o&&!WA.player.tags.includes(o)&&(a=!1);function s(){var u;r&&r.remove(),r=WA.ui.displayActionMessage({message:(u=n.getString("openConfigTriggerMessage"))!==null&&u!==void 0?u:"Press SPACE or touch here to configure",callback:()=>N(t)})}function i(){WA.nav.closeCoWebSite()}WA.room.onEnterLayer(e).subscribe(()=>{const u=n.getString("openConfigTrigger");a&&(u&&u==="onaction"?s():N(t))}),WA.room.onLeaveLayer(e).subscribe(()=>{r&&r.remove(),i()})}function Oe(){return WA.onInit().then(()=>{ze().catch(t=>console.error(t)),Ke().catch(t=>console.error(t)),Ue().catch(t=>console.error(t)),Te().catch(t=>console.error(t)),je().catch(t=>console.error(t))}).catch(t=>console.error(t))}const _e=WA.sound.loadSound("/src/hudzba/mamaspew.mp3"),$e={volume:.2,loop:!0,rate:3,detune:1,delay:0,mute:!1,seek:0},qe=WA.sound.loadSound("/src/hudzba/trompeta.mp3"),Je={volume:.2,loop:!0,rate:1,detune:1,delay:0,mute:!1,seek:0};let R=0;const He=15e3,Qe=()=>{WA.ui.openPopup("MiC-wokno","konsola",[{label:"štres",callback:async()=>{await WA.player.moveTo(0,0,10),await WA.player.moveTo(600,0,10),await WA.player.moveTo(400,600,10),await WA.player.moveTo(200,0,10),await WA.player.moveTo(600,500,10),await WA.player.moveTo(20,20,10)}},{label:"spěw",callback:()=>{_e.play($e)}},{label:"trompeta",callback:()=>{qe.play(Je)}}]),WA.ui.openPopup("MiC-wokno2","změn počas",[{label:"zyma",callback:async()=>{console.log(R),R=R+1,R%2===1?(WA.room.hideLayer("MiC-wodaZyma"),setTimeout(()=>WA.room.showLayer("MiC-kacki"),He)):(WA.room.showLayer("MiC-wodaZyma"),WA.room.hideLayer("MiC-kacki"))}}])},Xe=()=>{WA.room.onEnterLayer("Smn-Teleport").subscribe(()=>{WA.chat.sendChatMessage("Super, sy so Teleportowaw.","Günter"),WA.nav.goToRoom("map2.tmj#Smn-cil")})},Ye=()=>{WA.room.onEnterLayer("Smn-mapKilian").subscribe(()=>{WA.nav.goToRoom("Kilian.tmj")}),WA.room.onEnterLayer("k-mapGustav").subscribe(()=>{WA.nav.goToRoom("map2.tmj")}),WA.room.onEnterLayer("MiC-SprungKilian").subscribe(()=>{WA.nav.goToRoom("Kilian.tmj")}),WA.room.onEnterLayer("Smn-korcma").subscribe(()=>{WA.nav.goToRoom("Simon-Korcma.tmj")})},Fe=()=>{WA.room.onEnterLayer("MiC-beaming").subscribe(()=>{WA.nav.goToRoom("MiC-Klick-pimper.tmj#cil")}),WA.room.onEnterLayer("k-MiC-beaming").subscribe(()=>{WA.nav.goToRoom("MiC-Klick-pimper.tmj#cil")}),WA.room.onEnterLayer("Smn-MiC-beaming").subscribe(()=>{WA.nav.goToRoom("MiC-Klick-pimper.tmj#cil")})};let A=0;const Ze=()=>{WA.room.onEnterLayer("k-steve").subscribe(()=>{A===0?(WA.chat.sendChatMessage("Dobry dźeń pućowar, trjebam pšeńcu za swój chlěb, dźi mi prošu kusk pšeńcy wot šerjenja wotewzać.","Pinćnik Steve"),A=1):A===2&&(WA.chat.sendChatMessage("Dźakuju zo sy mi pšeńcu přinjesł, tu maš kluč za korčmu na druhej stronje swěta.","Pinćnik Steve"),A=0)}),WA.room.onEnterLayer("k-serjenjo").subscribe(()=>{A===1&&(WA.chat.sendChatMessage("Witaj pućowar, je Steve će pósław. Wón je chcył hižo dołho swoju přencu wotewzać. Tu maš","Serjenjo Jochen"),A=2)})},et=()=>{WA.room.onEnterLayer("k-hrow1").subscribe(()=>{WA.chat.sendChatMessage("Daj mje spać.","Mortwy Felix")}),WA.room.onEnterLayer("k-hrow2").subscribe(()=>{WA.chat.sendChatMessage("Nimaš raz wjace w rowje měr!?.","Mortwy Michał")})};let B=0;const tt=()=>{WA.room.onEnterLayer("k-wobydler1").subscribe(()=>{B==0&&(WA.chat.sendChatMessage("Jowe zno nichtu bydli!","Wobydler Kilian"),B=1)}),WA.room.onEnterLayer("k-wobydler2").subscribe(()=>{B==1&&(WA.chat.sendChatMessage("Jowe tejš!","Wobydler Simon"),B=0)})},nt=()=>{WA.room.onEnterLayer("k-kirbs").subscribe(()=>{WA.chat.sendChatMessage("Njestup na kirbs toho pinčnika! Z kirbsa zhotowi słódnu kirbsowu poliwku.","spodźiwny hłós z nihdźe")})};let z=0;const Y=WA.sound.loadSound("/src/hudzba/mamaspew.mp3"),F={volume:.5,loop:!0,rate:3,detune:1,delay:0,mute:!1,seek:0};WA.onInit().then(()=>{Qe(),Xe(),Ye(),Fe(),Ze(),et(),tt(),nt(),WA.player.onPlayerMove(t=>{const{x:e,y:n}=t;console.warn(`${WA.player.name} moving to ${e}|${n}`)}),WA.room.onEnterLayer("MiC-dzera").subscribe(()=>{z=z+1,z==3&&Y.play(F)}),WA.room.onEnterLayer("MiC-stom").subscribe(()=>{WA.room.showLayer("bul")}),WA.room.showLayer("kamjenje"),WA.room.onEnterLayer("MiC-stom").subscribe(()=>{WA.room.showLayer("bul")}),WA.room.onEnterLayer("MiC-bul").subscribe(()=>{console.log("sym pri bulu."),WA.chat.sendChatMessage("připosłuchaj mi dokładnje","Jurijo !!!"),Y.play(F)}),Oe().then(()=>{console.log("Scripting API Extra ready")}).catch(t=>console.error(t))}).catch(t=>console.error(t));
