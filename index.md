---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
---
<h1>This is the home page</h1>

<p>It will be built last, but must include features and obvious links to the following pages</p>

<ul>
{% for page in site.pages %}
{% unless page.name == "feed.xml" or page.name == "404.html" or page.name == "index.md" %}
<li>
<a href="{{ page.url }}">{{ page.name }}</a>
</li>
{% endunless %}
{% endfor %}
<ul>

<h2>Latest News</h2>
{% assign latest-news = site.posts %}

<ul>
{% for post in latest-news limit: 3 %}
<li>
<a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
<ul>
