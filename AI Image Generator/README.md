# AI Image Generator

AI Image Generator is a modern web application that allows users to generate images from text prompts using Hugging Face diffusion models. The project features a clean UI, multiple model selection, image count control, aspect ratio selection, dark/light theme toggle, and image download functionality.

## Table of Contents
1. [Overview](#overview)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [How It Works](#how-it-works) 
5. [Live Website](#live-website) 
6. [Contact](#contact)  

## Overview

This project lets users describe an idea in text form and generate AI-powered images using different diffusion models. Users can choose the model, number of images, and aspect ratio, making it flexible for experimentation and creative exploration.

The interface is fully responsive and includes animations, loading states, and error handling for a smooth user experience.

## Features

- Text-to-Image generation using Hugging Face models  
- Multiple AI model selection  
- Generate 1 to 4 images at a time  
- Aspect ratio selection (1:1, 16:9, 9:16)  
- Random prompt generator with typing animation  
- Dark / Light theme toggle (saved in localStorage)  
- Image download option  
- Loading animation and error handling  
- Fully responsive modern UI  

## Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)  
- Hugging Face Inference API  
- Font Awesome (Icons)  
- Google Fonts (Inter)  

## How It Works

1. User enters a text prompt describing the image  
2. User selects:
   - AI model  
   - Image count  
   - Aspect ratio  
3. On clicking **Generate**, the app:
   - Sends a request to the Hugging Face API  
   - Displays loading placeholders  
   - Renders generated images dynamically  
4. Images can be downloaded directly from the gallery  

Theme preference is stored in `localStorage`.

## Live Website

-  **Link:** https://ai-generated-images-js.netlify.app

## Contact

- **LinkedIn:** [Ayushi Patel](https://www.linkedin.com/in/ayushi-patel2602/)  
- **GitHub:** [AYUSHI26-02](https://github.com/AYUSHI26-02)  

Thank you for exploring the AI Image Generator project!
