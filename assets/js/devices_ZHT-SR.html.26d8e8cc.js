"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68052],{46671:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>r,data:()=>c});var i=o(6254);const a={},r=(0,o(58079).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"moes-zht-sr",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#moes-zht-sr"},[(0,i.Lk)("span",null,"Moes ZHT-SR")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZHT-SR")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Moes"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Moes")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Smart ring thermostat")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset), eco_temperature, child_lock, deadzone_temperature, max_temperature_limit, min_temperature_limit, sensor_mode, floor_temperature, high_protect_temperature, low_protect_temperature, backlight_brightness, screen_time, rgb_light")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZHT-SR.png",alt:"Moes ZHT-SR"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>45</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>Manual</code>, <code>Temporary manual</code>, <code>Program</code>, <code>Eco</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-10</code> and the maximum value is <code>10</code> with a step size of <code>1</code>.</li></ul><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric"><span>Eco temperature (numeric)</span></a></h3><p>Temperature for eco mode. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric"><span>Deadzone temperature (numeric)</span></a></h3><p>The delta between local_temperature and current_heating_setpoint to trigger Heat. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-limit-numeric"><span>Max temperature limit (numeric)</span></a></h3><p>Maximum temperature limit. Cuts the thermostat out regardless of air temperature if the external floor sensor exceeds this temperature. Only used by the thermostat when in AL sensor mode.. Value can be found in the published state on the <code>max_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>35</code> and the maximum value is <code>45</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-limit-numeric"><span>Min temperature limit (numeric)</span></a></h3><p>Minimum temperature limit for frost protection. Turns the thermostat on regardless of setpoint if the temperature drops below this.. Value can be found in the published state on the <code>min_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>°C</code>.</p><h3 id="sensor-mode-enum" tabindex="-1"><a class="header-anchor" href="#sensor-mode-enum"><span>Sensor mode (enum)</span></a></h3><p>IN - internal sensor, no heat protection. OU - external sensor, no heat protection. AL - internal sensor for room temperature, external for heat protection. Value can be found in the published state on the <code>sensor_mode</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>IN</code>, <code>OU</code>, <code>AL</code>.</p><h3 id="floor-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#floor-temperature-numeric"><span>Floor temperature (numeric)</span></a></h3><p>Floor temperature. Value can be found in the published state on the <code>floor_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="high-protect-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#high-protect-temperature-numeric"><span>High protect temperature (numeric)</span></a></h3><p>High protect temperature. Value can be found in the published state on the <code>high_protect_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_protect_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>10</code> and the maximum value is <code>70</code>. The unit of this value is <code>°C</code>.</p><h3 id="low-protect-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#low-protect-temperature-numeric"><span>Low protect temperature (numeric)</span></a></h3><p>Low protect temperature. Value can be found in the published state on the <code>low_protect_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_protect_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="backlight-brightness-numeric" tabindex="-1"><a class="header-anchor" href="#backlight-brightness-numeric"><span>Backlight brightness (numeric)</span></a></h3><p>Backlight brightness. Value can be found in the published state on the <code>backlight_brightness</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_brightness&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="screen-time-enum" tabindex="-1"><a class="header-anchor" href="#screen-time-enum"><span>Screen time (enum)</span></a></h3><p>Screen on time. Value can be found in the published state on the <code>screen_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;screen_time&quot;: NEW_VALUE}</code>. The possible values are: <code>10_seconds</code>, <code>20_seconds</code>, <code>30_seconds</code>, <code>40_seconds</code>, <code>50_seconds</code>, <code>60_seconds</code>.</p><h3 id="rgb-light-binary" tabindex="-1"><a class="header-anchor" href="#rgb-light-binary"><span>Rgb light (binary)</span></a></h3><p>Value can be found in the published state on the <code>rgb_light</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;rgb_light&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> rgb light is ON, if <code>OFF</code> OFF.</p>',28))])}]]),c=JSON.parse('{"path":"/devices/ZHT-SR.html","title":"Moes ZHT-SR control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes ZHT-SR control via MQTT","description":"Integrate your Moes ZHT-SR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-09T20:08:00.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Eco temperature (numeric)","slug":"eco-temperature-numeric","link":"#eco-temperature-numeric","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Deadzone temperature (numeric)","slug":"deadzone-temperature-numeric","link":"#deadzone-temperature-numeric","children":[]},{"level":3,"title":"Max temperature limit (numeric)","slug":"max-temperature-limit-numeric","link":"#max-temperature-limit-numeric","children":[]},{"level":3,"title":"Min temperature limit (numeric)","slug":"min-temperature-limit-numeric","link":"#min-temperature-limit-numeric","children":[]},{"level":3,"title":"Sensor mode (enum)","slug":"sensor-mode-enum","link":"#sensor-mode-enum","children":[]},{"level":3,"title":"Floor temperature (numeric)","slug":"floor-temperature-numeric","link":"#floor-temperature-numeric","children":[]},{"level":3,"title":"High protect temperature (numeric)","slug":"high-protect-temperature-numeric","link":"#high-protect-temperature-numeric","children":[]},{"level":3,"title":"Low protect temperature (numeric)","slug":"low-protect-temperature-numeric","link":"#low-protect-temperature-numeric","children":[]},{"level":3,"title":"Backlight brightness (numeric)","slug":"backlight-brightness-numeric","link":"#backlight-brightness-numeric","children":[]},{"level":3,"title":"Screen time (enum)","slug":"screen-time-enum","link":"#screen-time-enum","children":[]},{"level":3,"title":"Rgb light (binary)","slug":"rgb-light-binary","link":"#rgb-light-binary","children":[]}]}],"git":{"updatedTime":1743854184000},"filePathRelative":"devices/ZHT-SR.md"}')}}]);