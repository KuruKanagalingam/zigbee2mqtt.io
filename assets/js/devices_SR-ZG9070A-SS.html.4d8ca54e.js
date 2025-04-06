"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[84895],{85189:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>l,data:()=>i});var o=a(6254);const r={},l=(0,a(58079).A)(r,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"sunricher-sr-zg9070a-ss",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#sunricher-sr-zg9070a-ss"},[(0,o.Lk)("span",null,"Sunricher SR-ZG9070A-SS")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"SR-ZG9070A-SS")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Sunricher"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Sunricher")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Smart photoelectric smoke alarm")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, smoke_alarm_1, smoke_alarm_2, tamper, battery_low, warning")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SR-ZG9070A-SS.png",alt:"Sunricher SR-ZG9070A-SS"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="smoke-alarm-1-binary" tabindex="-1"><a class="header-anchor" href="#smoke-alarm-1-binary"><span>Smoke alarm 1 (binary)</span></a></h3><p>Indicates whether the device detected smoke (alarm_1). Value can be found in the published state on the <code>smoke_alarm_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke alarm 1 is ON, if <code>false</code> OFF.</p><h3 id="smoke-alarm-2-binary" tabindex="-1"><a class="header-anchor" href="#smoke-alarm-2-binary"><span>Smoke alarm 2 (binary)</span></a></h3><p>Indicates whether the device detected smoke (alarm_2). Value can be found in the published state on the <code>smoke_alarm_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke alarm 2 is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates whether the battery of the device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li></ul>',14))])}]]),i=JSON.parse('{"path":"/devices/SR-ZG9070A-SS.html","title":"Sunricher SR-ZG9070A-SS control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Sunricher SR-ZG9070A-SS control via MQTT","description":"Integrate your Sunricher SR-ZG9070A-SS via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-01T20:02:57.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Smoke alarm 1 (binary)","slug":"smoke-alarm-1-binary","link":"#smoke-alarm-1-binary","children":[]},{"level":3,"title":"Smoke alarm 2 (binary)","slug":"smoke-alarm-2-binary","link":"#smoke-alarm-2-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Warning (composite)","slug":"warning-composite","link":"#warning-composite","children":[]}]}],"git":{"updatedTime":1743854184000},"filePathRelative":"devices/SR-ZG9070A-SS.md"}')}}]);