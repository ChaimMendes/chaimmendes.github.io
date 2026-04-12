---
name: Rolls Royce Spectre
description: A highly detailed 3D model of a Rolls Royce Spectre created in Blender.
image: /Media/0525.png
priority: 2
---

# Final Render

[CAROUSEL: /Media/Black01.png, /Media/Black02.png, /Media/Black03.png, /Media/Black04.png, /Media/Black05.png, /Media/Black06.png, /Media/Black07.png, /Media/Gold01.png, /Media/Gold02.png, /Media/Gold03.png, /Media/Gold04.png, /Media/Gold05.png, /Media/Gold06.png, /Media/Gold07.png, /Media/Purple01.png, /Media/Purple02.png, /Media/Purple03.png, /Media/Purple04.png, /Media/Purple05.png, /Media/Purple06.png, /Media/Purple07.png, /Media/White01.png, /Media/White02.png, /Media/White03.png, /Media/White04.png, /Media/White05.png, /Media/White06.png, /Media/White07.png]

[CAROUSEL: ]

## Process

### Modeling

The modeling process involved using refrence images to create lines of vertices that lined up with the edges of the car, and filling in the faces with suitable cuts for perfect topology. The model was created using Blender's modeling tools, with a focus on achieving accurate proportions and details. The process was time-consuming but rewarding, as it allowed for a high level of detail and realism in the final model.

### Texturing

The texturing process was shorter than the modeling process, as I used a combination of procedural textures to achieve the desired look. The car's body was given a glossy material with a noise texture to create subtle variations in the surface, while the windows were given a transparent material with some reflection. The wheels and other details were textured using image textures to add realism and depth to the model.

### Riging

Parts of the model were rigged to allow for animation. The doors, windows and wheels were asigned to bones and Inverse Kinematics was used to create realistic movement for these parts.

### PBR Materials

PBR (Physically Based Rendering) materials were used to achieve game engine compatibility beyond blender. These materials take into account the physical properties of real-world surfaces, such as roughness and metallicness, to create more accurate lighting interactions.

Unfortunately, Blender's PBR baking process is .... uh ..... not the best, and I had to use a combination of Blender's baking tools and manual adjustments to create the final textures. (If anyone here is a blender dev, please fix this, it's really bad.)

### Render

The render is built in a complex scene with a sky for light on the top, and a and a complex tunnel. Unfortunately, I didn't do it quite right and the reflections on the car are, not really there, which causes lose of detail. Tips are welcome at chaimthemendes@gmail.com.

### Compositing

The compositing process involved adding a glow effect, and a few other contrast and color adjustments to enhance the final image.
