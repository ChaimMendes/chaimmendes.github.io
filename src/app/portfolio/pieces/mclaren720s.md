---
name: McLaren 720s
description: A highly detailed 3D model of a McLaren 720s created in Blender.
image: /Media/0525.png
priority: 2
---

# Final Render

<iframe
src="https://www.youtube.com/embed/e4pnI0JfckU">
</iframe>

[CAROUSEL: /Media/0190.png, /Media/0350.png, /Media/0499.png, /Media/0524.png, /Media/0525.png]

[CAROUSEL: /Media/720s_01.png, /Media/720s_02.png, /Media/720s_03.png, /Media/720s_04.png, /Media/720s_05.png, /Media/720s_06.png, /Media/720s_07.png, /Media/720s_08.png, /Media/720s_09.png, /Media/720s_10.png, /Media/720s_11.png, /Media/720s_12.png, /Media/720s_13.png, /Media/720s_14.png, /Media/720s_15.png, /Media/720s_16.png]

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
