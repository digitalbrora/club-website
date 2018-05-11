---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
---
<h1>This is the fixtures page</h1>

<p>This will include a list of all the upcoming fixtures</p>

{% for match in site.fixtures %}
<a href="{{ match.url }}">{{ match.title }} - {{ match.home-team }} v {{ match.away-team }}</a>
{% endfor %}

<p>Match previews will be added in the 'News' section and linked to each fixture</p>
