JAjaxLoader
====================
2016-03-03


A jquery plugin to start/stop an ajax loader.



![ajax loader](http://lingtalfi.com/img/universe/JAjaxLoader/ajaxloader.gif)


jAjaxLoader is part of the [universe framework](https://github.com/karayabin/universe-snapshot).


Install
=============


Using the [uni tool](https://github.com/lingtalfi/universe-naive-importer)
```bash
uni import JAjaxLoader
```


http://codepen.io/lingtalfi/pen/qZjRoo


Summary
------------

- [How do I use it?](#how-do-i-use-it)
- [Customize the appearance](#customize-the-appearance)
    
    - [understanding the markup](#understanding-the-markup)
    - [meet the built-in loaders](#meet-the-built-in-loaders)
    - [go your own way](#go-your-own-way-tutorial)
    
- [Make the look persistent throughout the app](#make-the-look-persistent-throughout-the-app)
- [jajaxloader options](#jajaxloader-options)
- [More info](#more-info)
- [History Log](#history-log)





How do I use it?
-------------------

jajaxloader has two methods:


```js
$('#target').ajaxloader(); // start/resume the loader
$('#target').ajaxloader("stop"); // stop the loader
```


Perhaps the simplest example is the following, which injects an ajaxloader in the body,
and remove it two seconds later.




```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>

    <script src="/libs/jajaxloader/js/jajaxloader.js"></script>
    <link rel="stylesheet" href="/libs/jajaxloader/skin/jajaxloader.css">


    <title>Html page</title>
</head>

<body>


<script>
    (function ($) {
        $(document).ready(function () {
            
            $(document.body).ajaxloader();
            
            setTimeout(function () {
                $(document.body).ajaxloader("stop");
            }, 2000);

        });
    })(jQuery);
</script>

</body>
</html>
```


http://codepen.io/lingtalfi/pen/dMRNze


Since we didn't specify any particular look, jajaxloader use the default image, which is an ugly-as-possible default gif.


Using built-in skins is one way to enhance the look of the loader.

The following example uses the vulchivijay rosace css loader.




```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>

    <script src="/libs/jajaxloader/js/jajaxloader.js"></script>


    <!-- using a skin -->
    <script src="/libs/jajaxloader/skin/vulchivijay/rosace.js"></script>
    <link rel="stylesheet" href="/libs/jajaxloader/skin/vulchivijay/rosace.css">
    <title>Html page</title>

    <style>
        body {
            background: #333;
        }
    </style>

</head>

<body>


<script>
    (function ($) {
        $(document).ready(function () {
            $(document.body).ajaxloader();
        });
    })(jQuery);
</script>

</body>
</html>
```


http://codepen.io/lingtalfi/pen/jqwwYb


The built-in skins are in the skin directory of this repository.
To use a skin, as you may have noticed from the above example, simply add its css file and its corresponding js file
in your html head.




Customize the appearance
----------------------------

Before we customize the appearance of the loader, it makes sense to understand what the markup of the loader looks like.


### understanding the markup

When you call the jajaxloader method on an (so called host) element, it creates an html markup inside that host element.


```html
<div class="host">
    <div class="loader_overlay">
        <something class="loader"></something>
    </div>
</div>
```

There are a few things to say about that markup:

- There are two important classes here: loader_overlay and loader.
            
            All the styling of the jajaxloader relies on the presence of those css classes.
            They are kind of the backbone of the jajaxloader's look. 

- The something tag in the above example is by default an image (the horrible default image), but you change its url,
        or even replace it with a totally different markup.
         
        You would do that using the [jajaxloader options](#jajaxloader-options). 

- I recommend that your host element is a positioned element (position equals anything but static), so that it's easy 
        to center the loader inside the host (which is generally what we want)


- the loader_overlay element's default css code is inside the 
        [jajaxloader.css](https://github.com/lingtalfi/JAjaxLoader/blob/master/www/libs/jajaxloader/skin/jajaxloader.css) css file;
        it basically creates an overlay that is 100% of the host's dimensions, and is told to place any content (the .loader) at its center
        (vertically and horizontally).




Alright, so now you know the internal markup of the jajaxloader.

Let's have a look at how this internal markup can be used to create more awesome looking loaders.



### meet the built-in loaders


Before you could read those lines, I've created some loaders, either for my own needs or to use as examples for this demo.
The following demo showcases some of the loaders (not all of them) that are in the skin directory.
 
If you want to push your work here, pull requests are welcome.

Note: the ajax loaders in the demo are mostly css loaders, and one of them use svg (the one named cssload dots).



http://codepen.io/lingtalfi/pen/qZjRoo


And here is the demo source code:


```html 
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>


	<script src="/libs/jajaxloader/js/jajaxloader.js"></script>
	<link rel="stylesheet" href="/libs/jajaxloader/skin/jajaxloader.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/lukehaas/vertical_bars.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/lukehaas/circle_on_path.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/lukehaas/tear_ball.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/vulchivijay/rosace.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/cssload/thecube.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/cssload/colordots.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/cssload/flipping_square.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/cssload/spinning_square.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/cssload/zenith.css">
	<link rel="stylesheet" href="/libs/jajaxloader/skin/cssload/ventilator.css">

	<title>Html page</title>
	<style>
		.gray {
			background: rgba(100, 100, 100, 0.3);
			position: relative;
		}

		section.controls {
			margin-top: 20px;
			padding-top: 20px;
			border-top: 1px solid gray;
		}
	</style>
</head>

<body>


<div id="target" class="gray">
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


<section>
	<button id="loader1">Vulchivijay rosace</button>
	<button id="loader2">Haas vertical bars</button>
	<button id="loader3">Haas circle on path</button>
	<button id="loader4">Haas tear ball</button>
	<button id="loader5">Cssload thecube</button>
	<button id="loader6">Cssload colordots</button>
	<button id="loader7">Cssload flipping square</button>
	<button id="loader8">Cssload spinning square</button>
	<button id="loader9">Cssload zenith</button>
	<button id="loader10">Cssload ventilator</button>
</section>

<section class="controls">
	<button id="stop">Stop</button>
	<button id="resume">Resume</button>
</section>

<script>
	$(document).ready(function () {


		var jTarget = $('#target');


		function setHandler(id, cssClass, content) {
			if ('undefined' === typeof content) {
				content = '';
			}
			$('#' + id).on('click', function () {
				jTarget.ajaxloader({
					cssClass: cssClass,
					content: content,
				});
			});
		}

		setHandler('loader1', 'vulchivijay_rosace', '<div class="spinnerBlock"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>');
		setHandler('loader2', 'lukehaas_vertical_bars');
		setHandler('loader3', 'lukehaas_circle_on_path');
		setHandler('loader4', 'lukehaas_tear_ball');
		setHandler('loader5', 'cssload_thecube', '<div class="cssload-cube cssload-c1"></div><div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div><div class="cssload-cube cssload-c3"></div>');
		setHandler('loader6', 'cssload_colordots', '<div class="cssload-dots" style="filter: url(#goo);"><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div><div class="cssload-dot"></div></div><svg version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><filter id="goo"><feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="12" ></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0	0 1 0 0 0	0 0 1 0 0	0 0 0 18 -7" result="goo" ></feColorMatrix><!--<feBlend in2="goo" in="SourceGraphic" result="mix" ></feBlend>--></filter></defs></svg>');
		setHandler('loader7', 'cssload_flipping_square', '<div class="cssload-flipper"><div class="cssload-front"></div><div class="cssload-back"></div></div>');
		setHandler('loader8', 'cssload_spinning_square');
		setHandler('loader9', 'cssload_zenith', '<div class="cssload-zenith"></div>');
		setHandler('loader10', 'cssload_ventilator', '<div class="cssload-ventilator"></div>');


		$('#resume').on('click', function () {
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



All demo's css files are located in the css folder: https://github.com/lingtalfi/JAjaxLoader/tree/master/www/libs/jajaxloader/skin


So I guess that it's a good thing to know that those demos exist.

However, it's likely that you will want to have a more customized loader for your app, one that conveys your app identity.



### go your own way (tutorial)

So you've decided to create your own loader.

Then here is a tutorial for you, this is how I do mines:




First, we want to create the markup.

Paste the following code and run it in a browser.


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>
    <script src="/libs/jajaxloader/js/jajaxloader.js"></script>
    <link rel="stylesheet" href="/libs/jajaxloader/skin/jajaxloader.css">
    
    <title>Html page</title>
    <style>
        body{
            background: #333;
        }
    </style>
</head>
<body>
<div class="loader_overlay">
    
</div>
</body>
</html>    
```    


Just a dark gray page for now.
Let's add a loader inside the loader_overlay element.

I like to use cssload website: http://cssload.net/

Taking the spiral example by Nicolas: http://codepen.io/Terramaster/pen/bVpxGE, I end up with the following markup.

(note: I had to think how to arrange his original work with the jajaxloader markup explained earlier, that's part of the job )


```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>
    <script src="/libs/jajaxloader/js/jajaxloader.js"></script>
    <link rel="stylesheet" href="/libs/jajaxloader/skin/jajaxloader.css">
    
    <!-- This is where I put the css code for the spiral loader -->
    <link rel="stylesheet" href="/spiral.css">
    
    
    <title>Html page</title>
    <style>
        body{
            background: #333;
        }
        
    </style>
</head>
<body>
<div class="cssload_spiral loader_overlay">
    <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
</body>
</html>
```

Notice that I added the cssload_spiral class on the loader_overlay; that's a namespace I chose.
You are not forced to use a namespace, but it helps to avoid conflicts with other .loader elements on the page.
 
And the content of the spiral.css file, using that namespace:
 
 

```css
/*--------------------------------------------------------------------------*
// 
  <div class="loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
/*--------------------------------------------------------------------------*/


.cssload_spiral .loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100px;
    height: 100px;
    animation-name: rotateAnim;
    animation-duration: .35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}
.cssload_spiral .loader div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.cssload_spiral .loader div:nth-child(odd) {
    border-top: none;
    border-left: none;
}
.cssload_spiral .loader div:nth-child(even) {
    border-bottom: none;
    border-right: none;
}
.cssload_spiral .loader div:nth-child(2) {
    border-width: 2px;
    left: 0px;
    top: -4px;
    width: 12px;
    height: 12px;
}
.cssload_spiral .loader div:nth-child(3) {
    border-width: 2px;
    left: -1px;
    top: 3px;
    width: 18px;
    height: 18px;
}
.cssload_spiral .loader div:nth-child(4) {
    border-width: 3px;
    left: -1px;
    top: -4px;
    width: 24px;
    height: 24px;
}
.cssload_spiral .loader div:nth-child(5) {
    border-width: 3px;
    left: -1px;
    top: 4px;
    width: 32px;
    height: 32px;
}
.cssload_spiral .loader div:nth-child(6) {
    border-width: 4px;
    left: 0px;
    top: -4px;
    width: 40px;
    height: 40px;
}
.cssload_spiral .loader div:nth-child(7) {
    border-width: 4px;
    left: 0px;
    top: 6px;
    width: 50px;
    height: 50px;
}
@keyframes rotateAnim {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

```



Ok. If you run this code in your browser, you should see the spiral rotating in the middle of your page.
That's good, the last step is to use it programmatically.

The following code shows how to do it using the jajaxloader library:



```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>
    <script src="/libs/jajaxloader/js/jajaxloader.js"></script>
    <link rel="stylesheet"
          href="/libs/jajaxloader/skin/jajaxloader.css">

    <!-- This is where I put the css code for the spiral loader -->
    <link rel="stylesheet" href="/spiral.css">


    <title>Html page</title>
    <style>
        body {
            background: #333;
        }

    </style>
</head>
<body>


<script>
    (function ($) {
        $(document).ready(function () {
            $(document.body).ajaxloader({
                /**
                 * This is our namespace, it will be set on the .loader_overlay element
                 */
                cssClass: 'cssload_spiral',
                /**
                 * The inner html of the .loader element
                 */
                content: '<div></div><div></div><div></div><div></div><div></div><div></div><div></div>',
            });
        });
    })(jQuery);
</script>


</body>
</html>
```



So a possible recipe to create your own loaders!
Now your turn...


One last thing though; our code above works well on a given page.
However, what if you want to use your custom loader on every page of your website?

We would need a more persistent code.
The next section describes a way of doing that.





Make the look persistent throughout the app
--------------------------------------------

It is likely that you want to re-use a specific loader consistently across all of your website's pages.
One way to do so is to override the defaults options of the jajaxloader object.


You would need to create a js file (for instance default_app_loader.js), and put the following fictive code in it:



```js
$.ajaxloader.prototype.defaults.cssClass = 'cssload_spiral';
$.ajaxloader.prototype.defaults.content = '<div></div><div></div><div></div><div></div><div></div><div></div><div></div>';
```


Now, to use it, we just need to include the css file and the default_app_loader.js js file on every page.
On this final fictive page example, the loader will use the defaults settings specified in the default_app_loader.js file:
 
 
 
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <script src="http://code.jquery.com/jquery-2.2.2.min.js"></script>
    <script src="/libs/jajaxloader/js/jajaxloader.js"></script>
    <link rel="stylesheet"
          href="/libs/jajaxloader/skin/jajaxloader.css">

    
    <script src="/default_app_loader.js"></script>
    <link rel="stylesheet" href="/spiral.css">


    <title>Html page</title>
    <style>
        body {
            background: #333;
        }

    </style>
</head>
<body>


<script>
    (function ($) {
        $(document).ready(function () {
            $(document.body).ajaxloader();
        });
    })(jQuery);
</script>


</body>
</html>
```








jajaxloader options
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
     *          the css class to apply to the loader overlay; only if the img option is not set.
     *          If the cssClass option is not set, the loader will eventually use
     *          a default image.
     */
    cssClass: '',
    /**
     * @param content - string,
     *          The content of the loader (its inner html).
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





More info
-----------------

See the [conception docs](https://github.com/lingtalfi/JAjaxLoader/blob/master/doc/problems)

See the [demo directory](https://github.com/lingtalfi/JAjaxLoader/blob/master/www/libs/jajaxloader/demo).





Credits
------------

Demos come from the internet:

- http://projects.lukehaas.me/css-loaders/
- http://cssload.net/
- http://codepen.io/vulchivijay/pen/gPxrvb




History Log
------------------
    
- 1.4.0 -- 2016-03-28

    - add jajaxloader-body.css as an alternative to jajaxloader.css (for loaders that we append to the body of the document)

- 1.3.0 -- 2016-03-26


    - fixed restart/init/stop confusion bug
    - reorganized skins

    
- 1.2.0 -- 2016-03-26

    - can change the default options with $.ajaxloader.prototype.defaults
    - change default image to a public url
    - add ventilator loader from cssload
    
- 1.1.0 -- 2016-03-06

    - add spinning_square, zenith css transitions
    
- 1.0.0 -- 2016-03-03

    - initial commit
    
    