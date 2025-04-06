"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15221],{46489:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>c});var a=o(6254);const i={},d=(0,o(58079).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"nedis-zbhtr20wt",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#nedis-zbhtr20wt"},[(0,a.Lk)("span",null,"Nedis ZBHTR20WT")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZBHTR20WT")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Nedis"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Nedis")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Thermostat radiator valve")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery_low, child_lock, open_window, climate (local_temperature_calibration, running_state, system_mode, local_temperature, current_heating_setpoint), frost_protection, schedule_mode, scale_protection, leave_home, error_status")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBHTR20WT.png",alt:"Nedis ZBHTR20WT"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="open-window-binary" tabindex="-1"><a class="header-anchor" href="#open-window-binary"><span>Open window (binary)</span></a></h3><p>Enables/disables the status on the device. Value can be found in the published state on the <code>open_window</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;open_window&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> open window is ON, if <code>OFF</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature_calibration</code>, <code>running_state</code>, <code>system_mode</code>, <code>local_temperature</code>, <code>current_heating_setpoint</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-6</code> and the maximum value is <code>6</code> with a step size of <code>1</code>.</li></ul><h3 id="frost-protection-binary" tabindex="-1"><a class="header-anchor" href="#frost-protection-binary"><span>Frost protection (binary)</span></a></h3><p>This function prevents freezing of the radiator. It automatically switches on the thermostat between 5°C and 8°C.. Value can be found in the published state on the <code>frost_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;frost_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> frost protection is ON, if <code>OFF</code> OFF.</p><h3 id="schedule-mode-binary" tabindex="-1"><a class="header-anchor" href="#schedule-mode-binary"><span>Schedule mode (binary)</span></a></h3><p>Should the device be on the heating schedule. Value can be found in the published state on the <code>schedule_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;schedule_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> schedule mode is ON, if <code>OFF</code> OFF.</p><h3 id="scale-protection-binary" tabindex="-1"><a class="header-anchor" href="#scale-protection-binary"><span>Scale protection (binary)</span></a></h3><p>The radiator can scale and become clogged if the valve is not opened regularly. This function opens the valve for 30 seconds every two weeks. The display shows “Rd” during this procedure.. Value can be found in the published state on the <code>scale_protection</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;scale_protection&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> scale protection is ON, if <code>OFF</code> OFF.</p><h3 id="leave-home-binary" tabindex="-1"><a class="header-anchor" href="#leave-home-binary"><span>Leave home (binary)</span></a></h3><p>Temperature drops to 16°C when activated and restores when off. Value can be found in the published state on the <code>leave_home</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;leave_home&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> leave home is ON, if <code>OFF</code> OFF.</p><h3 id="error-status-numeric" tabindex="-1"><a class="header-anchor" href="#error-status-numeric"><span>Error status (numeric)</span></a></h3><p>Error status. Value can be found in the published state on the <code>error_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',20))])}]]),c=JSON.parse('{"path":"/devices/ZBHTR20WT.html","title":"Nedis ZBHTR20WT control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Nedis ZBHTR20WT control via MQTT","description":"Integrate your Nedis ZBHTR20WT via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:11:48.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Open window (binary)","slug":"open-window-binary","link":"#open-window-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Frost protection (binary)","slug":"frost-protection-binary","link":"#frost-protection-binary","children":[]},{"level":3,"title":"Schedule mode (binary)","slug":"schedule-mode-binary","link":"#schedule-mode-binary","children":[]},{"level":3,"title":"Scale protection (binary)","slug":"scale-protection-binary","link":"#scale-protection-binary","children":[]},{"level":3,"title":"Leave home (binary)","slug":"leave-home-binary","link":"#leave-home-binary","children":[]},{"level":3,"title":"Error status (numeric)","slug":"error-status-numeric","link":"#error-status-numeric","children":[]}]}],"git":{"updatedTime":1743854184000},"filePathRelative":"devices/ZBHTR20WT.md"}')}}]);