"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[55153],{59281:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>n,data:()=>c});var o=i(6254);const a={},n=(0,i(58079).A)(a,[["render",function(e,t){const i=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"efekta-efekta-pixel-open-air",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#efekta-efekta-pixel-open-air"},[(0,o.Lk)("span",null,"EFEKTA EFEKTA_Pixel_Open_Air")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"EFEKTA_Pixel_Open_Air")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(i,{to:"/supported-devices/#v=EFEKTA"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("EFEKTA")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"CO2 Monitor with retro LCD Display, V1")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"identify, co2, temperature, humidity, backlight, night_onoff_backlight, night_on_backlight, night_off_backlight, contrast, temperature_offset, humidity_offset, automatic_calibrations, forced_recalibration_on_air, co2_error_read, enable_gas, invert_logic_gas, high_gas, low_gas")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EFEKTA_Pixel_Open_Air.png",alt:"EFEKTA EFEKTA_Pixel_Open_Air"})])],-1))])]),t[9]||(t[9]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="backlight-binary" tabindex="-1"><a class="header-anchor" href="#backlight-binary"><span>Backlight (binary)</span></a></h3><p>Backlight of the Display. Value can be found in the published state on the <code>backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> backlight is ON, if <code>OFF</code> OFF.</p><h3 id="night-onoff-backlight-binary" tabindex="-1"><a class="header-anchor" href="#night-onoff-backlight-binary"><span>Night onoff backlight (binary)</span></a></h3><p>Enable Night Mode. Value can be found in the published state on the <code>night_onoff_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_onoff_backlight&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> night onoff backlight is ON, if <code>OFF</code> OFF.</p><h3 id="night-on-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-on-backlight-numeric"><span>Night on backlight (numeric)</span></a></h3><p>Night Mode activation time. Value can be found in the published state on the <code>night_on_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_on_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="night-off-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#night-off-backlight-numeric"><span>Night off backlight (numeric)</span></a></h3><p>Night mode deactivation time. Value can be found in the published state on the <code>night_off_backlight</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;night_off_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>23</code>. The unit of this value is <code>Hr</code>.</p><h3 id="contrast-numeric" tabindex="-1"><a class="header-anchor" href="#contrast-numeric"><span>Contrast (numeric)</span></a></h3><p>Display Contrast. Value can be found in the published state on the <code>contrast</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;contrast&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>40</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric"><span>Temperature offset (numeric)</span></a></h3><p>Adjust temperature. Value can be found in the published state on the <code>temperature_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-offset-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-offset-numeric"><span>Humidity offset (numeric)</span></a></h3><p>Adjust humidity. Value can be found in the published state on the <code>humidity_offset</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;humidity_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-50</code> and the maximum value is <code>50</code>. The unit of this value is <code>%</code>.</p><h3 id="automatic-calibrations-binary" tabindex="-1"><a class="header-anchor" href="#automatic-calibrations-binary"><span>Automatic calibrations (binary)</span></a></h3><p>Automatic calibration of the CO2 sensor. Value can be found in the published state on the <code>automatic_calibrations</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;automatic_calibrations&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> automatic calibrations is ON, if <code>OFF</code> OFF.</p><h3 id="forced-recalibration-on-air-binary" tabindex="-1"><a class="header-anchor" href="#forced-recalibration-on-air-binary"><span>Forced recalibration on air (binary)</span></a></h3><p>Forced Recalibration of the CO2 Sensor on fresh air. Value can be found in the published state on the <code>forced_recalibration_on_air</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;forced_recalibration_on_air&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> forced recalibration on air is ON, if <code>OFF</code> OFF.</p><h3 id="co2-error-read-numeric" tabindex="-1"><a class="header-anchor" href="#co2-error-read-numeric"><span>Co2 error read (numeric)</span></a></h3><p>CO2 Error Read. Value can be found in the published state on the <code>co2_error_read</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="enable-gas-binary" tabindex="-1"><a class="header-anchor" href="#enable-gas-binary"><span>Enable gas (binary)</span></a></h3><p>Enable CO2 Gas Control. Value can be found in the published state on the <code>enable_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;enable_gas&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> enable gas is ON, if <code>OFF</code> OFF.</p><h3 id="invert-logic-gas-binary" tabindex="-1"><a class="header-anchor" href="#invert-logic-gas-binary"><span>Invert logic gas (binary)</span></a></h3><p>Enable invert logic CO2 Gas Control. Value can be found in the published state on the <code>invert_logic_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;invert_logic_gas&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> invert logic gas is ON, if <code>OFF</code> OFF.</p><h3 id="high-gas-numeric" tabindex="-1"><a class="header-anchor" href="#high-gas-numeric"><span>High gas (numeric)</span></a></h3><p>Setting High CO2 Gas Border. Value can be found in the published state on the <code>high_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;high_gas&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p><h3 id="low-gas-numeric" tabindex="-1"><a class="header-anchor" href="#low-gas-numeric"><span>Low gas (numeric)</span></a></h3><p>Setting Low CO2 Gas Border. Value can be found in the published state on the <code>low_gas</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;low_gas&quot;: NEW_VALUE}</code>. The minimal value is <code>400</code> and the maximum value is <code>5000</code>. The unit of this value is <code>ppm</code>.</p>',38))])}]]),c=JSON.parse('{"path":"/devices/EFEKTA_Pixel_Open_Air.html","title":"EFEKTA EFEKTA_Pixel_Open_Air control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EFEKTA EFEKTA_Pixel_Open_Air control via MQTT","description":"Integrate your EFEKTA EFEKTA_Pixel_Open_Air via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-04-01T18:30:52.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Backlight (binary)","slug":"backlight-binary","link":"#backlight-binary","children":[]},{"level":3,"title":"Night onoff backlight (binary)","slug":"night-onoff-backlight-binary","link":"#night-onoff-backlight-binary","children":[]},{"level":3,"title":"Night on backlight (numeric)","slug":"night-on-backlight-numeric","link":"#night-on-backlight-numeric","children":[]},{"level":3,"title":"Night off backlight (numeric)","slug":"night-off-backlight-numeric","link":"#night-off-backlight-numeric","children":[]},{"level":3,"title":"Contrast (numeric)","slug":"contrast-numeric","link":"#contrast-numeric","children":[]},{"level":3,"title":"Temperature offset (numeric)","slug":"temperature-offset-numeric","link":"#temperature-offset-numeric","children":[]},{"level":3,"title":"Humidity offset (numeric)","slug":"humidity-offset-numeric","link":"#humidity-offset-numeric","children":[]},{"level":3,"title":"Automatic calibrations (binary)","slug":"automatic-calibrations-binary","link":"#automatic-calibrations-binary","children":[]},{"level":3,"title":"Forced recalibration on air (binary)","slug":"forced-recalibration-on-air-binary","link":"#forced-recalibration-on-air-binary","children":[]},{"level":3,"title":"Co2 error read (numeric)","slug":"co2-error-read-numeric","link":"#co2-error-read-numeric","children":[]},{"level":3,"title":"Enable gas (binary)","slug":"enable-gas-binary","link":"#enable-gas-binary","children":[]},{"level":3,"title":"Invert logic gas (binary)","slug":"invert-logic-gas-binary","link":"#invert-logic-gas-binary","children":[]},{"level":3,"title":"High gas (numeric)","slug":"high-gas-numeric","link":"#high-gas-numeric","children":[]},{"level":3,"title":"Low gas (numeric)","slug":"low-gas-numeric","link":"#low-gas-numeric","children":[]}]}],"git":{"updatedTime":1743854184000},"filePathRelative":"devices/EFEKTA_Pixel_Open_Air.md"}')}}]);