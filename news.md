---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: base
menu: news
---
<section class="article-list">
  <article class="lead-article">
  {% for post in site.posts limit: 1 %}
    <a href="{{ post.url }}">
      <img src="{{ post.feature-image | replace: '.', '-large.' }}" alt="{{ post.title }}">
    </a>
    <div class="">
      <a href="{{ post.url }}">
        <h1>{{ post.title }}</h1>
      </a>
      <p>{{post.excerpt | strip_html}}</p>
    </div>
  {% endfor %}
  </article>
  <article class="secondary-articles">
  {% for post in site.posts limit: 6 offset: 1 %}
    <div class="secondary-article">
      <a href="{{ post.url }}">
        <img src="{{ post.feature-image | replace: '.', '-thumbnail.' }}" alt="{{ post.title }}">
      </a>
      <a href="{{ post.url }}">
        <h1>{{ post.title }}</h1>
      </a>
    </div>
  {% endfor %}
  </article>
</section>
