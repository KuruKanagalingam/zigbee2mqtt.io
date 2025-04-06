"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[64499],{59774:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>s});var a=o(6254);const n={},i=(0,o(58079).A)(n,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[11]||(t[11]=(0,a.Lk)("h1",{id:"wirenboard-wb-msw-zigbee-v-4",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#wirenboard-wb-msw-zigbee-v-4"},[(0,a.Lk)("span",null,"Wirenboard WB-MSW-ZIGBEE v.4")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"WB-MSW-ZIGBEE v.4")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Wirenboard"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Wirenboard")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Wall-mounted multi sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), activity_led, uart_connection, temperature, temperature_offset, humidity, th_heater, co2, illuminance, occupancy, occupancy_sensitivity, occupancy_level, occupancy_timeout, noise, noise_detect_level, noise_detected, noise_timeout, voc, uart_baud_rate")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/WB-MSW-ZIGBEE-v.4.png",alt:"Wirenboard WB-MSW-ZIGBEE v.4"})])],-1))])]),t[12]||(t[12]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h3><p>Wiren Board WB-MSW v.4 — hybrid digital sensor of motion, temperature, humidity, illumination, noise, CO2 and VOC level. It is equipped with the IR blaster (and the receiver for learning). Designed for climate control in residential and office premises.</p><h3 id="switch-endpoints" tabindex="-1"><a class="header-anchor" href="#switch-endpoints"><span>Switch endpoints</span></a></h3><p>The device allways exposes 3 on/off endpoints named <code>l1</code>, <code>l2</code> and <code>l3</code>. Frist two of them only work if illuminannce + IR blaster addon is installed. Their finctuons as follows:</p><ul><li><code>l1</code> – controls blinking red led</li><li><code>l2</code> – controls blinking green led</li><li><code>l3</code> – controlls buzzer</li></ul><p>Warning, the installed buzzer is very loud.</p><h3 id="configuring-ir" tabindex="-1"><a class="header-anchor" href="#configuring-ir"><span>Configuring IR</span></a></h3><p>The sensor contains 80 banks for storing IR commands. Training takes place through the built-in IR receiver.</p><p>By publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> various device attributes can be configured.</p><h4 id="start-learn-to-rom" tabindex="-1"><a class="header-anchor" href="#start-learn-to-rom"><span>Start learn to ROM</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;learn_start&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;rom&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rom</code>: Memory cell number (from 0 to 79)</li></ul><h4 id="stop-learn-to-rom" tabindex="-1"><a class="header-anchor" href="#stop-learn-to-rom"><span>Stop learn to ROM</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;learn_stop&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;rom&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rom</code>: Memory cell number (from 0 to 79)</li></ul><h4 id="play-from-rom" tabindex="-1"><a class="header-anchor" href="#play-from-rom"><span>Play from ROM</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;play_store&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;rom&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>rom</code>: Memory cell number (from 0 to 79)</li></ul><h4 id="clear-all-rom-s" tabindex="-1"><a class="header-anchor" href="#clear-all-rom-s"><span>Clear all ROM&#39;s</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;clear_store&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="start-learn-to-ram" tabindex="-1"><a class="header-anchor" href="#start-learn-to-ram"><span>Start learn to RAM</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;learn_start&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;rom&quot;</span><span class="token operator">:</span><span class="token number">0</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="stop-learn-to-ram" tabindex="-1"><a class="header-anchor" href="#stop-learn-to-ram"><span>Stop learn to RAM</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;learn_ram_stop&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="play-from-ram" tabindex="-1"><a class="header-anchor" href="#play-from-ram"><span>Play from RAM</span></a></h4><p>Request:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;play_ram&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',35)),(0,a.Lk)("p",null,[t[8]||(t[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,a.eW)("."))]),t[13]||(t[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>co2_calibration</code>: Calibrates the co2 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voc_calibration</code>: Calibrates the voc value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>illuminance_raw</code>: Expose the raw illuminance value. The value must be <code>true</code> or <code>false</code></p></li><li><p><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l1-endpoint"><span>Switch (l1 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l1</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l1&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l1&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l1&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l1&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l2-endpoint"><span>Switch (l2 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l2</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l2&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l2&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l2&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l2&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-l3-endpoint"><span>Switch (l3 endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_l3</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_l3&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_l3&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_l3&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_l3&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="activity-led-binary-indicator-endpoint" tabindex="-1"><a class="header-anchor" href="#activity-led-binary-indicator-endpoint"><span>Activity led (binary, indicator endpoint)</span></a></h3><p>Controls green activity LED. Value can be found in the published state on the <code>activity_led_indicator</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;activity_led_indicator&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;activity_led_indicator&quot;: NEW_VALUE}</code>. If value equals <code>true</code> activity led is ON, if <code>false</code> OFF.</p><h3 id="uart-connection-binary" tabindex="-1"><a class="header-anchor" href="#uart-connection-binary"><span>Uart connection (binary)</span></a></h3><p>Indicates whether the device is communicating with sensors via UART. Value can be found in the published state on the <code>uart_connection</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;uart_connection&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> uart connection is ON, if <code>false</code> OFF.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="temperature-offset-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-offset-numeric"><span>Temperature offset (numeric)</span></a></h3><p>Self-heating compensation. The compensation value is subtracted from the measured temperature (default: 0). Value can be found in the published state on the <code>temperature_offset</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_offset&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_offset&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>10</code>. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="th-heater-binary" tabindex="-1"><a class="header-anchor" href="#th-heater-binary"><span>Th heater (binary)</span></a></h3><p>Turn on when working in conditions of high humidity (more than 70 %, RH) or condensation, if the sensor shows 0 or 100 %.. Value can be found in the published state on the <code>th_heater</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;th_heater&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;th_heater&quot;: NEW_VALUE}</code>. If value equals <code>true</code> th heater is ON, if <code>false</code> OFF.</p><h3 id="co2-numeric" tabindex="-1"><a class="header-anchor" href="#co2-numeric"><span>CO2 (numeric)</span></a></h3><p>Measured value. Value can be found in the published state on the <code>co2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;co2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>ppm</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;illuminance&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="occupancy-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-sensitivity-numeric"><span>Occupancy sensitivity (numeric)</span></a></h3><p>If the sensor is triggered by the slightest movement, reduce the sensitivity, otherwise increase it (default: 50). Value can be found in the published state on the <code>occupancy_sensitivity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_sensitivity&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>.</p><h3 id="occupancy-level-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-level-numeric"><span>Occupancy level (numeric)</span></a></h3><p>Measured occupancy level. Value can be found in the published state on the <code>occupancy_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_level&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id="occupancy-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#occupancy-timeout-numeric"><span>Occupancy timeout (numeric)</span></a></h3><p>Time in seconds after which occupancy is cleared after detecting it (default: 60). Value can be found in the published state on the <code>occupancy_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupancy_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupancy_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>s</code>.</p><h3 id="noise-numeric" tabindex="-1"><a class="header-anchor" href="#noise-numeric"><span>Noise (numeric)</span></a></h3><p>Measured noise level. Value can be found in the published state on the <code>noise</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;noise&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>dBA</code>.</p><h3 id="noise-detect-level-numeric" tabindex="-1"><a class="header-anchor" href="#noise-detect-level-numeric"><span>Noise detect level (numeric)</span></a></h3><p>The minimum noise level at which the detector will work (default: 50). Value can be found in the published state on the <code>noise_detect_level</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;noise_detect_level&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;noise_detect_level&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>150</code>. The unit of this value is <code>dBA</code>.</p><h3 id="noise-detected-binary" tabindex="-1"><a class="header-anchor" href="#noise-detected-binary"><span>Noise detected (binary)</span></a></h3><p>Indicates whether the device detected noise. Value can be found in the published state on the <code>noise_detected</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;noise_detected&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> noise detected is ON, if <code>false</code> OFF.</p><h3 id="noise-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#noise-timeout-numeric"><span>Noise timeout (numeric)</span></a></h3><p>Time in seconds after which noise is cleared after detecting it (default: 60). Value can be found in the published state on the <code>noise_timeout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;noise_timeout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;noise_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>2000</code>. The unit of this value is <code>s</code>.</p><h3 id="voc-numeric" tabindex="-1"><a class="header-anchor" href="#voc-numeric"><span>VOC (numeric)</span></a></h3><p>Measured VOC level. Value can be found in the published state on the <code>voc</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voc&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="uart-baud-rate-enum" tabindex="-1"><a class="header-anchor" href="#uart-baud-rate-enum"><span>Uart baud rate (enum)</span></a></h3><p>UART baud rate. Value can be found in the published state on the <code>uart_baud_rate</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;uart_baud_rate&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;uart_baud_rate&quot;: NEW_VALUE}</code>. The possible values are: <code>9600</code>, <code>19200</code>, <code>38400</code>, <code>57600</code>, <code>115200</code>.</p>',50))])}]]),s=JSON.parse('{"path":"/devices/WB-MSW-ZIGBEE_v.4.html","title":"Wirenboard WB-MSW-ZIGBEE v.4 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Wirenboard WB-MSW-ZIGBEE v.4 control via MQTT","description":"Integrate your Wirenboard WB-MSW-ZIGBEE v.4 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-01T15:09:09.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Description","slug":"description","link":"#description","children":[]},{"level":3,"title":"Switch endpoints","slug":"switch-endpoints","link":"#switch-endpoints","children":[]},{"level":3,"title":"Configuring IR","slug":"configuring-ir","link":"#configuring-ir","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (l1 endpoint)","slug":"switch-l1-endpoint","link":"#switch-l1-endpoint","children":[]},{"level":3,"title":"Switch (l2 endpoint)","slug":"switch-l2-endpoint","link":"#switch-l2-endpoint","children":[]},{"level":3,"title":"Switch (l3 endpoint)","slug":"switch-l3-endpoint","link":"#switch-l3-endpoint","children":[]},{"level":3,"title":"Activity led (binary, indicator endpoint)","slug":"activity-led-binary-indicator-endpoint","link":"#activity-led-binary-indicator-endpoint","children":[]},{"level":3,"title":"Uart connection (binary)","slug":"uart-connection-binary","link":"#uart-connection-binary","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Temperature offset (numeric)","slug":"temperature-offset-numeric","link":"#temperature-offset-numeric","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]},{"level":3,"title":"Th heater (binary)","slug":"th-heater-binary","link":"#th-heater-binary","children":[]},{"level":3,"title":"CO2 (numeric)","slug":"co2-numeric","link":"#co2-numeric","children":[]},{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Occupancy sensitivity (numeric)","slug":"occupancy-sensitivity-numeric","link":"#occupancy-sensitivity-numeric","children":[]},{"level":3,"title":"Occupancy level (numeric)","slug":"occupancy-level-numeric","link":"#occupancy-level-numeric","children":[]},{"level":3,"title":"Occupancy timeout (numeric)","slug":"occupancy-timeout-numeric","link":"#occupancy-timeout-numeric","children":[]},{"level":3,"title":"Noise (numeric)","slug":"noise-numeric","link":"#noise-numeric","children":[]},{"level":3,"title":"Noise detect level (numeric)","slug":"noise-detect-level-numeric","link":"#noise-detect-level-numeric","children":[]},{"level":3,"title":"Noise detected (binary)","slug":"noise-detected-binary","link":"#noise-detected-binary","children":[]},{"level":3,"title":"Noise timeout (numeric)","slug":"noise-timeout-numeric","link":"#noise-timeout-numeric","children":[]},{"level":3,"title":"VOC (numeric)","slug":"voc-numeric","link":"#voc-numeric","children":[]},{"level":3,"title":"Uart baud rate (enum)","slug":"uart-baud-rate-enum","link":"#uart-baud-rate-enum","children":[]}]}],"git":{"updatedTime":1743854184000},"filePathRelative":"devices/WB-MSW-ZIGBEE_v.4.md"}')}}]);