# 🐕 Interactive 3D Dog Experience

An interactive 3D web experience built using **React, Three.js, React Three Fiber, and GSAP**. The project combines 3D model animation, custom shader effects, scroll-based movement, and interactive material transitions.

## ✨ Features

- **3D Model Rendering:** Loads a 3D dog model using GLTF.
- **Model Animations:** Plays built-in animations using Drei's `useAnimations` hook.
- **Custom Materials:** Uses Matcap textures to create different visual appearances.
- **Shader Programming:** Customizes the fragment shader to blend between two Matcap textures.
- **Scroll-Based Animation:** Animates the model's position and rotation using GSAP ScrollTrigger.
- **Hover Interactions:** Changes the model's material when hovering over different titles.
- **Smooth Transitions:** Uses GSAP to animate shader uniforms for gradual material transitions.
- **Responsive 3D Scene:** Renders the model inside a React Three Fiber canvas.

## 🛠️ Tech Stack

- React
- Vite
- Three.js
- React Three Fiber
- React Three Drei
- GSAP
- GSAP ScrollTrigger
- GLSL Shader Programming

## 📂 Project Assets

The project uses the following types of assets:

- `dog.drc.glb` — 3D dog model and its embedded animations.
- `dog_normals.jpg` — Normal map for the dog model.
- `branches_diffuse.jpeg` — Branch diffuse texture.
- `branches_normals.jpeg` — Branch normal map.
- `mat-cap/` — Collection of Matcap textures used for material transitions.

**Note:** Place the assets in the appropriate folders inside the `public` directory so that the application can load them using absolute paths.

## 🚀
