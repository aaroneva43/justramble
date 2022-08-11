#!/usr/bin/env zx

// await $`cat package.json | grep name`

// let branch = await $`git branch --show-current`
// await $`echo ${branch}`

// await Promise.all([
//   $`sleep 1; echo 1`,
//   $`sleep 2; echo 2`,
//   $`sleep 13; echo 3`,
// ])

const selectWhistleProfileEcho = await $`curl 'http://10.0.0.5:8899/cgi-bin/rules/select' \
-H 'Accept: application/json, text/javascript, */*; q=0.01' \
-H 'Accept-Language: en-US,en;q=0.9,zh-US;q=0.8,zh;q=0.7,zh-CN;q=0.6,pt;q=0.5,zh-TW;q=0.4' \
-H 'Connection: keep-alive' \
-H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
-H 'DNT: 1' \
-H 'Origin: http://10.0.0.5:8899' \
-H 'Referer: http://10.0.0.5:8899/' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36' \
-H 'X-Requested-With: XMLHttpRequest' \
--data-raw 'clientId=1659050928320-15&name=fwbcloud_dist&value=%2F%5Ehttps%3F%3A%5C%2F%5C%2Ftim-qa%5C.waasonline%5C.com%5C%2F((index%7Croot).*)%3F%24%2F+https%3A%2F%2F10.11.2.1%2F%241%0A%2F%5Ehttps%3F%3A%5C%2F%5C%2Ftim-qa%5C.waasonline%5C.com%5C%2F(.%2B)%5C.(js%7Ccss%7Chtml%7Cwoff2%7Cwoff%7Cjson%7Cpng%7Csvg%7Cttf%7Cico)(%5C%3F.%2B)%3F%24%2F+https%3A%2F%2F10.11.2.1%2F%241.%242%243%0A%0A%2F%5Ehttps%3F%3A%5C%2F%5C%2Fwww%5C.fortiwebcloudmgt%5C.com%5C%2F((index%7Croot).*)%3F%24%2F+https%3A%2F%2F10.11.2.1%2F%241%0A%2F%5Ehttps%3F%3A%5C%2F%5C%2Fwww%5C.fortiwebcloudmgt%5C.com%5C%2F(.%2B)%5C.(js%7Ccss%7Chtml%7Cwoff2%7Cwoff%7Cjson%7Cpng%7Csvg%7Cttf%7Cico)(%5C%3F.%2B)%3F%24%2F+https%3A%2F%2F10.11.2.1%2F%241.%242%243%0A%0A%2F%5Ehttps%3F%3A%5C%2F%5C%2F(c8%7Cqa%7Cdev%7Ctim%7Cjisc)%5C.waasonline%5C.com%5C%2F((index%7Croot).*)%3F%24%2F+https%3A%2F%2F10.11.2.1%2F%242%0A%2F%5Ehttps%3F%3A%5C%2F%5C%2F(c8%7Cqa%7Ctim%7Cjisc)%5C.waasonline%5C.com%5C%2F(.%2B)%5C.(js%7Ccss%7Chtml%7Cwoff2%7Cwoff%7Cjson%7Cpng%7Csvg%7Cttf%7Cico)(%5C%3F.%2B)%3F%24%2F+https%3A%2F%2F10.11.2.1%2F%242.%243%244%0A%0A%2F%5Ehttps%3F%3A%5C%2F%5C%2Fwww%5C.fortiweb-cloud(-test%7C-dev%7C-qa)%3F%5C.com%5C%2F((index%7Croot).*)%3F%24%2F+https%3A%2F%2F10.11.2.1%2F%242%0A%2F%5Ehttps%3F%3A%5C%2F%5C%2Fwww%5C.fortiweb-cloud(-test%7C-dev%7C-qa)%3F%5C.com%5C%2F(.%2B)%5C.(js%7Ccss%7Chtml%7Cwoff2%7Cwoff%7Cjson%7Cpng%7Csvg%7Cttf%7Cico)(%5C%3F.%2B)%3F%24%2F+https%3A%2F%2F10.11.2.1%2F%242.%243%244%0A&selected=true&active=true&key=w-reactkey-5&icon=checkbox&changed=true&hide=false' \
--compressed \
--insecure`;

if (true) { await $`echo xx`}
const nodeServerEcho = await $`sudo npm start`

// let name = 'foo bar'
// await $`mkdir /tmp/${name}`
