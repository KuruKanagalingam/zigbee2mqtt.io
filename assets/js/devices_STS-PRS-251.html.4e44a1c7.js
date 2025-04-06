"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[19101],{91899:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>i,data:()=>o});var s=n(6254);const a={},i=(0,n(58079).A)(a,[["render",function(e,t){const n=(0,s.g2)("RouteLink");return(0,s.uX)(),(0,s.CE)("div",null,[t[8]||(t[8]=(0,s.Lk)("h1",{id:"smartthings-sts-prs-251",tabindex:"-1"},[(0,s.Lk)("a",{class:"header-anchor",href:"#smartthings-sts-prs-251"},[(0,s.Lk)("span",null,"SmartThings STS-PRS-251")])],-1)),(0,s.Lk)("table",null,[t[6]||(t[6]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th"),(0,s.Lk)("th")])],-1)),(0,s.Lk)("tbody",null,[t[2]||(t[2]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Model"),(0,s.Lk)("td",null,"STS-PRS-251")],-1)),(0,s.Lk)("tr",null,[t[1]||(t[1]=(0,s.Lk)("td",null,"Vendor",-1)),(0,s.Lk)("td",null,[(0,s.bF)(n,{to:"/supported-devices/#v=SmartThings"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("SmartThings")]))),_:1})])]),t[3]||(t[3]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Description"),(0,s.Lk)("td",null,"Arrival sensor")],-1)),t[4]||(t[4]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Exposes"),(0,s.Lk)("td",null,"battery, presence, action, beep")],-1)),t[5]||(t[5]=(0,s.Lk)("tr",null,[(0,s.Lk)("td",null,"Picture"),(0,s.Lk)("td",null,[(0,s.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/STS-PRS-251.png",alt:"SmartThings STS-PRS-251"})])],-1))])]),t[9]||(t[9]=(0,s.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="let-the-device-beep" tabindex="-1"><a class="header-anchor" href="#let-the-device-beep"><span>Let the device beep.</span></a></h3><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;beep&quot;</span><span class="token operator">:</span> <span class="token number">5</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>presence_timeout</code>: Timeout (in seconds) after which <code>presence: false</code> will be send when the device has not checked-in. By default 100 seconds, don&#39;t go lower then 30 seconds.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',5)),(0,s.Lk)("p",null,[(0,s.Lk)("em",null,[(0,s.bF)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.k6)((()=>t[7]||(t[7]=[(0,s.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,s.Fv)('<ul><li><code>presence_timeout</code>: Time in seconds after which presence is cleared after detecting it (default 100 seconds). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Indicates whether the device detected presence. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>.</p><h3 id="beep-enum" tabindex="-1"><a class="header-anchor" href="#beep-enum"><span>Beep (enum)</span></a></h3><p>Trigger beep for x seconds. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;beep&quot;: NEW_VALUE}</code>. The possible values are: <code>2</code>, <code>5</code>, <code>10</code>, <code>15</code>, <code>30</code>.</p>',10))])}]]),o=JSON.parse('{"path":"/devices/STS-PRS-251.html","title":"SmartThings STS-PRS-251 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SmartThings STS-PRS-251 control via MQTT","description":"Integrate your SmartThings STS-PRS-251 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Let the device beep.","slug":"let-the-device-beep","link":"#let-the-device-beep","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Beep (enum)","slug":"beep-enum","link":"#beep-enum","children":[]}]}],"git":{"updatedTime":1743854184000},"filePathRelative":"devices/STS-PRS-251.md"}')}}]);