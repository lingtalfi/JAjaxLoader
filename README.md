jAjaxLoader
====================
2016-03-03


A jquery plugin to start/stop an ajax loader.


jAjaxLoader can be installed as a [planet](https://github.com/lingtalfi/Observer/blob/master/article/article.planetReference.eng.md).



![ajax loader](http://s19.postimg.org/sp4xaaa5f/ajaxloader.gif)



Overview
------------

```js

$('#target').ajaxloader(); // start/resume the loader
$('#target').ajaxloader("stop"); // stop the loader

```

Be sure that your target element is css positioned (not static).
That's because the ajaxloader plugin will inject some absolute positioned overlay and the loader inside the target.


The classical example
-----------

Most of the time, we need a loader when there is a server interaction.
Here is how it's done with the ajaxloader plugin.


Note: you can found the code below in the [demo directory](https://github.com/lingtalfi/JAjaxLoader/blob/master/www/libs/jajaxloader/demo).


```html 
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>


	<script src="/libs/jajaxloader/js/jajaxloader.js"></script>
	<link rel="stylesheet" href="/libs/jajaxloader/css/jajaxloader.css">

	<title>Html page</title>
	<style>
		.red {
			background: rgba(255, 0, 0, 0.3);
			position: relative;
		}
	</style>
</head>

<body>


<div id="target" class="red">
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias atque cupiditate dicta,
		dignissimos enim esse et iure molestias nihil nisi perferendis repellat repellendus tempora unde voluptas. At,
		necessitatibus!
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias atque cupiditate dicta,
		dignissimos enim esse et iure molestias nihil nisi perferendis repellat repellendus tempora unde voluptas. At,
		necessitatibus!
	</p>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias atque cupiditate dicta,
		dignissimos enim esse et iure molestias nihil nisi perferendis repellat repellendus tempora unde voluptas. At,
		necessitatibus!
	</p>
</div>

<button id="click">Click me</button>
<button id="start">Start loader</button>
<button id="stop">Stop loader</button>


<script>
	$(document).ready(function () {


		var jTarget = $('#target');

		$('#click').on('click', function () {
			jTarget.ajaxloader(); // (re)start the loader
			$.post('/libs/jajaxloader/demo/service/service.php', function (content) {
						jTarget.append(content);
					})
					.always(function () {
						jTarget.ajaxloader("stop");
					});
		});

		$('#start').on('click', function () {
			jTarget.ajaxloader();
		});

		$('#stop').on('click', function () {
			jTarget.ajaxloader("stop");
		});


	});
</script>

</body>
</html>
```



Synopsis in a nutshell
-------------------------

```js

jTarget.ajaxloader(); // the default uses a default gif
jTarget.ajaxloader({img: "/url/to/image.gif"});   // use a custom gif
jTarget.ajaxloader({cssClass: "namespace_transition"}); // use a custom css transition   


```

Note: css transitions can be found in the [css directory](https://github.com/lingtalfi/JAjaxLoader/blob/master/www/libs/jajaxloader/css).
And of course you can add your owns. 
Pull requests are welcome.



The loader markup
---------------------

```html
<div class="target">
    <div class="loader_overlay">
        <img src="/url/to/image.gif" class="loader"/>
    </div>
</div>
```

Instead of the default img tag, you can have any tag, but the convention is that the .loader_overlay element has only
one direct children with css class loader.



Options
-----------

```js
{
    /**
     * @param img - string,
     *          the loader img.
     *          If not set, then the cssClass option is used.
     */
    img: '',
    /**
     * @param cssClass - string,
     *          the css class to apply to the loader overlay, if the img option is not set.
     *          If the cssClass option is not set, the loader will eventually use
     *          a default image.
     */
    cssClass: '',
    /**
     * @param content - string,
     *          The content of the loader.
     *          This only works if the loader is not an img 
     *          (i.e., if the img option is empty, and the cssClass option is not empty). 
     */
    content: '',
    /**
     * @param fadeSpeed - int,
     *      the speed (in ms) at which the overlay fades in and out.
     */
    fadeSpeed: 250,
}
```

To understand by doing, go to the [demo directory](https://github.com/lingtalfi/JAjaxLoader/blob/master/www/libs/jajaxloader/demo) and play with the examples.



More about internal behaviour
-----------------
See the [conception docs](https://github.com/lingtalfi/JAjaxLoader/blob/master/doc/problems)




More examples
-----------------

See the [demo directory](https://github.com/lingtalfi/JAjaxLoader/blob/master/www/libs/jajaxloader/demo).








History Log
------------------
    
- 1.0.0 -- 2016-03-03

    - initial commit
    
    