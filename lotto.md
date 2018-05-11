---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
---
<h1>This is the Lotto page</h1>

{% assign lotto = site.posts | where: "category", "lotto" %}

{% for results in lotto limit: 1 %}
<span>{{ results.draw-date }} -- {{ results.first-lotto-number }} - {{ results.second-lotto-number }} - {{ results.third-lotto-number }} - {{ results.fourth-lotto-number }} - {{ results.fifth-lotto-number }}</span>
<p>£{{ results.bonus }}</p>
<p>£{{ results.jackpot }}</p>
{{ results.content }}
{% endfor %}

<h3>Previous results</h3>

{% for results in lotto offset: 1 %}
<span>{{ results.draw-date }} -- {{ results.first-lotto-number }} - {{ results.second-lotto-number }} - {{ results.third-lotto-number }} - {{ results.fourth-lotto-number }} - {{ results.fifth-lotto-number }}</span>
{% endfor %}
