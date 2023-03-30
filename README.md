
![Logo](/public/img/logo_full_light.png#gh-dark-mode-only)
![Logo](/public/img/logo_full_dark.png#gh-light-mode-only)

### Steps to add UI Component
Taking an example of button
- Go to ```public/data/components```
- There find your `(component).json` in this case we will be using `buttons.json`
- At the top of the array add a new objects with below given properties:

```
"id": "",
"name": "",
"author": "",
"profile_link": "",
"responsive": true,
"element": "",
"type": "button",
"code": "",
"img": "",
"img_dark":
```
- Id should be the incremented number of previous item
- Next, Go to ```public/code/buttons``` 
- Here create a text file where we will keep the code to share like ```button7.txt``` , here ```button7``` is the id.
- Next Go to ```src/UIElements/buttons/``` Here will create the jsx file with same name ```button7.jsx``` and here we can create our own component.
- Next after the development of the component is complete, take snapshots of the component and place them in the ```public/img/components/``` from here for dark version use dark folder and for light version use light folder and place their links in your json object created above.