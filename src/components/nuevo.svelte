lang=“scss”>
// @ import ‘assets / scss / app’;
.menu {
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
position: fixed;
z-index: 99;
width: 100%;
margin: 0;
left: 0;
bottom: 0;
background-color: # cdd5e2;
align-items: baseline;
overflow: hidden;
padding: 0;

li {
list-style: none;
display: inline;
}

a {
border-bottom: 2px solid transparent;
cursor: pointer;
list-style: none;
display: inline-block;
padding: 0.5em 0.75em;
color: # 000;

&.selected {
border-bottom: 2px solid # 4F81E5;
color: # 4F81E5;
}

&:hover {
text-decoration: none;
color: darkred;
}
}

.icon-menu {
height: 30px;
width: 30px;
padding: 5px;
cursor: pointer;
}

.icon-chart {
background-color: black;
mask-image: url(“”);

&:hover {
background-color: red;
}
}

.icon-add {
background-color: black;
mask-image: url(“”);
mask-repeat: no-repeat;
mask-size: contain;
mask-position: center;

&:hover {
background-color: red;
}
}

.icon-settings {
background-color: black;
mask-image: url(“”);
mask-repeat: no-repeat;
mask-size: contain;
mask-position: center;

&:hover {
background-color: red;
}
}
}
>