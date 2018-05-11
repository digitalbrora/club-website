---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
---
<h1>This is the fixtures page</h1>

<p>This will include a list of all our fixtures, including results where appropriate</p>
<ul>
{% for match in site.fixtures %}
<li>{{ match.match-date }} - {{ match.home-team }} v {{ match.away-team }}</li>
{% endfor %}
</ul>
<p>Match previews and reports will be added in the 'News' section and linked to each fixture</p>
