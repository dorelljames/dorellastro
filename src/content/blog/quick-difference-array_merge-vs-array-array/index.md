---
title: Quick Difference (array_merge vs ( array + array ))
author: Dorell James
type: post
date: 2013-05-18T13:50:05+00:00
url: /web-development/quick-difference-array_merge-vs-array-array/
description: Here's how you can merge or add two arrays in PHP without re-indexing their keys
categories:
  - Web Development
tags:
  - array merge
  - lifehacks
  - php
  - php tips
---

Just in case you might ran into the same problem like I do when trying to add or merge two arrays but don't want to re-index their keys. Might be in useful in cases where the index values or the keys of the array serves as a unique identifier to other related data.

So let's go take a look at the example below:

```php
$colors = array(
   '10' => 'blue',
   '14' => 'red',
   '18' => 'yellow'
);

$more_colors = array_merge( array('5' => 'white'), $colors );

// Output using var_dump( $more_colors )
array(4) {
   [0]=>
   string(5) "white"
   [1]=>
   string(4) "blue"
   [2]=>
   string(3) "red"
   [3]=>
   string(6) "yellow"
}
```

&#8220;Uh oh!&#8221;&#8230; Now that isn't right. Notice that the indexes/keys are re-indexed. So here's what you need to do.

```php
$colors = array(
   '10' => 'blue',
   '14' => 'red',
   '18' => 'yellow'
);

$more_colors = array('5' => 'white') + $colors;

// Output
array(4) {
   [5]=>
   string(5) "white"
   [10]=>
   string(4) "blue"
   [14]=>
   string(3) "red"
   [18]=>
   string(6) "yellow"
}
```

&#8220;Tadaa!&#8221;. That's it. When using the `+` operator, ensure that both must of type array or else you'll be thrown with fatal error. The difference between the first example from the second example is that in the second we just simply prepend/append depending on the index value on the second array. The first example when using <a href="http://php.net/manual/en/function.array-merge.php" target="_blank" rel="noopener noreferrer"><em>array_merge</em></a> on the other hand re-indexes the keys.

Note: This is meant for simple array manipulation. I'll later add an article describing how you'll be able to achieve this on multi-dimentional arrays.
