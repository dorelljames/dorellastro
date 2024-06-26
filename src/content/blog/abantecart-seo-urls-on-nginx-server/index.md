---
title: AbanteCart SEO URL’s On Nginx Server
author: Dorell James
type: post
date: 2015-02-24T04:14:30+00:00
old_url: /web-development/abantecart-seo-urls-on-nginx-server/
url: abantecart-seo-urls-on-nginx-server/
featured_image: './abantecart-seo-settings-banner.png'
categories:
  - Web Development
tags:
  - abantecart
description: Here's how you can configure AbanteCart with Apache server.
---

I just have the privilege to learn more about AbanteCart and by default the SEO URL's need to be turned on to make use of it. If you are using Apache as your server with `mod_rewrite` enabled, all you have to do is rename `htaccess.txt` to `.htaccess` in your AbanteCart\'s `public_html` folder and then turn on the **Use SEO URL's** in System Settings.

To learn more about enabling AbanteCart SEO settings on Apache server, I have detailed it in another [post][1].

![](./abantecart-seo-settings.jpg)

But how do we make it work when we're Nginx server? We need to translate/convert the contents `.htaccess` into our nginx config file.

Here below is the SEO URL rules inside the `.htaccess` file.

```nginx
# SEO URL Settings
RewriteEngine On
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.)\?$ index.php?_route_=$1 [L,QSA]
```

And this is the corresponding conversion.

```nginx
location / {
    try_files $uri $uri/ $uri.php @abantecart_rules;
}

location @abantecart_rules {
    rewrite ^(.)\?$ /index.php?_route_=$1 last;
}
```

Now, that's pretty much like it. The `@abantecart_rules` does its job for us to rewrite the URL from query strings to its corresponding pretty URL which you can generate in the product's general settings page or customized it the way you want it. And there you have it, you just got AbanteCart SEO URL working.

Here's a complete <a href="https://github.com/dorelljames/abantecart-snippets/blob/master/abantecart-nginx-sample.conf" target="_blank">sample nginx configuration</a> if you want a more detailed reference and I've covered there all of the `.htaccess` rules.

Questions, anything, just let me know in your comments. Thanks

[1]: #coming-up
[2]: https://i0.wp.com/dorellwp.localhost//wp-content/uploads/2015/02/abantecart-seo-settings.jpg
