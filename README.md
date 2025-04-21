# Visual Console
This should be used for debugging purposes only,
see a demo right here:

https://adir-sl.github.io/Visual-Console

## Install
To add Visual Console to your project, add this line to any page you want the Console to appear (preferably in the `body` section):
```
<script src="https://adir-sl.github.io/Visual-Console/vconsole.js"></script>
```


If weight is an issue in your project, there's also the minified version (18.6KB):
```
<script src="https://adir-sl.github.io/Visual-Console/vconsole.min.js"></script>
```
## Start Visual Console Without the Panel?
After loading the script (see the 'install' section), you can always add to your code this line of code:
```
<script>
    toggleConsole();
</script>
```
## How does it work?
Visual Console will display any of the following commands:
1. alert()
2. console.log()
3. console.info()
4. console.error()
5. console.debug()
6. console.count()
7. console.countReset()
8. console.time()
9. console.timeEnd()
10. console.warn()
11. console.clear()

## Features
You can show or hide the Visual Console by clicking on the Round Cheveron Icon (in the far top right corner) or by tapping the Tilda Key (~).

You can select an element from the page by clicking the Cursor Icon (bottom right corner) or by tapping Ctrl+H, once you selected an element, this element is saved to the both the vcon variable and window.vConSelection for both document and window level needs.

You can also use this to debug your code on mobile devices.

Once you start running your code, you'll start to see your code history, to ease on your memory and prevent you from trying to remember every command in your head.

## How to Disable Visual Console?
When you're done debugging your page and your page is ready for production, it is advised to keep the Visual Console code but comment it out, like so:
```
<!-- <script src="https://adir-sl.github.io/Visual-Console/vconsole.js"></script> -->
```
This way you can always uncomment it if you find a new bug, but it will show nothing to the user and will give no error in the actual JavaScript console.

## Privacy
All history and code runs locally, nothing get uploaded to any server and no code history is accessible between different pages or projects. Privacy is very important to me, you can use this with no privacy concerns.
