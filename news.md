---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
menu: news
---
<h1>This is the news page</h1>

<p>This will include a list of all the latest news articles</p>

<ul>
{% for post in site.posts %}

<li>
<a href="{{ post.url }}">{{ post.title }}</a>
</li>

{% endfor %}
<ul>
